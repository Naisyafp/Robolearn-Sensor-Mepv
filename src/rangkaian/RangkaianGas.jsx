const RangkaianGas = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
      <h3 style={{ color: "#2563eb", fontWeight: "bold", fontSize: "16px" }}>
        Rangkaian Sensor Gas MQ-2
      </h3>
      <svg viewBox="0 0 500 340" width="100%" style={{ maxWidth: 480, borderRadius: 12, background: "#f8fafc", border: "1px solid #e2e8f0" }}>

        {/* ===== ARDUINO ===== */}
        <rect x="20" y="80" width="160" height="190" rx="10" fill="#1a7a4a" stroke="#145e38" strokeWidth="2"/>
        <text x="100" y="100" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">ARDUINO UNO</text>

        {/* Pin Labels */}
        {[["5V", "#ff4444", 120], ["GND", "#333", 145], ["A0", "#00aacc", 170], ["D7", "#f80", 195]].map(([label, color, y]) => (
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

        {/* ===== MQ-2 SENSOR ===== */}
        <rect x="350" y="95" width="110" height="120" rx="8" fill="#c0392b" stroke="#922b21" strokeWidth="2"/>
        <text x="405" y="118" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">MQ-2</text>

        {/* Sensor dome */}
        <circle cx="405" cy="155" r="28" fill="#888" stroke="#555" strokeWidth="2"/>
        <circle cx="405" cy="155" r="20" fill="#aaa" stroke="#777" strokeWidth="1"/>
        {/* mesh lines */}
        {[-12, -4, 4, 12].map(offset => (
          <line key={offset} x1={405 + offset} y1="135" x2={405 + offset} y2="175" stroke="#666" strokeWidth="1"/>
        ))}
        {[-12, -4, 4, 12].map(offset => (
          <line key={offset} x1="385" y1={155 + offset} x2="425" y2={155 + offset} stroke="#666" strokeWidth="1"/>
        ))}
        <text x="405" y="200" textAnchor="middle" fill="#fadbd8" fontSize="8">Gas Sensor</text>

        {/* MQ-2 Pins */}
        {[["VCC", "#ff4444", 110], ["GND", "#333", 130], ["AOUT", "#00aacc", 150], ["DOUT", "#f80", 170]].map(([label, color, y]) => (
          <g key={label}>
            <line x1="350" x2="335" y1={y} y2={y} stroke={color} strokeWidth="2"/>
            <circle cx="335" cy={y} r="3" fill={color}/>
            <text x="330" y={y + 4} textAnchor="end" fill={color} fontSize="8">{label}</text>
          </g>
        ))}

        {/* ===== WIRES ===== */}
        {/* 5V */}
        <polyline points="180,120 207,120 207,110 215,110" fill="none" stroke="#ff4444" strokeWidth="2"/>
        <polyline points="215,110 250,110 250,110 330,110" fill="none" stroke="#ff4444" strokeWidth="2" strokeDasharray="4,2"/>

        {/* GND */}
        <polyline points="180,145 207,145 207,265 330,265 330,130" fill="none" stroke="#333" strokeWidth="2" strokeDasharray="4,2"/>

        {/* A0 - Analog out */}
        <polyline points="180,170 207,170 207,150 215,150" fill="none" stroke="#00aacc" strokeWidth="2"/>
        <polyline points="215,150 268,150 268,150 330,150" fill="none" stroke="#00aacc" strokeWidth="2" strokeDasharray="4,2"/>

        {/* D7 - Digital out */}
        <polyline points="180,195 207,195 207,170 215,170" fill="none" stroke="#f80" strokeWidth="2"/>
        <polyline points="215,170 286,170 286,170 330,170" fill="none" stroke="#f80" strokeWidth="2" strokeDasharray="4,2"/>

        {/* ===== BUZZER (extra komponen) ===== */}
        <circle cx="435" cy="255" r="18" fill="#333" stroke="#111" strokeWidth="2"/>
        <circle cx="435" cy="255" r="10" fill="#555"/>
        <text x="435" y="259" textAnchor="middle" fill="#fff" fontSize="8">BUZ</text>
        <text x="435" y="282" textAnchor="middle" fill="#555" fontSize="8">Buzzer</text>
        {/* Wire D7 to buzzer */}
        <polyline points="330,170 330,255 417,255" fill="none" stroke="#f80" strokeWidth="1.5" strokeDasharray="3,2"/>

        {/* ===== LEGEND ===== */}
        <rect x="20" y="292" width="10" height="4" fill="#ff4444"/>
        <text x="34" y="297" fill="#555" fontSize="8">VCC (5V)</text>
        <rect x="85" y="292" width="10" height="4" fill="#333"/>
        <text x="99" y="297" fill="#555" fontSize="8">GND</text>
        <rect x="135" y="292" width="10" height="4" fill="#00aacc"/>
        <text x="149" y="297" fill="#555" fontSize="8">Analog (A0)</text>
        <rect x="210" y="292" width="10" height="4" fill="#f80"/>
        <text x="224" y="297" fill="#555" fontSize="8">Digital (D7)</text>

      </svg>
      <div style={{ fontSize: "12px", color: "#64748b", textAlign: "center", maxWidth: 440 }}>
        <b>Komponen:</b> Arduino Uno, Sensor MQ-2, Buzzer, Breadboard, Kabel jumper
        <br/>
        <b>Koneksi:</b> VCC→5V | GND→GND | AOUT→A0 | DOUT→D7→Buzzer
      </div>
    </div>
  );
};

export default RangkaianGas;