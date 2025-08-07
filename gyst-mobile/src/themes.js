/**
 * Multi-Tenant Organization Theme Configuration
 * 
 * This file defines color schemes for different organizations.
 * Each organization can have their own branded experience while
 * using the same core application.
 */

export const organizationThemes = {
  // Default Gyst Theme
  default: {
    id: 'default',
    name: 'Gyst Default',
    organization: 'Gyst',
    colors: {
      primary: '#2c3e50',
      secondary: '#42b983',
      accent: '#3498db',
      background: '#f5f5f5',
      surface: '#ffffff',
      text: {
        primary: '#2c3e50',
        secondary: '#666666',
        disabled: '#999999',
        inverse: '#ffffff'
      },
      status: {
        success: '#27ae60',
        warning: '#f39c12',
        error: '#e74c3c',
        info: '#3498db'
      },
      gradients: {
        primary: ['#2c3e50', '#34495e'],
        secondary: ['#42b983', '#52c93f']
      }
    },
    logo: {
      url: '/assets/logos/gyst-logo.png',
      alt: 'Gyst Logo'
    }
  },

  // Tech Company Theme (Blue/Modern)
  techcorp: {
    id: 'techcorp',
    name: 'TechCorp Blue',
    organization: 'TechCorp Solutions',
    colors: {
      primary: '#1e3a8a',
      secondary: '#06b6d4',
      accent: '#8b5cf6',
      background: '#f8fafc',
      surface: '#ffffff',
      text: {
        primary: '#1e293b',
        secondary: '#64748b',
        disabled: '#94a3b8',
        inverse: '#ffffff'
      },
      status: {
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#06b6d4'
      },
      gradients: {
        primary: ['#1e3a8a', '#1e40af'],
        secondary: ['#06b6d4', '#0891b2']
      }
    },
    logo: {
      url: '/assets/logos/techcorp-logo.png',
      alt: 'TechCorp Solutions Logo'
    }
  },

  // Financial Services Theme (Green/Professional)
  finserv: {
    id: 'finserv',
    name: 'FinServ Professional',
    organization: 'Financial Services Inc',
    colors: {
      primary: '#065f46',
      secondary: '#059669',
      accent: '#d97706',
      background: '#f0fdf4',
      surface: '#ffffff',
      text: {
        primary: '#064e3b',
        secondary: '#6b7280',
        disabled: '#9ca3af',
        inverse: '#ffffff'
      },
      status: {
        success: '#059669',
        warning: '#d97706',
        error: '#dc2626',
        info: '#0369a1'
      },
      gradients: {
        primary: ['#065f46', '#047857'],
        secondary: ['#059669', '#10b981']
      }
    },
    logo: {
      url: '/assets/logos/finserv-logo.png',
      alt: 'Financial Services Inc Logo'
    }
  },

  // Healthcare Theme (Teal/Caring)
  healthcare: {
    id: 'healthcare',
    name: 'Healthcare Plus',
    organization: 'Healthcare Plus Network',
    colors: {
      primary: '#0f766e',
      secondary: '#06b6d4',
      accent: '#7c3aed',
      background: '#f0fdfa',
      surface: '#ffffff',
      text: {
        primary: '#134e4a',
        secondary: '#6b7280',
        disabled: '#9ca3af',
        inverse: '#ffffff'
      },
      status: {
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#06b6d4'
      },
      gradients: {
        primary: ['#0f766e', '#0d9488'],
        secondary: ['#06b6d4', '#0891b2']
      }
    },
    logo: {
      url: '/assets/logos/healthcare-logo.png',
      alt: 'Healthcare Plus Network Logo'
    }
  },

  // Creative Agency Theme (Purple/Creative)
  creative: {
    id: 'creative',
    name: 'Creative Studio',
    organization: 'Creative Studio Agency',
    colors: {
      primary: '#7c2d12',
      secondary: '#c2410c',
      accent: '#7c3aed',
      background: '#fef7f0',
      surface: '#ffffff',
      text: {
        primary: '#7c2d12',
        secondary: '#6b7280',
        disabled: '#9ca3af',
        inverse: '#ffffff'
      },
      status: {
        success: '#16a34a',
        warning: '#ea580c',
        error: '#dc2626',
        info: '#2563eb'
      },
      gradients: {
        primary: ['#7c2d12', '#9a3412'],
        secondary: ['#c2410c', '#ea580c']
      }
    },
    logo: {
      url: '/assets/logos/creative-logo.png',
      alt: 'Creative Studio Agency Logo'
    }
  }
};

/**
 * Get theme by organization ID
 * @param {string} orgId - Organization identifier
 * @returns {object} Theme configuration
 */
export const getThemeByOrganization = (orgId) => {
  return organizationThemes[orgId] || organizationThemes.default;
};

/**
 * Get all available themes
 * @returns {array} Array of all theme configurations
 */
export const getAllThemes = () => {
  return Object.values(organizationThemes);
};

/**
 * Get theme options for selection
 * @returns {array} Array of theme options with id, name, and organization
 */
export const getThemeOptions = () => {
  return Object.values(organizationThemes).map(theme => ({
    id: theme.id,
    name: theme.name,
    organization: theme.organization
  }));
};

/**
 * Validate theme configuration
 * @param {object} theme - Theme configuration to validate
 * @returns {boolean} True if valid theme
 */
export const validateTheme = (theme) => {
  const requiredFields = ['id', 'name', 'organization', 'colors'];
  const requiredColors = ['primary', 'secondary', 'background', 'surface'];
  
  if (!theme || typeof theme !== 'object') return false;
  
  // Check required top-level fields
  for (const field of requiredFields) {
    if (!theme[field]) return false;
  }
  
  // Check required color fields
  for (const color of requiredColors) {
    if (!theme.colors[color]) return false;
  }
  
  return true;
};

export default organizationThemes;
