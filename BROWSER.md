# Browser Build

This project now includes browser-compatible builds that can be used directly in web browsers without requiring a Node.js environment.

## Build Process

The browser builds are created using [Vite](https://vitejs.dev/) and include all necessary dependencies bundled together.

### Available Scripts

- `npm run build` - Creates production builds (minified)
- `npm run build:dev` - Creates development builds (unminified, easier debugging)

### Generated Files

After running the build, you'll find these files in the `dist/` directory:

**Production builds:**
- `sanitize-html.umd.js` - UMD format for browser globals and RequireJS
- `sanitize-html.es.js` - ES modules format
- Source maps: `*.js.map`

**Development builds:**
- `sanitize-html.dev.umd.js` - Unminified UMD format
- `sanitize-html.dev.es.js` - Unminified ES modules format

## Usage in Browser

### Method 1: UMD Build (Script Tag)

```html
<!DOCTYPE html>
<html>
<head>
    <title>Sanitize HTML Example</title>
</head>
<body>
    <!-- Include the UMD build -->
    <script src="dist/sanitize-html.umd.js"></script>
    
    <script>
        // sanitizeHtml is now available globally
        const dirty = '<p>Hello <script>alert("xss")</script> <strong>world</strong>!</p>';
        const clean = sanitizeHtml(dirty);
        console.log(clean); // <p>Hello  <strong>world</strong>!</p>
    </script>
</body>
</html>
```

### Method 2: ES Modules

```html
<!DOCTYPE html>
<html>
<head>
    <title>Sanitize HTML ES Module Example</title>
</head>
<body>
    <script type="module">
        import sanitizeHtml from './dist/sanitize-html.es.js';
        
        const dirty = '<p>Hello <script>alert("xss")</script> <strong>world</strong>!</p>';
        const clean = sanitizeHtml(dirty);
        console.log(clean); // <p>Hello  <strong>world</strong>!</p>
    </script>
</body>
</html>
```

### Method 3: Module Bundlers (Webpack, Rollup, etc.)

When using module bundlers, they will automatically pick up the appropriate build:

```javascript
import sanitizeHtml from 'sanitize-html';

const clean = sanitizeHtml(dirty);
```

Or with CommonJS:

```javascript
const sanitizeHtml = require('sanitize-html');

const clean = sanitizeHtml(dirty);
```

## Package.json Configuration

The browser builds are configured in `package.json`:

- `main`: Points to the Node.js version (`index.js`)
- `browser`: Points to the UMD browser build
- `module`: Points to the ES modules browser build

This allows tools like webpack and rollup to automatically choose the right version.

## Testing

Two test files are included to verify browser compatibility:

- `test-browser.html` - Tests the UMD build
- `test-es-module.html` - Tests the ES modules build

Open these files in a web browser to verify the builds work correctly.

## Browser Compatibility

The builds target ES2015 (ES6) and should work in:

- Chrome 51+
- Firefox 54+
- Safari 10+
- Edge 15+

For older browser support, you may need to run the builds through additional transpilation tools like Babel.

## Bundle Size

- Production UMD: ~188 KB (~67 KB gzipped)
- Production ES: ~255 KB (~74 KB gzipped)
- Development builds are larger and unminified for debugging

The bundle includes all necessary dependencies (htmlparser2, postcss, etc.) so it works standalone in browsers.