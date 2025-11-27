#!/usr/bin/env node

/**
 * Combined deployment build script
 * This script is used to build the frontend and prepare the backend when deploying on Render
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 Starting combined frontend and backend build...\n');

// Check if frontend directory exists
const viewsPath = path.join(__dirname, 'Views');
if (!fs.existsSync(viewsPath)) {
    console.error('❌ Error: Views directory not found');
    process.exit(1);
}

// Check frontend package.json
const frontendPackageJson = path.join(viewsPath, 'package.json');
if (!fs.existsSync(frontendPackageJson)) {
    console.error('❌ Error: Views/package.json not found');
    process.exit(1);
}

try {
    console.log('📦 Step 1/3: Installing frontend dependencies...');
    process.chdir(viewsPath);
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Frontend dependencies installed\n');

    console.log('🔨 Step 2/3: Building frontend application...');
    // Set environment variables (if they exist)
    const env = { ...process.env };
    if (process.env.REACT_APP_API_URL) {
        env.REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    }
    if (process.env.REACT_APP_GOOGLE_CLIENT_ID) {
        env.REACT_APP_GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    }
    
    execSync('npm run build', { stdio: 'inherit', env });
    console.log('✅ Frontend build completed\n');

    // Check build output
    const buildPath = path.join(viewsPath, 'build');
    if (!fs.existsSync(buildPath)) {
        console.error('❌ Error: Frontend build failed, build directory not found');
        process.exit(1);
    }

    console.log('📦 Step 3/3: Installing backend dependencies...');
    process.chdir(path.join(__dirname, 'js_server'));
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Backend dependencies installed\n');

    console.log('🎉 Build completed! Frontend has been built to Views/build directory');
    console.log('💡 Tip: Make sure to set environment variable SERVE_FRONTEND=true to enable frontend service\n');
    
} catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
}

