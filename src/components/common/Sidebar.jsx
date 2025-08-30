// frontend/src/components/common/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';

const NavLink = ({ to, label, onClick, ...props }) => {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        active ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
      }`}
      {...props}
    >
      {label}
    </Link>
  );
};

const SidebarContent = ({ onItemClick }) => (
  <nav className="p-4 space-y-1 sidebar-nav h-full overflow-y-auto">
    <NavLink to={ROUTES.HOME} label="Home" onClick={onItemClick} data-tour="home" />
    <NavLink to={ROUTES.ANALYZE} label="Analyze" onClick={onItemClick} data-tour="analyze" />
    <NavLink to={ROUTES.BULK} label="Bulk Process" onClick={onItemClick} data-tour="bulk" />
    <NavLink to={ROUTES.REPORTS} label="Reports" onClick={onItemClick} data-tour="reports" />
    <NavLink to={ROUTES.DISCOVERY} label="AI Discovery" onClick={onItemClick} data-tour="discovery" />
    <NavLink to={ROUTES.PROPOSALS} label="Proposal Generation" onClick={onItemClick} data-tour="proposals" />
    <NavLink to={ROUTES.PROPOSALS_SEND} label="Send Proposals" onClick={onItemClick} data-tour="send-proposals" />
    <NavLink to={ROUTES.LEADS} label="Leads" onClick={onItemClick} data-tour="leads" />
    <NavLink to={ROUTES.LEAD_TRACKER} label="Lead Tracker" onClick={onItemClick} data-tour="lead-tracker" />
    <NavLink to={ROUTES.AI_CALLING_AGENTS} label="AI Calling Agents" onClick={onItemClick} data-tour="ai-calling-agents" />
    <NavLink to={ROUTES.SETTINGS} label="Settings" onClick={onItemClick} data-tour="settings" />
  </nav>
);

const Sidebar = ({ isOpen = false, onClose = () => {} }) => {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-white border-r" style={{ top: '64px' }}>
        <SidebarContent />
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 bg-black/30" style={{ zIndex: 45 }} onClick={onClose} />
          <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r shadow-lg" style={{ top: '64px' }}>
            <div className="h-12 border-b px-4 flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900">Navigation</span>
              <button onClick={onClose} className="p-2 rounded hover:bg-gray-100">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <SidebarContent onItemClick={onClose} />
          </aside>
        </div>
      )}
    </>
  );
};

export default Sidebar;


