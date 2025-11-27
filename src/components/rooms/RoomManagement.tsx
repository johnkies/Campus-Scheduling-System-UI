import { useState } from 'react';
import { Plus, Search, Filter, MapPin, Users, Monitor, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export function RoomManagement() {
  const [searchQuery, setSearchQuery] = useState('');

  const rooms = [
    {
      id: 1,
      name: 'Room 201',
      building: 'Science Building',
      floor: '2nd Floor',
      capacity: 40,
      type: 'Classroom',
      features: ['Projector', 'Whiteboard', 'AC'],
      status: 'available',
      currentClass: null,
      nextClass: '11:00 AM - CS 101',
    },
    {
      id: 2,
      name: 'Lab 3',
      building: 'Tech Center',
      floor: '3rd Floor',
      capacity: 30,
      type: 'Computer Lab',
      features: ['30 Computers', 'Projector', 'AC'],
      status: 'occupied',
      currentClass: 'CS 101 - Prof. Johnson',
      nextClass: '02:00 PM - Web Development',
    },
    {
      id: 3,
      name: 'Lab 1',
      building: 'Science Building',
      floor: '1st Floor',
      capacity: 25,
      type: 'Science Lab',
      features: ['Lab Equipment', 'Safety Gear', 'Storage'],
      status: 'available',
      currentClass: null,
      nextClass: '02:00 PM - Physics Lab',
    },
    {
      id: 4,
      name: 'Room 105',
      building: 'Arts Building',
      floor: '1st Floor',
      capacity: 35,
      type: 'Classroom',
      features: ['Projector', 'Audio System', 'AC'],
      status: 'occupied',
      currentClass: 'English Lit - Ms. Davis',
      nextClass: 'Available after 5 PM',
    },
    {
      id: 5,
      name: 'Lab 2',
      building: 'Tech Center',
      floor: '2nd Floor',
      capacity: 28,
      type: 'Computer Lab',
      features: ['28 Computers', 'Projector', 'Whiteboard'],
      status: 'maintenance',
      currentClass: null,
      nextClass: 'Under maintenance',
    },
    {
      id: 6,
      name: 'Auditorium A',
      building: 'Main Building',
      floor: 'Ground Floor',
      capacity: 200,
      type: 'Auditorium',
      features: ['Stage', 'Sound System', 'Lighting', 'AC'],
      status: 'available',
      currentClass: null,
      nextClass: '03:00 PM - Seminar',
    },
  ];

  const getStatusBadge = (status: string) => {
    if (status === 'available') {
      return <Badge className="bg-green-500 hover:bg-green-600">Available</Badge>;
    }
    if (status === 'occupied') {
      return <Badge className="bg-blue-500 hover:bg-blue-600">Occupied</Badge>;
    }
    return <Badge className="bg-orange-500 hover:bg-orange-600">Maintenance</Badge>;
  };

  const getStatusIcon = (status: string) => {
    if (status === 'available') {
      return <CheckCircle className="w-5 h-5 text-green-600" />;
    }
    if (status === 'occupied') {
      return <Clock className="w-5 h-5 text-blue-600" />;
    }
    return <XCircle className="w-5 h-5 text-orange-600" />;
  };

  const availableRooms = rooms.filter((r) => r.status === 'available');
  const occupiedRooms = rooms.filter((r) => r.status === 'occupied');
  const maintenanceRooms = rooms.filter((r) => r.status === 'maintenance');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-slate-800 mb-1">Room Management</h1>
          <p className="text-slate-600">Manage room availability and bookings</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg">
          <Plus className="w-5 h-5 mr-2" />
          Add Room
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="bg-white/70 backdrop-blur-sm border-slate-200">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm mb-1">Available</p>
                <p className="text-slate-800">{availableRooms.length} Rooms</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/70 backdrop-blur-sm border-slate-200">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm mb-1">Occupied</p>
                <p className="text-slate-800">{occupiedRooms.length} Rooms</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/70 backdrop-blur-sm border-slate-200">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm mb-1">Maintenance</p>
                <p className="text-slate-800">{maintenanceRooms.length} Rooms</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-white/70 backdrop-blur-sm border-slate-200">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search rooms by name or building..."
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

      {/* Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="all">All Rooms</TabsTrigger>
          <TabsTrigger value="available">Available</TabsTrigger>
          <TabsTrigger value="occupied">Occupied</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <RoomGrid rooms={rooms} getStatusBadge={getStatusBadge} getStatusIcon={getStatusIcon} />
        </TabsContent>
        <TabsContent value="available">
          <RoomGrid rooms={availableRooms} getStatusBadge={getStatusBadge} getStatusIcon={getStatusIcon} />
        </TabsContent>
        <TabsContent value="occupied">
          <RoomGrid rooms={occupiedRooms} getStatusBadge={getStatusBadge} getStatusIcon={getStatusIcon} />
        </TabsContent>
        <TabsContent value="maintenance">
          <RoomGrid rooms={maintenanceRooms} getStatusBadge={getStatusBadge} getStatusIcon={getStatusIcon} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function RoomGrid({ rooms, getStatusBadge, getStatusIcon }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {rooms.map((room: any) => (
        <Card key={room.id} className="bg-white/70 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                {getStatusIcon(room.status)}
                <div>
                  <CardTitle className="text-slate-800">{room.name}</CardTitle>
                  <p className="text-slate-500 text-sm">{room.type}</p>
                </div>
              </div>
              {getStatusBadge(room.status)}
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <MapPin className="w-4 h-4" />
                <span>
                  {room.building} - {room.floor}
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <Users className="w-4 h-4" />
                <span>Capacity: {room.capacity} people</span>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <p className="text-slate-700 text-sm mb-2">Features:</p>
                <div className="flex flex-wrap gap-2">
                  {room.features.map((feature: string, index: number) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              {room.currentClass && (
                <div className="pt-3 border-t border-slate-200">
                  <p className="text-slate-700 text-sm mb-1">Current Class:</p>
                  <p className="text-slate-600 text-sm">{room.currentClass}</p>
                </div>
              )}

              <div className={`${!room.currentClass ? 'pt-3 border-t border-slate-200' : ''}`}>
                <p className="text-slate-700 text-sm mb-1">Next:</p>
                <p className="text-slate-600 text-sm">{room.nextClass}</p>
              </div>

              <Button variant="outline" className="w-full rounded-xl mt-3">
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
