
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Calendar, PlayCircle, FileText } from 'lucide-react';
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const Dashboard = () => {
  const [enrolledCourses] = useState([
    {
      id: 1,
      title: "Complete React Development Course",
      instructor: "Sarah Johnson",
      progress: 75,
      totalLessons: 45,
      completedLessons: 34,
      nextLesson: "Advanced Hooks",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
      timeLeft: "2 weeks"
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      instructor: "Mike Chen",
      progress: 40,
      totalLessons: 32,
      completedLessons: 13,
      nextLesson: "Color Theory",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400",
      timeLeft: "1 month"
    },
    {
      id: 3,
      title: "Data Science with Python",
      instructor: "Dr. Emily Rodriguez",
      progress: 20,
      totalLessons: 60,
      completedLessons: 12,
      nextLesson: "Pandas Introduction",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      timeLeft: "3 months"
    }
  ]);

  const [recentActivity] = useState([
    { type: "completed", course: "React Development", lesson: "State Management", time: "2 hours ago" },
    { type: "quiz", course: "UI/UX Design", score: "85%", time: "1 day ago" },
    { type: "started", course: "Data Science", lesson: "Introduction to Python", time: "3 days ago" }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 ml-64">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex!</h1>
              <p className="text-gray-600">Continue your learning journey</p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">Active learning paths</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Learning Hours</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24.5</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completed</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">59</div>
                  <p className="text-xs text-muted-foreground">Lessons finished</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Certificates</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Earned this year</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Enrolled Courses */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>My Courses</CardTitle>
                    <CardDescription>Continue where you left off</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {enrolledCourses.map((course) => (
                      <div key={course.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{course.title}</h3>
                          <p className="text-sm text-gray-600">by {course.instructor}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <Progress value={course.progress} className="flex-1" />
                            <span className="text-sm font-medium">{course.progress}%</span>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <p className="text-sm text-gray-500">
                              {course.completedLessons}/{course.totalLessons} lessons
                            </p>
                            <Badge variant="secondary">{course.category}</Badge>
                          </div>
                        </div>
                        <Button size="sm" className="shrink-0">
                          <PlayCircle className="w-4 h-4 mr-2" />
                          Continue
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your learning progress</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <p className="text-sm">
                            {activity.type === 'completed' && `Completed "${activity.lesson}" in ${activity.course}`}
                            {activity.type === 'quiz' && `Quiz score: ${activity.score} in ${activity.course}`}
                            {activity.type === 'started' && `Started "${activity.lesson}" in ${activity.course}`}
                          </p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Learning Streak</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-500 mb-2">7</div>
                      <p className="text-sm text-gray-600">Days in a row</p>
                      <p className="text-xs text-gray-500 mt-2">Keep it up! You're doing great.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
