
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Star, Clock, Users, PlayCircle, FileText, CheckCircle, MessageSquare } from 'lucide-react';
import Header from "@/components/Header";

const CourseDetail = () => {
  const { courseId } = useParams();
  
  const course = {
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
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    description: "Master React from basics to advanced concepts with real-world projects. This comprehensive course covers everything you need to know to become a proficient React developer.",
    fullDescription: `This complete React development course is designed to take you from beginner to advanced level. You'll learn React fundamentals, hooks, context API, routing, state management, and much more. 

The course includes hands-on projects, real-world examples, and best practices used in the industry. By the end of this course, you'll be able to build complex React applications and feel confident in your React development skills.

What you'll learn:
• React fundamentals and JSX
• Components and Props
• State management with hooks
• Context API and Redux
• React Router for navigation
• API integration
• Testing React applications
• Deployment strategies`,
    requirements: [
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Familiarity with ES6+ features",
      "Node.js installed on your computer",
      "Code editor (VS Code recommended)"
    ],
    features: [
      "12 hours of on-demand video",
      "45 coding exercises",
      "15 downloadable resources",
      "Certificate of completion",
      "30-day money-back guarantee",
      "Lifetime access"
    ]
  };

  const curriculum = [
    {
      section: "Getting Started",
      lessons: [
        { title: "Introduction to React", duration: "10:30", type: "video", free: true },
        { title: "Setting up Development Environment", duration: "15:45", type: "video", free: true },
        { title: "Your First React Component", duration: "12:20", type: "video", free: false },
        { title: "Understanding JSX", duration: "18:15", type: "video", free: false }
      ]
    },
    {
      section: "React Fundamentals",
      lessons: [
        { title: "Components and Props", duration: "20:30", type: "video", free: false },
        { title: "State and Event Handling", duration: "25:45", type: "video", free: false },
        { title: "Conditional Rendering", duration: "15:20", type: "video", free: false },
        { title: "Lists and Keys", duration: "18:10", type: "video", free: false },
        { title: "Practice Exercise 1", duration: "30:00", type: "exercise", free: false }
      ]
    },
    {
      section: "Hooks Deep Dive",
      lessons: [
        { title: "useState Hook", duration: "22:15", type: "video", free: false },
        { title: "useEffect Hook", duration: "28:30", type: "video", free: false },
        { title: "Custom Hooks", duration: "24:45", type: "video", free: false },
        { title: "useContext Hook", duration: "19:20", type: "video", free: false }
      ]
    },
    {
      section: "Advanced Topics",
      lessons: [
        { title: "React Router", duration: "35:15", type: "video", free: false },
        { title: "State Management with Redux", duration: "45:30", type: "video", free: false },
        { title: "API Integration", duration: "32:45", type: "video", free: false },
        { title: "Testing React Components", duration: "28:20", type: "video", free: false },
        { title: "Final Project", duration: "60:00", type: "project", free: false }
      ]
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "John Smith",
      rating: 5,
      comment: "Excellent course! Sarah explains everything clearly and the projects are very practical.",
      date: "2 weeks ago",
      helpful: 24
    },
    {
      id: 2,
      name: "Maria Garcia",
      rating: 5,
      comment: "Best React course I've taken. The curriculum is well-structured and up-to-date.",
      date: "1 month ago",
      helpful: 18
    },
    {
      id: 3,
      name: "David Chen",
      rating: 4,
      comment: "Great content overall. Would love to see more advanced patterns covered.",
      date: "3 weeks ago",
      helpful: 12
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20">
        {/* Course Header */}
        <div className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Badge className="mb-4">{course.category}</Badge>
                <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl text-gray-300 mb-6">{course.description}</p>
                
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium mr-2">{course.rating}</span>
                    <span className="text-gray-300">({course.students.toLocaleString()} students)</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 mr-2" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-5 h-5 mr-2" />
                    {course.lessons} lessons
                  </div>
                  <Badge variant="outline" className="text-white border-white">
                    {course.level}
                  </Badge>
                </div>
                
                <p className="text-gray-300 mt-4">Created by {course.instructor}</p>
              </div>
              
              {/* Course Preview Card */}
              <div className="lg:col-span-1">
                <Card className="sticky top-8">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Button 
                      size="lg" 
                      className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
                    >
                      <PlayCircle className="w-8 h-8" />
                    </Button>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-3xl font-bold">${course.price}</span>
                      <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
                      <Badge className="bg-red-500">55% off</Badge>
                    </div>
                    
                    <Button className="w-full mb-4 bg-blue-600 hover:bg-blue-700 text-lg py-3">
                      Enroll Now
                    </Button>
                    
                    <p className="text-center text-sm text-gray-600 mb-4">30-day money-back guarantee</p>
                    
                    <div className="space-y-2 text-sm">
                      <h4 className="font-semibold">This course includes:</h4>
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>About this course</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose max-w-none">
                        {course.fullDescription.split('\n').map((paragraph, index) => (
                          <p key={index} className="mb-4">{paragraph}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {course.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                            <span>{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="curriculum" className="space-y-4">
                  {curriculum.map((section, sectionIndex) => (
                    <Card key={sectionIndex}>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>{section.section}</span>
                          <Badge variant="secondary">{section.lessons.length} lessons</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {section.lessons.map((lesson, lessonIndex) => (
                            <div key={lessonIndex} className="flex items-center justify-between p-3 border rounded hover:bg-gray-50">
                              <div className="flex items-center space-x-3">
                                {lesson.type === 'video' && <PlayCircle className="w-5 h-5 text-blue-500" />}
                                {lesson.type === 'exercise' && <FileText className="w-5 h-5 text-green-500" />}
                                {lesson.type === 'project' && <CheckCircle className="w-5 h-5 text-purple-500" />}
                                <span className="font-medium">{lesson.title}</span>
                                {lesson.free && <Badge variant="outline" className="text-green-600 border-green-600">Free</Badge>}
                              </div>
                              <span className="text-sm text-gray-500">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
                
                <TabsContent value="reviews" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Student Reviews</CardTitle>
                      <CardDescription>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                            <span className="text-lg font-semibold">{course.rating}</span>
                            <span className="text-gray-600 ml-2">course rating</span>
                          </div>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-600">{course.students.toLocaleString()} students</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {reviews.map((review) => (
                          <div key={review.id} className="border-b pb-6">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                  <span className="font-semibold text-blue-600">
                                    {review.name.split(' ').map(n => n[0]).join('')}
                                  </span>
                                </div>
                                <div>
                                  <h4 className="font-semibold">{review.name}</h4>
                                  <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`w-4 h-4 ${
                                          i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                            <p className="text-gray-700 mb-2">{review.comment}</p>
                            <Button variant="ghost" size="sm" className="text-gray-500">
                              <MessageSquare className="w-4 h-4 mr-1" />
                              Helpful ({review.helpful})
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Instructor Info */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Your Instructor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-600">SJ</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{course.instructor}</h3>
                      <p className="text-gray-600">Senior React Developer</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold">4.8</div>
                      <div className="text-gray-600">Instructor Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">25,000+</div>
                      <div className="text-gray-600">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">12</div>
                      <div className="text-gray-600">Courses</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">5 years</div>
                      <div className="text-gray-600">Experience</div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    Sarah is a senior React developer with 5+ years of experience building production applications. 
                    She has worked with companies like Google and Microsoft, and is passionate about teaching others.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
