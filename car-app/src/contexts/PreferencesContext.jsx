import React, { createContext, useState, useCallback } from 'react';

// Create the context
export const PreferencesContext = createContext({
  preferences: { price: 30000, seats: 5, mpg: 30 },
  setPreferences: () => {},
  updatePreferences: () => {},
  defaultPreferences: { price: 30000, seats: 5, mpg: 30 }
});

// Default preferences
const defaultPreferences = {
  price: 30000,
  seats: 5,
  mpg: 30
};

// Provider component
export function PreferencesProvider({ children }) {
  const [preferences, setPreferences] = useState(() => {
    // Load from localStorage on initialization with error handling
    try {
      const saved = localStorage.getItem('userPreferences');
      return saved ? JSON.parse(saved) : defaultPreferences;
    } catch (error) {
      console.warn('Failed to load preferences from localStorage:', error);
      return defaultPreferences;
    }
  });

  const updatePreferences = useCallback((newPreferences) => {
    setPreferences(newPreferences);
    // Save to localStorage for persistence with error handling
    try {
      localStorage.setItem('userPreferences', JSON.stringify(newPreferences));
    } catch (error) {
      console.warn('Failed to save preferences to localStorage:', error);
    }
  }, []);

  return (
    <PreferencesContext.Provider value={{
      preferences,
      setPreferences,
      updatePreferences,
      defaultPreferences
    }}>
      {children}
    </PreferencesContext.Provider>
  );
}
