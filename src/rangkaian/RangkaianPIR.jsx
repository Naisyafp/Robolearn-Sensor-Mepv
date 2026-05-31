const RangkaianPIR = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
      <h3 style={{ color: "#2563eb", fontWeight: "bold", fontSize: "16px" }}>
        Rangkaian Sensor PIR (Gerak)
      </h3>
      <svg viewBox="0 0 500 340" width="100%" style={{ maxWidth: 480, borderRadius: 12, background: "#f8fafc", border: "1px solid #e2e8f0" }}>

        {/* ===== ARDUINO ===== */}
        <rect x="20" y="80" width="160" height="190" rx="10" fill="#1a7a4a" stroke="#145e38" strokeWidth="2"/>
        <text x="100" y="100" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">ARDUINO UNO</text>

        {/* Pin Labels */}
        {[["5V", "#ff4444", 120], ["GND", "#333", 145], ["D2", "#f80", 170]].map(([label, color, y]) => (
          <g key={label}>
            <rect x="160" y={y - 10} width="20" height="14" rx="2" fill={color} stroke="#000" strokeWidth="0.5"/>
            <text x="150" y={y} textAnchor="end" fill="#fff" fontSize="9">{label}</text>
          </g>
        ))}

        {/* ===== BREADBOARD ===== */}
        <rect x="215" y="80" width="110" height="190" rx="6" fill="#f5e6c8" stroke="#c8a87a" strokeWidth="1.5"/>
        <text x="270" y="98" textAnchor="middle" fill="#7a5c2a" fontSize="9" fontWeight="bold">Breadboard</text>
        {[...Array(12)].map((_, i) => (
          <g key={i}>
            <circle cx="233" cy={108 + i * 13} r="2.5" fill="#aaa" stroke="#888" strokeWidth="1"/>
            <circle cx="250" cy={108 + i * 13} r="2.5" fill="#aaa" stroke="#888" strokeWidth="1"/>
            <circle cx="268" cy={108 + i * 13} r="2.5" fill="#aaa" stroke="#888" strokeWidth="1"/>
            <circle cx="286" cy={108 + i * 13} r="2.5" fill="#aaa" stroke="#888" strokeWidth="1"/>
            <circle cx="304" cy={108 + i * 13} r="2.5" fill="#aaa" stroke="#888" strokeWidth="1"/>
          </g>
        ))}

        {/* ===== PIR SENSOR ===== */}
        {/* PCB base */}
        <rect x="355" y="110" width="110" height="100" rx="6" fill="#5d4037" stroke="#3e2723" strokeWidth="2"/>
        <text x="410" y="130" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">PIR</text>

        {/* Dome putih khas PIR */}
        <ellipse cx="410" cy="162" rx="32" ry="32" fill="white" stroke="#ccc" strokeWidth="1.5"/>
        <ellipse cx="410" cy="162" rx="28" ry="28" fill="#f0f0ff" stroke="#ddd" strokeWidth="1"/>
        {/* Fresnel lens pattern */}
        {[0, 1, 2, 3].map(i => (
          <ellipse key={i} cx="410" cy="162" rx={8 + i * 6} ry={8 + i * 6}
            fill="none" stroke="#bbb" strokeWidth="0.7"/>
        ))}
        <text x="410" y="166" textAnchor="middle" fill="#999" fontSize="7">Fresnel</text>
        <text x="410" y="200" textAnchor="middle" fill="#bcaaa4" fontSize="8">Motion Sensor</text>

        {/* PIR Pins - 3 pin: VCC, OUT, GND */}
        {[["VCC", "#ff4444", 125], ["OUT", "#f80", 145], ["GND", "#333", 165]].map(([label, color, y]) => (
          <g key={label}>
            <line x1="355" x2="338" y1={y} y2={y} stroke={color} strokeWidth="2"/>
            <circle cx="338" cy={y} r="3" fill={color}/>
            <text x="333" y={y + 4} textAnchor="end" fill={color} fontSize="8">{label}</text>
          </g>
        ))}

        {/* ===== LED INDIKATOR ===== */}
        <ellipse cx="420" cy="265" rx="9" ry="11" fill="#ff4444" stroke="#cc0000" strokeWidth="1.5"/>
        <line x1="415" x2="411" y1="276" y2="290" stroke="#555" strokeWidth="1.5"/>
        <line x1="425" x2="429" y1="276" y2="290" stroke="#555" strokeWidth="1.5"/>
        <text x="420" y="305" textAnchor="middle" fill="#c00" fontSize="8">LED</text>

        {/* Resistor 220 ohm */}
        <rect x="358" y="260" width="24" height="9" rx="3" fill="#d4a" stroke="#a07" strokeWidth="1"/>
        <text x="370" y="280" textAnchor="middle" fill="#704" fontSize="8">220Ω</text>

        {/* ===== WIRES ===== */}
        {/* 5V Arduino -> Breadboard -> PIR VCC */}
        <polyline points="180,120 207,120 207,110 215,110" fill="none" stroke="#ff4444" strokeWidth="2"/>
        <polyline points="215,110 250,110 250,125 338,125" fill="none" stroke="#ff4444" strokeWidth="2" strokeDasharray="4,2"/>

        {/* GND Arduino -> Breadboard -> PIR GND */}
        <polyline points="180,145 207,145 207,270 338,270 338,165" fill="none" stroke="#333" strokeWidth="2" strokeDasharray="4,2"/>

        {/* D2 Arduino -> PIR OUT */}
        <polyline points="180,170 207,170 207,145 215,145" fill="none" stroke="#f80" strokeWidth="2"/>
        <polyline points="215,145 268,145 268,145 338,145" fill="none" stroke="#f80" strokeWidth="2" strokeDasharray="4,2"/>

        {/* OUT -> Resistor -> LED */}
        <polyline points="338,145 345,145 345,260 358,260" fill="none" stroke="#f80" strokeWidth="1.5" strokeDasharray="3,2"/>
        <polyline points="382,264 411,264" fill="none" stroke="#f80" strokeWidth="1.5" strokeDasharray="3,2"/>

        {/* GND -> LED */}
        <polyline points="429,290 429,300 407,300 407,290" fill="none" stroke="#333" strokeWidth="1.5" strokeDasharray="3,2"/>

        {/* ===== TRIMPOT (sensitivity adjuster) ===== */}
        <rect x="358" y="220" width="22" height="22" rx="4" fill="#888" stroke="#555" strokeWidth="1"/>
        <circle cx="369" cy="231" r="6" fill="#aaa" stroke="#777" strokeWidth="1"/>
        <line x1="369" y1="225" x2="369" y2="220" stroke="#555" strokeWidth="1.5"/>
        <text x="369" y="252" textAnchor="middle" fill="#555" fontSize="7">Sens</text>

        <rect x="388" y="220" width="22" height="22" rx="4" fill="#888" stroke="#555" strokeWidth="1"/>
        <circle cx="399" cy="231" r="6" fill="#aaa" stroke="#777" strokeWidth="1"/>
        <line x1="399" y1="225" x2="399" y2="220" stroke="#555" strokeWidth="1.5"/>
        <text x="399" y="252" textAnchor="middle" fill="#555" fontSize="7">Time</text>

        {/* ===== LEGEND ===== */}
        <rect x="20" y="292" width="10" height="4" fill="#ff4444"/>
        <text x="34" y="297" fill="#555" fontSize="8">VCC (5V)</text>
        <rect x="85" y="292" width="10" height="4" fill="#333"/>
        <text x="99" y="297" fill="#555" fontSize="8">GND</text>
        <rect x="135" y="292" width="10" height="4" fill="#f80"/>
        <text x="149" y="297" fill="#555" fontSize="8">OUT → D2</text>

      </svg>
      <div style={{ fontSize: "12px", color: "#64748b", textAlign: "center", maxWidth: 440 }}>
        <b>Komponen:</b> Arduino Uno, Sensor PIR HC-SR501, LED, Resistor 220Ω, Breadboard, Kabel jumper
        <br/>
        <b>Koneksi:</b> VCC→5V | OUT→D2 | GND→GND | OUT→LED (indikator)
      </div>
    </div>
  );
};

export default RangkaianPIR;