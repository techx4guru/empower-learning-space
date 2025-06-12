
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  BookOpen, 
  Users, 
  DollarSign, 
  Star, 
  TrendingUp, 
  Plus,
  Eye,
  Edit,
  BarChart3,
  MessageSquare
} from 'lucide-react';
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const InstructorDashboard = () => {
  const [stats] = useState({
    totalStudents: 15234,
    totalEarnings: 45678.90,
    avgRating: 4.8,
    totalCourses: 8,
    monthlyGrowth: 12.5
  });

  const [courses] = useState([
    {
      id: 1,
      title: "Complete React Development Course",
      students: 12543,
      rating: 4.8,
      earnings: 28540.50,
      status: "Published",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400"
    },
    {
      id: 2,
      title: "Advanced JavaScript Concepts",
      students: 8965,
      rating: 4.9,
      earnings: 15220.30,
      status: "Published",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400"
    },
    {
      id: 3,
      title: "Node.js Backend Development",
      students: 6543,
      rating: 4.7,
      earnings: 12890.40,
      status: "Published",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400"
    },
    {
      id: 4,
      title: "Modern Web Development Stack",
      students: 0,
      rating: 0,
      earnings: 0,
      status: "Draft",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400"
    }
  ]);

  const [recentReviews] = useState([
    {
      student: "John Smith",
      course: "Complete React Development Course",
      rating: 5,
      comment: "Excellent course! Very well structured and easy to follow.",
      date: "2 days ago"
    },
    {
      student: "Maria Garcia",
      course: "Advanced JavaScript Concepts",
      rating: 5,
      comment: "The best JavaScript course I've ever taken. Highly recommended!",
      date: "1 week ago"
    },
    {
      student: "David Chen",
      course: "Node.js Backend Development",
      rating: 4,
      comment: "Great content, would love more practical examples.",
      date: "2 weeks ago"
    }
  ]);

  const [earnings] = useState([
    { month: "Jan", amount: 3240 },
    { month: "Feb", amount: 4180 },
    { month: "Mar", amount: 3850 },
    { month: "Apr", amount: 5220 },
    { month: "May", amount: 4980 },
    { month: "Jun", amount: 6150 }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 ml-64">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Instructor Dashboard</h1>
                <p className="text-gray-600">Manage your courses and track your performance</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Create New Course
              </Button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalStudents.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${stats.totalEarnings.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">+8% from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.avgRating}</div>
                  <p className="text-xs text-muted-foreground">Across all courses</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalCourses}</div>
                  <p className="text-xs text-muted-foreground">3 published, 1 draft</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Growth</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+{stats.monthlyGrowth}%</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="courses" className="space-y-6">
              <TabsList>
                <TabsTrigger value="courses">My Courses</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="create">Create Course</TabsTrigger>
              </TabsList>

              <TabsContent value="courses" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Management</CardTitle>
                    <CardDescription>Manage and track your courses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {courses.map((course) => (
                        <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <img 
                              src={course.image} 
                              alt={course.title}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div>
                              <h3 className="font-semibold">{course.title}</h3>
                              <div className="flex items-center space-x-4 mt-1">
                                <Badge 
                                  variant={course.status === 'Published' ? 'default' : 'secondary'}
                                >
                                  {course.status}
                                </Badge>
                                {course.status === 'Published' && (
                                  <>
                                    <span className="text-sm text-gray-600">
                                      {course.students.toLocaleString()} students
                                    </span>
                                    <div className="flex items-center">
                                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                                      <span className="text-sm">{course.rating}</span>
                                    </div>
                                    <span className="text-sm font-medium text-green-600">
                                      ${course.earnings.toLocaleString()}
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4 mr-2" />
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              <BarChart3 className="w-4 h-4 mr-2" />
                              Analytics
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Monthly Earnings</CardTitle>
                      <CardDescription>Your earnings over the last 6 months</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {earnings.map((earning, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <span className="text-sm font-medium">{earning.month}</span>
                            <div className="flex items-center space-x-2">
                              <Progress 
                                value={(earning.amount / 7000) * 100} 
                                className="w-24" 
                              />
                              <span className="text-sm font-medium">${earning.amount}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Course Performance</CardTitle>
                      <CardDescription>Top performing courses this month</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {courses.filter(c => c.status === 'Published').map((course, index) => (
                          <div key={course.id} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{course.title}</p>
                              <p className="text-sm text-gray-600">{course.students} students</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">${course.earnings.toLocaleString()}</p>
                              <div className="flex items-center">
                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                                <span className="text-sm">{course.rating}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Reviews</CardTitle>
                    <CardDescription>Latest feedback from your students</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {recentReviews.map((review, index) => (
                        <div key={index} className="border-b pb-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="font-semibold text-blue-600">
                                  {review.student.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <div>
                                <h4 className="font-semibold">{review.student}</h4>
                                <p className="text-sm text-gray-600">{review.course}</p>
                              </div>
                            </div>
                            <div className="text-right">
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
                              <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                          <Button variant="ghost" size="sm" className="mt-2">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Reply
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="create" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Create New Course</CardTitle>
                    <CardDescription>Start building your next course</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium">Course Title</label>
                          <Input placeholder="Enter course title" className="mt-1" />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Category</label>
                          <Input placeholder="Web Development, Design, etc." className="mt-1" />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Price</label>
                          <Input placeholder="89.99" type="number" className="mt-1" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium">Level</label>
                          <Input placeholder="Beginner, Intermediate, Advanced" className="mt-1" />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Duration (hours)</label>
                          <Input placeholder="12" type="number" className="mt-1" />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Number of Lessons</label>
                          <Input placeholder="45" type="number" className="mt-1" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Course Description</label>
                      <Textarea 
                        placeholder="Describe what students will learn in this course..."
                        className="mt-1"
                        rows={4}
                      />
                    </div>
                    <div className="flex space-x-4">
                      <Button className="bg-blue-600 hover:bg-blue-700">Create Course</Button>
                      <Button variant="outline">Save as Draft</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InstructorDashboard;
