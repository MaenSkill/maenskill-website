/**
 * SVG circuit-board pattern inspired by the MaenSkill logo.
 * Renders as a fixed full-screen background layer.
 */
export default function CircuitPattern() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg
        className="w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1200 900"
      >
        <defs>
          {/* Repeating circuit tile */}
          <pattern id="circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            {/* Horizontal traces */}
            <line x1="0" y1="30" x2="50" y2="30" stroke="hsl(180,100%,45%)" strokeWidth="1" />
            <line x1="70" y1="30" x2="120" y2="30" stroke="hsl(180,100%,45%)" strokeWidth="1" />
            <line x1="0" y1="90" x2="40" y2="90" stroke="hsl(180,100%,45%)" strokeWidth="1" />
            <line x1="80" y1="90" x2="120" y2="90" stroke="hsl(180,100%,45%)" strokeWidth="1" />

            {/* Vertical traces */}
            <line x1="60" y1="0" x2="60" y2="25" stroke="hsl(180,100%,45%)" strokeWidth="1" />
            <line x1="60" y1="35" x2="60" y2="85" stroke="hsl(180,100%,45%)" strokeWidth="1" />
            <line x1="60" y1="95" x2="60" y2="120" stroke="hsl(180,100%,45%)" strokeWidth="1" />
            <line x1="30" y1="0" x2="30" y2="50" stroke="hsl(180,100%,45%)" strokeWidth="0.5" />
            <line x1="90" y1="60" x2="90" y2="120" stroke="hsl(180,100%,45%)" strokeWidth="0.5" />

            {/* Diagonal elbows */}
            <polyline points="50,30 60,20" fill="none" stroke="hsl(180,100%,45%)" strokeWidth="1" />
            <polyline points="70,30 60,40" fill="none" stroke="hsl(180,100%,45%)" strokeWidth="1" />
            <polyline points="40,90 50,80" fill="none" stroke="hsl(180,100%,45%)" strokeWidth="0.5" />
            <polyline points="80,90 70,100" fill="none" stroke="hsl(180,100%,45%)" strokeWidth="0.5" />

            {/* Nodes / Pads */}
            <circle cx="60" cy="30" r="3" fill="none" stroke="hsl(180,100%,45%)" strokeWidth="1" />
            <circle cx="60" cy="90" r="2.5" fill="none" stroke="hsl(180,100%,45%)" strokeWidth="0.8" />
            <circle cx="30" cy="50" r="1.5" fill="hsl(180,100%,45%)" />
            <circle cx="90" cy="60" r="1.5" fill="hsl(180,100%,45%)" />
            <rect x="55" y="55" width="10" height="10" rx="1" fill="none" stroke="hsl(180,100%,45%)" strokeWidth="0.8" />

            {/* Small vias */}
            <circle cx="20" cy="30" r="1" fill="hsl(180,100%,45%)" />
            <circle cx="100" cy="90" r="1" fill="hsl(180,100%,45%)" />
            <circle cx="60" cy="10" r="1" fill="hsl(180,100%,45%)" />
            <circle cx="60" cy="110" r="1" fill="hsl(180,100%,45%)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
}
