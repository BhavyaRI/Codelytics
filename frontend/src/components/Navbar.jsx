import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const getNavLinkClass = ({ isActive }) => {
    const commonClasses = "px-3 py-2 rounded-md text-sm font-medium";
    if (isActive) {
      return `text-gray-900 bg-gray-100 ${commonClasses}`;
    }
    return `text-gray-500 hover:text-gray-900 ${commonClasses}`;
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold">CodeAnalytics</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/dashboard" className={getNavLinkClass}>
                  Dashboard
                </NavLink>
                <NavLink to="/analysis" className={getNavLinkClass}>
                  Performance Analysis
                </NavLink>
                <NavLink to="/resources" className={getNavLinkClass}>
                  Resources
                </NavLink>
                <NavLink to="/contests/upcoming" className={getNavLinkClass}>
                  Upcoming Contests
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;