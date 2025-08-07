import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
} from '@mui/material';
import { Palette as PaletteIcon } from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSelector = ({ variant = 'select' }) => {
  const { currentOrgId, switchOrganization, availableThemes, getOrganizationInfo } = useTheme();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleThemeChange = (event) => {
    const newOrgId = event.target.value;
    switchOrganization(newOrgId);
  };

  const handleThemeSelect = (orgId) => {
    switchOrganization(orgId);
    setDialogOpen(false);
  };

  const currentOrg = getOrganizationInfo();

  if (variant === 'dialog') {
    return (
      <>
        <Button
          startIcon={<PaletteIcon />}
          onClick={() => setDialogOpen(true)}
          variant="outlined"
          size="small"
        >
          {currentOrg.organization}
        </Button>

        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="md" fullWidth>
          <DialogTitle>
            <Box display="flex" alignItems="center">
              <PaletteIcon sx={{ mr: 1 }} />
              Select Organization Theme
            </Box>
          </DialogTitle>
          <DialogContent>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
              Choose your organization's theme to customize the application appearance.
            </Typography>
            
            <Grid container spacing={2}>
              {availableThemes.map((theme) => (
                <Grid item xs={12} sm={6} md={4} key={theme.id}>
                  <Card
                    sx={{
                      cursor: 'pointer',
                      border: currentOrgId === theme.id ? '2px solid' : '1px solid',
                      borderColor: currentOrgId === theme.id ? 'primary.main' : 'divider',
                      transition: 'all 0.2s',
                      '&:hover': {
                        boxShadow: 4,
                        transform: 'translateY(-2px)',
                      },
                    }}
                    onClick={() => handleThemeSelect(theme.id)}
                  >
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {theme.organization}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        {theme.name}
                      </Typography>
                      
                      {/* Color Preview */}
                      <Box sx={{ mt: 2, mb: 1 }}>
                        <Typography variant="caption" display="block" gutterBottom>
                          Color Scheme:
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          <Box
                            sx={{
                              width: 24,
                              height: 24,
                              borderRadius: '50%',
                              backgroundColor: theme.colors.primary,
                              border: '1px solid #ddd',
                            }}
                            title="Primary Color"
                          />
                          <Box
                            sx={{
                              width: 24,
                              height: 24,
                              borderRadius: '50%',
                              backgroundColor: theme.colors.secondary,
                              border: '1px solid #ddd',
                            }}
                            title="Secondary Color"
                          />
                          <Box
                            sx={{
                              width: 24,
                              height: 24,
                              borderRadius: '50%',
                              backgroundColor: theme.colors.accent,
                              border: '1px solid #ddd',
                            }}
                            title="Accent Color"
                          />
                        </Box>
                      </Box>

                      {currentOrgId === theme.id && (
                        <Chip
                          label="Current"
                          color="primary"
                          size="small"
                          sx={{ mt: 1 }}
                        />
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }

  // Default select variant
  return (
    <FormControl size="small" sx={{ minWidth: 200 }}>
      <InputLabel>Organization</InputLabel>
      <Select
        value={currentOrgId}
        label="Organization"
        onChange={handleThemeChange}
      >
        {availableThemes.map((theme) => (
          <MenuItem key={theme.id} value={theme.id}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  backgroundColor: theme.colors.primary,
                  border: '1px solid #ddd',
                }}
              />
              {theme.organization}
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ThemeSelector;
