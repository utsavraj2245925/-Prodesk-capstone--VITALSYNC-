import { motion } from 'motion/react';
import { Users, Search, Filter, UserPlus } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const patients = [
  { id: 1, name: 'John Anderson', age: 45, gender: 'Male', lastVisit: '2026-04-10', status: 'Active', initials: 'JA' },
  { id: 2, name: 'Emma Wilson', age: 32, gender: 'Female', lastVisit: '2026-04-08', status: 'Active', initials: 'EW' },
  { id: 3, name: 'Michael Brown', age: 58, gender: 'Male', lastVisit: '2026-04-05', status: 'Active', initials: 'MB' },
  { id: 4, name: 'Sarah Davis', age: 28, gender: 'Female', lastVisit: '2026-03-28', status: 'Active', initials: 'SD' },
  { id: 5, name: 'James Miller', age: 51, gender: 'Male', lastVisit: '2026-03-15', status: 'Inactive', initials: 'JM' },
  { id: 6, name: 'Lisa Thompson', age: 39, gender: 'Female', lastVisit: '2026-03-10', status: 'Active', initials: 'LT' },
];

export default function Patients() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl text-[#111827] mb-2">Patients</h1>
        <p className="text-[#6B7280]">Manage your patient records</p>
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
                placeholder="Search patients..."
                className="w-full pl-12 pr-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-5 h-5 mr-2" />
              Filter
            </Button>
            <Button>
              <UserPlus className="w-5 h-5 mr-2" />
              Add Patient
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {[
          { label: 'Total Patients', value: '1,248', color: 'from-blue-500 to-blue-600' },
          { label: 'Active Patients', value: '1,156', color: 'from-green-500 to-green-600' },
          { label: 'New This Month', value: '87', color: 'from-purple-500 to-purple-600' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
          >
            <Card hover>
              <div className={`p-4 bg-gradient-to-br ${stat.color} rounded-xl mb-4`}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-[#6B7280]">{stat.label}</div>
              <div className="text-2xl text-[#111827]">{stat.value}</div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Patients Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E5E7EB]">
                  <th className="text-left py-3 px-4 text-sm text-[#6B7280]">Patient</th>
                  <th className="text-left py-3 px-4 text-sm text-[#6B7280]">Age</th>
                  <th className="text-left py-3 px-4 text-sm text-[#6B7280]">Gender</th>
                  <th className="text-left py-3 px-4 text-sm text-[#6B7280]">Last Visit</th>
                  <th className="text-left py-3 px-4 text-sm text-[#6B7280]">Status</th>
                  <th className="text-left py-3 px-4 text-sm text-[#6B7280]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient, index) => (
                  <motion.tr
                    key={patient.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="border-b border-[#F3F4F6] hover:bg-[#F9FAFB] transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#3B82F6] flex items-center justify-center text-white text-sm">
                          {patient.initials}
                        </div>
                        <span className="text-[#111827]">{patient.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-[#6B7280]">{patient.age}</td>
                    <td className="py-4 px-4 text-[#6B7280]">{patient.gender}</td>
                    <td className="py-4 px-4 text-[#6B7280]">{patient.lastVisit}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
                          patient.status === 'Active'
                            ? 'bg-green-50 text-[#10B981]'
                            : 'bg-gray-100 text-[#6B7280]'
                        }`}
                      >
                        {patient.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <Button variant="outline" className="text-sm py-2 px-4">
                        View Profile
                      </Button>
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
