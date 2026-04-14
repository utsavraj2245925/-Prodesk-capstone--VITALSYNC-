import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Check } from 'lucide-react';
import { useNavigate } from 'react-router';
import Card from '../components/Card';
import Button from '../components/Button';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    rating: 4.9,
    patients: 1248,
    available: true,
    initials: 'SJ'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    rating: 4.8,
    patients: 987,
    available: true,
    initials: 'MC'
  },
  {
    id: 3,
    name: 'Dr. Emily Roberts',
    specialty: 'Pediatrician',
    rating: 4.9,
    patients: 1456,
    available: false,
    initials: 'ER'
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    specialty: 'Orthopedic',
    rating: 4.7,
    patients: 876,
    available: true,
    initials: 'JW'
  },
];

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
];

export default function AppointmentBooking() {
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState('2026-04-18');
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleBooking = () => {
    if (selectedDoctor && selectedDate && selectedTime) {
      alert('Appointment booked successfully!');
      navigate('/dashboard/patient');
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#6B7280] hover:text-[#2563EB] mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-3xl text-[#111827] mb-2">Book Appointment</h1>
          <p className="text-[#6B7280]">Select a doctor and choose your preferred time</p>
        </motion.div>

        {/* Doctor Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-xl text-[#111827] mb-4">Select Doctor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
              >
                <Card
                  hover
                  className={`cursor-pointer transition-all ${
                    selectedDoctor === doctor.id
                      ? 'ring-2 ring-[#2563EB] bg-blue-50/50'
                      : doctor.available
                      ? ''
                      : 'opacity-50 cursor-not-allowed'
                  }`}
                  onClick={() => doctor.available && setSelectedDoctor(doctor.id)}
                >
                  <div className="relative">
                    {selectedDoctor === doctor.id && (
                      <div className="absolute top-0 right-0 w-6 h-6 bg-[#2563EB] rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#3B82F6] flex items-center justify-center text-white text-2xl mb-3">
                        {doctor.initials}
                      </div>
                      <h3 className="text-base text-[#111827] mb-1">{doctor.name}</h3>
                      <p className="text-sm text-[#6B7280] mb-2">{doctor.specialty}</p>
                      <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                        <span className="flex items-center gap-1">
                          ⭐ {doctor.rating}
                        </span>
                        <span>•</span>
                        <span>{doctor.patients} patients</span>
                      </div>
                      <div className="mt-3">
                        <span
                          className={`text-xs px-3 py-1 rounded-full ${
                            doctor.available
                              ? 'bg-green-50 text-[#10B981]'
                              : 'bg-red-50 text-[#EF4444]'
                          }`}
                        >
                          {doctor.available ? 'Available' : 'Unavailable'}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Date and Time Selection */}
        {selectedDoctor && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Date Picker */}
            <Card>
              <h3 className="text-lg text-[#111827] mb-4">Select Date</h3>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
              />
            </Card>

            {/* Time Slots */}
            <Card>
              <h3 className="text-lg text-[#111827] mb-4">Select Time</h3>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`px-4 py-3 rounded-xl transition-all ${
                      selectedTime === time
                        ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-500/30'
                        : 'bg-[#F9FAFB] text-[#374151] hover:bg-[#E5E7EB]'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </Card>
          </motion.div>
        )}

        {/* Confirm Booking */}
        {selectedDoctor && selectedDate && selectedTime && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-green-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg text-[#111827] mb-2">Confirm Your Appointment</h3>
                  <p className="text-sm text-[#6B7280]">
                    {doctors.find(d => d.id === selectedDoctor)?.name} • {selectedDate} at {selectedTime}
                  </p>
                </div>
                <Button onClick={handleBooking}>
                  Confirm Booking
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}
