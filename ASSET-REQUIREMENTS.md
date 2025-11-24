# Asset Requirements for Email Signatures

**For Design Team / IT Department**

This document specifies the image assets needed for the email signature deployment.

---

## 🎯 Required Assets

### 1. Company Logo
**Purpose**: Main branding element at top of signature

**Specifications**:
- **Dimensions**: 120px width × 40px height
- **Format**: PNG or JPG (SVG provided as template)
- **File Size**: < 20 KB recommended
- **Background**: Transparent (PNG) or white
- **Quality**: High resolution, crisp text/logo
- **Color Space**: RGB (for screens)

**Naming**: `company-logo.png` or `company-logo.jpg`

**Notes**:
- Must be hosted online with HTTPS URL
- Should match official company branding
- Test on both light and dark backgrounds

---

### 2. Email Icon
**Purpose**: Visual indicator for email address

**Specifications**:
- **Dimensions**: 24px × 24px
- **Format**: PNG with transparency
- **File Size**: < 5 KB
- **Style**: Flat design, simple
- **Color**: #FF5722 (orange-red) or brand color
- **Background**: Transparent

**Naming**: `email-icon.png`

**Design Notes**:
- Envelope or @ symbol
- Clear and recognizable at small size
- Matches overall signature style

---

### 3. Phone Icon
**Purpose**: Visual indicator for office phone number

**Specifications**:
- **Dimensions**: 24px × 24px
- **Format**: PNG with transparency
- **File Size**: < 5 KB
- **Style**: Flat design, simple
- **Color**: #4CAF50 (green) or brand color
- **Background**: Transparent

**Naming**: `phone-icon.png`

**Design Notes**:
- Traditional phone handset or modern phone
- Distinct from mobile icon
- Professional appearance

---

### 4. Mobile Icon
**Purpose**: Visual indicator for mobile phone number

**Specifications**:
- **Dimensions**: 24px × 24px
- **Format**: PNG with transparency
- **File Size**: < 5 KB
- **Style**: Flat design, simple
- **Color**: #2196F3 (blue) or brand color
- **Background**: Transparent

**Naming**: `mobile-icon.png`

**Design Notes**:
- Smartphone or cell phone shape
- Clearly different from office phone icon
- Modern, sleek design

---

### 5. Website Icon
**Purpose**: Visual indicator for company website link

**Specifications**:
- **Dimensions**: 24px × 24px
- **Format**: PNG with transparency
- **File Size**: < 5 KB
- **Style**: Flat design, simple
- **Color**: #9C27B0 (purple) or brand color
- **Background**: Transparent

**Naming**: `website-icon.png`

**Design Notes**:
- Globe or browser symbol
- Professional and recognizable
- Matches signature aesthetic

---

### 6. LinkedIn Icon
**Purpose**: Link to company LinkedIn profile

**Specifications**:
- **Dimensions**: 28px × 28px (slightly larger for social)
- **Format**: PNG with transparency
- **File Size**: < 5 KB
- **Style**: Official LinkedIn style preferred
- **Color**: #0A66C2 (LinkedIn blue) or official colors
- **Background**: Transparent or LinkedIn blue square

**Naming**: `linkedin-icon.png`

**Design Notes**:
- Official LinkedIn "in" logo preferred
- Square format (28×28) for visual balance
- Can use official LinkedIn brand assets

---

## 📐 Design Guidelines

### Color Palette
Current signature uses:
- **Primary Brand**: #1976D2 (blue)
- **Text**: #333333 (dark gray)
- **Secondary Text**: #666666 (medium gray)
- **Accent Colors**: See individual icon specifications

**Recommendation**: Match icons to your brand colors or use the suggested colors for consistency.

### Icon Style
- **Flat Design**: No shadows, gradients, or 3D effects
- **Minimalist**: Simple, clean shapes
- **Consistent**: All icons should match in style
- **Clear**: Recognizable at small sizes
- **Professional**: Corporate-appropriate design

### File Format Notes
- **PNG**: Recommended for icons (supports transparency)
- **JPG**: Acceptable for logo if no transparency needed
- **SVG**: Provided as templates but must be converted to PNG/JPG for email use
- **DO NOT USE**: GIF (poor quality), BMP (too large), TIFF (not web-safe)

---

## 🌐 Hosting Requirements

### Where to Host
**Recommended Options**:
1. **Company Website** (e.g., `https://yourcompany.com/email-assets/`)
2. **CDN** (e.g., Cloudflare, AWS CloudFront)
3. **Cloud Storage** (e.g., AWS S3, Azure Blob Storage, Google Cloud Storage)
4. **Image Hosting Service** (e.g., Cloudinary, ImgIX)

**Requirements**:
- ✅ HTTPS (secure connection required)
- ✅ Publicly accessible (no authentication)
- ✅ Reliable uptime (99.9%+ recommended)
- ✅ Fast loading (<1 second)
- ✅ CORS enabled (if needed)
- ✅ No hotlink protection
- ✅ Permanent URLs (no expiration)

### Example URL Structure
```
https://yourcompany.com/assets/email/logo/company-logo.png
https://yourcompany.com/assets/email/icons/email-icon.png
https://yourcompany.com/assets/email/icons/phone-icon.png
https://yourcompany.com/assets/email/icons/mobile-icon.png
https://yourcompany.com/assets/email/icons/website-icon.png
https://yourcompany.com/assets/email/icons/linkedin-icon.png
```

