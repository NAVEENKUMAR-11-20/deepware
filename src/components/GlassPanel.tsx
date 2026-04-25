import React from 'react';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'gradient';
  blur?: 'sm' | 'md' | 'lg' | 'xl';
}

const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  className = '',
  variant = 'dark',
  blur = 'md',
}) => {
  const blurMap = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  const variantStyles = {
    light: 'bg-white/10 border-white/20',
    dark: 'bg-slate-900/40 border-white/10',
    gradient: 'bg-gradient-to-br from-blue-500/10 to-violet-500/10 border-blue-400/20',
  };

  return (
    <div
      className={`
        rounded-2xl
        ${blurMap[blur]}
        ${variantStyles[variant]}
        border
        backdrop-filter
        transition-all
        duration-300
        hover:border-white/30
        ${className}
      `}
      style={{ willChange: 'backdrop-filter' }}
    >
      {children}
    </div>
  );
};

export default GlassPanel;
