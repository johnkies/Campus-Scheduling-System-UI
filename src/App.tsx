import { useState } from 'react';
import { LoginPage } from './components/auth/LoginPage';
import { RegisterPage } from './components/auth/RegisterPage';
import { Dashboard } from './components/dashboard/Dashboard';
import { ClassScheduling } from './components/scheduling/ClassScheduling';
import { FacultyScheduling } from './components/faculty/FacultyScheduling';
import { RoomManagement } from './components/rooms/RoomManagement';
import { EventsCalendar } from './components/calendar/EventsCalendar';
import { Sidebar } from './components/layout/Sidebar';
import { MobileNav } from './components/layout/MobileNav';
import { TopNav } from './components/layout/TopNav';

type Page = 'login' | 'register' | 'dashboard' | 'classes' | 'faculty' | 'rooms' | 'calendar';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ name: 'John Doe', email: 'john.doe@campus.edu', role: 'Student' });

  const handleLogin = (email: string, password: string) => {
    setIsAuthenticated(true);
    setUser({ name: 'John Doe', email, role: 'Student' });
    setCurrentPage('dashboard');
  };

  const handleRegister = (name: string, email: string, role: string) => {
    setIsAuthenticated(true);
    setUser({ name, email, role });
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser({ name: '', email: '', role: '' });
    setCurrentPage('login');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-100">
        {currentPage === 'login' ? (
          <LoginPage onLogin={handleLogin} onNavigateToRegister={() => setCurrentPage('register')} />
        ) : (
          <RegisterPage onRegister={handleRegister} onNavigateToLogin={() => setCurrentPage('login')} />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} onLogout={handleLogout} />
      </div>

      {/* Main Content Area */}
      <div className="lg:ml-64">
        <TopNav user={user} onLogout={handleLogout} />
        
        <main className="p-4 md:p-6 lg:p-8 pb-24 lg:pb-8">
          {currentPage === 'dashboard' && <Dashboard />}
          {currentPage === 'classes' && <ClassScheduling />}
          {currentPage === 'faculty' && <FacultyScheduling />}
          {currentPage === 'rooms' && <RoomManagement />}
          {currentPage === 'calendar' && <EventsCalendar />}
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden">
        <MobileNav currentPage={currentPage} onNavigate={setCurrentPage} />
      </div>
    </div>
  );
}
