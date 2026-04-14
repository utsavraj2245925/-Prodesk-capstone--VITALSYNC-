import { motion } from "motion/react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const Component = hover ? motion.div : 'div';
  const hoverProps = hover ? {
    whileHover: { y: -4, transition: { duration: 0.2 } }
  } : {};

  return (
    <Component
      className={`bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-6 ${className}`}
      {...hoverProps}
    >
      {children}
    </Component>
  );
}
