import { motion } from 'motion/react';
import { Calendar, Clock, Search, Filter } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const appointments = [
  {
    id: 1,
    patientName: 'John Anderson',
    date: '2026-04-14',
    time: '09:00 AM',
    type: 'Regular Checkup',
    status: 'Confirmed',
    initials: 'JA'
  },
  {
    id: 2,
    patientName: 'Emma Wilson',
    date: '2026-04-14',
    time: '10:30 AM',
    type: 'Follow-up',
    status: 'Confirmed',
    initials: 'EW'
  },
  {
    id: 3,
    patientName: 'Michael Brown',
    date: '2026-04-14',
    time: '11:00 AM',
    type: 'Consultation',
    status: 'Pending',
    initials: 'MB'
  },
  {
    id: 4,
    patientName: 'Sarah Davis',
    date: '2026-04-14',
    time: '02:00 PM',
    type: 'Lab Results',
    status: 'Confirmed',
    initials: 'SD'
  },
  {
    id: 5,
    patientName: 'James Miller',
    date: '2026-04-15',
    time: '09:30 AM',
    type: 'Annual Physical',
    status: 'Confirmed',
    initials: 'JM'
  },
  {
    id: 6,
    patientName: 'Lisa Thompson',
    date: '2026-04-15',
    time: '11:00 AM',
    type: 'Consultation',
    status: 'Cancelled',
    initials: 'LT'
  },
];

export default function Appointments() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl text-[#111827] mb-2">Appointments</h1>
        <p className="text-[#6B7280]">Manage and view all appointments</p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <Card>
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
              <input
                type="text"
                placeholder="Search appointments..."
                className="w-full pl-12 pr-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-5 h-5 mr-2" />
              Filter
            </Button>
            <Button>
              <Calendar className="w-5 h-5 mr-2" />
              New Appointment
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Appointments List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <div className="space-y-4">
            {appointments.map((appointment, index) => (
              <motion.div
                key={appointment.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="flex items-center justify-between p-4 rounded-xl bg-[#F9FAFB] hover:bg-[#F3F4F6] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#3B82F6] flex items-center justify-center text-white">
                    {appointment.initials}
                  </div>
                  <div>
                    <div className="text-sm text-[#111827] mb-1">{appointment.patientName}</div>
                    <div className="text-xs text-[#6B7280]">{appointment.type}</div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-1">
                      <Calendar className="w-4 h-4" />
                      {appointment.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <Clock className="w-4 h-4" />
                      {appointment.time}
                    </div>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      appointment.status === 'Confirmed'
                        ? 'bg-green-50 text-[#10B981]'
                        : appointment.status === 'Pending'
                        ? 'bg-yellow-50 text-[#F59E0B]'
                        : 'bg-red-50 text-[#EF4444]'
                    }`}
                  >
                    {appointment.status}
                  </span>

                  <Button variant="outline" className="text-sm py-2 px-4">
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
