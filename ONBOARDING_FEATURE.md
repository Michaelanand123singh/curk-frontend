# Onboarding Guide Feature Documentation

## Overview

The onboarding guide feature provides new users with an interactive tour of the Website Analyzer platform. It includes a welcome modal, step-by-step tour, and persistent state management to ensure users only see the tour once.

## Features

### 🎯 **Core Features**
- **Welcome Modal**: Introduces new users to the platform
- **Interactive Tour**: Step-by-step walkthrough of all major sections
- **Persistent State**: Remembers tour completion per user
- **Restart Capability**: Users can restart the tour anytime
- **Responsive Design**: Works on desktop and mobile devices

### 🎨 **User Experience**
- **Smooth Animations**: Professional transitions and hover effects
- **Clear Navigation**: Intuitive buttons and progress indicators
- **Skip Option**: Users can skip the tour if desired
- **Visual Feedback**: Highlighted elements and clear instructions

## Components Structure

```
src/components/onboarding/
├── index.js                 # Export all components
├── OnboardingContext.jsx    # Context provider for state management
├── OnboardingGuide.jsx      # Main tour component
├── TourButton.jsx          # Reusable tour button component
├── TourSteps.js            # Tour configuration and styling
└── WelcomeModal.jsx        # Welcome modal for first-time users
```

## Component Details

### 1. **OnboardingContext.jsx**
**Purpose**: Manages the global state for the onboarding feature.

**Key Features**:
- Tracks first-time user status
- Manages tour active state
- Handles tour completion persistence
- Provides methods to control tour flow

**State Variables**:
- `isFirstTimeUser`: Boolean indicating if user is new
- `isTourActive`: Boolean indicating if tour is running
- `hasCompletedTour`: Boolean indicating if tour was completed

**Methods**:
- `startTour()`: Starts the interactive tour
- `stopTour()`: Stops the current tour
- `completeTour()`: Marks tour as completed
- `resetTour()`: Resets tour completion (for testing)

### 2. **OnboardingGuide.jsx**
**Purpose**: Main component that renders the tour using react-joyride.

**Features**:
- Integrates with react-joyride library
- Handles tour callbacks and state changes
- Provides floating tour button
- Manages tour lifecycle

### 3. **TourButton.jsx**
**Purpose**: Reusable button component for starting the tour.

**Variants**:
- `default`: Full button with text and icon
- `outline`: Outlined button style
- `ghost`: Minimal button style
- `icon`: Icon-only button

### 4. **TourSteps.js**
**Purpose**: Configuration file containing all tour steps and styling.

**Tour Steps**:
1. **Welcome**: Introduction to the platform
2. **Dashboard**: Overview of the home page
3. **Website Analysis**: Core analysis feature
4. **Bulk Processing**: Batch processing capabilities
5. **Reports**: Analytics and reporting
6. **AI Discovery**: AI-powered features
7. **Proposal Generation**: Creating proposals
8. **Send Proposals**: Email functionality
9. **Lead Management**: Managing leads
10. **Lead Tracker**: Sales pipeline
11. **Settings**: Configuration options
12. **Completion**: Final summary and next steps

### 5. **WelcomeModal.jsx**
**Purpose**: Modal dialog that appears for first-time users.

**Features**:
- Welcoming introduction
- Feature highlights
- Option to start tour or skip
- Professional design with animations

## Implementation Details

### State Management
The onboarding state is managed using React Context API, providing:
- Global access to tour state
- Persistent storage using localStorage
- User-specific tour completion tracking

### Local Storage Keys
- `tour_completed_{userId}`: Tracks tour completion per user
- Uses user ID from authentication data
- Falls back to 'anonymous' if no user ID

### Tour Configuration
The tour uses react-joyride with custom styling:
- Custom color scheme matching the platform
- Responsive design for all screen sizes
- Smooth animations and transitions
- Professional tooltip styling

### Responsive Design
- Works on desktop, tablet, and mobile
- Adaptive positioning for different screen sizes
- Touch-friendly interactions
- Optimized for both portrait and landscape

## Usage Examples

