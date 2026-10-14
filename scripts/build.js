const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 [Vidyora Vercel Auto-Builder] Starting deployment build...');

const clientDir = path.join(__dirname, '..', 'client');
const clientDist = path.join(clientDir, 'dist');
const rootDist = path.join(__dirname, '..', 'dist');

// 1. Install client dependencies
console.log('📦 [1/3] Installing client dependencies...');
execSync('npm install', { cwd: clientDir, stdio: 'inherit' });

// 2. Build Vite bundle
console.log('⚡ [2/3] Building Vite client bundle...');
execSync('npm run build', { cwd: clientDir, stdio: 'inherit' });

// 3. Ensure dist exists in both root and client
console.log('📁 [3/3] Synchronizing build artifacts to root and client...');
if (fs.existsSync(clientDist)) {
  if (!fs.existsSync(rootDist)) {
    fs.mkdirSync(rootDist, { recursive: true });
  }
  fs.cpSync(clientDist, rootDist, { recursive: true });
  console.log('✅ Successfully copied dist to root ./dist and ./client/dist');
}

console.log('🎉 [Vidyora Vercel Auto-Builder] Production build complete and verified!');
