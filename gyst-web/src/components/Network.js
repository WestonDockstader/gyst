import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  TextField,
  InputAdornment,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Search as SearchIcon,
  Person as PersonIcon,
  Work as WorkIcon,
  Star as StarIcon,
  School as SchoolIcon
} from '@mui/icons-material';
import { peopleService } from '../services/peopleService';

const Network = () => {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load people data from API

  useEffect(() => {
    // Load people from API
    const loadPeople = async () => {
      try {
        const peopleData = await peopleService.getAllPeople();
        setPeople(peopleData);
        setFilteredPeople(peopleData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load people:', error);
        setLoading(false);
      }
    };
    
    loadPeople();
  }, []);

  useEffect(() => {
    // Filter people based on search term
    const filtered = people.filter(person =>
      `${person.firstName} ${person.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredPeople(filtered);
  }, [searchTerm, people]);

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedPerson(null);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <Typography>Loading network...</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Professional Network
      </Typography>

      {/* Search Bar */}
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search by name, position, or skills..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />

      {/* People Grid */}
      <Grid container spacing={3}>
        {filteredPeople.map((person) => (
          <Grid item xs={12} sm={6} md={4} key={person.id}>
            <Card 
              sx={{ 
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}
              onClick={() => handlePersonClick(person)}
            >
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar
                    sx={{
                      bgcolor: 'primary.main',
                      mr: 2,
                      width: 56,
                      height: 56
                    }}
                  >
                    {person.firstName.charAt(0)}{person.lastName.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="h6">
                      {person.firstName} {person.lastName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {person.position}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      📍 {person.location}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body2" gutterBottom>
                  <strong>Skills:</strong>
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
                  {person.skills.slice(0, 3).map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                  {person.skills.length > 3 && (
                    <Chip
                      label={`+${person.skills.length - 3} more`}
                      size="small"
                      variant="outlined"
                    />
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {filteredPeople.length === 0 && (
        <Box textAlign="center" py={4}>
          <Typography variant="h6" color="textSecondary">
            No people found matching your search.
          </Typography>
        </Box>
      )}

      {/* Person Detail Dialog */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        {selectedPerson && (
          <>
            <DialogTitle>
              <Box display="flex" alignItems="center">
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    mr: 2,
                    width: 64,
                    height: 64
                  }}
                >
                  {selectedPerson.firstName.charAt(0)}{selectedPerson.lastName.charAt(0)}
                </Avatar>
                <Box>
                  <Typography variant="h5">
                    {selectedPerson.firstName} {selectedPerson.lastName}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {selectedPerson.position}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    📍 {selectedPerson.location}
                  </Typography>
                </Box>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>
                    <StarIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Skills
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {selectedPerson.skills.map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill}
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>
                    <SchoolIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Certifications
                  </Typography>
                  <List dense>
                    {selectedPerson.certifications.map((cert, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemText primary={cert} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    <WorkIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Current Projects
                  </Typography>
                  <List dense>
                    {selectedPerson.projects.map((project, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemText primary={project} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>

                <Grid item xs={12}>
                  <Divider sx={{ my: 1 }} />
                  <Typography variant="body2" color="textSecondary">
                    <strong>Manager:</strong> {selectedPerson.manager}
                  </Typography>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Network;
