# Outlook Email Signatures - Installation Guide

This package contains 5 professional HTML email signatures optimized for Microsoft Outlook (desktop and mobile).

## 📦 Package Contents

### Signatures (in `/signatures/`)
- `signature-john-doe.html` - CEO signature
- `signature-jane-smith.html` - CTO signature
- `signature-mike-johnson.html` - Sales Director signature
- `signature-sarah-williams.html` - Marketing Manager signature
- `signature-david-brown.html` - Customer Success Manager signature

### Assets (in `/assets/`)
- `/assets/icons/` - Social media and contact icons (SVG format)
  - linkedin.svg
  - phone.svg
  - mobile.svg
  - email.svg
  - website.svg
- `/assets/logo/` - Company logo (SVG format)
  - company-logo.svg

## ✨ Features

✅ **Outlook-Optimized**: Uses table-based layout with inline CSS for maximum compatibility  
✅ **Mobile-Responsive**: Renders cleanly on both desktop and mobile Outlook apps  
✅ **Clickable Links**: All contact details and social icons are fully clickable  
✅ **Lightweight**: No external dependencies, fast loading  
✅ **Professional Design**: Clean, modern appearance with consistent branding  
✅ **No Image Fallbacks**: Text-based structure ensures content always displays

## 🔧 Customization Required

Before installation, you'll need to customize each signature file:

### 1. Replace Placeholder Images
The signatures currently use placeholder images. You need to:

**Option A: Host Your Own Images**
1. Upload your logo and icons to a reliable image host (recommended: your company website, AWS S3, or Azure Blob Storage)
2. Get direct URLs for each image
3. In each HTML file, replace:
   - `https://via.placeholder.com/120x40/1976D2/FFFFFF?text=COMPANY` with your logo URL
   - `https://via.placeholder.com/24x24/...` with your icon URLs
   - `https://via.placeholder.com/28x28/0A66C2/FFFFFF?text=in` with your LinkedIn icon URL

**Option B: Use the Provided SVG Files**
1. Convert SVG files to PNG format (120x40px for logo, 24x24px for icons)
2. Upload to an image host
3. Follow Option A steps above

### 2. Update Contact Information
For each signature file, update:

```html
<!-- Update email -->
<a href="mailto:YOUR-EMAIL@company.com">YOUR-EMAIL@company.com</a>

<!-- Update phone -->
<a href="tel:+1XXXYYYZZZZ">+1 (XXX) YYY-ZZZZ</a>

<!-- Update mobile -->
<a href="tel:+1XXXYYYZZZZ">+1 (XXX) YYY-ZZZZ</a>

<!-- Update website -->
<a href="https://www.yourcompany.com">www.yourcompany.com</a>

<!-- Update LinkedIn -->
<a href="https://www.linkedin.com/company/yourcompany">
```

### 3. Update Name and Title
Replace the name and title in each file:

```html
<span style="font-size: 18px; font-weight: bold; color: #1976D2; line-height: 1.2;">Your Name</span>
<span style="font-size: 14px; color: #666666; line-height: 1.4;">Your Job Title</span>
```

## 📥 Installation Instructions

### For Outlook on Windows (Desktop)

#### Method 1: Using Outlook Signature Editor
1. Open the HTML signature file in a web browser (Chrome, Edge, Firefox)
2. Select all content (Ctrl+A)
3. Copy (Ctrl+C)
4. Open Outlook
5. Go to **File → Options → Mail → Signatures**
6. Click **New** to create a new signature
7. Give it a name (e.g., "John Doe - Company")
8. Click in the signature editor box
9. Paste (Ctrl+V)
10. Click **OK** to save

