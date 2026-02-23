# Setting Up Formspree for Contact Form

## Quick Setup Steps:

1. **Sign up for Formspree**
   - Go to https://formspree.io
   - Create a free account

2. **Create a New Form**
   - Click "New Form" 
   - Choose "HTML Form"
   - Enter your email: `alinahota1999@gmail.com`
   - Set the form URL to your domain (e.g., `https://your-domain.com`)

3. **Get Your Form ID**
   - After creating the form, you'll get a form ID
   - It will look like: `https://formspree.io/f/xyz123abc`

4. **Update the Form ID in Contact.tsx**
   - Open `/src/components/Contact.tsx`
   - Find line 35: `https://formspree.io/f/your-form-id`
   - Replace `your-form-id` with your actual Formspree form ID

## Example:
If your Formspree URL is `https://formspree.io/f/abc123def`, update the code to:
```javascript
const response = await fetch('https://formspree.io/f/abc123def', {
```

## Features Included:
- ✅ Form validation
- ✅ Loading states
- ✅ Success animation with checkmark
- ✅ Error handling
- ✅ Auto-reset after 5 seconds
- ✅ Cyber-Noir styling
- ✅ Responsive design

## Testing:
- After setup, test the form locally
- Check your email for submissions
- Formspree also has a dashboard to view submissions

## Alternative: EmailJS
If you prefer EmailJS instead, let me know and I'll refactor the contact component to use EmailJS API.
