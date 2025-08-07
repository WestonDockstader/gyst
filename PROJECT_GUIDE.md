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
cd /Users/weston.dockstader/Repos/gyst/server
node simple-auth.js
```
**Expected Output:** `Gyst API server running on port 3001`

### 2. Start the React Web App
```bash
cd /Users/weston.dockstader/Repos/gyst/gyst-web
npm start
```
**Access:** http://localhost:3000

### 3. Start the React Native Mobile App
```bash
cd /Users/weston.dockstader/Repos/gyst/gyst-mobile
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
├── server/
│   ├── simple-auth.js          # Simplified backend API server
│   ├── index.js               # Original backend (requires MongoDB)
│   ├── models/                # Database models
│   └── routes/                # API routes
├── gyst-web/                  # React Web Application
│   ├── public/
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── Home.js        # Main dashboard
│   │   │   ├── Login.js       # Login form
│   │   │   ├── Register.js    # Registration form
│   │   │   ├── Profile.js     # Profile management
│   │   │   ├── Network.js     # Network browser
│   │   │   └── ProtectedRoute.js # Route protection
│   │   ├── contexts/
│   │   │   └── AuthContext.js # Authentication state management
│   │   ├── services/
│   │   │   ├── authService.js # API authentication calls
│   │   │   └── peopleService.js # People/network API calls
│   │   ├── App.js             # Main app component
│   │   └── App.css            # Custom styling
│   └── package.json
└── gyst-mobile/               # React Native Mobile Application
    ├── src/
    │   ├── screens/           # Mobile screens
    │   │   ├── LoginScreen.js # Mobile login
    │   │   ├── RegisterScreen.js # Mobile registration
    │   │   └── HomeScreen.js  # Mobile dashboard
    │   ├── components/        # Mobile components
    │   │   ├── ProfileTab.js  # Profile tab content
    │   │   └── NetworkTab.js  # Network tab content
    │   ├── contexts/
    │   │   └── AuthContext.js # Mobile auth context
    │   ├── services/
    │   │   └── authService.js # Mobile API services
    │   └── navigation/
    │       └── AuthNavigator.js # Navigation logic
    ├── App.js                 # Mobile app entry point
    └── package.json
