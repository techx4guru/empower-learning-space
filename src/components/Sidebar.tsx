
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  User, 
  BarChart3, 
  Settings, 
  MessageSquare,
  Star,
  Calendar,
  Award,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      title: 'Dashboard',
      icon: BarChart3,
      href: '/dashboard',
      active: location.pathname === '/dashboard'
    },
    {
      title: 'My Courses',
      icon: BookOpen,
      href: '/my-courses',
      active: location.pathname === '/my-courses'
    },
    {
      title: 'Schedule',
      icon: Calendar,
      href: '/schedule',
      active: location.pathname === '/schedule'
    },
    {
      title: 'Certificates',
      icon: Award,
      href: '/certificates',
      active: location.pathname === '/certificates'
    },
    {
      title: 'Reviews',
      icon: Star,
      href: '/reviews',
      active: location.pathname === '/reviews'
    },
    {
      title: 'Messages',
      icon: MessageSquare,
      href: '/messages',
      active: location.pathname === '/messages'
    },
    {
      title: 'Profile',
      icon: User,
      href: '/profile',
      active: location.pathname === '/profile'
    },
    {
      title: 'Settings',
      icon: Settings,
      href: '/settings',
      active: location.pathname === '/settings'
    }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 transition-all duration-300 z-50",
        // Desktop behavior
        "hidden lg:block",
        isCollapsed ? "w-16" : "w-64",
        // Mobile behavior - show when open
        isMobileOpen && "block w-64 lg:hidden"
      )}>
        <div className="flex flex-col h-full">
          {/* Collapse Toggle */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="hidden lg:flex w-full justify-center"
              >
                {isCollapsed ? (
                  <ChevronRight className="w-4 h-4" />
                ) : (
                  <ChevronLeft className="w-4 h-4" />
                )}
              </Button>
              
              {/* Mobile close button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileOpen(false)}
                className="lg:hidden ml-auto"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item) => (
              <Link 
                key={item.href} 
                to={item.href}
                onClick={() => setIsMobileOpen(false)}
              >
                <Button
                  variant={item.active ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    isCollapsed ? "px-2" : "px-4",
                    item.active && "bg-blue-600 text-white hover:bg-blue-700"
                  )}
                >
                  <item.icon className="w-4 h-4 shrink-0" />
                  {(!isCollapsed || isMobileOpen) && (
                    <span className="ml-3">{item.title}</span>
                  )}
                </Button>
              </Link>
            ))}
          </nav>

          {/* User Info at Bottom */}
          {(!isCollapsed || isMobileOpen) && (
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Alex Johnson
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    Student
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Sidebar Toggle Button - Fixed at bottom right */}
      <Button
        onClick={() => setIsMobileOpen(true)}
        className="fixed bottom-6 right-6 lg:hidden z-40 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
        size="icon"
      >
        <BarChart3 className="w-6 h-6 text-white" />
      </Button>
    </>
  );
};

export default Sidebar;
