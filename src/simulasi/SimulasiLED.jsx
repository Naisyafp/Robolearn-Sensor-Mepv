import { useState, useEffect } from "react"

export default function SimulasiLED() {
  const [nyala, setNyala] = useState(false)
  const [auto, setAuto] = useState(false)
  const [kecepatan, setKecepatan] = useState(1000)

  useEffect(() => {
    if (!auto) return
    const interval = setInterval(() => setNyala(n => !n), kecepatan)
    return () => clearInterval(interval)
  }, [auto, kecepatan])

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h4 style={{ color: "#3b82f6", marginBottom: 16 }}>🎮 Simulasi Blink LED</h4>

      <div style={{
        width: 80, height: 80, borderRadius: "50%", margin: "0 auto 20px",
        background: nyala ? "#facc15" : "#1e293b",
        boxShadow: nyala ? "0 0 30px 10px #facc1588" : "none",
        border: "3px solid #facc15", transition: "all 0.1s"
      }} />

      <p style={{ color: "#94a3b8", marginBottom: 16, fontSize: 13 }}>
        Status: <span style={{ color: nyala ? "#facc15" : "#64748b", fontWeight: 700 }}>
          {nyala ? "HIGH (ON)" : "LOW (OFF)"}
        </span>
      </p>

      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 16 }}>
        <button onClick={() => { setAuto(false); setNyala(n => !n) }} style={{
          padding: "8px 20px", borderRadius: 8, background: "#1e293b",
          color: "#f1f5f9", fontWeight: 600
        }}>Toggle Manual</button>
        <button onClick={() => setAuto(a => !a)} style={{
          padding: "8px 20px", borderRadius: 8,
          background: auto ? "#ef4444" : "#10b981", color: "#fff", fontWeight: 600
        }}>{auto ? "⏹ Stop Auto" : "▶ Auto Blink"}</button>
      </div>

      {auto && (
        <div>
          <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 8 }}>
            Delay: {kecepatan}ms (seperti delay() di Arduino)
          </p>
          <input type="range" min={200} max={2000} step={100}
            value={kecepatan} onChange={e => setKecepatan(Number(e.target.value))}
            style={{ width: "80%" }}
          />
        </div>
      )}

      <div style={{ background: "#1e293b", borderRadius: 8, padding: 12, marginTop: 16, textAlign: "left" }}>
        <p style={{ color: "#64748b", fontSize: 12, marginBottom: 4 }}>Kode Arduino:</p>
        <pre style={{ color: "#86efac", fontSize: 12 }}>{`digitalWrite(13, ${nyala ? "HIGH" : "LOW"});
delay(${kecepatan});`}</pre>
      </div>
    </div>
  )
}