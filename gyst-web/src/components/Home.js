import React, { useState } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Button,
  Container
} from '@mui/material';
import {
  Person as PersonIcon,
  People as PeopleIcon,
  ExitToApp as LogoutIcon
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import Profile from './Profile';
import Network from './Network';
import ThemeSelector from './ThemeSelector';

const drawerWidth = 240;

const Home = () => {
  const [activeView, setActiveView] = useState('profile');
  const { user, logout } = useAuth();
  const { getOrganizationInfo } = useTheme();
  const orgInfo = getOrganizationInfo();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const menuItems = [
    {
      text: 'Profile',
      icon: <PersonIcon />,
      value: 'profile'
    },
    {
      text: 'Network',
      icon: <PeopleIcon />,
      value: 'network'
    }
  ];

  const renderContent = () => {
    switch (activeView) {
      case 'profile':
        return <Profile />;
      case 'network':
        return <Network />;
      default:
        return <Profile />;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: 'primary.main'
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {orgInfo.organization} - Professional Network
          </Typography>
          <Box sx={{ mr: 2 }}>
            <ThemeSelector variant="dialog" />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: 'primary.main',
            color: 'white'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
            Gyst
          </Typography>
        </Toolbar>
        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)' }} />
        
        {/* User Info Section */}
        <Box sx={{ p: 2, textAlign: 'center' }}>
          <Avatar
            sx={{
              width: 60,
              height: 60,
              mx: 'auto',
              mb: 1,
              bgcolor: 'secondary.main'
            }}
          >
            {user?.firstName?.charAt(0) || 'U'}
          </Avatar>
          <Typography variant="body2" sx={{ color: 'white', mb: 0.5 }}>
            Welcome {user?.firstName || 'User'}
          </Typography>
          <Button
            size="small"
            onClick={handleLogout}
            sx={{
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'underline',
              fontSize: '0.75rem',
              '&:hover': {
                color: 'white',
                backgroundColor: 'transparent'
              }
            }}
          >
            Sign Out
          </Button>
        </Box>
        
        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)' }} />
        
        {/* Navigation Menu */}
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.value} disablePadding>
              <ListItemButton
                selected={activeView === item.value}
                onClick={() => setActiveView(item.value)}
                sx={{
                  '&.Mui-selected': {
                    bgcolor: 'rgba(255,255,255,0.1)',
                  },
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.05)',
                  }
                }}
              >
                <ListItemIcon sx={{ color: 'white' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  sx={{ color: 'white' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          minHeight: '100vh'
        }}
      >
        <Toolbar />
        <Container maxWidth="lg">
          {renderContent()}
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
