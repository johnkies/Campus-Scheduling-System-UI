import { LayoutDashboard, BookOpen, Users, DoorOpen, Calendar } from 'lucide-react';

interface MobileNavProps {
  currentPage: string;
  onNavigate: (page: any) => void;
}

export function MobileNav({ currentPage, onNavigate }: MobileNavProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Home', icon: LayoutDashboard },
    { id: 'classes', label: 'Classes', icon: BookOpen },
    { id: 'faculty', label: 'Faculty', icon: Users },
    { id: 'rooms', label: 'Rooms', icon: DoorOpen },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-slate-200 shadow-lg z-50">
      <div className="flex items-center justify-around px-2 py-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 min-w-[64px] ${
                isActive
                  ? 'text-blue-600'
                  : 'text-slate-500'
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'scale-110' : ''} transition-transform`} />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
