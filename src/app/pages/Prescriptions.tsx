import { motion } from 'motion/react';
import { FileText, Search, Filter, Eye } from 'lucide-react';
import { useNavigate } from 'react-router';
import Card from '../components/Card';
import Button from '../components/Button';

const prescriptions = [
  {
    id: 1,
    patientName: 'John Anderson',
    medicine: 'Lisinopril, Aspirin',
    date: '2026-03-15',
    diagnosis: 'Hypertension',
    status: 'Active',
    initials: 'JA'
  },
  {
    id: 2,
    patientName: 'Emma Wilson',
    medicine: 'Metformin',
    date: '2026-03-10',
    diagnosis: 'Type 2 Diabetes',
    status: 'Active',
    initials: 'EW'
  },
  {
    id: 3,
    patientName: 'Michael Brown',
    medicine: 'Ibuprofen',
    date: '2026-03-05',
    diagnosis: 'Acute Pain',
    status: 'Completed',
    initials: 'MB'
  },
  {
    id: 4,
    patientName: 'Sarah Davis',
    medicine: 'Amoxicillin',
    date: '2026-02-28',
    diagnosis: 'Bacterial Infection',
    status: 'Completed',
    initials: 'SD'
  },
  {
    id: 5,
    patientName: 'James Miller',
    medicine: 'Atorvastatin',
    date: '2026-02-20',
    diagnosis: 'High Cholesterol',
    status: 'Active',
    initials: 'JM'
  },
];

export default function Prescriptions() {
  const navigate = useNavigate();

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl text-[#111827] mb-2">Prescriptions</h1>
        <p className="text-[#6B7280]">View and manage prescriptions</p>
      </motion.div>

      {/* Search and Filter */}
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
                placeholder="Search prescriptions..."
                className="w-full pl-12 pr-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-5 h-5 mr-2" />
              Filter
            </Button>
            <Button>
              <FileText className="w-5 h-5 mr-2" />
              New Prescription
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Prescriptions List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <div className="space-y-4">
            {prescriptions.map((prescription, index) => (
              <motion.div
                key={prescription.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="flex items-center justify-between p-4 rounded-xl bg-[#F9FAFB] hover:bg-[#F3F4F6] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#3B82F6] flex items-center justify-center text-white">
                    {prescription.initials}
                  </div>
                  <div>
                    <div className="text-sm text-[#111827] mb-1">{prescription.patientName}</div>
                    <div className="text-xs text-[#6B7280]">{prescription.diagnosis}</div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-sm text-[#6B7280] max-w-xs">
                    {prescription.medicine}
                  </div>

                  <div className="text-sm text-[#6B7280]">
                    {prescription.date}
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      prescription.status === 'Active'
                        ? 'bg-green-50 text-[#10B981]'
                        : 'bg-gray-100 text-[#6B7280]'
                    }`}
                  >
                    {prescription.status}
                  </span>

                  <Button
                    variant="outline"
                    className="text-sm py-2 px-4"
                    onClick={() => navigate(`/prescription/${prescription.id}`)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View
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
