
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Star, 
  Clock, 
  Users, 
  PlayCircle, 
  CheckCircle,
  BookOpen,
  Award,
  TrendingUp,
  ArrowRight,
  Globe,
  Shield,
  Zap
} from 'lucide-react';
import Header from "@/components/Header";
import { Link } from 'react-router-dom';

const Index = () => {
  const [email, setEmail] = useState('');

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
    { name: "Web Development", courses: 245, icon: "💻", color: "bg-blue-100 text-blue-600" },
    { name: "Design", courses: 156, icon: "🎨", color: "bg-purple-100 text-purple-600" },
    { name: "Data Science", courses: 89, icon: "📊", color: "bg-green-100 text-green-600" },
    { name: "Marketing", courses: 134, icon: "📈", color: "bg-orange-100 text-orange-600" },
    { name: "Business", courses: 198, icon: "💼", color: "bg-red-100 text-red-600" },
    { name: "Photography", courses: 67, icon: "📸", color: "bg-pink-100 text-pink-600" }
  ];

  const stats = [
    { number: "50K+", label: "Students", icon: Users },
    { number: "1,200+", label: "Courses", icon: BookOpen },
    { number: "200+", label: "Instructors", icon: Award },
    { number: "98%", label: "Satisfaction", icon: TrendingUp }
  ];

  const features = [
    {
      icon: Globe,
      title: "Learn Anywhere",
      description: "Access courses on any device, anytime, anywhere in the world"
    },
    {
      icon: Shield,
      title: "Certified Learning",
      description: "Get industry-recognized certificates upon course completion"
    },
    {
      icon: Zap,
      title: "Expert Instructors",
      description: "Learn from industry professionals and subject matter experts"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Learn Without
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  Limits
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Join millions of learners worldwide and master new skills with our expert-led courses
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="What do you want to learn?"
                    className="pl-12 py-4 text-lg rounded-full bg-white text-gray-900"
                  />
                </div>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-full">
                  Start Learning
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span>Lifetime access</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600"
                  alt="Online learning"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-blue-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose your path
            </h2>
            <p className="text-xl text-gray-600">
              Explore our comprehensive course categories
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.courses} courses</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Courses
              </h2>
              <p className="text-xl text-gray-600">
                Most popular courses this week
              </p>
            </div>
            <Link to="/courses">
              <Button variant="outline" className="hidden md:flex items-center">
                View All Courses
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {course.bestseller && (
                    <Badge className="absolute top-4 left-4 bg-orange-500">Bestseller</Badge>
                  )}
                  <Button 
                    size="sm" 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-gray-900 hover:bg-gray-100"
                  >
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{course.category}</Badge>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">
                    <Link to={`/course/${course.id}`}>{course.title}</Link>
                  </CardTitle>
                  <p className="text-sm text-gray-600">by {course.instructor}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium">{course.rating}</span>
                      </div>
                      <span className="text-gray-400">|</span>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="text-sm">{course.students.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                      <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 md:hidden">
            <Link to="/courses">
              <Button className="bg-blue-600 hover:bg-blue-700">
                View All Courses
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why choose EduAcademy?
            </h2>
            <p className="text-xl text-gray-600">
              Learn with confidence on our platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay updated with new courses
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get notified about new courses, updates, and special offers
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white"
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-blue-100 mt-4">
            No spam, unsubscribe at any time
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">EduAcademy</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering learners worldwide with quality education and expert instruction.
              </p>
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Teaching</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/instructor" className="hover:text-white transition-colors">Become an Instructor</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Teaching Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instructor Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduAcademy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
