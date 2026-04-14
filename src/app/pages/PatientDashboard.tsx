import { motion } from 'motion/react';
import { Calendar, Clock, FileText, Heart, Phone, Mail, MapPin } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useNavigate } from 'react-router';

const upcomingAppointment = {
  doctor: 'Dr. Sarah Johnson',
  specialty: 'Cardiologist',
  date: '2026-04-18',
  time: '10:30 AM',
  type: 'Follow-up Consultation',
  location: 'Building A, Room 301'
};

const medicalHistory = [
  { date: '2026-03-15', condition: 'Annual Checkup', doctor: 'Dr. Johnson' },
  { date: '2026-02-10', condition: 'Blood Pressure Monitoring', doctor: 'Dr. Johnson' },
  { date: '2025-12-05', condition: 'ECG Test', doctor: 'Dr. Johnson' },
];

const recentPrescriptions = [
  { id: 1, medicine: 'Lisinopril', dosage: '10mg daily', prescribedBy: 'Dr. Johnson', date: '2026-03-15' },
  { id: 2, medicine: 'Aspirin', dosage: '81mg daily', prescribedBy: 'Dr. Johnson', date: '2026-03-15' },
];

export default function PatientDashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl text-[#111827] mb-2">Patient Dashboard</h1>
        <p className="text-[#6B7280]">Manage your health and appointments</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Upcoming Appointment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2"
        >
          <Card>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-lg text-[#111827] mb-1">Upcoming Appointment</h3>
                <p className="text-sm text-[#6B7280]">Your next scheduled visit</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-xl">
                <Calendar className="w-6 h-6 text-[#2563EB]" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#3B82F6] flex items-center justify-center text-white text-xl">
                  SJ
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-[#111827] mb-1">{upcomingAppointment.doctor}</h4>
                  <p className="text-sm text-[#6B7280] mb-3">{upcomingAppointment.specialty}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <Calendar className="w-4 h-4" />
                      {upcomingAppointment.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <Clock className="w-4 h-4" />
                      {upcomingAppointment.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <FileText className="w-4 h-4" />
                      {upcomingAppointment.type}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <MapPin className="w-4 h-4" />
                      {upcomingAppointment.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-[#E5E7EB]">
                <Button variant="primary" className="flex-1">Join Video Call</Button>
                <Button variant="outline" className="flex-1">Reschedule</Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <h3 className="text-lg text-[#111827] mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button
                onClick={() => navigate('/book-appointment')}
                className="w-full flex items-center gap-3 p-4 rounded-xl bg-[#F9FAFB] hover:bg-[#F3F4F6] transition-all text-left"
              >
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <div className="text-sm text-[#111827]">Book Appointment</div>
                  <div className="text-xs text-[#6B7280]">Schedule a new visit</div>
                </div>
              </button>

              <button
                onClick={() => navigate('/medical-history')}
                className="w-full flex items-center gap-3 p-4 rounded-xl bg-[#F9FAFB] hover:bg-[#F3F4F6] transition-all text-left"
              >
                <div className="p-2 bg-green-50 rounded-lg">
                  <FileText className="w-5 h-5 text-[#10B981]" />
                </div>
                <div>
                  <div className="text-sm text-[#111827]">Medical History</div>
                  <div className="text-xs text-[#6B7280]">View past records</div>
                </div>
              </button>

              <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-[#F9FAFB] hover:bg-[#F3F4F6] transition-all text-left">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <Heart className="w-5 h-5 text-[#8B5CF6]" />
                </div>
                <div>
                  <div className="text-sm text-[#111827]">Health Metrics</div>
                  <div className="text-xs text-[#6B7280]">Track your vitals</div>
                </div>
              </button>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Medical History Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg text-[#111827]">Recent Medical History</h3>
            <button
              onClick={() => navigate('/medical-history')}
              className="text-sm text-[#2563EB] hover:text-[#1D4ED8]"
            >
              View All
            </button>
          </div>
          <div className="space-y-4">
            {medicalHistory.map((record, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#F9FAFB] hover:bg-[#F3F4F6] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#2563EB]">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-[#111827] mb-1">{record.condition}</div>
                  <div className="text-xs text-[#6B7280]">
                    {record.date} • {record.doctor}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Prescriptions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg text-[#111827]">Active Prescriptions</h3>
            <button className="text-sm text-[#2563EB] hover:text-[#1D4ED8]">View All</button>
          </div>
          <div className="space-y-3">
            {recentPrescriptions.map((prescription, index) => (
              <motion.div
                key={prescription.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="flex items-center justify-between p-4 rounded-xl border border-[#E5E7EB] hover:border-[#2563EB] transition-all"
              >
                <div>
                  <div className="text-sm text-[#111827] mb-1">{prescription.medicine}</div>
                  <div className="text-xs text-[#6B7280]">
                    {prescription.dosage} • Prescribed by {prescription.prescribedBy}
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/prescription/${prescription.id}`)}
                  className="text-sm text-[#2563EB] hover:text-[#1D4ED8]"
                >
                  View
                </button>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
