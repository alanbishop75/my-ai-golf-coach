export default function GolfAILogo() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mb-6"
    >
      {/* Background circle */}
      <circle cx="60" cy="60" r="58" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />

      {/* Golf ball */}
      <circle cx="45" cy="50" r="18" fill="#ffffff" stroke="#16a34a" strokeWidth="2" />

      {/* Golf ball dimples */}
      <circle cx="40" cy="45" r="1.5" fill="#16a34a" />
      <circle cx="50" cy="45" r="1.5" fill="#16a34a" />
      <circle cx="38" cy="52" r="1.5" fill="#16a34a" />
      <circle cx="52" cy="52" r="1.5" fill="#16a34a" />
      <circle cx="45" cy="58" r="1.5" fill="#16a34a" />

      {/* Golf club head */}
      <path d="M60 30 L65 35 L58 42 Z" fill="#16a34a" />

      {/* Golf club shaft */}
      <line x1="62" y1="33" x2="75" y2="15" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />

      {/* AI/Circuit elements on the right */}
      {/* Neural nodes */}
      <circle cx="85" cy="45" r="3" fill="#16a34a" />
      <circle cx="85" cy="60" r="3" fill="#16a34a" />
      <circle cx="100" cy="52" r="3" fill="#16a34a" />

      {/* Connection lines */}
      <line x1="85" y1="45" x2="100" y2="52" stroke="#16a34a" strokeWidth="1.5" />
      <line x1="85" y1="60" x2="100" y2="52" stroke="#16a34a" strokeWidth="1.5" />

      {/* Additional circuit nodes */}
      <circle cx="72" cy="70" r="2" fill="#16a34a" />
      <line x1="85" y1="60" x2="72" y2="70" stroke="#16a34a" strokeWidth="1" />

      {/* Subtle tech waves */}
      <path d="M68 75 Q72 73 76 75" stroke="#16a34a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M68 80 Q72 78 76 80" stroke="#16a34a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}
