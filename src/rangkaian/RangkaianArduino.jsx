const RangkaianArduino = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
      <h3 style={{ color: "#2563eb", fontWeight: "bold", fontSize: "16px" }}>
        Rangkaian Dasar Arduino Uno
      </h3>
      <svg viewBox="0 0 500 340" width="100%" style={{ maxWidth: 480, borderRadius: 12, background: "#f8fafc", border: "1px solid #e2e8f0" }}>
        {/* PCB Board */}
        <rect x="60" y="60" width="260" height="200" rx="10" fill="#1a7a4a" stroke="#145e38" strokeWidth="2"/>
        {/* Board label */}
        <text x="190" y="85" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">ARDUINO UNO</text>

        {/* USB Port */}
        <rect x="60" y="100" width="28" height="40" rx="3" fill="#aaa" stroke="#888" strokeWidth="1.5"/>
        <text x="74" y="148" textAnchor="middle" fill="#555" fontSize="9">USB</text>

        {/* Power Jack */}
        <rect x="60" y="180" width="24" height="24" rx="4" fill="#333" stroke="#111" strokeWidth="1.5"/>
        <text x="72" y="218" textAnchor="middle" fill="#555" fontSize="9">PWR</text>

        {/* Reset Button */}
        <circle cx="280" cy="90" r="8" fill="#cc2200" stroke="#aa1100" strokeWidth="1.5"/>
        <text x="280" y="108" textAnchor="middle" fill="#555" fontSize="9">RST</text>

        {/* ATmega Chip */}
        <rect x="155" y="130" width="70" height="70" rx="4" fill="#222" stroke="#000" strokeWidth="1"/>
        <text x="190" y="162" textAnchor="middle" fill="#aef" fontSize="8">ATmega</text>
        <text x="190" y="175" textAnchor="middle" fill="#aef" fontSize="8">328P</text>

        {/* Digital Pins label */}
        <text x="190" y="240" textAnchor="middle" fill="#ffd" fontSize="9">Digital Pins (D0–D13)</text>
        {[...Array(8)].map((_, i) => (
          <rect key={i} x={100 + i * 22} y="248" width="8" height="14" rx="2" fill="#c8a800" stroke="#a08000" strokeWidth="1"/>
        ))}

        {/* Analog Pins label */}
        <text x="100" y="290" fill="#ffd" fontSize="9">Analog (A0–A5)</text>
        {[...Array(6)].map((_, i) => (
          <rect key={i} x={100 + i * 18} y="295" width="8" height="14" rx="2" fill="#00aacc" stroke="#007799" strokeWidth="1"/>
        ))}

        {/* Power Pins */}
        <rect x="290" y="130" width="14" height="60" rx="3" fill="#e55" stroke="#c00" strokeWidth="1"/>
        <text x="297" y="205" textAnchor="middle" fill="#c00" fontSize="8">PWR</text>

        {/* LED Pin 13 */}
        <circle cx="320" cy="150" r="7" fill="#ffee00" stroke="#ccaa00" strokeWidth="1.5"/>
        <text x="320" y="168" textAnchor="middle" fill="#666" fontSize="8">L(13)</text>

        {/* Wire to LED */}
        <line x1="304" x2="313" y1="145" y2="150" stroke="#f80" strokeWidth="1.5" strokeDasharray="3,2"/>

        {/* Breadboard */}
        <rect x="370" y="80" width="100" height="200" rx="6" fill="#f5e6c8" stroke="#c8a87a" strokeWidth="1.5"/>
        <text x="420" y="100" textAnchor="middle" fill="#7a5c2a" fontSize="10" fontWeight="bold">Breadboard</text>
        {[...Array(10)].map((_, i) => (
          <g key={i}>
            <circle cx="390" cy={115 + i * 15} r="3" fill="#aaa" stroke="#888" strokeWidth="1"/>
            <circle cx="408" cy={115 + i * 15} r="3" fill="#aaa" stroke="#888" strokeWidth="1"/>
            <circle cx="432" cy={115 + i * 15} r="3" fill="#aaa" stroke="#888" strokeWidth="1"/>
            <circle cx="450" cy={115 + i * 15} r="3" fill="#aaa" stroke="#888" strokeWidth="1"/>
          </g>
        ))}

        {/* LED on breadboard */}
        <ellipse cx="420" cy="270" rx="8" ry="10" fill="#ff4444" stroke="#cc0000" strokeWidth="1.5"/>
        <line x1="416" x2="412" y1="280" y2="295" stroke="#555" strokeWidth="1.5"/>
        <line x1="424" x2="428" y1="280" y2="295" stroke="#555" strokeWidth="1.5"/>
        <text x="420" y="310" textAnchor="middle" fill="#c00" fontSize="9">LED</text>

        {/* Resistor on breadboard */}
        <rect x="436" y="260" width="22" height="8" rx="3" fill="#d4a" stroke="#a07" strokeWidth="1"/>
        <text x="447" y="282" textAnchor="middle" fill="#704" fontSize="8">220Ω</text>

        {/* Wires Arduino to Breadboard */}
        <line x1="320" x2="390" y1="248" y2="270" stroke="#e63" strokeWidth="2" strokeDasharray="4,2"/>
        <line x1="297" x2="390" y1="160" y2="295" stroke="#000" strokeWidth="2" strokeDasharray="4,2"/>

        {/* GND label */}
        <text x="390" y="310" fill="#333" fontSize="8">GND</text>
        {/* D13 label */}
        <text x="360" y="265" fill="#e63" fontSize="8">D13</text>

        {/* Legend */}
        <rect x="20" y="295" width="10" height="4" fill="#e63"/>
        <text x="34" y="300" fill="#555" fontSize="8">Signal</text>
        <rect x="80" y="295" width="10" height="4" fill="#000"/>
        <text x="94" y="300" fill="#555" fontSize="8">GND</text>
      </svg>

      <div style={{ fontSize: "12px", color: "#64748b", textAlign: "center", maxWidth: 440 }}>
        <b>Komponen:</b> Arduino Uno, Breadboard, LED, Resistor 220Ω, Kabel jumper
      </div>
    </div>
  );
};

export default RangkaianArduino;