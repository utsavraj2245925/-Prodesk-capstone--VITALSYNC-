import { motion } from 'motion/react';
import { Users, Calendar, DollarSign, Activity, Clock } from 'lucide-react';
import Card from '../components/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const statsData = [
  { icon: Users, label: 'Total Patients', value: '1,248', change: '+12%', color: 'text-[#2563EB]', bg: 'bg-blue-50' },
  { icon: Calendar, label: 'Appointments Today', value: '24', change: '+5%', color: 'text-[#10B981]', bg: 'bg-green-50' },
  { icon: DollarSign, label: 'Revenue (Month)', value: '$45,280', change: '+18%', color: 'text-[#F59E0B]', bg: 'bg-amber-50' },
  { icon: Activity, label: 'Active Cases', value: '89', change: '-3%', color: 'text-[#8B5CF6]', bg: 'bg-purple-50' },
];

const chartData = [
  { name: 'Mon', appointments: 12 },
  { name: 'Tue', appointments: 19 },
  { name: 'Wed', appointments: 15 },
  { name: 'Thu', appointments: 22 },
  { name: 'Fri', appointments: 18 },
  { name: 'Sat', appointments: 8 },
  { name: 'Sun', appointments: 5 },
];

const recentAppointments = [
  { id: 1, name: 'John Anderson', date: '2026-04-14', time: '09:00 AM', status: 'Confirmed', condition: 'Regular Checkup' },
  { id: 2, name: 'Emma Wilson', date: '2026-04-14', time: '10:30 AM', status: 'Confirmed', condition: 'Follow-up' },
  { id: 3, name: 'Michael Brown', date: '2026-04-14', time: '11:00 AM', status: 'Pending', condition: 'Consultation' },
  { id: 4, name: 'Sarah Davis', date: '2026-04-14', time: '02:00 PM', status: 'Confirmed', condition: 'Lab Results' },
  { id: 5, name: 'James Miller', date: '2026-04-15', time: '09:30 AM', status: 'Pending', condition: 'Annual Physical' },
];

export default function DoctorDashboard() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl text-[#111827] mb-2">Dashboard Overview</h1>
        <p className="text-[#6B7280]">Welcome back, Dr. Johnson! Here's your summary for today.</p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsData.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-[#6B7280] mb-1">{stat.label}</p>
                    <p className="text-3xl text-[#111827] mb-1">{stat.value}</p>
                    <p className={`text-sm ${stat.change.startsWith('+') ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`p-3 ${stat.bg} rounded-xl`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Availability Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg text-[#111827] mb-1">Availability Status</h3>
              <p className="text-sm text-[#6B7280]">Toggle your availability for new appointments</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#10B981]"></div>
              <span className="ml-3 text-sm text-[#111827]">Online</span>
            </label>
          </div>
        </Card>
      </motion.div>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-8"
      >
        <Card>
          <h3 className="text-lg text-[#111827] mb-6">Appointments This Week</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="name" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line
                type="monotone"
                dataKey="appointments"
                stroke="#2563EB"
                strokeWidth={3}
                dot={{ fill: '#2563EB', r: 6 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </motion.div>

      {/* Recent Appointments Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg text-[#111827]">Today's Appointments</h3>
            <button className="text-sm text-[#2563EB] hover:text-[#1D4ED8]">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E5E7EB]">
                  <th className="text-left py-3 px-4 text-sm text-[#6B7280]">Patient Name</th>
                  <th className="text-left py-3 px-4 text-sm text-[#6B7280]">Date</th>
                  <th className="text-left py-3 px-4 text-sm text-[#6B7280]">Time</th>
                  <th className="text-left py-3 px-4 text-sm text-[#6B7280]">Condition</th>
                  <th className="text-left py-3 px-4 text-sm text-[#6B7280]">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentAppointments.map((appointment, index) => (
                  <motion.tr
                    key={appointment.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    className="border-b border-[#F3F4F6] hover:bg-[#F9FAFB] transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#3B82F6] flex items-center justify-center text-white text-sm">
                          {appointment.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-[#111827]">{appointment.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-[#6B7280]">{appointment.date}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2 text-[#6B7280]">
                        <Clock className="w-4 h-4" />
                        {appointment.time}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-[#6B7280]">{appointment.condition}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
                          appointment.status === 'Confirmed'
                            ? 'bg-green-50 text-[#10B981]'
                            : 'bg-yellow-50 text-[#F59E0B]'
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
