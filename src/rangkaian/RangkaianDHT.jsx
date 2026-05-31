const RangkaianDHT = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
      <h3 style={{ color: "#2563eb", fontWeight: "bold", fontSize: "16px" }}>
        Rangkaian Sensor DHT11 (Suhu & Kelembaban)
      </h3>
      <svg viewBox="0 0 500 340" width="100%" style={{ maxWidth: 480, borderRadius: 12, background: "#f8fafc", border: "1px solid #e2e8f0" }}>

        {/* ===== ARDUINO ===== */}
        <rect x="20" y="80" width="160" height="190" rx="10" fill="#1a7a4a" stroke="#145e38" strokeWidth="2"/>
        <text x="100" y="100" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">ARDUINO UNO</text>

        {/* Pin Labels Arduino */}
        {[["5V", "#ff4444", 120], ["GND", "#333", 140], ["D2", "#f80", 160]].map(([label, color, y]) => (
          <g key={label}>
            <rect x="160" y={y - 10} width="20" height="14" rx="2" fill={color} stroke="#000" strokeWidth="0.5"/>
            <text x="150" y={y} textAnchor="end" fill="#fff" fontSize="9">{label}</text>
          </g>
        ))}

        {/* ===== BREADBOARD ===== */}
        <rect x="220" y="80" width="120" height="190" rx="6" fill="#f5e6c8" stroke="#c8a87a" strokeWidth="1.5"/>
        <text x="280" y="100" textAnchor="middle" fill="#7a5c2a" fontSize="9" fontWeight="bold">Breadboard</text>
        {[...Array(11)].map((_, i) => (
          <g key={i}>
            <circle cx="240" cy={112 + i * 14} r="2.5" fill="#aaa" stroke="#888" strokeWidth="1"/>
            <circle cx="258" cy={112 + i * 14} r="2.5" fill="#aaa" stroke="#888" strokeWidth="1"/>
            <circle cx="276" cy={112 + i * 14} r="2.5" fill="#aaa" stroke="#888" strokeWidth="1"/>
            <circle cx="294" cy={112 + i * 14} r="2.5" fill="#aaa" stroke="#888" strokeWidth="1"/>
            <circle cx="312" cy={112 + i * 14} r="2.5" fill="#aaa" stroke="#888" strokeWidth="1"/>
          </g>
        ))}

        {/* ===== DHT11 SENSOR ===== */}
        <rect x="355" y="110" width="70" height="90" rx="6" fill="#1565c0" stroke="#0d47a1" strokeWidth="2"/>
        <text x="390" y="135" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">DHT11</text>
        {/* Grill pattern */}
        {[...Array(5)].map((_, i) => (
          <rect key={i} x={362 + i * 11} y="142" width="7" height="30" rx="2" fill="#0d47a1" stroke="#1976d2" strokeWidth="0.5"/>
        ))}
        <text x="390" y="190" textAnchor="middle" fill="#90caf9" fontSize="8">Temp & Humi</text>

        {/* DHT11 Pins */}
        {[["VCC", "#ff4444", 125], ["DATA", "#f80", 145], ["NC", "#aaa", 165], ["GND", "#333", 185]].map(([label, color, y]) => (
          <g key={label}>
            <line x1="355" x2="340" y1={y} y2={y} stroke={color} strokeWidth="2"/>
            <circle cx="340" cy={y} r="3" fill={color}/>
            <text x="335" y={y + 4} textAnchor="end" fill={color} fontSize="8">{label}</text>
          </g>
        ))}

        {/* ===== RESISTOR 10K ===== */}
        <rect x="310" y="138" width="28" height="10" rx="3" fill="#d4a" stroke="#a07" strokeWidth="1"/>
        <text x="324" y="160" textAnchor="middle" fill="#704" fontSize="8">10kΩ</text>

        {/* ===== WIRES ===== */}
        {/* 5V: Arduino -> Breadboard -> DHT VCC */}
        <polyline points="180,120 210,120 210,125 220,125" fill="none" stroke="#ff4444" strokeWidth="2"/>
        <polyline points="220,125 260,125 260,125 340,125" fill="none" stroke="#ff4444" strokeWidth="2" strokeDasharray="4,2"/>

        {/* GND: Arduino -> Breadboard -> DHT GND */}
        <polyline points="180,140 210,140 210,260 340,260 340,185" fill="none" stroke="#333" strokeWidth="2" strokeDasharray="4,2"/>

        {/* D2: Arduino -> Resistor -> DHT DATA */}
        <polyline points="180,160 210,160 210,143 310,143" fill="none" stroke="#f80" strokeWidth="2" strokeDasharray="4,2"/>
        <polyline points="338,143 340,143 340,145" fill="none" stroke="#f80" strokeWidth="2" strokeDasharray="4,2"/>

        {/* ===== LEGEND ===== */}
        <rect x="20" y="290" width="10" height="4" fill="#ff4444"/>
        <text x="34" y="295" fill="#555" fontSize="8">VCC (5V)</text>
        <rect x="90" y="290" width="10" height="4" fill="#333"/>
        <text x="104" y="295" fill="#555" fontSize="8">GND</text>
        <rect x="145" y="290" width="10" height="4" fill="#f80"/>
        <text x="159" y="295" fill="#555" fontSize="8">DATA (D2)</text>

      </svg>
      <div style={{ fontSize: "12px", color: "#64748b", textAlign: "center", maxWidth: 440 }}>
        <b>Komponen:</b> Arduino Uno, Sensor DHT11, Resistor 10kΩ, Breadboard, Kabel jumper
        <br/>
        <b>Koneksi:</b> VCC→5V | DATA→D2 (pull-up 10kΩ) | GND→GND
      </div>
    </div>
  );
};

export default RangkaianDHT;