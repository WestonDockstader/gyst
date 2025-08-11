# Gyst - Cross-Platform Professional Network Application

## 📋 Project Overview

Gyst is a professional networking and skill management platform built with modern React technologies. The project demonstrates a complete cross-platform solution with:

- **React Web Application** (Material-UI)
- **React Native Mobile Application** (React Native Elements + Expo)
- **Express.js Backend API** (Session-based authentication)

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v24.5.0 or later)
- npm (comes with Node.js)
- iOS Simulator (for mobile testing on Mac)
- Modern web browser

### 1. Start the Backend Server
```bash
cd server
node simple-auth.js
```
**Expected Output:** `Gyst API server running on port 3001`

### 2. Start the React Web App
```bash
cd gyst-web
npm start
```
**Access:** http://localhost:3000

### 3. Start the React Native Mobile App
```bash
cd gyst-mobile
npx expo start --ios
```
**Access:** iOS Simulator will launch automatically

## 🔐 Demo Credentials

**Email:** `demo@gyst.com`  
**Password:** `password123`

*Or create a new account on either platform*

## 🏗️ Project Structure

```
gyst/
├── server/                    # Express.js backend API
│   ├── simple-auth.js        # Main server file with authentication
│   └── package.json          # Server dependencies
├── gyst-web/                 # React web application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── context/         # React context providers
│   │   └── services/        # API service functions
│   └── package.json         # Web app dependencies
├── gyst-mobile/             # React Native mobile app
│   ├── src/
│   │   ├── components/      # Mobile UI components
│   │   ├── screens/         # Screen components
│   │   ├── context/         # Shared context
│   │   └── services/        # API integration
│   └── package.json         # Mobile app dependencies
└── PROJECT_GUIDE.md         # Comprehensive project documentation
```

## ✨ Key Features

### Authentication System
- **Session-based Authentication:** Secure login/logout with server sessions
- **Cross-platform Compatibility:** Shared auth state between web and mobile
- **Demo Account:** Quick access with pre-configured credentials

### Professional Networking
- **Profile Management:** Create and customize professional profiles
- **Skill Tracking:** Add and manage professional skills
- **Network Building:** Connect with other professionals

### Technology Stack
- **Frontend:** React 18+ with Material-UI (web) and React Native Elements (mobile)
- **Backend:** Express.js with session-based authentication
- **Mobile:** React Native with Expo for cross-platform development
- **State Management:** React Context API for global state

## 🛠️ Development Commands

### Backend Server
```bash
cd server
npm install                   # Install dependencies
node simple-auth.js          # Start server on port 3001
```

### Web Application
```bash
cd gyst-web
npm install                   # Install dependencies
npm start                     # Start development server
npm run build                 # Build for production
npm test                      # Run tests
```

### Mobile Application
```bash
cd gyst-mobile
npm install                   # Install dependencies
npx expo start               # Start Expo development server
npx expo start --ios         # Start with iOS simulator
npx expo start --android     # Start with Android emulator
```

## 🔧 Troubleshooting

### Common Issues
- **Port conflicts:** Ensure ports 3000 and 3001 are available
- **iOS Simulator:** Make sure Xcode and iOS Simulator are installed
- **Dependencies:** Run `npm install` in each directory if packages are missing

### Maintenance Commands
```bash
npm audit fix                 # Fix security vulnerabilities
npm update                    # Update packages to latest versions
```

## 📱 Platform Support

- **Web:** Modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile:** iOS 11+ and Android 6.0+ (via Expo)
- **Development:** macOS, Windows, Linux

## 🤝 Contributing

This project demonstrates modern cross-platform development practices. Feel free to explore the codebase to understand the implementation of shared authentication, API integration, and responsive design patterns.
