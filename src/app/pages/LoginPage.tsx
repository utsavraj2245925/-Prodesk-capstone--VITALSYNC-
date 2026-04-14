import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Mail, Lock, Heart } from 'lucide-react';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';

export default function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState('doctor');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/dashboard/${role}`);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Illustration */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#2563EB] via-[#3B82F6] to-[#60A5FA] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12 text-white">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center"
          >
            <div className="mb-8 inline-block p-6 bg-white/10 backdrop-blur-sm rounded-3xl">
              <Heart className="w-24 h-24 text-white" strokeWidth={1.5} />
            </div>
            <h1 className="text-5xl mb-4">Welcome to VitalSync</h1>
            <p className="text-xl text-blue-100 max-w-md mx-auto">
              Modern healthcare management platform designed for seamless patient care
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl"
          >
            {[
              { label: '5,000+', desc: 'Patients' },
              { label: '200+', desc: 'Doctors' },
              { label: '98%', desc: 'Satisfaction' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-1">{stat.label}</div>
                <div className="text-sm text-blue-200">{stat.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#F9FAFB]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-md"
        >
          {/* Logo for mobile */}
          <div className="lg:hidden mb-8 text-center">
            <div className="inline-flex items-center gap-2 text-[#2563EB]">
              <Heart className="w-8 h-8" />
              <span className="text-2xl">VitalSync</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#E5E7EB]">
            <div className="mb-8">
              <h2 className="text-3xl mb-2 text-[#111827]">Welcome Back</h2>
              <p className="text-[#6B7280]">Sign in to continue to your dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <Input
                type="email"
                label="Email Address"
                placeholder="doctor@vitalsync.com"
                icon={<Mail className="w-5 h-5" />}
                required
              />

              <Input
                type="password"
                label="Password"
                placeholder="Enter your password"
                icon={<Lock className="w-5 h-5" />}
                required
              />

              <Select
                label="Login as"
                options={[
                  { value: 'doctor', label: 'Doctor' },
                  { value: 'patient', label: 'Patient' }
                ]}
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-[#374151] cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-[#D1D5DB] text-[#2563EB] focus:ring-[#2563EB]" />
                  Remember me
                </label>
                <a href="#" className="text-[#2563EB] hover:text-[#1D4ED8]">
                  Forgot password?
                </a>
              </div>

              <Button type="submit" className="w-full">
                Sign In
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#E5E7EB]"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-[#6B7280]">OR</span>
                </div>
              </div>

              <div className="text-center text-sm text-[#6B7280]">
                Don't have an account?{' '}
                <a href="#" className="text-[#2563EB] hover:text-[#1D4ED8]">
                  Sign up now
                </a>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
