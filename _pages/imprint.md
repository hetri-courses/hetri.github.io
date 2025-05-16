---
layout: page
title: Legal Notice & Privacy Policy
permalink: /imprint
---
<section class="site-section" id="legal">
  <div class="container">
    <h1>Legal Notice</h1>
    <p><strong>Hetri Inc.</strong><br></p>

    <p>Email: <a href="mailto:owner@hetri.org">owner@hetri.org</a></p>

    <hr>

    <h2>Privacy Policy</h2>

    <p>This privacy policy explains how Hetri Inc. collects and uses information from website visitors. We value your privacy and are committed to protecting your personal data.</p>

    <h3>Information Collected</h3>
    <ul>
      <p>IP address and browser details</p>
      <p>Non-personally identifiable usage statistics</p>
      <p>Contact information if submitted by the user</p>
    </ul>

    <h3>How We Use Information</h3>
    <p>We use this information solely to improve our website and services. No information is sold or used for marketing purposes.</p>

    <h3>Cookies</h3>
    <ul>
    <p>Our website sets minimal cookies:</p>
      <p>Session settings (temporary)</p>
    </ul>

    <h3>Hosting and CDN</h3>
    <p>This site is hosted by <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>. Content is served through a CDN for performance. Your IP may be processed to deliver content efficiently.</p>

    <h3>FontAwesome Usage</h3>
    <p>Icons are hosted locally. No data is sent to external servers. <a href="https://fontawesome.com/privacy" target="_blank">FontAwesome Privacy Policy</a></p>

    <h3>Your Rights</h3>
    <p>If you wish to review or delete any data we may hold, please contact us.</p>

    <div class="notice--info">
      <strong>Contact for Privacy Requests:</strong><br>
      Email: <a href="mailto:info@hetri.org">info@hetri.org</a>
    </div>

    <hr>

    <div class="box box--success">
      <h4>Policy Updates</h4>
      <p>This page may be updated without notice. Check back regularly for changes.</p>
    </div>
  </div>
</section>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section#legal h3");
    sections.forEach(h => {
      h.style.cursor = "pointer";
      h.addEventListener("click", () => {
        const next = h.nextElementSibling;
        if (next && next.style) {
          next.style.display = next.style.display === "none" ? "block" : "none";
        }
      });
    });
  });
</script>

<style>
  section#legal ul {
    list-style-type: disc;
  }
  .container {
    margin-top: 100px;
  }
  .notice--info {
    color: default;
  }
</style>
