import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { organizationThemes, getThemeByOrganization } from '../../../shared/themes.js';

// Create the Theme Context
const ThemeContext = createContext();

// Theme Context Provider Component
export const ThemeProvider = ({ children }) => {
  const [currentOrgId, setCurrentOrgId] = useState('default');
  const [orgTheme, setOrgTheme] = useState(organizationThemes.default);
  const [loading, setLoading] = useState(true);

  // Load organization theme from AsyncStorage on mount
  useEffect(() => {
    const loadSavedTheme = async () => {
      try {
        const savedOrgId = await AsyncStorage.getItem('gyst_organization_id');
        if (savedOrgId && organizationThemes[savedOrgId]) {
          setCurrentOrgId(savedOrgId);
          setOrgTheme(organizationThemes[savedOrgId]);
        }
      } catch (error) {
        console.log('Error loading saved theme:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadSavedTheme();
  }, []);

  // Function to switch organization theme
  const switchOrganization = async (orgId) => {
    try {
      const newTheme = getThemeByOrganization(orgId);
      setCurrentOrgId(orgId);
      setOrgTheme(newTheme);
      await AsyncStorage.setItem('gyst_organization_id', orgId);
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  };

  // Function to get current theme colors for styling
  const getThemeColors = () => orgTheme.colors;

  // Function to get organization info
  const getOrganizationInfo = () => ({
    id: orgTheme.id,
    name: orgTheme.name,
    organization: orgTheme.organization,
    logo: orgTheme.logo,
  });

  // Create React Native Elements theme configuration
  const rnElementsTheme = {
    colors: {
      primary: orgTheme.colors.primary,
      secondary: orgTheme.colors.secondary,
      success: orgTheme.colors.status.success,
      warning: orgTheme.colors.status.warning,
      error: orgTheme.colors.status.error,
      text: orgTheme.colors.text.primary,
      grey0: orgTheme.colors.surface,
      grey1: orgTheme.colors.background,
      grey2: '#f5f5f5',
      grey3: '#e0e0e0',
      grey4: '#bdbdbd',
      grey5: '#9e9e9e',
      searchBg: orgTheme.colors.background,
      platform: {
        ios: {
          primary: orgTheme.colors.primary,
          secondary: orgTheme.colors.secondary,
        },
        android: {
          primary: orgTheme.colors.primary,
          secondary: orgTheme.colors.secondary,
        },
      },
    },
    Button: {
      buttonStyle: {
        backgroundColor: orgTheme.colors.primary,
        borderRadius: 25,
      },
      titleStyle: {
        color: orgTheme.colors.text.inverse,
        fontWeight: 'bold',
      },
    },
    Header: {
      backgroundColor: orgTheme.colors.primary,
      centerComponentStyle: {
        color: orgTheme.colors.text.inverse,
      },
      leftComponentStyle: {
        color: orgTheme.colors.text.inverse,
      },
      rightComponentStyle: {
        color: orgTheme.colors.text.inverse,
      },
    },
    Card: {
      containerStyle: {
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
    },
    Input: {
      inputContainerStyle: {
        borderBottomColor: orgTheme.colors.primary,
      },
      labelStyle: {
        color: orgTheme.colors.text.secondary,
      },
    },
  };

  // Create style objects for common components
  const styles = {
    container: {
      backgroundColor: orgTheme.colors.background,
    },
    surface: {
      backgroundColor: orgTheme.colors.surface,
    },
    primaryGradient: {
      colors: orgTheme.colors.gradients.primary,
    },
    secondaryGradient: {
      colors: orgTheme.colors.gradients.secondary,
    },
    text: {
      primary: {
        color: orgTheme.colors.text.primary,
      },
      secondary: {
        color: orgTheme.colors.text.secondary,
      },
      inverse: {
        color: orgTheme.colors.text.inverse,
      },
    },
    status: {
      success: {
        color: orgTheme.colors.status.success,
      },
      warning: {
        color: orgTheme.colors.status.warning,
      },
      error: {
        color: orgTheme.colors.status.error,
      },
      info: {
        color: orgTheme.colors.status.info,
      },
    },
  };

  const value = {
    currentOrgId,
    orgTheme,
    rnElementsTheme,
    styles,
    loading,
    switchOrganization,
    getThemeColors,
    getOrganizationInfo,
    availableThemes: Object.values(organizationThemes),
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
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
