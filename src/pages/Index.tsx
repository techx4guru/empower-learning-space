
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, BookOpen, Users, Star, Clock, PlayCircle, Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from "@/components/Header";

const Index = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Complete React Development Course",
      instructor: "Sarah Johnson",
      price: 89.99,
      originalPrice: 199.99,
      rating: 4.8,
      students: 12543,
      duration: "12 hours",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
      category: "Web Development",
      bestseller: true
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      instructor: "Mike Chen",
      price: 79.99,
      originalPrice: 149.99,
      rating: 4.9,
      students: 8234,
      duration: "8 hours",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400",
      category: "Design"
    },
    {
      id: 3,
      title: "Data Science with Python",
      instructor: "Dr. Emily Rodriguez",
      price: 129.99,
      originalPrice: 249.99,
      rating: 4.7,
      students: 15678,
      duration: "20 hours",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      category: "Data Science"
    }
  ];

  const categories = [
    { name: "Web Development", courses: 120, icon: "💻" },
    { name: "Design", courses: 85, icon: "🎨" },
    { name: "Data Science", courses: 95, icon: "📊" },
    { name: "Marketing", courses: 67, icon: "📈" },
    { name: "Business", courses: 78, icon: "💼" },
    { name: "Photography", courses: 45, icon: "📸" }
  ];

  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white pt-20 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Learn Without
                <span className="block text-yellow-300">Limits</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
                Start, switch, or advance your career with more than 5,000 courses from world-class instructors.
              </p>
              
              {/* Search Bar */}
              <div className="mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                  <Input 
                    placeholder="What do you want to learn?" 
                    className="flex-1 py-3 px-4 text-gray-900 text-base"
                  />
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 sm:px-8 py-3 whitespace-nowrap">
                    Search Courses
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 sm:px-8">
                  <Link to="/courses">
                    Explore Courses
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-6 sm:px-8">
                  Start Teaching
                </Button>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                      <div className="h-2 bg-white bg-opacity-30 rounded flex-1"></div>
                    </div>
                    <div className="h-2 bg-white bg-opacity-30 rounded mb-2"></div>
                    <div className="h-2 bg-white bg-opacity-20 rounded w-3/4"></div>
                  </div>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <PlayCircle className="w-8 h-8 text-green-400" />
                      <div className="h-2 bg-white bg-opacity-30 rounded flex-1"></div>
                    </div>
                    <div className="h-2 bg-white bg-opacity-30 rounded mb-2"></div>
                    <div className="h-2 bg-white bg-opacity-20 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-8">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                      <div className="h-2 bg-white bg-opacity-30 rounded flex-1"></div>
                    </div>
                    <div className="h-2 bg-white bg-opacity-30 rounded mb-2"></div>
                    <div className="h-2 bg-white bg-opacity-20 rounded w-2/3"></div>
                  </div>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <Star className="w-8 h-8 text-yellow-400" />
                      <div className="h-2 bg-white bg-opacity-30 rounded flex-1"></div>
                    </div>
                    <div className="h-2 bg-white bg-opacity-30 rounded mb-2"></div>
                    <div className="h-2 bg-white bg-opacity-20 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-sm sm:text-base text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 mb-2">5K+</div>
              <div className="text-sm sm:text-base text-gray-600">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-2">1K+</div>
              <div className="text-sm sm:text-base text-gray-600">Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-sm sm:text-base text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular courses taught by industry experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
                  />
                  {course.bestseller && (
                    <Badge className="absolute top-3 left-3 bg-orange-500">Bestseller</Badge>
                  )}
                  <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs sm:text-sm">
                    {course.duration}
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <Badge variant="secondary" className="mb-2 self-start">{course.category}</Badge>
                  <CardTitle className="group-hover:text-blue-600 transition-colors text-base sm:text-lg leading-tight">
                    {course.title}
                  </CardTitle>
                  <p className="text-xs sm:text-sm text-gray-600">by {course.instructor}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs sm:text-sm font-medium">{course.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="text-xs sm:text-sm">{course.students.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg sm:text-xl font-bold text-gray-900">${course.price}</span>
                      <span className="text-xs sm:text-sm text-gray-500 line-through">${course.originalPrice}</span>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Button size="lg" variant="outline" asChild className="px-6 sm:px-8">
              <Link to="/courses">
                View All Courses
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Top Categories</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              Choose from our most popular learning paths
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">{category.courses} courses</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Start Your Learning Journey Today
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
            Join thousands of students already learning on our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 sm:px-8">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-6 sm:px-8">
              Explore Premium
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Community</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Students</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Teachers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Teaching</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Become Instructor</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Teaching Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tools</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              © {year} TECH-X4. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
