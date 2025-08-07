import React, { useState, useEffect } from 'react';
import {
  Paper,
  Typography,
  Box,
  Grid,
  Avatar,
  Chip,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  Divider,
  Card,
  CardContent
} from '@mui/material';
import {
  Edit as EditIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  Star as StarIcon
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/authService';

const Profile = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Mock data for now - we'll connect to real API later
  const mockProfileData = {
    firstName: user?.firstName || 'John',
    lastName: user?.lastName || 'Doe',
    position: 'Software Engineer',
    location: 'San Francisco, CA',
    startDate: '2023-01-15',
    skills: [
      { name: 'JavaScript', level: 'Expert' },
      { name: 'React', level: 'Advanced' },
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Python', level: 'Intermediate' }
    ],
    certifications: [
      { name: 'AWS Certified Developer', date: '2023-06-01' },
      { name: 'React Professional', date: '2023-03-15' }
    ],
    projects: [
      { name: 'E-commerce Platform', description: 'Built a full-stack e-commerce solution' },
      { name: 'Mobile App', description: 'React Native mobile application' }
    ]
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProfileData(mockProfileData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleEditProfile = () => {
    setEditDialogOpen(true);
  };

  const handleCloseEdit = () => {
    setEditDialogOpen(false);
  };

  if (loading || !profileData) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <Typography>Loading profile...</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        My Profile
      </Typography>

      {/* Profile Header */}
      <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar
              sx={{
                width: 100,
                height: 100,
                bgcolor: 'primary.main',
                fontSize: '2rem'
              }}
            >
              {profileData.firstName.charAt(0)}{profileData.lastName.charAt(0)}
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography variant="h5" gutterBottom>
              {profileData.firstName} {profileData.lastName}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              {profileData.position}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              📍 {profileData.location}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Started: {new Date(profileData.startDate).toLocaleDateString()}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={handleEditProfile}
            >
              Edit Profile
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={3}>
        {/* Skills Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <StarIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Skills
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {profileData.skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={`${skill.name} (${skill.level})`}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Certifications Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <SchoolIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Certifications
              </Typography>
              <List dense>
                {profileData.certifications.map((cert, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemText
                      primary={cert.name}
                      secondary={`Earned: ${new Date(cert.date).toLocaleDateString()}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Projects Section */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <WorkIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Projects
              </Typography>
              <Grid container spacing={2}>
                {profileData.projects.map((project, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                      <Typography variant="subtitle1" gutterBottom>
                        {project.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {project.description}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Edit Profile Dialog */}
      <Dialog open={editDialogOpen} onClose={handleCloseEdit} maxWidth="sm" fullWidth>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 1 }}>
            <TextField
              fullWidth
              label="First Name"
              defaultValue={profileData.firstName}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Last Name"
              defaultValue={profileData.lastName}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Position"
              defaultValue={profileData.position}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Location"
              defaultValue={profileData.location}
              margin="normal"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancel</Button>
          <Button onClick={handleCloseEdit} variant="contained">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Profile;
