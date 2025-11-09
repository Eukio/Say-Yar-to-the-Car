import { useContext } from 'react';
import { PreferencesContext } from '../contexts/PreferencesContext.jsx';

export const usePreferences = () => {
  const context = useContext(PreferencesContext);
  if (!context) {
    console.error('usePreferences must be used within a PreferencesProvider');
    // Return default values to prevent crashes
    return {
      preferences: { price: 30000, seats: 5, mpg: 30 },
      setPreferences: () => {},
      updatePreferences: () => {},
      defaultPreferences: { price: 30000, seats: 5, mpg: 30 }
    };
  }
  return context;
};
