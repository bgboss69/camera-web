# Troubleshooting Guide

## Common Issues and Solutions

### Issue: `turbo.createProject` is not supported by the wasm bindings

**Symptoms:**
```
Error: `turbo.createProject` is not supported by the wasm bindings.
⚠ Attempted to load @next/swc-win32-x64-msvc, but an error occurred: ...is not a valid Win32 application.
```

**Root Cause:**
This error occurs when Next.js cannot load the native SWC compiler bindings and falls back to WebAssembly (WASM) bindings. The WASM bindings don't support Turbopack, which is enabled by default in Next.js 15+.

**Solutions:**

#### Solution 1: Use Webpack Instead of Turbopack (Recommended)
The project has been configured to use webpack by default, which is more stable:

```bash
npm run dev
```

If you want to try Turbopack (after fixing native bindings):
```bash
npm run dev:turbo
```

#### Solution 2: Fix Native Bindings
If you want to use Turbopack, you need to fix the native SWC bindings:

1. **Delete node_modules and lockfile:**
   ```bash
   # Windows (PowerShell)
   Remove-Item -Recurse -Force node_modules
   Remove-Item package-lock.json
   
   # Windows (Command Prompt)
   rmdir /s /q node_modules
   del package-lock.json
   
   # Mac/Linux
   rm -rf node_modules package-lock.json
   ```

2. **Clear npm cache:**
   ```bash
   npm cache clean --force
   ```

3. **Reinstall dependencies:**
   ```bash
   npm install
   ```

4. **Try running the dev server again:**
   ```bash
   npm run dev:turbo
   ```

#### Solution 3: Check System Architecture
Make sure you're running the correct Node.js version for your system:

```bash
node -v  # Should be 18.x or higher
node -p process.arch  # Should match your system (x64, arm64, etc.)
```

If you're on an ARM-based Windows machine (like Surface Pro X), you may need to use Node.js built for ARM64.

#### Solution 4: Antivirus/Security Software
Sometimes antivirus software or Windows Defender can corrupt or block native bindings:

1. Temporarily disable antivirus
2. Delete `node_modules` 
3. Reinstall dependencies
4. Re-enable antivirus

### Issue: Invalid source map warnings

**Symptoms:**
```
Invalid source map. Only conformant source maps can be used to find the original code.
Cause: Error: sourceMapURL could not be parsed
```

**Root Cause:**
These are warnings from Next.js dependencies and don't affect functionality.

**Solution:**
These warnings can be safely ignored. They don't prevent the application from running.

### Issue: Development server won't start

**Check the following:**

1. **Port 3000 is available:**
   ```bash
   # Windows
   netstat -ano | findstr :3000
   
   # Mac/Linux
   lsof -i :3000
   ```
   
   If something is using port 3000, either kill that process or use a different port:
   ```bash
   npm run dev -- -p 3001
   ```

2. **Node.js version:**
   ```bash
   node -v
   ```
   Should be 18.x or higher. Update if needed: https://nodejs.org/

3. **Disk space:**
   Make sure you have enough disk space for node_modules (typically 200-500 MB).

### Issue: Camera not working

**Symptoms:**
- Camera permission denied
- Black screen instead of video
- "Camera not available" error

**Solutions:**

1. **Use HTTPS:**
   - The MediaDevices API requires HTTPS (except on localhost)
   - Deploy to Cloudflare Pages or similar platform for HTTPS
   - Or use `localhost` for development

2. **Grant browser permissions:**
   - Check browser settings for camera permissions
   - Make sure no other application is using the camera

3. **Browser compatibility:**
   - Use a modern browser: Chrome 53+, Firefox 36+, Safari 11+, Edge 79+
   - Check https://caniuse.com/stream for detailed compatibility

### Still Having Issues?

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Search for similar issues on [Next.js GitHub](https://github.com/vercel/next.js/issues)
3. Open an issue in this repository with:
   - Your operating system and version
   - Node.js version (`node -v`)
   - npm version (`npm -v`)
   - Complete error message
   - Steps you've already tried
