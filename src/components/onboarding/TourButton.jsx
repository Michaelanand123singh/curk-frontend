import React from 'react';
import { useOnboarding } from './OnboardingContext';

const TourButton = ({ className = '', variant = 'default' }) => {
  const { startTour, isTourActive } = useOnboarding();

  if (isTourActive) {
    return null; // Don't show button when tour is active
  }

  const baseClasses = "inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    ghost: "text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    icon: "p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full",
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (variant === 'icon') {
    return (
      <button
        onClick={startTour}
        className={buttonClasses}
        title="Start Platform Tour"
        aria-label="Start Platform Tour"
      >
        <svg
          className="w-5 h-5"
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
    );
  }

  return (
    <button onClick={startTour} className={buttonClasses}>
      <svg
        className="w-4 h-4 mr-2"
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
      Tour Guide
    </button>
  );
};

export default TourButton;
