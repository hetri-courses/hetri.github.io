# Formspree Integration Setup

## Setup Instructions

1. **Get your Formspree Form ID:**
   - Log into your Formspree account at https://formspree.io
   - Create new forms or use existing ones
   - Copy the form endpoints (they will look like `https://formspree.io/f/YOUR_FORM_ID`)

2. **Update the Form Components:**
   
   **Contact Forms:**
   - Open `src/components/ContactForm.tsx`
   - Replace `YOUR_FORM_ID_HERE` on line 27 with your actual Formspree form ID
   - Example: `https://formspree.io/f/xpzgkjqr`

   **Waitlist Forms:**
   - Open `src/components/WaitlistForm.tsx`
   - Replace `YOUR_FORM_ID_HERE` on line 24 with your actual Formspree form ID
   - Example: `https://formspree.io/f/xanother1`

3. **Test the Forms:**
   
   **Contact Forms:**
   - The forms are integrated into the contact page
   - Users can access specific forms via URL parameters:
     - `/contactus?type=schedule-demo` - Schedule Demo form
     - `/contactus?type=product-demo` - Product Demo form  
     - `/contactus?type=general-questions` - General Questions form
     - `/contactus?type=technical-support` - Technical Support form (with account verification)

   **Waitlist Forms:**
   - Main waitlist form on `/waitlist` page
   - Modal-based form with comprehensive facility information collection
   - "Join Waitlist" buttons throughout site lead to waitlist page

## Form Features

### Contact Forms
- **Dynamic Form Fields:** Each form type shows relevant fields
- **Technical Support Validation:** Requires Hetri account confirmation
- **Modal Interface:** Forms open in overlay modals for better UX
- **Email Fallback:** Users can still send direct emails if preferred

### Waitlist Forms
- **Facility Information:** Collects detailed facility data
- **Interest Selection:** PAW, TreatTap, or both options
- **Timeline Planning:** Implementation timeline selection
- **Size Classification:** Facility size for proper planning
- **Modal Interface:** Clean overlay form experience
- **Position Display:** Shows current waitlist position (#4)

## Alternative Free Form APIs

If you prefer alternatives to Formspree, here are other free options:

1. **Netlify Forms** (if hosted on Netlify)
2. **EmailJS** - Client-side email sending
3. **GetForm** - Simple form backend
4. **Formcarry** - Form handling service
5. **Basin** - Form backend with spam protection

## Data Collection

**Contact Forms collect:**
- Name, Email, Company, Phone
- Form-specific data (demo times, urgency levels, account info)
- Form type identification for routing
- Custom messages based on inquiry type

**Waitlist Forms collect:**
- Facility Name, Contact Person, Email, Phone
- Specific interests (PAW, TreatTap, both, etc.)
- Implementation timeline preferences
- Facility size classification
- Additional information and special needs

All data is sent to your Formspree endpoints with proper labeling for easy organization and follow-up. 