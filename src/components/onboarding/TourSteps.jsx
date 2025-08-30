// Tour steps configuration for the onboarding guide
export const tourSteps = [
  {
    target: '.sidebar-nav',
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Welcome to Website Analyzer! 🎉</h3>
        <p className="text-sm text-gray-600">
          This is your navigation sidebar. Let's take a quick tour to help you get started with all the powerful features available in our platform.
        </p>
      </div>
    ),
    placement: 'right',
    disableBeacon: true,
  },
  {
    target: '[data-tour="home"]',
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2">🏠 Dashboard Overview</h3>
        <p className="text-sm text-gray-600 mb-2">
          Your central command center! Here you'll find:
        </p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Quick statistics and insights</li>
          <li>Recent activities and reports</li>
          <li>Quick access to key features</li>
          <li>System status and notifications</li>
        </ul>
      </div>
    ),
    placement: 'bottom',
  },
  {
    target: '[data-tour="analyze"]',
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2">🔍 Website Analysis</h3>
        <p className="text-sm text-gray-600 mb-2">
          The core feature of our platform! Analyze any website to:
        </p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Extract business information and contact details</li>
          <li>Identify technology stack and services offered</li>
          <li>Generate comprehensive business reports</li>
          <li>Find potential leads and opportunities</li>
        </ul>
      </div>
    ),
    placement: 'right',
  },
  {
    target: '[data-tour="bulk"]',
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2">📊 Bulk Processing</h3>
        <p className="text-sm text-gray-600 mb-2">
          Process multiple websites at once for maximum efficiency:
        </p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Upload Excel files with website lists</li>
          <li>Batch analyze hundreds of websites</li>
          <li>Export results in various formats</li>
          <li>Track progress and manage queues</li>
        </ul>
      </div>
    ),
    placement: 'right',
  },
  {
    target: '[data-tour="reports"]',
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2">📈 Reports & Analytics</h3>
        <p className="text-sm text-gray-600 mb-2">
          Access detailed insights and analytics:
        </p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>View all your analysis reports</li>
          <li>Generate custom reports and charts</li>
          <li>Track performance metrics</li>
          <li>Export data for presentations</li>
        </ul>
      </div>
    ),
    placement: 'right',
  },
  {
    target: '[data-tour="discovery"]',
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2">🤖 AI Discovery</h3>
        <p className="text-sm text-gray-600 mb-2">
          Leverage AI to discover new opportunities:
        </p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>AI-powered lead generation</li>
          <li>Smart business recommendations</li>
          <li>Market analysis and insights</li>
          <li>Competitive intelligence</li>
        </ul>
      </div>
    ),
    placement: 'right',
  },
  {
    target: '[data-tour="proposals"]',
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2">📝 Proposal Generation</h3>
        <p className="text-sm text-gray-600 mb-2">
          Create professional proposals automatically:
        </p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Generate customized proposals</li>
          <li>Use AI-powered content suggestions</li>
          <li>Include analysis results and recommendations</li>
          <li>Export to PDF or Word formats</li>
        </ul>
      </div>
    ),
    placement: 'right',
  },
  {
    target: '[data-tour="send-proposals"]',
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2">📧 Send Proposals</h3>
        <p className="text-sm text-gray-600 mb-2">
          Send proposals directly from the platform:
        </p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Email proposals to prospects</li>
          <li>Track email delivery and opens</li>
          <li>Schedule follow-up reminders</li>
          <li>Manage communication templates</li>
        </ul>
      </div>
    ),
    placement: 'right',
  },
  {
    target: '[data-tour="leads"]',
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2">👥 Lead Management</h3>
        <p className="text-sm text-gray-600 mb-2">
          Organize and manage your leads effectively:
        </p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Store and categorize leads</li>
          <li>Add notes and contact information</li>
          <li>Track lead status and progress</li>
          <li>Import/export lead data</li>
        </ul>
      </div>
    ),
    placement: 'right',
  },
  {
    target: '[data-tour="lead-tracker"]',
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2">🎯 Lead Tracker</h3>
        <p className="text-sm text-gray-600 mb-2">
          Track and manage your sales pipeline:
        </p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Visual pipeline management</li>
          <li>Track conversion rates</li>
          <li>Set follow-up reminders</li>
          <li>Generate sales forecasts</li>
        </ul>
      </div>
    ),
    placement: 'right',
  },
  {
    target: '[data-tour="ai-calling-agents"]',
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2">🤖 AI Calling Agents</h3>
        <p className="text-sm text-gray-600 mb-2">
          Automate your lead outreach with intelligent AI:
        </p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Automated phone calls to prospects</li>
          <li>Natural conversation handling</li>
          <li>Automatic meeting booking</li>
          <li>24/7 availability and scaling</li>
        </ul>
      </div>
    ),
    placement: 'right',
  },
  {
    target: '[data-tour="settings"]',
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2">⚙️ Settings & Configuration</h3>
        <p className="text-sm text-gray-600 mb-2">
          Customize your experience and manage your account:
        </p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Update profile and preferences</li>
          <li>Configure API keys and integrations</li>
          <li>Manage team members and permissions</li>
          <li>Set up notifications and alerts</li>
        </ul>
      </div>
    ),
    placement: 'left',
  },
  {
    target: 'body',
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2">🎉 You're All Set!</h3>
        <p className="text-sm text-gray-600 mb-3">
          You've completed the tour! Here are some next steps:
        </p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 mb-3">
          <li>Start by analyzing your first website</li>
          <li>Explore the bulk processing feature</li>
          <li>Set up your lead management system</li>
          <li>Configure your settings and preferences</li>
        </ul>
        <p className="text-sm text-gray-500">
          Need help? Look for the tour button in the header to restart this guide anytime!
        </p>
      </div>
    ),
    placement: 'center',
    disableOverlayClose: true,
  },
];

// Tour styles configuration
export const tourStyles = {
  options: {
    primaryColor: '#3B82F6',
    zIndex: 1000,
    arrowColor: '#ffffff',
    backgroundColor: '#ffffff',
    textColor: '#374151',
    overlayColor: 'rgba(0, 0, 0, 0.5)',
    spotlightPadding: 0,
    scrollToFirstStep: true,
    showProgress: true,
    showSkipButton: true,
    showButtons: ['back', 'next', 'skip'],
    styles: {
      options: {
        zIndex: 1000,
      },
    },
  },
  tooltipComponent: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    color: '#374151',
    fontSize: '14px',
    padding: '20px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
  },
  spotlight: {
    backgroundColor: 'transparent',
  },
};