#### Method 2: Direct File Method
1. Close Outlook completely
2. Navigate to: `C:\Users\[YourUsername]\AppData\Roaming\Microsoft\Signatures\`
3. Copy your `.html` signature file into this folder
4. Rename it to something simple (e.g., `johndoe.htm`)
5. Open Outlook
6. Go to **File → Options → Mail → Signatures**
7. Your signature should appear in the list
8. Select it and click **OK**

### For Outlook on macOS (Desktop)

1. Open the HTML signature file in a web browser (Safari, Chrome, Firefox)
2. Select all content (Cmd+A)
3. Copy (Cmd+C)
4. Open Outlook for Mac
5. Go to **Outlook → Preferences → Signatures**
6. Click the **+** button to create a new signature
7. Give it a name
8. Click in the signature editor box
9. Paste (Cmd+V)
10. Close the Preferences window (it auto-saves)

### For Outlook Web (OWA)

1. Open the HTML signature file in a text editor or browser
2. Select all content and copy
3. Log into Outlook Web (outlook.office.com)
4. Click the gear icon (⚙️) → **View all Outlook settings**
5. Go to **Mail → Compose and reply**
6. Under "Email signature", paste your HTML
7. Check "Automatically include my signature on new messages"
8. Click **Save**

### For Outlook Mobile (iOS/Android)

**Note**: Outlook mobile has limited signature support. For best results:

1. Set up your signature in Outlook Web (OWA) as described above
2. Enable "Automatically include my signature"
3. The signature will sync to your mobile app
4. Alternatively, manually copy/paste the signature text (without HTML) in the mobile app:
   - Open Outlook mobile app
   - Tap your profile picture → Settings (gear icon)
   - Tap your email account
   - Tap **Signature**
   - Paste plain text version

## 🎨 Design Specifications

- **Max Width**: 600px (email-safe width)
- **Font**: Arial, Helvetica, sans-serif (web-safe)
- **Primary Color**: #1976D2 (blue)
- **Text Color**: #333333 (dark gray)
- **Secondary Text**: #666666 (medium gray)
- **Icon Size**: 24x24px (contact icons), 28x28px (social icons)
- **Logo Size**: 120x40px

## 🔍 Testing Your Signature

After installation, test your signature:

1. ✅ Send a test email to yourself
2. ✅ Check on desktop Outlook
3. ✅ Check on mobile Outlook app
4. ✅ Check in Gmail, Apple Mail, other clients
5. ✅ Verify all links are clickable
6. ✅ Confirm images load properly
7. ✅ Check formatting on reply/forward

## 🐛 Troubleshooting

### Images Not Showing
- **Cause**: Images are not hosted online or URLs are broken
- **Fix**: Upload images to a reliable host and update URLs

### Signature Looks Different in Outlook
- **Cause**: Outlook modifies HTML when pasting
- **Fix**: Use the direct file method (Windows) or accept minor variations

### Links Not Clickable
- **Cause**: HTML not preserved during paste
- **Fix**: Re-paste from browser or use direct file method

### Signature Too Wide on Mobile
- **Cause**: Mobile Outlook sometimes ignores max-width
- **Fix**: This is normal; the design is optimized to scale down

### Colors Changed After Pasting
- **Cause**: Outlook's default theme affects colors
- **Fix**: Colors are inline-styled and should be preserved; check in "Light" theme

## 📝 Best Practices

1. **Image Hosting**: Always use HTTPS URLs for images
2. **File Size**: Keep total signature under 100KB for fast loading
3. **Consistency**: Use the same signature across all devices
4. **Testing**: Test before rolling out to entire team
5. **Updates**: Maintain a master copy for easy updates

## 🔗 Social Media Links

Current LinkedIn link in signatures:
```html
https://www.linkedin.com/company/yourcompany
```

**Update this to your actual company LinkedIn profile URL.**

## 📞 Support

If you encounter issues:
1. Check that all image URLs are valid and accessible
2. Verify HTML is correctly formatted (no broken tags)
3. Test in a web browser first before installing in Outlook
4. Try the alternative installation method
5. Check Outlook version compatibility

## 📄 License & Credits

These signatures are designed for use with Microsoft Outlook and are optimized for:
- Outlook 2016, 2019, 2021, Microsoft 365
- Outlook for Mac
- Outlook Web (OWA)
- Outlook Mobile (iOS/Android)

Created: November 2025

---

**Need Help?** Contact your IT department for assistance with installation or customization.
