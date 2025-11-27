import { BookOpen, Users, DoorOpen, Calendar, TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

export function Dashboard() {
  const stats = [
    { label: 'Total Classes', value: '24', change: '+2', icon: BookOpen, color: 'blue' },
    { label: 'Faculty Members', value: '48', change: '+5', icon: Users, color: 'green' },
    { label: 'Available Rooms', value: '16', change: '-1', icon: DoorOpen, color: 'purple' },
    { label: 'Events This Week', value: '12', change: '+3', icon: Calendar, color: 'orange' },
  ];

  const upcomingClasses = [
    { name: 'Advanced Mathematics', time: '09:00 AM', room: 'Room 201', instructor: 'Dr. Smith', status: 'ongoing' },
    { name: 'Computer Science 101', time: '11:00 AM', room: 'Lab 3', instructor: 'Prof. Johnson', status: 'upcoming' },
    { name: 'Physics Laboratory', time: '02:00 PM', room: 'Lab 1', instructor: 'Dr. Williams', status: 'upcoming' },
    { name: 'English Literature', time: '04:00 PM', room: 'Room 105', instructor: 'Ms. Davis', status: 'upcoming' },
  ];

  const recentActivity = [
    { action: 'New class scheduled', detail: 'Quantum Physics - Room 301', time: '2 hours ago' },
    { action: 'Room booking updated', detail: 'Lab 2 - Available from 3 PM', time: '4 hours ago' },
    { action: 'Faculty added', detail: 'Dr. Sarah Chen joined', time: '1 day ago' },
    { action: 'Event created', detail: 'Annual Science Fair', time: '2 days ago' },
  ];

  const getColorClasses = (color: string) => {
    const colors: any = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
    };
    return colors[color] || colors.blue;
  };

  const getStatusBadge = (status: string) => {
    if (status === 'ongoing') {
      return <Badge className="bg-green-500 hover:bg-green-600">Ongoing</Badge>;
    }
    return <Badge variant="outline" className="border-blue-500 text-blue-600">Upcoming</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-slate-800 mb-1">Dashboard</h1>
        <p className="text-slate-600">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getColorClasses(stat.color)} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-1 text-green-600 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>{stat.change}</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-1">{stat.label}</p>
                <p className="text-slate-800">{stat.value}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Upcoming Classes */}
        <Card className="lg:col-span-2 bg-white/70 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              Today's Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingClasses.map((cls, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50 hover:shadow-md transition-all border border-slate-100"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-slate-800">{cls.name}</h3>
                      {getStatusBadge(cls.status)}
                    </div>
                    <p className="text-slate-600 text-sm">
                      {cls.instructor} • {cls.room}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-blue-600">{cls.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-white/70 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-orange-600" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                  <div className="flex-1">
                    <p className="text-slate-800 text-sm">{activity.action}</p>
                    <p className="text-slate-500 text-xs">{activity.detail}</p>
                    <p className="text-slate-400 text-xs mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white border-0 shadow-xl">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <CheckCircle className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl mb-1">94%</p>
              <p className="text-blue-100 text-sm">Room Utilization</p>
            </div>
            <div className="text-center border-l-0 sm:border-l border-blue-400">
              <Users className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl mb-1">1,250</p>
              <p className="text-blue-100 text-sm">Active Students</p>
            </div>
            <div className="text-center border-l-0 sm:border-l border-blue-400">
              <Calendar className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl mb-1">32</p>
              <p className="text-blue-100 text-sm">Events This Month</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
