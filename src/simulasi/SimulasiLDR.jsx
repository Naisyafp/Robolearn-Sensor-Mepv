import { useState, useEffect } from "react"

export default function SimulasiLDR() {
  const [cahaya, setCahaya] = useState(500)
  const [realtime, setRealtime] = useState(false)

  useEffect(() => {
    if (!realtime) return
    const interval = setInterval(() => {
      setCahaya(c => Math.min(1023, Math.max(0, c + (Math.random() - 0.5) * 80)))
    }, 800)
    return () => clearInterval(interval)
  }, [realtime])

  function getStatus() {
    if (cahaya < 200) return { teks: "🌑 Sangat Gelap", warna: "#6366f1" }
    if (cahaya < 400) return { teks: "🌒 Gelap", warna: "#8b5cf6" }
    if (cahaya < 600) return { teks: "🌤️ Redup", warna: "#f59e0b" }
    if (cahaya < 800) return { teks: "☀️ Terang", warna: "#fbbf24" }
    return { teks: "🌟 Sangat Terang", warna: "#fff" }
  }

  function getLampu() {
    if (cahaya < 400) return { nyala: true, teks: "💡 Lampu ON (gelap terdeteksi)" }
    return { nyala: false, teks: "💡 Lampu OFF (cukup terang)" }
  }

  const status = getStatus()
  const lampu = getLampu()
  const resistansi = Math.round(10000 * (1023 - cahaya) / (cahaya + 1))

  return (
    <div style={{ padding: 20 }}>
      <h4 style={{ color: "#3b82f6", marginBottom: 16, textAlign: "center" }}>
        🎮 Simulasi Sensor LDR
      </h4>

      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <div style={{
          width: 120, height: 120, borderRadius: "50%", margin: "0 auto 12px",
          background: `rgba(${Math.round(cahaya / 4)}, ${Math.round(cahaya / 4)}, 0, 0.3)`,
          border: `4px solid ${status.warna}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 48, transition: "all 0.5s",
          boxShadow: cahaya > 600 ? `0 0 30px ${status.warna}88` : "none"
        }}>☀️</div>

        <p style={{ color: status.warna, fontWeight: 700, fontSize: 16 }}>{status.teks}</p>
        <p style={{ color: "#64748b", fontSize: 13, marginTop: 4 }}>
          Nilai ADC: <span style={{ color: "#fbbf24", fontWeight: 700 }}>{Math.round(cahaya)}</span> / 1023
        </p>
        <p style={{ color: "#64748b", fontSize: 12 }}>
          Resistansi LDR: <span style={{ color: "#3b82f6" }}>~{resistansi.toLocaleString()} Ω</span>
        </p>
      </div>

      <div style={{
        background: lampu.nyala ? "#1e3a1e" : "#1e293b",
        border: `2px solid ${lampu.nyala ? "#10b981" : "#334155"}`,
        borderRadius: 8, padding: 10, textAlign: "center", marginBottom: 16
      }}>
        <p style={{ color: lampu.nyala ? "#10b981" : "#64748b", fontWeight: 600, fontSize: 13 }}>
          {lampu.teks}
        </p>
      </div>

      {!realtime && (
        <>
          <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 6 }}>
            Intensitas cahaya: {Math.round(cahaya)}
          </p>
          <input type="range" min={0} max={1023} value={cahaya}
            onChange={e => setCahaya(Number(e.target.value))}
            style={{ width: "100%", marginBottom: 16 }} />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#64748b", marginBottom: 12 }}>
            <span>🌑 Gelap</span>
            <span>🌟 Terang</span>
          </div>
        </>
      )}

      <button onClick={() => setRealtime(r => !r)} style={{
        width: "100%", padding: "10px", borderRadius: 8, fontWeight: 600,
        background: realtime ? "#ef4444" : "#10b981", color: "#fff", marginBottom: 12
      }}>{realtime ? "⏹ Stop Simulasi" : "▶ Simulasi Realtime"}</button>

      <div style={{ background: "#1e293b", borderRadius: 8, padding: 12 }}>
        <p style={{ color: "#64748b", fontSize: 12, marginBottom: 4 }}>Kode Arduino:</p>
        <pre style={{ color: "#86efac", fontSize: 12 }}>{`int nilaiLDR = analogRead(A0);
// Nilai: ${Math.round(cahaya)}
if (nilaiLDR < 400) {
  digitalWrite(lampuPin, HIGH);
} else {
  digitalWrite(lampuPin, LOW);
}`}</pre>
      </div>
    </div>
  )
}