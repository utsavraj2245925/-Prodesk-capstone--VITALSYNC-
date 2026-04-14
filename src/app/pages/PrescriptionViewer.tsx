import { motion } from 'motion/react';
import { ArrowLeft, Printer, Download, Heart } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import Card from '../components/Card';
import Button from '../components/Button';

const prescriptionData = {
  id: 1,
  patientName: 'John Anderson',
  patientAge: 45,
  patientGender: 'Male',
  doctorName: 'Dr. Sarah Johnson',
  doctorSpecialty: 'Cardiologist',
  doctorLicense: 'MD-12345',
  date: '2026-03-15',
  diagnosis: 'Hypertension Stage 1',
  medicines: [
    {
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      duration: '30 days',
      instructions: 'Take in the morning with or without food'
    },
    {
      name: 'Aspirin',
      dosage: '81mg',
      frequency: 'Once daily',
      duration: '30 days',
      instructions: 'Take with food to avoid stomach upset'
    },
  ],
  notes: 'Monitor blood pressure daily. Avoid high-sodium foods. Follow up in 3 months or if symptoms worsen.',
  nextVisit: '2026-06-15'
};

export default function PrescriptionViewer() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 print:hidden"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#6B7280] hover:text-[#2563EB] mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl text-[#111827] mb-2">Prescription</h1>
              <p className="text-[#6B7280]">Prescription ID: #{id}</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={handlePrint}>
                <Printer className="w-5 h-5 mr-2" />
                Print
              </Button>
              <Button variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="print:shadow-none print:border-2">
            {/* Header */}
            <div className="border-b-2 border-[#2563EB] pb-6 mb-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-xl">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl text-[#111827]">VitalSync</h2>
                      <p className="text-sm text-[#6B7280]">Healthcare Management Platform</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-[#6B7280]">Date of Issue</div>
                  <div className="text-lg text-[#111827]">{prescriptionData.date}</div>
                </div>
              </div>
            </div>

            {/* Doctor & Patient Info */}
            <div className="grid grid-cols-2 gap-6 mb-6 pb-6 border-b border-[#E5E7EB]">
              <div>
                <div className="text-xs text-[#6B7280] mb-2">PRESCRIBED BY</div>
                <div className="text-lg text-[#111827] mb-1">{prescriptionData.doctorName}</div>
                <div className="text-sm text-[#6B7280]">{prescriptionData.doctorSpecialty}</div>
                <div className="text-sm text-[#6B7280]">License: {prescriptionData.doctorLicense}</div>
              </div>
              <div>
                <div className="text-xs text-[#6B7280] mb-2">PATIENT DETAILS</div>
                <div className="text-lg text-[#111827] mb-1">{prescriptionData.patientName}</div>
                <div className="text-sm text-[#6B7280]">
                  Age: {prescriptionData.patientAge} • {prescriptionData.patientGender}
                </div>
              </div>
            </div>

            {/* Diagnosis */}
            <div className="mb-6 pb-6 border-b border-[#E5E7EB]">
              <div className="text-xs text-[#6B7280] mb-2">DIAGNOSIS</div>
              <div className="text-base text-[#111827] bg-blue-50 p-4 rounded-xl">
                {prescriptionData.diagnosis}
              </div>
            </div>

            {/* Medicines */}
            <div className="mb-6 pb-6 border-b border-[#E5E7EB]">
              <div className="text-xs text-[#6B7280] mb-4">PRESCRIPTION</div>
              <div className="space-y-4">
                {prescriptionData.medicines.map((medicine, index) => (
                  <div
                    key={index}
                    className="p-4 bg-[#F9FAFB] rounded-xl border border-[#E5E7EB]"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="text-lg text-[#111827] mb-1">
                          {index + 1}. {medicine.name}
                        </div>
                        <div className="text-sm text-[#6B7280]">
                          {medicine.dosage} • {medicine.frequency} • {medicine.duration}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-[#374151] bg-white p-3 rounded-lg">
                      <span className="text-[#6B7280]">Instructions: </span>
                      {medicine.instructions}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="mb-6 pb-6 border-b border-[#E5E7EB]">
              <div className="text-xs text-[#6B7280] mb-2">ADDITIONAL NOTES</div>
              <div className="text-sm text-[#374151] bg-amber-50 p-4 rounded-xl">
                {prescriptionData.notes}
              </div>
            </div>

            {/* Next Visit */}
            <div className="mb-6">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                <div>
                  <div className="text-xs text-[#10B981] mb-1">NEXT VISIT SCHEDULED</div>
                  <div className="text-base text-[#111827]">{prescriptionData.nextVisit}</div>
                </div>
                <div className="text-3xl">📅</div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-[#E5E7EB] text-center">
              <div className="text-xs text-[#6B7280]">
                This is a digitally generated prescription from VitalSync Healthcare Platform
              </div>
              <div className="text-xs text-[#6B7280] mt-1">
                For queries, contact: support@vitalsync.com | +1 (555) 123-4567
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
