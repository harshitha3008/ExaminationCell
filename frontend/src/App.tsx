import React, { useState } from 'react';
import { Calendar, Users, FileSpreadsheet, Clock, Bell, Settings, LogOut } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Calendar },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'results', label: 'Results', icon: FileSpreadsheet },
    { id: 'schedule', label: 'Schedule', icon: Clock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600">Exam Cell</h1>
          <p className="text-sm text-gray-500">University Management</p>
        </div>
        
        <nav className="mt-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left ${
                activeTab === item.id
                  ? 'bg-blue-50 border-r-4 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-64 p-6">
          <button className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
              <p className="text-gray-500">Welcome back, Admin</p>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Create Exam
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Generate Reports
              </button>
            </div>
          </header>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Total Students', value: '12,345', color: 'bg-blue-500' },
              { label: 'Upcoming Exams', value: '8', color: 'bg-green-500' },
              { label: 'Results Pending', value: '256', color: 'bg-yellow-500' },
              { label: 'Departments', value: '6', color: 'bg-purple-500' },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className={`w-12 h-12 ${stat.color} rounded-lg mb-4`} />
                <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800">Recent Activity</h3>
            </div>
            <div className="p-6">
              {[
                'Final Year Computer Science Exam Results Published',
                'New Exam Schedule Added for Engineering Department',
                'Student Registration Deadline Extended',
                'Semester Results Analysis Completed',
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center py-3 border-b border-gray-100 last:border-0"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4" />
                  <p className="text-gray-600">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;