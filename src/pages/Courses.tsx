
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Star, Clock, Users, Filter } from 'lucide-react';
import Header from "@/components/Header";
import { Link } from 'react-router-dom';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const courses = [
    {
      id: 1,
      title: "Complete React Development Course",
      instructor: "Sarah Johnson",
      price: 89.99,
      originalPrice: 199.99,
      rating: 4.8,
      students: 12543,
      duration: "12 hours",
      lessons: 45,
      category: "Web Development",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
      description: "Master React from basics to advanced concepts with real-world projects",
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
      lessons: 32,
      category: "Design",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400",
      description: "Learn the principles of great design and user experience"
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
      lessons: 60,
      category: "Data Science",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      description: "Comprehensive data science course with Python and machine learning"
    },
    {
      id: 4,
      title: "Digital Marketing Mastery",
      instructor: "Jessica Williams",
      price: 69.99,
      originalPrice: 129.99,
      rating: 4.6,
      students: 9876,
      duration: "10 hours",
      lessons: 38,
      category: "Marketing",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      description: "Complete guide to digital marketing strategies and tools"
    },
    {
      id: 5,
      title: "Mobile App Development with Flutter",
      instructor: "David Park",
      price: 99.99,
      originalPrice: 179.99,
      rating: 4.8,
      students: 6543,
      duration: "15 hours",
      lessons: 52,
      category: "Mobile Development",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400",
      description: "Build beautiful cross-platform mobile apps with Flutter"
    },
    {
      id: 6,
      title: "Artificial Intelligence Fundamentals",
      instructor: "Prof. Michael Zhang",
      price: 149.99,
      originalPrice: 299.99,
      rating: 4.9,
      students: 11234,
      duration: "25 hours",
      lessons: 75,
      category: "AI & Machine Learning",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400",
      description: "Deep dive into AI concepts, algorithms, and applications"
    }
  ];

  const categories = ['all', 'Web Development', 'Design', 'Data Science', 'Marketing', 'Mobile Development', 'AI & Machine Learning'];
  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Expand Your Skills
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Learn from industry experts with our comprehensive courses
              </p>
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="What do you want to learn?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 py-4 text-lg rounded-full bg-white text-gray-900"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map(level => (
                    <SelectItem key={level} value={level}>
                      {level === 'all' ? 'All Levels' : level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <p className="text-gray-600">
              {filteredCourses.length} courses found
            </p>
          </div>
        </div>

        {/* Course Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
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
                  <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                    {course.duration}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="mb-2">{course.category}</Badge>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">
                    <Link to={`/course/${course.id}`}>{course.title}</Link>
                  </CardTitle>
                  <CardDescription>{course.description}</CardDescription>
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
                      <span className="text-sm">{course.lessons} lessons</span>
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
        </div>
      </div>
    </div>
  );
};

export default Courses;