---

## ✅ Asset Checklist

Before deploying signatures, verify:

### Logo
- [ ] Created at 120×40px (or 240×80px @2x)
- [ ] Saved in PNG or JPG format
- [ ] File size under 20 KB
- [ ] Uploaded to web host (HTTPS)
- [ ] URL tested and accessible
- [ ] Looks good on white background
- [ ] Brand guidelines followed

### Icons
- [ ] All 5 icons created at 24×24px (or 48×48px @2x)
- [ ] LinkedIn icon created at 28×28px (or 56×56px @2x)
- [ ] All saved in PNG format with transparency
- [ ] File sizes under 5 KB each
- [ ] Uploaded to web host (HTTPS)
- [ ] URLs tested and accessible
- [ ] All icons match in style
- [ ] Colors are consistent with brand

### Hosting
- [ ] HTTPS enabled on hosting
- [ ] Public access configured
- [ ] CORS headers set (if needed)
- [ ] Cache headers configured (optional)
- [ ] Backup copies stored securely
- [ ] URL scheme documented

---

## 📊 Quick Reference Table

| Asset | Size | Format | Color | Max Size | Purpose |
|-------|------|--------|-------|----------|---------|
| Logo | 120×40 | PNG/JPG | Brand | 20 KB | Company branding |
| Email Icon | 24×24 | PNG | #FF5722 | 5 KB | Email indicator |
| Phone Icon | 24×24 | PNG | #4CAF50 | 5 KB | Office phone |
| Mobile Icon | 24×24 | PNG | #2196F3 | 5 KB | Mobile phone |
| Website Icon | 24×24 | PNG | #9C27B0 | 5 KB | Website link |
| LinkedIn Icon | 28×28 | PNG | #0A66C2 | 5 KB | Social media |

---

## 🎨 Design Tips

### Retina/HiDPI Support
For sharper images on high-resolution displays:
1. Create icons at **2× size** (48×48px instead of 24×24px)
2. Save as PNG
3. Use image optimization tools to reduce file size
4. Specify display size in HTML (width="24" height="24")

This provides crisp rendering on retina displays while maintaining small file size.

### Logo Considerations
- Ensure logo text is readable at 120×40px
- Test on both white and light gray backgrounds
- Consider a simplified version if full logo is too detailed
- Maintain proper spacing around logo elements

### Icon Consistency
- Use the same line weight for all icons
- Maintain consistent padding/whitespace
- Use similar corner radius (if applicable)
- Match overall visual weight

---

## 🔧 Image Optimization

### Tools
- **TinyPNG** - https://tinypng.com/ (PNG compression)
- **ImageOptim** - https://imageoptim.com/ (Mac)
- **Squoosh** - https://squoosh.app/ (Web-based)
- **SVGOMG** - https://jakearchibald.github.io/svgomg/ (SVG optimization)

### Optimization Checklist
- [ ] Remove metadata/EXIF data
- [ ] Compress to smallest size while maintaining quality
- [ ] Convert to sRGB color space
- [ ] Remove unnecessary layers/channels
- [ ] Test rendering at actual size
- [ ] Verify file sizes meet requirements

---

## 📝 Delivery Format

### For Design Team
Please provide assets in this structure:

```
email-signature-assets/
├── logo/
│   ├── company-logo.png
│   ├── company-logo@2x.png (optional, for retina)
│   └── company-logo.svg (source file)
│
├── icons/
│   ├── email-icon.png
│   ├── phone-icon.png
│   ├── mobile-icon.png
│   ├── website-icon.png
│   ├── linkedin-icon.png
│   ├── email-icon@2x.png (optional)
│   ├── phone-icon@2x.png (optional)
│   ├── mobile-icon@2x.png (optional)
│   ├── website-icon@2x.png (optional)
│   ├── linkedin-icon@2x.png (optional)
│   └── source-files/ (AI, Sketch, Figma, etc.)
│
└── asset-urls.txt (list of final hosted URLs)
```

### Documentation
Include a text file with:
- Final hosted URLs for each asset
- Dimensions and file sizes
- Color codes used
- Any special notes or considerations

---

## 🆘 Questions?

### For Design Team
- Review current signature templates in `/signatures/` folder
- Check provided SVG templates in `/assets/` folder
- Refer to brand guidelines for color/logo usage
- Contact IT for hosting requirements

### For IT Department
- Set up hosting environment with HTTPS
- Configure public access and CORS if needed
- Test all URLs before signature deployment
- Keep backup copies of all assets

---

## ✨ Example Assets

Current signature templates use placeholder images from:
- `https://via.placeholder.com/120x40/...` (logo)
- `https://via.placeholder.com/24x24/...` (icons)
- `https://via.placeholder.com/28x28/...` (LinkedIn)

**Replace these with your actual hosted asset URLs.**

---

## 📅 Timeline

**Suggested Timeline**:
1. **Day 1**: Design/source assets
2. **Day 2**: Optimize and prepare files
3. **Day 3**: Upload to hosting and test URLs
4. **Day 4**: Update HTML signatures with actual URLs
5. **Day 5**: Test signatures in email clients
6. **Day 6+**: Deploy to team

---

**Questions about asset requirements?**  
Contact the project lead or IT department for clarification.

---

*Last updated: November 2025*
