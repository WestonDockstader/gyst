import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { organizationThemes, getThemeByOrganization, getAllThemes } from '../themes';

// Create the Theme Context
const ThemeContext = createContext();

// Theme Context Provider Component
export const ThemeProvider = ({ children }) => {
  const [currentOrgId, setCurrentOrgId] = useState('default');
  const [orgTheme, setOrgTheme] = useState(organizationThemes.default);

  // Load organization theme from localStorage on mount
  useEffect(() => {
    const savedOrgId = localStorage.getItem('gyst_organization_id');
    if (savedOrgId && organizationThemes[savedOrgId]) {
      setCurrentOrgId(savedOrgId);
      setOrgTheme(organizationThemes[savedOrgId]);
    }
  }, []);

  // Create Material-UI theme from organization theme
  const muiTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: orgTheme.colors.primary,
        contrastText: orgTheme.colors.text.inverse,
      },
      secondary: {
        main: orgTheme.colors.secondary,
        contrastText: orgTheme.colors.text.inverse,
      },
      background: {
        default: orgTheme.colors.background,
        paper: orgTheme.colors.surface,
      },
      text: {
        primary: orgTheme.colors.text.primary,
        secondary: orgTheme.colors.text.secondary,
        disabled: orgTheme.colors.text.disabled,
      },
      success: {
        main: orgTheme.colors.status.success,
      },
      warning: {
        main: orgTheme.colors.status.warning,
      },
      error: {
        main: orgTheme.colors.status.error,
      },
      info: {
        main: orgTheme.colors.status.info,
      },
    },
    typography: {
      fontFamily: 'Avenir, Helvetica, Arial, sans-serif',
      h1: {
        color: orgTheme.colors.text.primary,
      },
      h2: {
        color: orgTheme.colors.text.primary,
      },
      h3: {
        color: orgTheme.colors.text.primary,
      },
      h4: {
        color: orgTheme.colors.text.primary,
      },
      h5: {
        color: orgTheme.colors.text.primary,
      },
      h6: {
        color: orgTheme.colors.text.primary,
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: `linear-gradient(45deg, ${orgTheme.colors.gradients.primary[0]}, ${orgTheme.colors.gradients.primary[1]})`,
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            background: `linear-gradient(180deg, ${orgTheme.colors.gradients.primary[0]}, ${orgTheme.colors.gradients.primary[1]})`,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          contained: {
            background: `linear-gradient(45deg, ${orgTheme.colors.gradients.secondary[0]}, ${orgTheme.colors.gradients.secondary[1]})`,
            '&:hover': {
              background: `linear-gradient(45deg, ${orgTheme.colors.gradients.secondary[1]}, ${orgTheme.colors.gradients.secondary[0]})`,
            },
          },
        },
      },
    },
  });

  // Function to switch organization theme
  const switchOrganization = (orgId) => {
    const newTheme = getThemeByOrganization(orgId);
    setCurrentOrgId(orgId);
    setOrgTheme(newTheme);
    localStorage.setItem('gyst_organization_id', orgId);
  };

  // Function to get current theme colors for custom styling
  const getThemeColors = () => orgTheme.colors;

  // Function to get organization info
  const getOrganizationInfo = () => ({
    id: orgTheme.id,
    name: orgTheme.name,
    organization: orgTheme.organization,
    logo: orgTheme.logo,
  });

  const value = {
    currentOrgId,
    orgTheme,
    muiTheme,
    switchOrganization,
    getThemeColors,
    getOrganizationInfo,
    availableThemes: getAllThemes(),
  };

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={muiTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to use the Theme Context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
