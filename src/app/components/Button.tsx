import { motion } from "motion/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-xl transition-all duration-200 font-medium";
  const variants = {
    primary: "bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-lg shadow-blue-500/30",
    secondary: "bg-[#10B981] text-white hover:bg-[#059669] shadow-lg shadow-green-500/30",
    outline: "border-2 border-[#E5E7EB] text-[#374151] hover:border-[#2563EB] hover:text-[#2563EB]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
