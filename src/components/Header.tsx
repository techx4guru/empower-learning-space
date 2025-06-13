
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  ShoppingCart, 
  Bell, 
  User, 
  Menu,
  BookOpen,
  LogOut,
  Settings,
  Heart,
  X
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartItems] = useState(3);
  const [notifications] = useState(5);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 shrink-0">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:block">EduAcademy</span>
            <span className="text-lg font-bold text-gray-900 sm:hidden">Edu</span>
          </Link>

          {/* Search Bar - Hidden on mobile, shown when search is toggled */}
          <div className={`${isSearchOpen ? 'fixed inset-x-4 top-20 z-50 bg-white p-4 rounded-lg shadow-lg' : 'hidden'} md:flex md:flex-1 md:max-w-2xl md:mx-8 md:relative md:bg-transparent md:p-0 md:shadow-none`}>
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for courses..."
                className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              {isSearchOpen && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 md:hidden"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/courses" className="text-gray-700 hover:text-blue-600 transition-colors">
              Courses
            </Link>
            <Link to="/instructor" className="text-gray-700 hover:text-blue-600 transition-colors">
              Teach
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">
              My Learning
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Mobile search button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden p-2"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Wishlist - Hidden on small mobile */}
            <Button variant="ghost" size="sm" className="relative p-2 hidden sm:flex">
              <Heart className="w-5 h-5" />
            </Button>

            {/* Shopping Cart */}
            <Button variant="ghost" size="sm" className="relative p-2">
              <ShoppingCart className="w-5 h-5" />
              {cartItems > 0 && (
                <Badge className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center text-xs bg-red-500 p-0">
                  {cartItems}
                </Badge>
              )}
            </Button>

            {/* Notifications - Hidden on small mobile */}
            <Button variant="ghost" size="sm" className="relative p-2 hidden sm:flex">
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <Badge className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center text-xs bg-blue-500 p-0">
                  {notifications}
                </Badge>
              )}
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative p-2">
                  <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-3 py-2">
                  <p className="text-sm font-medium">Alex Johnson</p>
                  <p className="text-xs text-gray-500">alex@example.com</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    My Learning
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/instructor" className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Instructor Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-2">
            <nav className="flex flex-col space-y-1 px-2">
              <Link 
                to="/courses" 
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors py-3 px-3 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link 
                to="/instructor" 
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors py-3 px-3 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Teach
              </Link>
              <Link 
                to="/dashboard" 
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors py-3 px-3 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                My Learning
              </Link>
              <div className="border-t border-gray-200 pt-2 mt-2 sm:hidden">
                <Link 
                  to="/wishlist" 
                  className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors py-3 px-3 rounded-md text-base font-medium flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Heart className="w-5 h-5 mr-3" />
                  Wishlist
                </Link>
                <Link 
                  to="/notifications" 
                  className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors py-3 px-3 rounded-md text-base font-medium flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Bell className="w-5 h-5 mr-3" />
                  Notifications
                  {notifications > 0 && (
                    <Badge className="ml-auto w-5 h-5 flex items-center justify-center text-xs bg-blue-500 p-0">
                      {notifications}
                    </Badge>
                  )}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Search overlay for mobile */}
      {isSearchOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsSearchOpen(false)} />}
    </header>
  );
};

export default Header;
