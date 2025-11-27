import { useState } from 'react';
import { Plus, Search, Filter, Clock, MapPin, User, Edit, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export function ClassScheduling() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const classes = [
    {
      id: 1,
      course: 'Advanced Mathematics',
      code: 'MATH 401',
      section: 'A',
      instructor: 'Dr. Sarah Smith',
      time: 'Mon, Wed 09:00-10:30 AM',
      room: 'Room 201',
      capacity: 40,
      enrolled: 35,
      status: 'active',
    },
    {
      id: 2,
      course: 'Computer Science 101',
      code: 'CS 101',
      section: 'B',
      instructor: 'Prof. John Johnson',
      time: 'Tue, Thu 11:00 AM-12:30 PM',
      room: 'Lab 3',
      capacity: 30,
      enrolled: 30,
      status: 'full',
    },
    {
      id: 3,
      course: 'Physics Laboratory',
      code: 'PHY 201',
      section: 'A',
      instructor: 'Dr. Emily Williams',
      time: 'Wed, Fri 02:00-04:00 PM',
      room: 'Lab 1',
      capacity: 25,
      enrolled: 22,
      status: 'active',
    },
    {
      id: 4,
      course: 'English Literature',
      code: 'ENG 301',
      section: 'C',
      instructor: 'Ms. Rachel Davis',
      time: 'Mon, Wed, Fri 04:00-05:00 PM',
      room: 'Room 105',
      capacity: 35,
      enrolled: 28,
      status: 'active',
    },
    {
      id: 5,
      course: 'Database Systems',
      code: 'CS 305',
      section: 'A',
      instructor: 'Prof. Michael Brown',
      time: 'Tue, Thu 01:00-02:30 PM',
      room: 'Lab 2',
      capacity: 28,
      enrolled: 15,
      status: 'active',
    },
    {
      id: 6,
      course: 'Organic Chemistry',
      code: 'CHEM 202',
      section: 'B',
      instructor: 'Dr. Lisa Anderson',
      time: 'Mon, Wed 10:00-11:30 AM',
      room: 'Lab 4',
      capacity: 24,
      enrolled: 24,
      status: 'full',
    },
  ];

  const getStatusBadge = (status: string) => {
    if (status === 'full') {
      return <Badge className="bg-red-500 hover:bg-red-600">Full</Badge>;
    }
    return <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>;
  };

  const getEnrollmentColor = (enrolled: number, capacity: number) => {
    const percentage = (enrolled / capacity) * 100;
    if (percentage >= 90) return 'text-red-600';
    if (percentage >= 70) return 'text-orange-600';
    return 'text-green-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-slate-800 mb-1">Class Scheduling</h1>
          <p className="text-slate-600">Manage and schedule all classes</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg">
              <Plus className="w-5 h-5 mr-2" />
              Add New Class
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Schedule New Class</DialogTitle>
              <DialogDescription>Add a new class to the scheduling system</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="course">Course Name</Label>
                  <Input id="course" placeholder="e.g., Advanced Mathematics" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="code">Course Code</Label>
                  <Input id="code" placeholder="e.g., MATH 401" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="section">Section</Label>
                  <Input id="section" placeholder="e.g., A" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instructor">Instructor</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select instructor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="smith">Dr. Sarah Smith</SelectItem>
                      <SelectItem value="johnson">Prof. John Johnson</SelectItem>
                      <SelectItem value="williams">Dr. Emily Williams</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="room">Room</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select room" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="201">Room 201</SelectItem>
                      <SelectItem value="202">Room 202</SelectItem>
                      <SelectItem value="lab1">Lab 1</SelectItem>
                      <SelectItem value="lab2">Lab 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="capacity">Capacity</Label>
                  <Input id="capacity" type="number" placeholder="e.g., 40" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Schedule</Label>
                <Input id="time" placeholder="e.g., Mon, Wed 09:00-10:30 AM" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setIsDialogOpen(false)}>
                Schedule Class
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card className="bg-white/70 backdrop-blur-sm border-slate-200">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search classes, instructors, rooms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 rounded-xl"
              />
            </div>
            <Button variant="outline" className="sm:w-auto rounded-xl">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Desktop Table View */}
      <div className="hidden lg:block">
        <Card className="bg-white/70 backdrop-blur-sm border-slate-200">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left px-6 py-4 text-slate-700 text-sm">Course</th>
                    <th className="text-left px-6 py-4 text-slate-700 text-sm">Section</th>
                    <th className="text-left px-6 py-4 text-slate-700 text-sm">Instructor</th>
                    <th className="text-left px-6 py-4 text-slate-700 text-sm">Time</th>
                    <th className="text-left px-6 py-4 text-slate-700 text-sm">Room</th>
                    <th className="text-left px-6 py-4 text-slate-700 text-sm">Enrollment</th>
                    <th className="text-left px-6 py-4 text-slate-700 text-sm">Status</th>
                    <th className="text-left px-6 py-4 text-slate-700 text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {classes.map((cls) => (
                    <tr key={cls.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-slate-800">{cls.course}</p>
                          <p className="text-slate-500 text-sm">{cls.code}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{cls.section}</td>
                      <td className="px-6 py-4 text-slate-600">{cls.instructor}</td>
                      <td className="px-6 py-4 text-slate-600 text-sm">{cls.time}</td>
                      <td className="px-6 py-4 text-slate-600">{cls.room}</td>
                      <td className="px-6 py-4">
                        <span className={getEnrollmentColor(cls.enrolled, cls.capacity)}>
                          {cls.enrolled}/{cls.capacity}
                        </span>
                      </td>
                      <td className="px-6 py-4">{getStatusBadge(cls.status)}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Edit className="w-4 h-4 text-blue-600" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4">
        {classes.map((cls) => (
          <Card key={cls.id} className="bg-white/70 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-slate-800 mb-1">{cls.course}</h3>
                  <p className="text-slate-500 text-sm">{cls.code} • Section {cls.section}</p>
                </div>
                {getStatusBadge(cls.status)}
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <User className="w-4 h-4" />
                  <span>{cls.instructor}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{cls.time}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{cls.room}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                <div>
                  <p className="text-slate-500 text-xs">Enrollment</p>
                  <p className={`${getEnrollmentColor(cls.enrolled, cls.capacity)}`}>
                    {cls.enrolled}/{cls.capacity} students
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-xl">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-xl">
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
