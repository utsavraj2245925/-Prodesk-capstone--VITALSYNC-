import { Outlet, useNavigate, useLocation } from 'react-router';
import { motion } from 'motion/react';
import {
  LayoutDashboard,
  Calendar,
  Users,
  FileText,
  Settings as SettingsIcon,
  LogOut,
  Search,
  Bell,
  Heart
} from 'lucide-react';

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Calendar, label: 'Appointments', path: '/dashboard/appointments' },
    { icon: Users, label: 'Patients', path: '/dashboard/patients' },
    { icon: FileText, label: 'Prescriptions', path: '/dashboard/prescriptions' },
    { icon: SettingsIcon, label: 'Settings', path: '/dashboard/settings' },
  ];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex bg-[#F9FAFB]">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="w-64 bg-[#1E3A8A] text-white flex flex-col fixed h-full z-20"
      >
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-xl">
              <Heart className="w-6 h-6" />
            </div>
            <span className="text-xl">VitalSync</span>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path ||
                           (item.path === '/dashboard' && location.pathname.startsWith('/dashboard') && location.pathname.split('/').length === 2);
            const Icon = item.icon;

            return (
              <motion.button
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-[#2563EB] shadow-lg shadow-blue-500/30'
                    : 'hover:bg-white/10'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </motion.button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/20 transition-all text-red-200"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Top Navbar */}
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="bg-white border-b border-[#E5E7EB] px-8 py-4 sticky top-0 z-10"
        >
          <div className="flex items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
                <input
                  type="text"
                  placeholder="Search patients, appointments..."
                  className="w-full pl-12 pr-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4 ml-8">
              {/* Notifications */}
              <button className="relative p-2 hover:bg-[#F3F4F6] rounded-xl transition-all">
                <Bell className="w-6 h-6 text-[#374151]" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#EF4444] rounded-full"></span>
              </button>

              {/* User Profile */}
              <div className="flex items-center gap-3 pl-4 border-l border-[#E5E7EB]">
                <div className="text-right">
                  <div className="text-sm text-[#111827]">Dr. Sarah Johnson</div>
                  <div className="text-xs text-[#6B7280]">Cardiologist</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#3B82F6] flex items-center justify-center text-white">
                  SJ
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Page Content */}
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
