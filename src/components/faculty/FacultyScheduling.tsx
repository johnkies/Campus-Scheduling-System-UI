import { useState } from 'react';
import { Plus, Search, Filter, Mail, Phone, Calendar, User } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';

export function FacultyScheduling() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState<any>(null);

  const faculty = [
    {
      id: 1,
      name: 'Dr. Sarah Smith',
      department: 'Mathematics',
      email: 's.smith@campus.edu',
      phone: '+1 (555) 123-4567',
      courses: 3,
      status: 'available',
      schedule: [
        { day: 'Monday', times: ['09:00-10:30 AM', '02:00-03:30 PM'] },
        { day: 'Wednesday', times: ['09:00-10:30 AM', '02:00-03:30 PM'] },
        { day: 'Friday', times: ['11:00 AM-12:30 PM'] },
      ],
    },
    {
      id: 2,
      name: 'Prof. John Johnson',
      department: 'Computer Science',
      email: 'j.johnson@campus.edu',
      phone: '+1 (555) 234-5678',
      courses: 4,
      status: 'busy',
      schedule: [
        { day: 'Tuesday', times: ['11:00 AM-12:30 PM', '03:00-04:30 PM'] },
        { day: 'Thursday', times: ['11:00 AM-12:30 PM', '03:00-04:30 PM'] },
      ],
    },
    {
      id: 3,
      name: 'Dr. Emily Williams',
      department: 'Physics',
      email: 'e.williams@campus.edu',
      phone: '+1 (555) 345-6789',
      courses: 2,
      status: 'available',
      schedule: [
        { day: 'Wednesday', times: ['02:00-04:00 PM'] },
        { day: 'Friday', times: ['02:00-04:00 PM'] },
      ],
    },
    {
      id: 4,
      name: 'Ms. Rachel Davis',
      department: 'English',
      email: 'r.davis@campus.edu',
      phone: '+1 (555) 456-7890',
      courses: 5,
      status: 'busy',
      schedule: [
        { day: 'Monday', times: ['04:00-05:00 PM'] },
        { day: 'Wednesday', times: ['04:00-05:00 PM'] },
        { day: 'Friday', times: ['04:00-05:00 PM'] },
      ],
    },
    {
      id: 5,
      name: 'Prof. Michael Brown',
      department: 'Computer Science',
      email: 'm.brown@campus.edu',
      phone: '+1 (555) 567-8901',
      courses: 3,
      status: 'available',
      schedule: [
        { day: 'Tuesday', times: ['01:00-02:30 PM'] },
        { day: 'Thursday', times: ['01:00-02:30 PM'] },
      ],
    },
    {
      id: 6,
      name: 'Dr. Lisa Anderson',
      department: 'Chemistry',
      email: 'l.anderson@campus.edu',
      phone: '+1 (555) 678-9012',
      courses: 2,
      status: 'available',
      schedule: [
        { day: 'Monday', times: ['10:00-11:30 AM'] },
        { day: 'Wednesday', times: ['10:00-11:30 AM'] },
      ],
    },
  ];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const getStatusBadge = (status: string) => {
    if (status === 'busy') {
      return <Badge className="bg-orange-500 hover:bg-orange-600">Busy</Badge>;
    }
    return <Badge className="bg-green-500 hover:bg-green-600">Available</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-slate-800 mb-1">Faculty Management</h1>
          <p className="text-slate-600">Manage faculty schedules and assignments</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg">
          <Plus className="w-5 h-5 mr-2" />
          Add Faculty
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-white/70 backdrop-blur-sm border-slate-200">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search faculty by name or department..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 rounded-xl"
              />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="sm:w-auto rounded-xl">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filter Faculty</SheetTitle>
                </SheetHeader>
                <div className="space-y-4 mt-6">
                  <div>
                    <h3 className="text-sm text-slate-700 mb-2">Department</h3>
                    <div className="space-y-2">
                      {['Mathematics', 'Computer Science', 'Physics', 'Chemistry', 'English'].map((dept) => (
                        <label key={dept} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600" />
                          <span className="text-slate-600 text-sm">{dept}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm text-slate-700 mb-2">Status</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600" />
                        <span className="text-slate-600 text-sm">Available</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600" />
                        <span className="text-slate-600 text-sm">Busy</span>
                      </label>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </CardContent>
      </Card>

      {/* Desktop Grid View */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculty.map((member) => (
          <Card
            key={member.id}
            className="bg-white/70 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedFaculty(member)}
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="w-14 h-14">
                  <AvatarFallback className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                    {getInitials(member.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-slate-800 mb-1">{member.name}</h3>
                  <p className="text-slate-500 text-sm">{member.department}</p>
                  {getStatusBadge(member.status)}
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <Mail className="w-4 h-4" />
                  <span className="truncate">{member.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <Phone className="w-4 h-4" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{member.courses} courses</span>
                </div>
              </div>

              <Button variant="outline" className="w-full rounded-xl">
                View Schedule
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mobile List View */}
      <div className="md:hidden space-y-4">
        {faculty.map((member) => (
          <Card
            key={member.id}
            className="bg-white/70 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow"
          >
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                    {getInitials(member.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-slate-800">{member.name}</h3>
                  <p className="text-slate-500 text-sm">{member.department}</p>
                </div>
                {getStatusBadge(member.status)}
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <Mail className="w-4 h-4" />
                  <span className="truncate">{member.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{member.courses} courses assigned</span>
                </div>
              </div>

              <Button variant="outline" className="w-full rounded-xl" onClick={() => setSelectedFaculty(member)}>
                View Schedule
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Schedule Detail Modal */}
      {selectedFaculty && (
        <Sheet open={!!selectedFaculty} onOpenChange={() => setSelectedFaculty(null)}>
          <SheetContent className="sm:max-w-md overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Weekly Schedule</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <div className="flex items-center gap-4 mb-6 p-4 bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl">
                <Avatar className="w-16 h-16">
                  <AvatarFallback className="bg-gradient-to-br from-blue-600 to-blue-800 text-white text-lg">
                    {getInitials(selectedFaculty.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-slate-800">{selectedFaculty.name}</h3>
                  <p className="text-slate-500 text-sm">{selectedFaculty.department}</p>
                  {getStatusBadge(selectedFaculty.status)}
                </div>
              </div>

              <div className="space-y-4">
                {selectedFaculty.schedule.map((item: any, index: number) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                    <h4 className="text-slate-800 mb-2">{item.day}</h4>
                    <div className="space-y-2">
                      {item.times.map((time: string, timeIndex: number) => (
                        <div key={timeIndex} className="bg-slate-50 rounded-lg p-3">
                          <p className="text-slate-600 text-sm">{time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
}
