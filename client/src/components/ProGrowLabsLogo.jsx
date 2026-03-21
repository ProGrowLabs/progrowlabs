const ProGrowLabsLogo = ({ size = 48 }) => {
  const scale = size / 64

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      style={{ overflow: 'visible' }}
    >
      <style>{`
        @keyframes pgl-barIn {
          0%   { transform: scaleY(0); opacity: 0; }
          65%  { transform: scaleY(1.06); opacity: 1; }
          100% { transform: scaleY(1); opacity: 1; }
        }
        @keyframes pgl-eq1 {
          0%,100% { transform: translateY(0); }
          25%     { transform: translateY(${-11 * scale}px); }
          50%     { transform: translateY(${-3  * scale}px); }
          75%     { transform: translateY(${-15 * scale}px); }
        }
        @keyframes pgl-eq2 {
          0%,100% { transform: translateY(0); }
          20%     { transform: translateY(${-20 * scale}px); }
          55%     { transform: translateY(${-7  * scale}px); }
          80%     { transform: translateY(${-13 * scale}px); }
        }
        @keyframes pgl-eq3 {
          0%,100% { transform: translateY(0); }
          35%     { transform: translateY(${-24 * scale}px); }
          65%     { transform: translateY(${-9  * scale}px); }
        }
        .pgl-bar1 {
          transform-origin: 8px 64px;
          animation: pgl-barIn 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.05s both;
        }
        .pgl-bar2 {
          transform-origin: 30px 64px;
          animation: pgl-barIn 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.16s both;
        }
        .pgl-bar3 {
          transform-origin: 52px 64px;
          animation: pgl-barIn 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.27s both;
        }
        .pgl-ball1 { animation: pgl-eq1 1.7s ease-in-out 0.6s  infinite; }
        .pgl-ball2 { animation: pgl-eq2 1.7s ease-in-out 0.75s infinite; }
        .pgl-ball3 { animation: pgl-eq3 1.7s ease-in-out 0.9s  infinite; }
      `}</style>

      {/* Bars */}
      <rect className="pgl-bar1" x="0"  y="42" width="16" height="22" rx="3.5" fill="#9FE1CB" />
      <rect className="pgl-bar2" x="22" y="28" width="16" height="36" rx="3.5" fill="#5DCAA5" />
      <rect className="pgl-bar3" x="44" y="14" width="16" height="50" rx="3.5" fill="#1D9E75" />

      {/* Balls */}
      <circle className="pgl-ball1" cx="8"  cy="38" r="7.5" fill="#0F6E56" />
      <circle className="pgl-ball2" cx="30" cy="24" r="7.5" fill="#0F6E56" />
      <circle className="pgl-ball3" cx="52" cy="10" r="7.5" fill="#0F6E56" />
    </svg>
  )
}

export default ProGrowLabsLogo