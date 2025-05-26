---
layout: page
title: Hetri MVP Diagrams
permalink: /diagrams/
exclude_from_nav: true
mermaid: true
---

# Hetri MVP System Architecture

Understood. Below is a complete set of system-architecture diagrams for the Hetri MVP (and post-MVP scale-ups), with detailed data flows and component interactions.

---

## High-Level Architecture Overview

The Hetri MVP system integrates smart collar devices, a cloud backend, and web dashboards for owners and staff. Each collar (an ESP32-S3 device with an OV5640 camera and LIS3DH accelerometer) connects over Wi-Fi. The backend runs in Docker and comprises:

- FastAPI application server  
- PostgreSQL database  
- Mosquitto MQTT broker  
- Nginx + RTMP module + FFmpeg for video streaming  

Owners and staff use web dashboards (via HTTPS) to control devices and view live HLS streams. All channels use TLS certificates (Certbot) for encryption.

<div class="mermaid">
flowchart LR
  subgraph "Smart Collar (ESP32-S3 Device)"
    device["ESP32-S3 Collar\n- OV5640 Camera\n- LIS3DH Accelerometer"]
  end
  subgraph "Cloud Backend (Dockerized)"
    api["FastAPI Application Server"]
    db["PostgreSQL Database"]
    mqtt["Mosquitto MQTT Broker"]
    video["Nginx + RTMP (Video Stream Server)\n+ FFmpeg Worker"]
  end
  subgraph "Web Dashboards"
    owner["Owner Dashboard"]
    staff["Staff Dashboard"]
  end

  device -->|"MQTT"| mqtt
  device -->|"RTMP"| video

  api -->|"SQL"| db
  api -->|"MQTT Pub/Sub"| mqtt
  video -- Storage --> db:::hidden

  owner & staff -->|"HTTPS"| api
  owner & staff -->|"HLS"| video

  classDef hidden opacity:0
</div>

---

## TreatTap Request Flow (Owner → Collar)

This sequence occurs when an owner taps “Treat” on the dashboard:

<div class="mermaid">
sequenceDiagram
  participant O as Owner Dashboard
  participant A as FastAPI Server
  participant M as Mosquitto Broker
  participant D as Smart Collar Device

  Note over O,A: 1. Owner requests a TreatTap  
  O->>A: POST /devices/{id}/treat  
  A-->>A: Validate auth and ownership  
  A-->>A: Log event in database  
  A->>M: Publish devices/{id}/cmd/treat  
  M-->>D: Deliver command  
  D-->>D: Dispense treat  
  D->>M: Publish devices/{id}/status update  
  M-->>A: Backend receives status  
  A-->>O: HTTP 200 OK  
  Note over O: UI updates treat status
</div>

---

## Live Video Stream Access Flow

When an owner views the live feed:

<div class="mermaid">
sequenceDiagram
  participant O as Owner Dashboard
  participant A as FastAPI Server
  participant N as Nginx RTMP Server
  participant D as Smart Collar Camera

  Note over D,N: Prerequisite – collar is streaming RTMP → Nginx  
  O->>A: GET /devices/{id}/video_url  
  A-->>A: Validate auth and device access  
  A-->>O: Return time-limited HLS URL  
  O->>N: GET HLS playlist with token  
  N-->>N: Verify token  
  N-->>O: Serve .m3u8 and .ts segments  
  Note over O: Browser plays live video
</div>

---

## Device Status Update Flow

Periodic telemetry reporting:

<div class="mermaid">
sequenceDiagram
  participant D as Collar Device
  participant M as Mosquitto Broker
  participant A as FastAPI Server
  participant DB as PostgreSQL
  participant O as Owner Dashboard

  D-->>D: Read sensors (accelerometer, battery)
  D->>M: Publish devices/{id}/telemetry
  M-->>A: Deliver telemetry
  A-->>DB: Store/update telemetry
  Note over A,O: Optional – push via WebSocket/SSE
  O->>A: GET /devices/{id}/status
  A->>DB: Query latest telemetry
  A-->>O: Return status JSON
</div>

---

## MQTT Topic Interaction Diagram

Each collar uses its own topic namespace:

<div class="mermaid">
flowchart LR
  subgraph "MQTT Broker (Mosquitto)"
    direction TB
    t1["devices/{device_id}/telemetry"]
    t2["devices/{device_id}/cmd/#"]
  end

  device["Collar (MQTT Client)"]
  server["Backend (MQTT Client)"]

  device -->|publish to| t1
  server -->|publish to| t2

  server -->|subscribe| t1
  device -->|subscribe| t2
