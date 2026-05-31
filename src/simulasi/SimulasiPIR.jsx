import { useState, useEffect } from "react"

export default function SimulasiPIR() {
  const [terdeteksi, setTerdeteksi] = useState(false)
  const [auto, setAuto] = useState(false)
  const [log, setLog] = useState([])

  useEffect(() => {
    if (!auto) return
    const interval = setInterval(() => {
      const detected = Math.random() > 0.5
      setTerdeteksi(detected)
      if (detected) {
        setLog(l => [`${new Date().toLocaleTimeString()} - Gerakan terdeteksi!`, ...l.slice(0, 4)])
      }
    }, 2000)
    return () => clearInterval(interval)
  }, [auto])

  function trigger() {
    setTerdeteksi(true)
    setLog(l => [`${new Date().toLocaleTimeString()} - Gerakan terdeteksi!`, ...l.slice(0, 4)])
    setTimeout(() => setTerdeteksi(false), 3000)
  }

  return (
    <div style={{ padding: 20 }}>
      <h4 style={{ color: "#3b82f6", marginBottom: 16, textAlign: "center" }}>
        🎮 Simulasi Sensor PIR
      </h4>

      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <div style={{
          width: 100, height: 100, borderRadius: "50%", margin: "0 auto 12px",
          background: terdeteksi ? "#ef444422" : "#0f172a",
          border: `4px solid ${terdeteksi ? "#ef4444" : "#334155"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 40, transition: "all 0.3s",
          boxShadow: terdeteksi ? "0 0 30px #ef444488" : "none"
        }}>👁️</div>

        <p style={{
          color: terdeteksi ? "#ef4444" : "#10b981",
          fontWeight: 700, fontSize: 16
        }}>
          {terdeteksi ? "🚨 GERAKAN TERDETEKSI!" : "✅ Tidak Ada Gerakan"}
        </p>
        <p style={{ color: "#64748b", fontSize: 12, marginTop: 4 }}>
          Output PIN: <span style={{ color: terdeteksi ? "#ef4444" : "#10b981", fontWeight: 700 }}>
            {terdeteksi ? "HIGH (1)" : "LOW (0)"}
          </span>
        </p>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <button onClick={trigger} style={{
          flex: 1, padding: "10px", borderRadius: 8,
          background: "#3b82f6", color: "#fff", fontWeight: 600
        }}>👋 Simulasi Gerakan</button>
        <button onClick={() => setAuto(a => !a)} style={{
          flex: 1, padding: "10px", borderRadius: 8,
          background: auto ? "#ef4444" : "#10b981", color: "#fff", fontWeight: 600
        }}>{auto ? "⏹ Stop Auto" : "▶ Auto Deteksi"}</button>
      </div>

      {log.length > 0 && (
        <div style={{ background: "#0f172a", borderRadius: 8, padding: 12, marginBottom: 12 }}>
          <p style={{ color: "#64748b", fontSize: 12, marginBottom: 6 }}>📋 Log Deteksi:</p>
          {log.map((l, i) => (
            <p key={i} style={{ color: "#ef4444", fontSize: 12, marginBottom: 2 }}>• {l}</p>
          ))}
        </div>
      )}

      <div style={{ background: "#1e293b", borderRadius: 8, padding: 12 }}>
        <p style={{ color: "#64748b", fontSize: 12, marginBottom: 4 }}>Kode Arduino:</p>
        <pre style={{ color: "#86efac", fontSize: 12 }}>{`int pirPin = 7;
int nilaiPIR = digitalRead(pirPin);
// Nilai: ${terdeteksi ? "HIGH" : "LOW"}
if (nilaiPIR == HIGH) {
  // Gerakan terdeteksi!
  digitalWrite(ledPin, HIGH);
}`}</pre>
      </div>
    </div>
  )
}