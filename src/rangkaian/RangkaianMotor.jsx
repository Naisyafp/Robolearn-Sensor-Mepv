const RangkaianMotor = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
      <h3 style={{ color: "#2563eb", fontWeight: "bold", fontSize: "16px" }}>
        Rangkaian Motor DC + Driver L298N
      </h3>
      <svg viewBox="0 0 560 340" width="100%" style={{ maxWidth: 520, borderRadius: 12, background: "#f8fafc", border: "1px solid #e2e8f0" }}>

        {/* ===== ARDUINO ===== */}
        <rect x="10" y="70" width="145" height="200" rx="10" fill="#1a7a4a" stroke="#145e38" strokeWidth="2"/>
        <text x="82" y="90" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">ARDUINO UNO</text>

        {/* Pin Labels */}
        {[["5V",  "#ff4444", 110],
          ["GND", "#333",    130],
          ["D5",  "#f80",    150],
          ["D6",  "#f0a",    170],
          ["D7",  "#0af",    190],
          ["D8",  "#0c0",    210]].map(([label, color, y]) => (
          <g key={label}>
            <rect x="135" y={y - 10} width="20" height="14" rx="2" fill={color} stroke="#000" strokeWidth="0.5"/>
            <text x="125" y={y} textAnchor="end" fill="#fff" fontSize="9">{label}</text>
          </g>
        ))}

        {/* ===== L298N DRIVER ===== */}
        <rect x="210" y="80" width="140" height="160" rx="8" fill="#1565c0" stroke="#0d47a1" strokeWidth="2"/>
        <text x="280" y="102" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">L298N</text>
        <text x="280" y="116" textAnchor="middle" fill="#90caf9" fontSize="8">Motor Driver</text>

        {/* Heatsink L298N */}
        <rect x="248" y="122" width="64" height="30" rx="3" fill="#777" stroke="#555" strokeWidth="1"/>
        {[0,1,2,3,4,5].map(i => (
          <line key={i} x1={252 + i * 10} y1="122" x2={252 + i * 10} y2="152" stroke="#999" strokeWidth="1"/>
        ))}
        <text x="280" y="143" textAnchor="middle" fill="#ccc" fontSize="7">IC Chip</text>

        {/* L298N Input pins (kiri) */}
        {[["ENA", "#f80",  165],
          ["IN1", "#0af",  183],
          ["IN2", "#0c0",  201],
          ["IN3", "#f0a",  219],
          ["IN4", "#ff4",  237],
          ["ENB", "#f80",  255]].map(([label, color, y]) => (
          <g key={label}>
            <line x1="210" x2="195" y1={y} y2={y} stroke={color} strokeWidth="1.5"/>
            <circle cx="195" cy={y} r="2.5" fill={color}/>
            <text x="190" y={y + 4} textAnchor="end" fill={color} fontSize="7">{label}</text>
          </g>
        ))}

        {/* L298N Power pins (atas) */}
        <line x1="240" y1="80" x2="240" y2="65" stroke="#ff4444" strokeWidth="2"/>
        <circle cx="240" cy="65" r="3" fill="#ff4444"/>
        <text x="240" y="58" textAnchor="middle" fill="#ff4444" fontSize="8">12V</text>

        <line x1="265" y1="80" x2="265" y2="65" stroke="#333" strokeWidth="2"/>
        <circle cx="265" cy="65" r="3" fill="#333"/>
        <text x="265" y="58" textAnchor="middle" fill="#333" fontSize="8">GND</text>

        <line x1="295" y1="80" x2="295" y2="65" stroke="#ff4444" strokeWidth="1.5" strokeDasharray="3,2"/>
        <circle cx="295" cy="65" r="3" fill="#ff8a80"/>
        <text x="295" y="58" textAnchor="middle" fill="#ff8a80" fontSize="7">5Vout</text>

        {/* L298N Output pins (kanan) - ke motor */}
        {[["OUT1", "#e74c3c", 175], ["OUT2", "#e74c3c", 200], ["OUT3", "#8e44ad", 225], ["OUT4", "#8e44ad", 250]].map(([label, color, y]) => (
          <g key={label}>
            <line x1="350" x2="365" y1={y} y2={y} stroke={color} strokeWidth="2"/>
            <circle cx="365" cy={y} r="2.5" fill={color}/>
            <text x="370" y={y + 4} fill={color} fontSize="7">{label}</text>
          </g>
        ))}

        {/* ===== MOTOR A ===== */}
        <rect x="410" y="140" width="70" height="55" rx="20" fill="#888" stroke="#555" strokeWidth="2"/>
        <circle cx="445" cy="167" r="18" fill="#aaa" stroke="#777" strokeWidth="1.5"/>
        <circle cx="445" cy="167" r="8" fill="#666" stroke="#444" strokeWidth="1"/>
        <line x1="463" y1="167" x2="485" y2="167" stroke="#555" strokeWidth="3"/>
        <rect x="483" y="163" width="20" height="8" rx="2" fill="#333"/>
        <text x="445" y="210" textAnchor="middle" fill="#555" fontSize="8">Motor A (DC)</text>

        {/* ===== MOTOR B ===== */}
        <rect x="410" y="220" width="70" height="55" rx="20" fill="#888" stroke="#555" strokeWidth="2"/>
        <circle cx="445" cy="247" r="18" fill="#aaa" stroke="#777" strokeWidth="1.5"/>
        <circle cx="445" cy="247" r="8" fill="#666" stroke="#444" strokeWidth="1"/>
        <line x1="463" y1="247" x2="485" y2="247" stroke="#555" strokeWidth="3"/>
        <rect x="483" y="243" width="20" height="8" rx="2" fill="#333"/>
        <text x="445" y="290" textAnchor="middle" fill="#555" fontSize="8">Motor B (DC)</text>

        {/* Wire OUT1/2 to Motor A */}
        <polyline points="365,175 390,175 390,160 410,160" fill="none" stroke="#e74c3c" strokeWidth="1.5"/>
        <polyline points="365,200 392,200 392,175 410,175" fill="none" stroke="#e74c3c" strokeWidth="1.5" strokeDasharray="3,2"/>

        {/* Wire OUT3/4 to Motor B */}
        <polyline points="365,225 390,225 390,235 410,235" fill="none" stroke="#8e44ad" strokeWidth="1.5"/>
        <polyline points="365,250 392,250 392,250 410,250" fill="none" stroke="#8e44ad" strokeWidth="1.5" strokeDasharray="3,2"/>

        {/* ===== WIRES Arduino to L298N ===== */}
        {/* 5V -> 5Vout L298N (power) */}
        <polyline points="155,110 175,110 175,65 240,65" fill="none" stroke="#ff4444" strokeWidth="2" strokeDasharray="4,2"/>
        {/* GND */}
        <polyline points="155,130 178,130 178,62 265,62 265,65" fill="none" stroke="#333" strokeWidth="2" strokeDasharray="4,2"/>
        {/* D5 -> ENA */}
        <polyline points="155,150 195,150 195,165" fill="none" stroke="#f80" strokeWidth="1.5"/>
        {/* D6 -> IN1 */}
        <polyline points="155,170 195,170 195,183" fill="none" stroke="#0af" strokeWidth="1.5"/>
        {/* D7 -> IN2 */}
        <polyline points="155,190 195,190 195,201" fill="none" stroke="#0c0" strokeWidth="1.5"/>
        {/* D8 -> IN3 */}
        <polyline points="155,210 195,210 195,219" fill="none" stroke="#f0a" strokeWidth="1.5"/>

        {/* ===== POWER SUPPLY 12V ===== */}
        <rect x="185" y="18" width="55" height="32" rx="5" fill="#f39c12" stroke="#d68910" strokeWidth="2"/>
        <text x="212" y="32" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">12V DC</text>
        <text x="212" y="44" textAnchor="middle" fill="#fff" fontSize="7">Supply</text>
        <line x1="212" y1="50" x2="212" y2="62" stroke="#ff4444" strokeWidth="2"/>
        <polyline points="212,62 240,62 240,65" fill="none" stroke="#ff4444" strokeWidth="2"/>

        {/* ===== LEGEND ===== */}
        <rect x="10" y="305" width="10" height="4" fill="#ff4444"/>
        <text x="24" y="310" fill="#555" fontSize="7">VCC</text>
        <rect x="55" y="305" width="10" height="4" fill="#333"/>
        <text x="69" y="310" fill="#555" fontSize="7">GND</text>
        <rect x="100" y="305" width="10" height="4" fill="#f80"/>
        <text x="114" y="310" fill="#555" fontSize="7">PWM/Enable</text>
        <rect x="175" y="305" width="10" height="4" fill="#e74c3c"/>
        <text x="189" y="310" fill="#555" fontSize="7">Motor A</text>
        <rect x="235" y="305" width="10" height="4" fill="#8e44ad"/>
        <text x="249" y="310" fill="#555" fontSize="7">Motor B</text>

      </svg>
      <div style={{ fontSize: "12px", color: "#64748b", textAlign: "center", maxWidth: 480 }}>
        <b>Komponen:</b> Arduino Uno, Driver L298N, 2x Motor DC, Adaptor 12V, Breadboard, Kabel jumper
        <br/>
        <b>Koneksi:</b> D5→ENA | D6→IN1 | D7→IN2 | D8→IN3 | OUT1/2→Motor A | OUT3/4→Motor B
      </div>
    </div>
  );
};

export default RangkaianMotor;