### Basic Implementation
```jsx
import { OnboardingProvider, OnboardingGuide } from './components/onboarding';

function App() {
  return (
    <OnboardingProvider>
      <div className="App">
        {/* Your app content */}
        <OnboardingGuide />
      </div>
    </OnboardingProvider>
  );
}
```

### Adding Tour Button to Header
```jsx
import { TourButton } from './components/onboarding';

function Header() {
  return (
    <header>
      {/* Header content */}
      <TourButton variant="icon" />
    </header>
  );
}
```

### Custom Tour Steps
```jsx
import { tourSteps } from './components/onboarding';

// Modify tour steps for custom implementation
const customSteps = [
  ...tourSteps,
  {
    target: '.custom-element',
    content: 'This is a custom step',
    placement: 'bottom',
  },
];
```

## Customization

### Styling
The tour styling can be customized in `TourSteps.js`:
```javascript
export const tourStyles = {
  options: {
    primaryColor: '#3B82F6', // Change primary color
    backgroundColor: '#ffffff',
    textColor: '#374151',
    // ... other options
  },
};
```

### Tour Steps
Add or modify tour steps in `TourSteps.js`:
```javascript
export const tourSteps = [
  {
    target: '.your-element',
    content: (
      <div>
        <h3>Your Title</h3>
        <p>Your content</p>
      </div>
    ),
    placement: 'bottom',
  },
  // ... more steps
];
```

### Welcome Modal
Customize the welcome modal in `WelcomeModal.jsx`:
- Change welcome message
- Add more feature highlights
- Modify styling and layout

## Testing

### Manual Testing
1. **First-time User Flow**:
   - Clear localStorage
   - Login as new user
   - Verify welcome modal appears
   - Test tour functionality

2. **Returning User Flow**:
   - Login as existing user
   - Verify no welcome modal
   - Test tour button functionality

3. **Tour Completion**:
   - Complete full tour
   - Verify tour doesn't auto-start again
   - Test restart functionality

### Automated Testing
```javascript
// Test tour completion
const { completeTour } = useOnboarding();
completeTour();

// Test tour reset
const { resetTour } = useOnboarding();
resetTour();
```

## Browser Compatibility

- **Chrome**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support
- **Mobile browsers**: Full support

## Performance Considerations

- **Lazy Loading**: Tour components load only when needed
- **Minimal Dependencies**: Uses lightweight react-joyride library
- **Efficient State Management**: Context API for optimal performance
- **Local Storage**: Minimal data storage for persistence

## Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Proper ARIA labels and descriptions
- **Focus Management**: Proper focus handling during tour
- **High Contrast**: Compatible with high contrast modes

## Future Enhancements

### Potential Improvements
1. **Multi-language Support**: Internationalization for tour content
2. **Custom Tour Paths**: Different tours for different user types
3. **Analytics Integration**: Track tour completion rates
4. **Video Tutorials**: Embed video content in tour steps
5. **Interactive Elements**: Clickable elements within tour steps

### Advanced Features
1. **Conditional Steps**: Show different steps based on user actions
2. **Progressive Disclosure**: Reveal features as users progress
3. **Personalization**: Customize tour based on user preferences
4. **A/B Testing**: Test different tour variations

## Troubleshooting

### Common Issues

1. **Tour Not Starting**:
   - Check if user is authenticated
   - Verify localStorage permissions
   - Check console for errors

2. **Elements Not Found**:
   - Ensure data-tour attributes are present
   - Check element visibility
   - Verify CSS selectors

3. **Styling Issues**:
   - Check z-index conflicts
   - Verify CSS specificity
   - Test on different screen sizes

### Debug Mode
Enable debug logging:
```javascript
// Add to OnboardingContext.jsx
const DEBUG = process.env.NODE_ENV === 'development';

if (DEBUG) {
  console.log('Onboarding state:', { isFirstTimeUser, isTourActive, hasCompletedTour });
}
```

## Dependencies

- **react-joyride**: ^2.9.3 (Tour functionality)
- **react**: ^19.1.0 (Core React)
- **react-router-dom**: ^7.7.1 (Navigation)

## License

This feature is part of the Website Analyzer platform and follows the same licensing terms.
