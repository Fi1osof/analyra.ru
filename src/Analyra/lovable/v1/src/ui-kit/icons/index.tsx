import React from "react";

type IconProps = { size?: number; className?: string };

const base = (size = 16) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export const LinkIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <path d="M10 14a5 5 0 007.07 0l3-3a5 5 0 00-7.07-7.07l-1.5 1.5" />
    <path d="M14 10a5 5 0 00-7.07 0l-3 3a5 5 0 007.07 7.07l1.5-1.5" />
  </svg>
);

export const SparkleIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <path d="M12 3l1.8 4.8L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.7L12 3z" />
    <path d="M19 15l.7 1.8L21.5 17.5l-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7L19 15z" />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export const BoxIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    <path d="M3.27 6.96L12 12l8.73-5.04M12 22V12" />
  </svg>
);

export const RouteIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <circle cx="6" cy="19" r="2.5" />
    <circle cx="18" cy="5" r="2.5" />
    <path d="M8.5 19H14a4 4 0 004-4v-3a4 4 0 00-4-4H9" />
  </svg>
);

export const AlertIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v5M12 16.5v.5" />
  </svg>
);

export const GraphIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <circle cx="12" cy="18" r="2.5" />
    <path d="M7.5 7.5L11 16M16.5 7.5L13 16M8 6h8" />
  </svg>
);

export const TaskIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <rect x="4" y="4" width="16" height="16" rx="3" />
    <path d="M8 12l3 3 5-6" />
  </svg>
);

export const LayoutIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
);

export const LoaderIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    style={{ animation: "spin 0.7s linear infinite" }}
  >
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2.5" />
    <path
      d="M21 12a9 9 0 00-9-9"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const GaugeIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <path d="M12 14l4-4" />
    <path d="M3.5 18a9 9 0 1117 0" />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
);

export const EyeIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const FileTextIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
    <path d="M14 3v5h5M9 13h6M9 17h6" />
  </svg>
);

export const ShieldIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
  </svg>
);

export const MobileIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <path d="M11 18h2" />
  </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <path d="M15 18l-6-6 6-6" />
  </svg>
);
