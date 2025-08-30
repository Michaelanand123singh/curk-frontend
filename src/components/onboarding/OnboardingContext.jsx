import React, { createContext, useContext, useState, useEffect } from 'react';

const OnboardingContext = createContext();

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};

export const OnboardingProvider = ({ children }) => {
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);
  const [isTourActive, setIsTourActive] = useState(false);
  const [hasCompletedTour, setHasCompletedTour] = useState(false);

  // Check if user is first time on component mount
  useEffect(() => {
    const checkFirstTimeUser = () => {
      try {
        const auth = localStorage.getItem('auth');
        if (auth) {
          const { user } = JSON.parse(auth);
          const tourCompleted = localStorage.getItem(`tour_completed_${user?.id || 'anonymous'}`);
          
          if (!tourCompleted) {
            setIsFirstTimeUser(true);
            // Don't auto-start tour, let user choose from welcome modal
          } else {
            setHasCompletedTour(true);
          }
        }
      } catch (error) {
        console.error('Error checking first time user status:', error);
      }
    };

    checkFirstTimeUser();
  }, []);

  // Mark tour as completed
  const completeTour = () => {
    try {
      const auth = localStorage.getItem('auth');
      if (auth) {
        const { user } = JSON.parse(auth);
        const userId = user?.id || 'anonymous';
        localStorage.setItem(`tour_completed_${userId}`, 'true');
        setHasCompletedTour(true);
        setIsFirstTimeUser(false);
        setIsTourActive(false);
      }
    } catch (error) {
      console.error('Error completing tour:', error);
    }
  };

  // Start the tour manually
  const startTour = () => {
    setIsTourActive(true);
  };

  // Stop the tour
  const stopTour = () => {
    setIsTourActive(false);
  };

  // Reset tour completion (for testing or admin purposes)
  const resetTour = () => {
    try {
      const auth = localStorage.getItem('auth');
      if (auth) {
        const { user } = JSON.parse(auth);
        const userId = user?.id || 'anonymous';
        localStorage.removeItem(`tour_completed_${userId}`);
        setHasCompletedTour(false);
        setIsFirstTimeUser(true);
      }
    } catch (error) {
      console.error('Error resetting tour:', error);
    }
  };

  const value = {
    isFirstTimeUser,
    isTourActive,
    hasCompletedTour,
    startTour,
    stopTour,
    completeTour,
    resetTour,
  };

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
};
