interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

export default function Input({ label, icon, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm mb-2 text-[#374151]">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
            {icon}
          </div>
        )}
        <input
          className={`w-full px-4 py-3 ${icon ? 'pl-12' : ''} bg-white border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all ${className}`}
          {...props}
        />
      </div>
    </div>
  );
}
