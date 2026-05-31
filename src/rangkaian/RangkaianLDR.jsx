const RangkaianLDR = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
      <h3 style={{ color: "#2563eb", fontWeight: "bold", fontSize: "16px" }}>
        Rangkaian Sensor LDR (Cahaya)
      </h3>
      <svg viewBox="0 0 500 340" width="100%" style={{ maxWidth: 480, borderRadius: 12, background: "#f8fafc", border: "1px solid #e2e8f0" }}>

        {/* ===== ARDUINO ===== */}
        <rect x="20" y="80" width="160" height="190" rx="10" fill="#1a7a4a" stroke="#145e38" strokeWidth="2"/>
        <text x="100" y="100" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">ARDUINO UNO</text>

        {/* Pin Labels */}
        {[["5V",  "#ff4444", 120],
          ["GND", "#333",    145],
          ["A0",  "#00aacc", 170],
          ["D9",  "#f80",    195]].map(([label, color, y]) => (
          <g key={label}>
            <rect x="160" y={y - 10} width="20" height="14" rx="2" fill={color} stroke="#000" strokeWidth="0.5"/>
            <text x="150" y={y} textAnchor="end" fill="#fff" fontSize="9">{label}</text>
          </g>
        ))}

        {/* ===== BREADBOARD ===== */}
        <rect x="215" y="80" width="110" height="200" rx="6" fill="#f5e6c8" stroke="#c8a87a" strokeWidth="1.5"/>
        <text x="270" y="98" textAnchor="middle" fill="#7a5c2a" fontSize="9" fontWeight="bold">Breadboard</text>
        {[...Array(13)].map((_, i) => (
          <g key={i}>
            <circle cx="233" cy={108 + i * 13} r="2.5" fill="#aaa" stroke="#888" strokeWidth="1"/>
            <circle cx="250" cy={108 + i * 13} r="2.5" fill="#aaa" stroke="#888" strokeWidth="1"/>
            <circle cx="268" cy={108 + i * 13} r="2.5" fill="#aaa" stroke="#888" strokeWidth="1"/>
            <circle cx="286" cy={108 + i * 13} r="2.5" fill="#aaa" stroke="#888" strokeWidth="1"/>
            <circle cx="304" cy={108 + i * 13} r="2.5" fill="#aaa" stroke="#888" strokeWidth="1"/>
          </g>
        ))}

        {/* ===== LDR SENSOR ===== */}
        {/* Body LDR bulat */}
        <circle cx="390" cy="140" r="22" fill="#f5f5dc" stroke="#999" strokeWidth="2"/>
        {/* Garis zigzag khas LDR */}
        <polyline
          points="375,140 379,130 383,150 387,130 391,150 395,130 399,150 403,140"
          fill="none" stroke="#555" strokeWidth="1.5"/>
        {/* Sinar cahaya */}
        {[[-30,-30],[-40,-10],[-35,15]].map(([dx,dy], i) => (
          <line key={i}
            x1={390 + dx * 0.6} y1={140 + dy * 0.6}
            x2={390 + dx} y2={140 + dy}
            stroke="#f0c000" strokeWidth="2"/>
        ))}
        <text x="390" y="172" textAnchor="middle" fill="#555" fontSize="9" fontWeight="bold">LDR</text>

        {/* LDR Pins */}
        <line x1="368" y1="140" x2="340" y2="140" stroke="#00aacc" strokeWidth="2"/>
        <circle cx="340" cy="140" r="3" fill="#00aacc"/>
        <text x="335" y="136" textAnchor="end" fill="#00aacc" fontSize="8">Pin1</text>

        <line x1="412" y1="140" x2="440" y2="140" stroke="#333" strokeWidth="2"/>
        <circle cx="440" cy="140" r="3" fill="#333"/>
        <text x="445" y="144" fill="#333" fontSize="8">Pin2</text>

        {/* ===== RESISTOR 10K (voltage divider) ===== */}
        <rect x="368" y="185" width="28" height="10" rx="3" fill="#d4a" stroke="#a07" strokeWidth="1"/>
        <text x="382" y="207" textAnchor="middle" fill="#704" fontSize="8">10kΩ</text>

        {/* Wire LDR Pin1 -> A0 via breadboard */}
        <polyline points="340,140 325,140 325,170 215,170" fill="none" stroke="#00aacc" strokeWidth="2" strokeDasharray="4,2"/>

        {/* Wire LDR Pin1 -> Resistor top */}
        <polyline points="340,140 340,190 368,190" fill="none" stroke="#00aacc" strokeWidth="1.5" strokeDasharray="3,2"/>

        {/* Resistor bottom -> GND */}
        <polyline points="382,195 382,270 325,270 325,145 215,145" fill="none" stroke="#333" strokeWidth="2" strokeDasharray="4,2"/>

        {/* LDR Pin2 -> 5V */}
        <polyline points="440,140 460,140 460,110 325,110 325,120 215,120" fill="none" stroke="#ff4444" strokeWidth="2" strokeDasharray="4,2"/>

        {/* ===== LED (output indikator) ===== */}
        <ellipse cx="390" cy="255" rx="9" ry="11" fill="#ffee00" stroke="#ccaa00" strokeWidth="1.5"/>
        <line x1="385" y1="266" x2="381" y2="280" stroke="#555" strokeWidth="1.5"/>
        <line x1="395" y1="266" x2="399" y2="280" stroke="#555" strokeWidth="1.5"/>
        <text x="390" y="296" textAnchor="middle" fill="#aa8800" fontSize="8">LED</text>

        {/* Resistor 220 ohm for LED */}
        <rect x="415" y="250" width="24" height="9" rx="3" fill="#d4a" stroke="#a07" strokeWidth="1"/>
        <text x="427" y="270" textAnchor="middle" fill="#704" fontSize="8">220Ω</text>

        {/* D9 -> Resistor -> LED */}
        <polyline points="180,195 207,195 207,250 415,250" fill="none" stroke="#f80" strokeWidth="1.5" strokeDasharray="3,2"/>
        <polyline points="439,254 450,254 450,255 399,255" fill="none" stroke="#f80" strokeWidth="1.5" strokeDasharray="3,2"/>

        {/* LED GND */}
        <polyline points="381,280 381,285 390,285 390,280" fill="none" stroke="#333" strokeWidth="1.5" strokeDasharray="3,2"/>

        {/* ===== VOLTAGE DIVIDER LABEL ===== */}
        <rect x="448" y="155" width="46" height="30" rx="4" fill="#fff3cd" stroke="#ffc107" strokeWidth="1"/>
        <text x="471" y="168" textAnchor="middle" fill="#856404" fontSize="7" fontWeight="bold">Voltage</text>
        <text x="471" y="179" textAnchor="middle" fill="#856404" fontSize="7">Divider</text>

        {/* ===== LEGEND ===== */}
        <rect x="20" y="305" width="10" height="4" fill="#ff4444"/>
        <text x="34" y="310" fill="#555" fontSize="8">VCC (5V)</text>
        <rect x="85" y="305" width="10" height="4" fill="#333"/>
        <text x="99" y="310" fill="#555" fontSize="8">GND</text>
        <rect x="135" y="305" width="10" height="4" fill="#00aacc"/>
        <text x="149" y="310" fill="#555" fontSize="8">Analog A0</text>
        <rect x="200" y="305" width="10" height="4" fill="#f80"/>
        <text x="214" y="310" fill="#555" fontSize="8">LED D9</text>

      </svg>
      <div style={{ fontSize: "12px", color: "#64748b", textAlign: "center", maxWidth: 440 }}>
        <b>Komponen:</b> Arduino Uno, LDR, Resistor 10kΩ (pull-down), Resistor 220Ω, LED, Breadboard, Kabel jumper
        <br/>
        <b>Koneksi:</b> LDR+5V → A0 → 10kΩ → GND (voltage divider) | D9→220Ω→LED
      </div>
    </div>
  );
};

export default RangkaianLDR;