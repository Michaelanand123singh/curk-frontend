import React, { useState, useEffect } from 'react';
import Joyride, { STATUS } from 'react-joyride';
import { useOnboarding } from './OnboardingContext';
import { tourSteps, tourStyles } from './TourSteps.jsx';
import WelcomeModal from './WelcomeModal';

const OnboardingGuide = () => {
  const { isTourActive, startTour, stopTour, completeTour } = useOnboarding();
  const [run, setRun] = useState(false);

  useEffect(() => {
    if (isTourActive) {
      setRun(true);
    } else {
      setRun(false);
    }
  }, [isTourActive]);

  const handleJoyrideCallback = (data) => {
    const { status, type } = data;

    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRun(false);
      stopTour();
      
      if (status === STATUS.FINISHED) {
        completeTour();
      }
    }
  };

  const handleStartTour = () => {
    startTour();
  };

  return (
    <>
      <WelcomeModal />
      <Joyride
        steps={tourSteps}
        run={run}
        continuous={true}
        showProgress={true}
        showSkipButton={true}
        callback={handleJoyrideCallback}
        styles={tourStyles}
        locale={{
          back: 'Previous',
          close: 'Close',
          last: 'Finish',
          next: 'Next',
          skip: 'Skip Tour',
        }}
        floaterProps={{
          disableAnimation: true,
        }}
      />
      
      {/* Tour Start Button - Only show if tour is not active */}
      {!isTourActive && (
        <button
          onClick={handleStartTour}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 transform hover:scale-105"
          title="Start Platform Tour"
          aria-label="Start Platform Tour"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default OnboardingGuide;