```

## 🎯 Key Features to Explore

### Web Application Features
- **Material-UI Design System**
  - Responsive sidebar navigation
  - Professional card layouts
  - Modal dialogs for detailed views
  - Search functionality with real-time filtering

- **Authentication Flow**
  - Session-based authentication
  - Protected routes
  - Automatic redirect handling
  - Error handling and validation

- **Profile Management**
  - Skills tracking with proficiency levels
  - Certifications with dates
  - Project assignments
  - Editable profile information

- **Network Browser**
  - Search by name, position, or skills
  - Detailed person profiles
  - Organizational hierarchy display
  - Responsive grid layout

### Mobile Application Features
- **React Native Elements UI**
  - Touch-optimized interface
  - Native iOS/Android styling
  - Tab-based navigation
  - Modal detail views

- **Mobile-Specific Features**
  - AsyncStorage for offline persistence
  - Touch gestures and interactions
  - Mobile-optimized forms
  - Native alert dialogs

- **Cross-Platform Consistency**
  - Same authentication system
  - Shared backend API
  - Consistent data models
  - Similar user workflows

## 🔧 Technical Implementation Details

### Authentication Architecture
- **Web:** Session cookies with axios credentials
- **Mobile:** AsyncStorage for user persistence
- **Backend:** Express sessions with in-memory storage
- **Shared:** Same API endpoints for both platforms

### State Management
- **Pattern:** React Context + useReducer
- **Benefits:** No external dependencies, easy to understand
- **Implementation:** AuthContext provides global auth state

### API Integration
- **HTTP Client:** Axios with configured base URLs
- **Error Handling:** Consistent error messages across platforms
- **CORS:** Properly configured for cross-origin requests

### UI Libraries
- **Web:** Material-UI (MUI) for professional desktop experience
- **Mobile:** React Native Elements for native mobile feel
- **Icons:** Material Icons for consistency

## 🧪 Testing Scenarios

### 1. Authentication Flow Testing
- [ ] Register new account on web
- [ ] Login with same credentials on mobile
- [ ] Test logout on both platforms
- [ ] Verify session persistence

### 2. Cross-Platform Data Consistency
- [ ] View profile on web
- [ ] Check same profile data on mobile
- [ ] Browse network on both platforms
- [ ] Verify search functionality

### 3. Mobile-Specific Features
- [ ] Test touch interactions
- [ ] Verify modal navigation
- [ ] Test offline persistence (close/reopen app)
- [ ] Check responsive layouts

### 4. Error Handling
- [ ] Test invalid login credentials
- [ ] Test network connectivity issues
- [ ] Verify form validation
- [ ] Check error message display

## 🎓 Learning Opportunities

### React Concepts Demonstrated
- **Hooks:** useState, useEffect, useContext, useReducer
- **Context API:** Global state management
- **Component Composition:** Reusable component patterns
- **Form Handling:** Controlled components and validation
- **Routing:** React Router with protected routes

### React Native Concepts
- **Navigation:** Stack and tab navigation patterns
- **Platform APIs:** AsyncStorage for persistence
- **UI Components:** Native mobile interface elements
- **Cross-Platform Development:** Shared logic, platform-specific UI

### Backend Integration
- **RESTful APIs:** Standard HTTP methods and status codes
- **Authentication:** Session-based auth patterns
- **CORS:** Cross-origin resource sharing
- **Error Handling:** Consistent API error responses

## 🔍 Code Exploration Guide

### Start Here (Recommended Order)
1. **Backend API** (`server/simple-auth.js`)
   - Understand the API endpoints
   - See mock data structure
   - Review authentication logic

2. **Web AuthContext** (`gyst-web/src/contexts/AuthContext.js`)
   - Learn React Context patterns
   - Understand state management with useReducer
   - See how authentication state is managed

3. **Web Login Component** (`gyst-web/src/components/Login.js`)
   - Material-UI form implementation
   - Form validation patterns
   - API integration with error handling

4. **Mobile AuthContext** (`gyst-mobile/src/contexts/AuthContext.js`)
   - Compare with web version
   - See AsyncStorage integration
   - Understand mobile persistence patterns

5. **Mobile Navigation** (`gyst-mobile/src/navigation/AuthNavigator.js`)
   - React Navigation patterns
   - Conditional navigation based on auth state
   - Loading state handling

### Advanced Exploration
- **API Services:** Compare web vs mobile API integration
- **Component Patterns:** Reusable component design
- **State Management:** Context vs props drilling
- **Error Boundaries:** Error handling strategies
- **Performance:** Bundle size and optimization techniques

## 🚧 Current Limitations & Future Enhancements

### Current Limitations
- Mock data (no persistent database)
- Simple session storage (memory-based)
- Limited user profile fields
- No real-time features
- No file upload capabilities

### Potential Enhancements
- **Database Integration:** Connect to MongoDB/PostgreSQL
- **Real-time Features:** WebSocket integration for live updates
- **File Uploads:** Profile pictures and document attachments
- **Advanced Search:** Elasticsearch integration
- **Push Notifications:** Mobile notification system
- **Offline Support:** Enhanced offline capabilities
- **Admin Dashboard:** User management interface
- **Analytics:** Usage tracking and reporting

## 🐛 Troubleshooting

### Common Issues

**Backend not starting:**
```bash
# Check if port 3001 is in use
lsof -i :3001
# Kill process if needed
kill -9 <PID>
```

**React web app not connecting to backend:**
- Verify backend is running on port 3001
- Check browser console for CORS errors
- Ensure axios baseURL is correct

**Mobile app not loading:**
- Restart Metro bundler: `npx expo start --clear`
- Check iOS Simulator is running
- Verify Expo CLI is installed globally

**Authentication issues:**
- Clear browser cookies/localStorage
- Clear AsyncStorage on mobile (reinstall app)
- Check network connectivity

### Development Commands

```bash
# Backend
cd server && node simple-auth.js

# Web Development
cd gyst-web && npm start

# Mobile Development
cd gyst-mobile && npx expo start
cd gyst-mobile && npx expo start --ios
cd gyst-mobile && npx expo start --android
cd gyst-mobile && npx expo start --web

# Package Management
npm install                    # Install dependencies
npm audit fix                  # Fix security vulnerabilities
npm update                     # Update packages

# Stopping Applications
# Stop React web app (port 3000)
Ctrl + C                       # In terminal where app is running
lsof -ti:3000 | xargs kill -9  # Force kill processes on port 3000

# Stop backend server (port 3001)
Ctrl + C                       # In terminal where server is running
lsof -ti:3001 | xargs kill -9  # Force kill processes on port 3001

# Stop Expo mobile app
Ctrl + C                       # In terminal where expo is running
# Or close Expo Dev Tools in browser

# Find what's running on a specific port
lsof -ti:PORT_NUMBER           # Replace PORT_NUMBER with actual port

# Kill specific process by ID
kill -9 PROCESS_ID             # Replace PROCESS_ID with actual ID
```

## 📚 Additional Resources

### Documentation Links
- [React Documentation](https://react.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [Material-UI Documentation](https://mui.com/)
- [React Native Elements](https://react-native-elements.github.io/react-native-elements/)
- [React Navigation](https://reactnavigation.org/)

### Learning Path Recommendations
1. **React Fundamentals:** Components, Props, State, Hooks
2. **React Context:** Global state management patterns
3. **React Router:** Client-side routing and navigation
4. **Material-UI:** Component library and theming
5. **React Native Basics:** Mobile development concepts
6. **Expo Platform:** Rapid mobile development tools
7. **API Integration:** HTTP clients and error handling
8. **Authentication Patterns:** Session vs token-based auth

---

## 🎉 Congratulations!

You've successfully built a complete cross-platform professional networking application! This project demonstrates modern React development patterns and provides a solid foundation for further learning and enhancement.

**Happy coding!** 🚀
