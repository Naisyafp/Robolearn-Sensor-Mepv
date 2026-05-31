const RangkaianUltrasonik = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
      <h3 style={{ color: "#2563eb", fontWeight: "bold", fontSize: "16px" }}>
        Rangkaian Sensor Ultrasonik HC-SR04
      </h3>
      <svg viewBox="0 0 500 340" width="100%" style={{ maxWidth: 480, borderRadius: 12, background: "#f8fafc", border: "1px solid #e2e8f0" }}>

        {/* ===== ARDUINO ===== */}
        <rect x="20" y="80" width="160" height="190" rx="10" fill="#1a7a4a" stroke="#145e38" strokeWidth="2"/>
        <text x="100" y="100" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">ARDUINO UNO</text>

        {/* Pin Labels */}
        {[["5V",   "#ff4444", 120],
          ["GND",  "#333",    145],
          ["D9",   "#f80",    170],
          ["D10",  "#0af",    195]].map(([label, color, y]) => (
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

        {/* ===== HC-SR04 SENSOR ===== */}
        {/* PCB */}
        <rect x="348" y="95" width="130" height="100" rx="6" fill="#1565c0" stroke="#0d47a1" strokeWidth="2"/>
        <text x="413" y="115" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">HC-SR04</text>
        <text x="413" y="127" textAnchor="middle" fill="#90caf9" fontSize="8">Ultrasonic Sensor</text>

        {/* Transducer TRIG (kiri) */}
        <circle cx="375" cy="162" r="22" fill="#e0e0e0" stroke="#999" strokeWidth="2"/>
        <circle cx="375" cy="162" r="15" fill="#bbb" stroke="#888" strokeWidth="1.5"/>
        <circle cx="375" cy="162" r="8"  fill="#888" stroke="#666" strokeWidth="1"/>
        {/* Gelombang TRIG */}
        {[1,2,3].map(i => (
          <path key={i}
            d={`M ${375 - 22 - i*8} ${162 - i*7} Q ${375 - 22 - i*8 - 5} ${162} ${375 - 22 - i*8} ${162 + i*7}`}
            fill="none" stroke="#f80" strokeWidth="1.2" opacity={1 - i * 0.25}/>
        ))}
        <text x="375" y="196" textAnchor="middle" fill="#ccc" fontSize="7">TRIG</text>

        {/* Transducer ECHO (kanan) */}
        <circle cx="450" cy="162" r="22" fill="#e0e0e0" stroke="#999" strokeWidth="2"/>
        <circle cx="450" cy="162" r="15" fill="#bbb" stroke="#888" strokeWidth="1.5"/>
        <circle cx="450" cy="162" r="8"  fill="#888" stroke="#666" strokeWidth="1"/>
        {/* Gelombang ECHO */}
        {[1,2,3].map(i => (
          <path key={i}
            d={`M ${450 + 22 + i*8} ${162 - i*7} Q ${450 + 22 + i*8 + 5} ${162} ${450 + 22 + i*8} ${162 + i*7}`}
            fill="none" stroke="#0af" strokeWidth="1.2" opacity={1 - i * 0.25}/>
        ))}
        <text x="450" y="196" textAnchor="middle" fill="#ccc" fontSize="7">ECHO</text>

        {/* HC-SR04 Pins - 4 pin */}
        {[["VCC",  "#ff4444", 108],
          ["TRIG", "#f80",    122],
          ["ECHO", "#0af",    136],
          ["GND",  "#333",    150]].map(([label, color, y]) => (
          <g key={label}>
            <line x1="348" x2="332" y1={y} y2={y} stroke={color} strokeWidth="2"/>
            <circle cx="332" cy={y} r="3" fill={color}/>
            <text x="327" y={y + 4} textAnchor="end" fill={color} fontSize="8">{label}</text>
          </g>
        ))}

        {/* ===== WIRES ===== */}
        {/* 5V -> VCC */}
        <polyline points="180,120 207,120 207,108 215,108" fill="none" stroke="#ff4444" strokeWidth="2"/>
        <polyline points="215,108 250,108 250,108 327,108" fill="none" stroke="#ff4444" strokeWidth="2" strokeDasharray="4,2"/>

        {/* GND -> GND */}
        <polyline points="180,145 207,145 207,270 327,270 327,150" fill="none" stroke="#333" strokeWidth="2" strokeDasharray="4,2"/>

        {/* D9 -> TRIG */}
        <polyline points="180,170 207,170 207,122 215,122" fill="none" stroke="#f80" strokeWidth="2"/>
        <polyline points="215,122 268,122 268,122 327,122" fill="none" stroke="#f80" strokeWidth="2" strokeDasharray="4,2"/>

        {/* D10 -> ECHO */}
        <polyline points="180,195 207,195 207,136 215,136" fill="none" stroke="#0af" strokeWidth="2"/>
        <polyline points="215,136 286,136 286,136 327,136" fill="none" stroke="#0af" strokeWidth="2" strokeDasharray="4,2"/>

        {/* ===== DISPLAY JARAK (LCD simulasi) ===== */}
        <rect x="348" y="215" width="130" height="50" rx="5" fill="#1b5e20" stroke="#388e3c" strokeWidth="2"/>
        <rect x="355" y="222" width="116" height="36" rx="3" fill="#33691e"/>
        <text x="413" y="236" textAnchor="middle" fill="#b9f6ca" fontSize="8" fontFamily="monospace">Jarak: -- cm</text>
        <text x="413" y="250" textAnchor="middle" fill="#69f0ae" fontSize="7" fontFamily="monospace">Serial Monitor</text>

        {/* Wire D10 to display */}
        <polyline points="413,215 413,205 480,205 480,136" fill="none" stroke="#0af" strokeWidth="1" strokeDasharray="2,2"/>

        {/* ===== LEGEND ===== */}
        <rect x="20" y="305" width="10" height="4" fill="#ff4444"/>
        <text x="34" y="310" fill="#555" fontSize="8">VCC (5V)</text>
        <rect x="85" y="305" width="10" height="4" fill="#333"/>
        <text x="99" y="310" fill="#555" fontSize="8">GND</text>
        <rect x="135" y="305" width="10" height="4" fill="#f80"/>
        <text x="149" y="310" fill="#555" fontSize="8">TRIG → D9</text>
        <rect x="210" y="305" width="10" height="4" fill="#0af"/>
        <text x="224" y="310" fill="#555" fontSize="8">ECHO → D10</text>

      </svg>
      <div style={{ fontSize: "12px", color: "#64748b", textAlign: "center", maxWidth: 440 }}>
        <b>Komponen:</b> Arduino Uno, Sensor HC-SR04, Breadboard, Kabel jumper
        <br/>
        <b>Koneksi:</b> VCC→5V | GND→GND | TRIG→D9 | ECHO→D10
        <br/>
        <b>Output:</b> Jarak terbaca di Serial Monitor (cm)
      </div>
    </div>
  );
};

export default RangkaianUltrasonik;