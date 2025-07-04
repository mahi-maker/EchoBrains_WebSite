import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Award, Calendar, TrendingUp, User, Bell, Download, Play } from 'lucide-react';

const Dashboard: React.FC = () => {
  const studentData = {
    name: 'John Doe',
    course: 'Java Full Stack Development',
    progress: 75,
    completedModules: 12,
    totalModules: 16,
    nextClass: 'Spring Boot Advanced',
    nextClassDate: '2025-01-15',
    nextClassTime: '10:00 AM'
  };

  const recentActivities = [
    { id: 1, type: 'assignment', title: 'REST API Assignment', status: 'completed', date: '2025-01-10' },
    { id: 2, type: 'quiz', title: 'Spring Framework Quiz', status: 'pending', date: '2025-01-12' },
    { id: 3, type: 'project', title: 'E-commerce Backend', status: 'in-progress', date: '2025-01-08' },
    { id: 4, type: 'certificate', title: 'Java Fundamentals', status: 'earned', date: '2025-01-05' }
  ];

  const upcomingClasses = [
    { id: 1, title: 'Spring Boot Advanced', date: '2025-01-15', time: '10:00 AM', instructor: 'Dr. Rajesh Kumar' },
    { id: 2, title: 'Database Integration', date: '2025-01-17', time: '2:00 PM', instructor: 'Ms. Priya Sharma' },
    { id: 3, title: 'Frontend Integration', date: '2025-01-20', time: '10:00 AM', instructor: 'Mr. Amit Singh' }
  ];

  const resources = [
    { id: 1, title: 'Java Full Stack Syllabus', type: 'PDF', size: '2.5 MB' },
    { id: 2, title: 'Spring Boot Tutorial Videos', type: 'Video', size: '1.2 GB' },
    { id: 3, title: 'Project Templates', type: 'ZIP', size: '45 MB' },
    { id: 4, title: 'Interview Questions', type: 'PDF', size: '1.8 MB' }
  ];

  return (
    <>
      <Helmet>
        <title>Student Dashboard - Echo Brains Learning and Placement Center</title>
        <meta name="description" content="Student dashboard for tracking course progress, assignments, and upcoming classes." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, {studentData.name}!</h1>
                <p className="text-gray-600">{studentData.course}</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <Bell className="w-6 h-6" />
                </button>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Course Progress</p>
                  <p className="text-2xl font-bold text-gray-900">{studentData.progress}%</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-4">
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${studentData.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Completed Modules</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {studentData.completedModules}/{studentData.totalModules}
                  </p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Next Class</p>
                  <p className="text-lg font-bold text-gray-900">{studentData.nextClass}</p>
                  <p className="text-sm text-gray-500">{studentData.nextClassDate}</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Certificates</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activities */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activities</h2>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        activity.status === 'completed' ? 'bg-green-500' :
                        activity.status === 'pending' ? 'bg-yellow-500' :
                        activity.status === 'in-progress' ? 'bg-blue-500' :
                        'bg-purple-500'
                      }`}></div>
                      <div>
                        <p className="font-semibold text-gray-900">{activity.title}</p>
                        <p className="text-sm text-gray-600 capitalize">{activity.type} • {activity.date}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      activity.status === 'completed' ? 'bg-green-100 text-green-800' :
                      activity.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      activity.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {activity.status.replace('-', ' ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Classes */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Classes</h2>
              <div className="space-y-4">
                {upcomingClasses.map((class_) => (
                  <div key={class_.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{class_.title}</h3>
                      <button className="text-blue-600 hover:text-blue-700">
                        <Play className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>📅 {class_.date} at {class_.time}</p>
                      <p>👨‍🏫 {class_.instructor}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Course Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {resources.map((resource) => (
                <div key={resource.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-gray-600" />
                      <span className="text-xs font-semibold text-gray-500 uppercase">{resource.type}</span>
                    </div>
                    <span className="text-xs text-gray-500">{resource.size}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-teal-700 transition-all duration-200">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;