# Dynamic Navigation System - Implementation Guide

## Overview
Your website now uses a centralized, dynamic navigation system that automatically loads the navigation bar from `partials/partials/nav.html` into all pages. This system provides several key benefits:

- **Single source of truth**: All navigation updates happen in one file
- **Automatic path adjustment**: Works regardless of page depth in folder structure
- **Error handling**: Graceful fallback if nav.html cannot be loaded
- **Easy implementation**: Just 2 lines of code per page

## How It Works

### 1. Navigation Loader (`nav-loader.js`)
This sophisticated script:
- Automatically calculates the correct path to nav.html based on the current page's location
- Fetches the navigation HTML content
- Adjusts all internal links to work from the current page's context
- Handles dropdown functionality and interactive elements
- Provides a fallback navigation if the main nav file fails to load

### 2. Navigation Template (`partials/partials/nav.html`)
Contains the complete navigation structure with:
- Logo and branding
- Service dropdown with all service pages
- Specialty dropdown with all specialty services
- Call-to-action buttons
- Proper accessibility attributes

## Implementation on Any Page

To add the dynamic navigation to any page, follow these steps:

### Step 1: Include the Script
Add this line in your `<head>` section:
```html
<script src="../nav-loader.js"></script>
```
**Note**: Adjust the path based on your page's location relative to the root directory:
- Root level pages: `<script src="nav-loader.js"></script>`
- One folder deep: `<script src="../nav-loader.js"></script>`
- Two folders deep: `<script src="../../nav-loader.js"></script>`

### Step 2: Add the Navigation Placeholder
Add this HTML where you want the navigation to appear (typically right after `<body>`):
```html
<!-- Navigation -->
<div id="nav-placeholder"></div>
```

### Complete Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page Title</title>
    <link rel="stylesheet" href="../style.css">
    <script src="../nav-loader.js"></script>
</head>
<body>
    <!-- Navigation -->
    <div id="nav-placeholder"></div>
    
    <!-- Your page content here -->
    <main>
        <h1>Page Content</h1>
    </main>
</body>
</html>
```

## Files Updated

The following files have been updated to use the dynamic navigation system:

✅ **All pages now using dynamic navigation:**
- `index.html` - Home page (root level)
- `services/medical-offices.html` - Medical services page
- `services/dental-clinics.html` - Dental services page  
- `specialty/carpet-deep-clean.html` - Carpet cleaning specialty
- `specialty/strip-and-wax.html` - Floor services specialty
- `navigation-test.html` - System verification page

✅ **System files:**
- `nav-loader.js` - Dynamic navigation loader
- `partials/partials/nav.html` - Navigation template
- `script.js` - Updated to use correct nav path

✅ **Legacy issues resolved:**
- Removed hardcoded navigation from `specialty/strip-and-wax.html`
- Fixed incorrect nav paths in `script.js` and test files
- Standardized all pages to use `id="nav-placeholder"`

## Key Features

### Automatic Path Resolution
The system automatically determines the correct paths for:
- Navigation links to other pages
- Asset references (logos, images)
- Anchor links to sections on the home page

### Error Handling
If `nav.html` cannot be loaded, the system provides a basic fallback navigation to ensure the site remains functional.

### Interactive Elements
The loaded navigation includes full functionality for:
- Dropdown menus
- Mobile responsiveness (if styled in CSS)
- Quote modal integration
- Proper accessibility features

## Maintenance

### Updating Navigation
To update the navigation across all pages:
1. Edit `partials/partials/nav.html`
2. All pages will automatically reflect the changes

### Adding New Pages
For any new page, simply follow the implementation steps above. The system will work regardless of the page's folder depth.

### Troubleshooting
- Check the browser console for any loading errors
- Verify the path to `nav-loader.js` is correct for your page's location
- Ensure `partials/partials/nav.html` exists and is accessible
- Make sure the placeholder div has `id="nav-placeholder"`

## Browser Compatibility
This system uses modern JavaScript features:
- `fetch()` API for loading content
- `async/await` for handling promises
- DOM manipulation methods

It's compatible with all modern browsers (IE11+ with polyfills if needed).
