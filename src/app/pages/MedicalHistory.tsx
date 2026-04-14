import { motion } from 'motion/react';
import { ArrowLeft, FileText, Pill, Activity } from 'lucide-react';
import { useNavigate } from 'react-router';
import Card from '../components/Card';

const medicalRecords = [
  {
    id: 1,
    date: '2026-03-15',
    type: 'Annual Checkup',
    doctor: 'Dr. Sarah Johnson',
    diagnosis: 'Blood Pressure Monitoring - Hypertension Stage 1',
    prescription: 'Lisinopril 10mg daily, Aspirin 81mg daily',
    notes: 'Patient showing improvement. Continue current medication. Follow-up in 3 months.',
    vitals: { bp: '135/85', heart: '72 bpm', temp: '98.6°F' }
  },
  {
    id: 2,
    date: '2026-02-10',
    type: 'Follow-up Visit',
    doctor: 'Dr. Sarah Johnson',
    diagnosis: 'Blood Pressure Check',
    prescription: 'Continue Lisinopril 10mg daily',
    notes: 'Blood pressure levels stable. Recommend lifestyle modifications including reduced sodium intake.',
    vitals: { bp: '138/88', heart: '74 bpm', temp: '98.4°F' }
  },
  {
    id: 3,
    date: '2025-12-05',
    type: 'ECG Test',
    doctor: 'Dr. Sarah Johnson',
    diagnosis: 'Routine Cardiac Evaluation',
    prescription: 'No new medications',
    notes: 'ECG results normal. Heart rhythm regular. No signs of arrhythmia.',
    vitals: { bp: '140/90', heart: '76 bpm', temp: '98.6°F' }
  },
  {
    id: 4,
    date: '2025-09-20',
    type: 'Initial Consultation',
    doctor: 'Dr. Sarah Johnson',
    diagnosis: 'Elevated Blood Pressure - Pre-hypertension',
    prescription: 'Lifestyle modifications recommended',
    notes: 'Patient advised to monitor blood pressure at home. Reduce salt intake and increase physical activity.',
    vitals: { bp: '145/92', heart: '78 bpm', temp: '98.5°F' }
  },
];

export default function MedicalHistory() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-8">
      <div className="max-w-5xl mx-auto">
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
          <h1 className="text-3xl text-[#111827] mb-2">Medical History</h1>
          <p className="text-[#6B7280]">Complete timeline of your medical records</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2563EB] to-[#10B981]"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {medicalRecords.map((record, index) => (
              <motion.div
                key={record.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-20"
              >
                {/* Timeline Marker */}
                <div className="absolute left-0 w-16 h-16 bg-white border-4 border-[#2563EB] rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-full"></div>
                </div>

                {/* Content Card */}
                <Card hover>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl text-[#111827]">{record.type}</h3>
                        <span className="px-3 py-1 bg-blue-50 text-[#2563EB] text-xs rounded-full">
                          {record.date}
                        </span>
                      </div>
                      <p className="text-sm text-[#6B7280]">{record.doctor}</p>
                    </div>
                    <FileText className="w-6 h-6 text-[#2563EB]" />
                  </div>

                  {/* Vitals */}
                  <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-[#F9FAFB] rounded-xl">
                    <div className="text-center">
                      <div className="text-xs text-[#6B7280] mb-1">Blood Pressure</div>
                      <div className="text-sm text-[#111827]">{record.vitals.bp}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-[#6B7280] mb-1">Heart Rate</div>
                      <div className="text-sm text-[#111827]">{record.vitals.heart}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-[#6B7280] mb-1">Temperature</div>
                      <div className="text-sm text-[#111827]">{record.vitals.temp}</div>
                    </div>
                  </div>

                  {/* Diagnosis */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Activity className="w-4 h-4 text-[#10B981]" />
                      <span className="text-sm text-[#111827]">Diagnosis</span>
                    </div>
                    <p className="text-sm text-[#6B7280] pl-6">{record.diagnosis}</p>
                  </div>

                  {/* Prescription */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Pill className="w-4 h-4 text-[#F59E0B]" />
                      <span className="text-sm text-[#111827]">Prescription</span>
                    </div>
                    <p className="text-sm text-[#6B7280] pl-6">{record.prescription}</p>
                  </div>

                  {/* Notes */}
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <div className="text-xs text-[#2563EB] mb-1">Doctor's Notes</div>
                    <p className="text-sm text-[#374151]">{record.notes}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Empty State at the end */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: medicalRecords.length * 0.1 + 0.3 }}
          className="relative pl-20 mt-8"
        >
          <div className="absolute left-0 w-16 h-16 bg-white border-4 border-[#E5E7EB] rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-[#E5E7EB] rounded-full"></div>
          </div>
          <Card className="bg-[#F9FAFB]">
            <p className="text-sm text-[#6B7280] text-center">Beginning of medical history</p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
