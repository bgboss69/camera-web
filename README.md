# 📷 Camera Web App

A modern, responsive web application that allows users to access their device camera directly from a web browser, capture photos, and download them. Built with Next.js and designed for deployment on Cloudflare Pages.

## ✨ Features

- **Camera Access**: Request user permission and display live video feed
- **Photo Capture**: Capture photos from the video stream
- **Download Images**: Save captured images locally as PNG files
- **Camera Switching**: Toggle between front and rear cameras (on mobile devices)
- **Responsive Design**: Works seamlessly on mobile and desktop devices
- **Modern UI**: Beautiful, accessible interface with Tailwind CSS
- **Zero Backend**: Fully client-side implementation using MediaDevices API

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- A modern browser that supports MediaDevices API (Chrome, Firefox, Safari, Edge)
- HTTPS connection required for camera access (works on localhost for development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bgboss69/camera-web.git
cd camera-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📱 How to Use

1. Click **"Start Camera"** to request camera access
2. Grant camera permissions when prompted by your browser
3. Click **"Capture Photo"** to take a picture
4. Click **"Download Image"** to save the photo to your device
5. Use **"Switch Camera"** to toggle between cameras (mobile only)
6. Click **"Take Another"** to capture a new photo

## 🌐 Deploy on Cloudflare Pages

This application is optimized for deployment on Cloudflare Pages with free hosting and HTTPS support.

### Deployment Steps

1. **Push your code to GitHub** (if not already done)

2. **Connect to Cloudflare Pages**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to Pages
   - Click "Create a project"
   - Connect your GitHub repository

3. **Configure Build Settings**:
   - Framework preset: **Next.js**
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Node version: `20` (or latest LTS)

4. **Deploy**:
   - Click "Save and Deploy"
   - Your app will be live with HTTPS enabled automatically

5. **Access your app**:
   - Your app will be available at `https://your-project.pages.dev`
   - Custom domains can be configured in Cloudflare Pages settings

### Environment Variables

No environment variables are required for this application.

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Camera API**: MediaDevices API
- **Hosting**: Cloudflare Pages (recommended)

## 📋 Requirements Met

This implementation fulfills all the requirements from the PRD and HLD:

### Functional Requirements
- ✅ FR1: Request camera permission before accessing video feed
- ✅ FR2: Display live video feed once permission is granted
- ✅ FR3: Allow capturing and downloading images
- ✅ FR4: Support HTTPS and secure deployment

### Non-Functional Requirements
- ✅ NFR1: Load in under 3 seconds (optimized Next.js build)
- ✅ NFR2: Compatible with latest Chrome, Firefox, Safari, Edge
- ✅ NFR3: Modular, maintainable React/Next.js code
- ✅ NFR4: Minimal external dependencies (only Next.js core)

### Core Features
- ✅ Camera Access with permission handling
- ✅ Capture Image from video feed
- ✅ Download Image locally
- ✅ Responsive UI for all devices
- ✅ Switch between front/rear cameras

## 🔒 Security & Privacy

- All camera processing happens client-side in the browser
- No data is sent to any server
- Images are only stored locally on the user's device
- HTTPS is required for camera access (enforced by browsers)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
