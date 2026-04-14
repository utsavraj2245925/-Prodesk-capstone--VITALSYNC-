import { motion } from 'motion/react';
import { User, Bell, Lock, Globe, Moon } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';

export default function Settings() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl text-[#111827] mb-2">Settings</h1>
        <p className="text-[#6B7280]">Manage your account and preferences</p>
      </motion.div>

      <div className="max-w-4xl space-y-6">
        {/* Profile Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-xl">
                <User className="w-6 h-6 text-[#2563EB]" />
              </div>
              <div>
                <h3 className="text-lg text-[#111827]">Profile Settings</h3>
                <p className="text-sm text-[#6B7280]">Update your personal information</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input label="First Name" defaultValue="Sarah" />
                <Input label="Last Name" defaultValue="Johnson" />
              </div>
              <Input label="Email" type="email" defaultValue="sarah.johnson@vitalsync.com" />
              <Input label="Specialty" defaultValue="Cardiologist" />
              <Input label="License Number" defaultValue="MD-12345" />
              <div className="pt-4">
                <Button>Save Changes</Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-50 rounded-xl">
                <Bell className="w-6 h-6 text-[#10B981]" />
              </div>
              <div>
                <h3 className="text-lg text-[#111827]">Notifications</h3>
                <p className="text-sm text-[#6B7280]">Manage notification preferences</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Email Notifications', description: 'Receive email updates about appointments' },
                { label: 'SMS Alerts', description: 'Get text messages for urgent updates' },
                { label: 'Push Notifications', description: 'Enable browser push notifications' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-[#F9FAFB] rounded-xl">
                  <div>
                    <div className="text-sm text-[#111827]">{item.label}</div>
                    <div className="text-xs text-[#6B7280]">{item.description}</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10B981]"></div>
                  </label>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Security */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-50 rounded-xl">
                <Lock className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <div>
                <h3 className="text-lg text-[#111827]">Security</h3>
                <p className="text-sm text-[#6B7280]">Update your password and security settings</p>
              </div>
            </div>

            <div className="space-y-4">
              <Input label="Current Password" type="password" />
              <Input label="New Password" type="password" />
              <Input label="Confirm New Password" type="password" />
              <div className="pt-4">
                <Button>Update Password</Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-50 rounded-xl">
                <Globe className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <div>
                <h3 className="text-lg text-[#111827]">Preferences</h3>
                <p className="text-sm text-[#6B7280]">Customize your experience</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[#F9FAFB] rounded-xl">
                <div className="flex items-center gap-3">
                  <Moon className="w-5 h-5 text-[#6B7280]" />
                  <div>
                    <div className="text-sm text-[#111827]">Dark Mode</div>
                    <div className="text-xs text-[#6B7280]">Switch to dark theme</div>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2563EB]"></div>
                </label>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
