const express = require('express');
const cors = require('cors');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 3001;

// CORS configuration to allow React app
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Session configuration
app.use(session({
  secret: 'gyst-demo-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false, // set to true in production with HTTPS
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Mock user data (in a real app, this would be in the database)
const mockUsers = [
  {
    id: 1,
    email: 'demo@gyst.com',
    password: 'password123', // In real app, this would be hashed
    firstName: 'Demo',
    lastName: 'User'
  }
];

// Mock people data for the network
const mockPeople = [
  {
    id: 1,
    firstName: 'Alice',
    lastName: 'Johnson',
    position: 'Senior Developer',
    location: 'New York, NY',
    skills: ['React', 'TypeScript', 'GraphQL'],
    projects: ['E-commerce Platform', 'Analytics Dashboard'],
    certifications: ['AWS Solutions Architect'],
    manager: 'Sarah Wilson'
  },
  {
    id: 2,
    firstName: 'Bob',
    lastName: 'Smith',
    position: 'Product Manager',
    location: 'San Francisco, CA',
    skills: ['Product Strategy', 'Agile', 'Data Analysis'],
    projects: ['Mobile App Redesign', 'User Research Initiative'],
    certifications: ['Certified Scrum Master'],
    manager: 'Michael Brown'
  }
];

// Authentication Routes
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  const user = mockUsers.find(u => u.email === email && u.password === password);
  
  if (user) {
    req.session.userId = user.id;
    req.session.user = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    };
    
    res.json({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

app.post('/api/auth/register', (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  
  // Check if user already exists
  const existingUser = mockUsers.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  
  // Create new user
  const newUser = {
    id: mockUsers.length + 1,
    email,
    password, // In real app, hash this password
    firstName,
    lastName
  };
  
  mockUsers.push(newUser);
  
  req.session.userId = newUser.id;
  req.session.user = {
    id: newUser.id,
    email: newUser.email,
    firstName: newUser.firstName,
    lastName: newUser.lastName
  };
  
  res.json({
    id: newUser.id,
    email: newUser.email,
    firstName: newUser.firstName,
    lastName: newUser.lastName
  });
});

app.get('/api/auth/me', (req, res) => {
  if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
});

app.post('/api/auth/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({ message: 'Could not log out' });
    } else {
      res.json({ message: 'Logged out successfully' });
    }
  });
});

// People/Network Routes
app.get('/api/people', (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: 'Not authenticated' });
  }
  
  res.json(mockPeople);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Gyst API Server is running' });
});

app.listen(port, () => {
  console.log(`Gyst API server running on port ${port}`);
  console.log(`CORS enabled for: http://localhost:3000`);
  console.log(`Demo login: demo@gyst.com / password123`);
});
