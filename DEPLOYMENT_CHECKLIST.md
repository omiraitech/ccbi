# Production Deployment Checklist

## Pre-Deployment (Before Going Live)

### ✅ Build & Testing
- [ ] Run `npm run build` successfully
- [ ] Check dist/ folder created with all assets
- [ ] Run `npm run preview` and test locally
- [ ] Test all routes and lazy loading (check Network tab)
- [ ] Verify no console errors in dev tools

### ✅ Performance Testing
- [ ] Run Lighthouse (Chrome DevTools > Lighthouse)
  - [ ] Performance score > 75
  - [ ] Accessibility score > 95
  - [ ] SEO score > 95
  - [ ] Best Practices score > 90
- [ ] Test on mobile device or mobile emulation
- [ ] Verify Core Web Vitals are "Good"

### ✅ Functionality Testing
- [ ] Test homepage hero animation
- [ ] Test navigation menu (desktop + mobile)
- [ ] Test all internal links
- [ ] Test external links (WhatsApp, social media)
- [ ] Test form submissions
- [ ] Test 404 page (navigate to /nonexistent)
- [ ] Test lazy loading of routes (click through pages)

### ✅ Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### ✅ SEO Verification
- [ ] Robots.txt accessible at /robots.txt
- [ ] Sitemap.xml accessible at /sitemap.xml
- [ ] Meta tags visible in page source
- [ ] JSON-LD schema in page source
- [ ] OG tags for social sharing
- [ ] Canonical URL set correctly

---

## Deployment Steps

### Option 1: Vercel (Recommended)
```bash
# 1. Connect GitHub repo to Vercel
# 2. No additional configuration needed
# 3. Push to main branch
git push origin main

# 4. Vercel automatically:
#    - Builds with npm run build
#    - Enables gzip compression
#    - Sets cache headers
#    - Deploys to global CDN
```

### Option 2: Manual to Hosting Provider
```bash
# 1. Build locally
npm run build

# 2. Upload dist/ folder to server
#    - Upload all files in dist/ to public_html/ or /www/

# 3. Configure server headers (.htaccess for Apache)
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/html "access plus 1 day"
</IfModule>

<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# 4. Restart server
```

---

## Post-Deployment (After Going Live)

### ✅ Verify Deployment
- [ ] Visit website in browser
- [ ] Check homepage loads in < 3 seconds
- [ ] Check Network tab shows bundles loading
- [ ] Verify images load correctly
- [ ] Test all pages are accessible

### ✅ Monitor Analytics
- [ ] Google Search Console:
  - [ ] Submit sitemap.xml
  - [ ] Monitor Core Web Vitals
  - [ ] Check indexing status
- [ ] Google Analytics:
  - [ ] Monitor page load times
  - [ ] Track user behavior
  - [ ] Monitor bounce rates

### ✅ SSL Certificate
- [ ] Verify HTTPS is active
- [ ] Check certificate is valid
- [ ] Verify no mixed content warnings

### ✅ Search Engine Indexing
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Monitor robots.txt access logs
- [ ] Check sitemap.xml is crawled

### ✅ Performance Monitoring
- [ ] Set up Lighthouse CI (optional)
- [ ] Monitor Core Web Vitals over time
- [ ] Alert on performance regressions
- [ ] Track Lighthouse scores

---

## Troubleshooting

### Issue: Build fails locally
**Solution**: 
```bash
rm -rf node_modules dist package-lock.json
npm install
npm run build
```

### Issue: Routes not loading
**Solution**:
- Check that lazy() imports are correct in App.tsx
- Verify route paths match exactly
- Check Network tab for 404 errors on chunks

### Issue: Images not loading
**Solution**:
- Verify image files exist in public/ folder
- Check image paths are correct (case-sensitive on Linux)
- Check file permissions (644 for files)

### Issue: Lighthouse score low
**Solution**:
- Run build with production flags
- Test with throttled network (Chrome DevTools)
- Check for console errors
- Verify preload/prefetch resources are accessible

### Issue: Navigation links broken after deployment
**Solution**:
- Check base URL in Router setup
- Verify routing works with trailing slashes
- Test SPA routing with server redirects (all routes → index.html)

---

## Server Configuration Examples

### Nginx Configuration
```nginx
server {
    listen 80;
    server_name ccbi-afrique.com www.ccbi-afrique.com;
    
    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name ccbi-afrique.com www.ccbi-afrique.com;
    
    # SSL certificates
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    
    root /var/www/ccbi/dist;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_types text/html text/css text/javascript application/javascript;
    gzip_min_length 1000;
    
    # Cache headers for assets
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Cache header for index.html
    location = /index.html {
        expires 1h;
        add_header Cache-Control "public";
    }
    
    # SPA routing - all routes go to index.html
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Apache Configuration (.htaccess)
```apache
# Enable mod_rewrite
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    
    # SPA routing - all requests go to index.html
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^ index.html [QSA,L]
</IfModule>

# Gzip compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache headers
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/html "access plus 1 hour"
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType text/javascript "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
</IfModule>
```

---

## Post-Launch Optimization

### 1 Week After Launch
- [ ] Review Lighthouse scores
- [ ] Check Google Search Console for crawl errors
- [ ] Monitor Core Web Vitals
- [ ] Review analytics for any issues

### 1 Month After Launch
- [ ] Submit full sitemap to Google
- [ ] Build backlinks for SEO
- [ ] Optimize underperforming pages
- [ ] Review error logs

### Ongoing
- [ ] Monitor Core Web Vitals monthly
- [ ] Keep dependencies updated
- [ ] Test with new browser versions
- [ ] Review SEO performance

---

## Contact Support

If you encounter issues during deployment:

1. **Build Issues**: Check vite.config.ts and npm scripts
2. **Performance Issues**: Run Lighthouse and check recommendations
3. **Server Issues**: Verify gzip compression and cache headers
4. **SEO Issues**: Check robots.txt and sitemap.xml

---

**Ready to deploy! 🚀**

All optimizations are in place and the build is production-ready.