</div>

---

## Video Pipeline

How frames travel from collar to browser:

<div class="mermaid">
flowchart LR
  camera["OV5640 Camera"]
  device["ESP32-S3 Collar"]
  nginx["Nginx + RTMP Module"]
  ffmpeg["FFmpeg Process"]
  hls["HLS Stream"]
  browser["Owner’s Browser"]
  output["Live Video"]

  camera --> device
  device --> nginx
  nginx --> ffmpeg
  ffmpeg --> hls
  hls --> browser
  browser --> output
</div>

---

## Authentication & Token Flow

### User Login & Secure Video Token

<div class="mermaid">
sequenceDiagram
  participant U as User Browser
  participant A as FastAPI Auth
  participant DB as PostgreSQL
  participant N as Nginx

  U->>A: POST /auth/login
  A-->>DB: Verify credentials
  DB-->>A: Return user record
  A-->>U: Return JWT

  U->>A: GET /devices/{id}/video_token
  A-->>A: Validate JWT and access
  A-->>U: Return stream token
  U->>N: Request HLS with token
  N-->>N: Verify token
  N-->>U: Stream begins
</div>

---

### Device Authentication & MQTT Identity

<div class="mermaid">
sequenceDiagram
  participant D as Collar Device
  participant M as Mosquitto Broker
  participant A as FastAPI Provision

  D->>M: MQTT CONNECT (client_id, user/pass)
  M-->>M: Validate credentials
  M-->>D: CONNECT ACK
  D->>M: SUBSCRIBE devices/{id}/#
  M-->>D: SUBACK

  A->>DB: Store device creds and ACL
  A->>D: Provision creds in firmware
</div>

---

## Database Schema & API Mapping

Entity-relationship overview:

<div class="mermaid">
erDiagram
  USER ||--o{ DEVICE      : owns
  USER ||--o{ TREAT_EVENT : triggers
  DEVICE ||--o{ TREAT_EVENT : has_logs
  DEVICE ||--o{ TELEMETRY   : generates
  USER ||--o{ PET         : owns
  PET   ||--|{ DEVICE      : assigned_to

  USER {
    UUID id PK
    string name
    string email
    string password_hash
    string role
  }
  DEVICE {
    UUID id PK
    string name
    string status
    string firmware_version
    UUID owner_id FK
    UUID pet_id FK
    string mqtt_user
    string mqtt_pass_hash
  }
  PET {
    UUID id PK
    string name
    string species
    date birthdate
    UUID owner_id FK
  }
  TREAT_EVENT {
    UUID id PK
    UUID device_id FK
    UUID triggered_by FK
    timestamp event_time
    string result
  }
  TELEMETRY {
    UUID id PK
    UUID device_id FK
    timestamp ts
    float accel_x
    float accel_y
    float accel_z
    float battery_level
  }
</div>

**API ↔ DB Mapping**  
- `POST /auth/login` → read USER  
- `GET /devices` → query DEVICE by owner_id  
- `GET /devices/{id}/status` → latest TELEMETRY or DEVICE.status  
- `POST /devices/{id}/treat` → insert TREAT_EVENT + publish MQTT  
- `GET /devices/{id}/telemetry` → query TELEMETRY  
- `GET /devices/{id}/video_token` → auth + sign URL  
- `POST /devices` → insert DEVICE + provision MQTT creds  
- `PUT /devices/{id}` → update DEVICE + optional MQTT config  

---

## Post-MVP Scaled Architecture

<div class="mermaid">
flowchart LR
  subgraph "IoT Devices"
    d1[Collar #1]
    dN[Collar #N]
  end
  subgraph "Scaled Backend"
    lb[Load Balancer]
    a1[FastAPI Instance 1]
    aN[FastAPI Instance N]
    mq[AWS IoT Core]
    db[(Managed PostgreSQL)]
    cdn[CDN / Scalable Streaming]
  end
  subgraph "Users"
    U[Owner/Staff UI]
  end

  d1 & dN --> mq
  U --> lb
  lb --> a1 & aN
  a1 & aN --- db
  a1 & aN --> mq
  d1 & dN --> cdn
  U --> cdn
</div>

**Scale-Up Improvements:**  
- Managed MQTT (AWS IoT Core) for device scale  
- Auto-scaling FastAPI behind a load balancer  
- Managed PostgreSQL (RDS/Aurora + replicas)  
- CDN or specialized streaming for video  
- TLS via AWS Cert Manager & IoT certificates  
- Centralized monitoring & logging (CloudWatch, Prometheus, ELK)  
- Optional microservices & event-driven pipelines

