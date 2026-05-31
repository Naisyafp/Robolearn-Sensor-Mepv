import { useState, useEffect } from "react"

export default function SimulasiGas() {
  const [kadar, setKadar] = useState(100)
  const [realtime, setRealtime] = useState(false)

  useEffect(() => {
    if (!realtime) return
    const interval = setInterval(() => {
      setKadar(k => Math.min(1000, Math.max(50, k + (Math.random() - 0.4) * 30)))
    }, 800)
    return () => clearInterval(interval)
  }, [realtime])

  function getStatus() {
    if (kadar > 700) return { teks: "☠️ BAHAYA! Gas berbahaya terdeteksi!", warna: "#ef4444" }
    if (kadar > 400) return { teks: "⚠️ Peringatan! Kadar gas tinggi!", warna: "#f59e0b" }
    if (kadar > 200) return { teks: "🔶 Waspada, kadar mulai naik", warna: "#fb923c" }
    return { teks: "✅ Aman, udara bersih", warna: "#10b981" }
  }

  const status = getStatus()
  const persen = Math.min(100, (kadar / 1000) * 100)

  return (
    <div style={{ padding: 20 }}>
      <h4 style={{ color: "#3b82f6", marginBottom: 16, textAlign: "center" }}>
        🎮 Simulasi Sensor Gas MQ-2
      </h4>

      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <div style={{
          width: 120, height: 120, borderRadius: "50%", margin: "0 auto 12px",
          border: `6px solid ${status.warna}`,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          background: "#0f172a", transition: "border-color 0.5s"
        }}>
          <span style={{ fontSize: 28 }}>💨</span>
          <span style={{ color: status.warna, fontWeight: 700, fontSize: 16 }}>{Math.round(kadar)}</span>
          <span style={{ color: "#64748b", fontSize: 11 }}>ppm</span>
        </div>
        <p style={{ color: status.warna, fontWeight: 600 }}>{status.teks}</p>
      </div>

      <div style={{ background: "#0f172a", borderRadius: 8, height: 16, marginBottom: 16, overflow: "hidden" }}>
        <div style={{
          height: "100%", borderRadius: 8, transition: "all 0.5s",
          width: `${persen}%`, background: status.warna
        }} />
      </div>

      {!realtime && (
        <>
          <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 6 }}>Kadar gas: {Math.round(kadar)} ppm</p>
          <input type="range" min={50} max={1000} value={kadar}
            onChange={e => setKadar(Number(e.target.value))}
            style={{ width: "100%", marginBottom: 16 }} />
        </>
      )}

      <button onClick={() => setRealtime(r => !r)} style={{
        width: "100%", padding: "10px", borderRadius: 8, fontWeight: 600,
        background: realtime ? "#ef4444" : "#10b981", color: "#fff", marginBottom: 12
      }}>{realtime ? "⏹ Stop Simulasi" : "▶ Simulasi Realtime"}</button>

      <div style={{ background: "#1e293b", borderRadius: 8, padding: 12 }}>
        <p style={{ color: "#64748b", fontSize: 12, marginBottom: 4 }}>Kode Arduino:</p>
        <pre style={{ color: "#86efac", fontSize: 12 }}>{`int nilaiGas = analogRead(A0);
// Nilai: ${Math.round(kadar)} ppm
if (nilaiGas > 400) {
  digitalWrite(buzzerPin, HIGH);
}`}</pre>
      </div>
    </div>
  )
}