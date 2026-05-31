import { useState, useEffect } from "react"

export default function SimulasiDHT() {
  const [suhu, setSuhu] = useState(27)
  const [lembab, setLembab] = useState(60)
  const [realtime, setRealtime] = useState(false)

  useEffect(() => {
    if (!realtime) return
    const interval = setInterval(() => {
      setSuhu(s => Math.min(50, Math.max(0, s + (Math.random() - 0.5) * 2)))
      setLembab(l => Math.min(90, Math.max(20, l + (Math.random() - 0.5) * 3)))
    }, 1000)
    return () => clearInterval(interval)
  }, [realtime])

  function getSuhuWarna() {
    if (suhu > 35) return "#ef4444"
    if (suhu > 28) return "#f59e0b"
    return "#10b981"
  }

  function getSuhuStatus() {
    if (suhu > 35) return "🔥 Panas!"
    if (suhu > 28) return "☀️ Hangat"
    return "❄️ Normal"
  }

  function getLembabStatus() {
    if (lembab > 75) return "💧 Sangat Lembab"
    if (lembab > 50) return "🌤️ Normal"
    return "🏜️ Kering"
  }

  return (
    <div style={{ padding: 20 }}>
      <h4 style={{ color: "#3b82f6", marginBottom: 16, textAlign: "center" }}>
        🎮 Simulasi Sensor DHT11
      </h4>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
        <div style={{ background: "#0f172a", borderRadius: 12, padding: 16, textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🌡️</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: getSuhuWarna() }}>
            {suhu.toFixed(1)}°C
          </div>
          <div style={{ color: getSuhuWarna(), fontSize: 13, marginTop: 4 }}>{getSuhuStatus()}</div>
          <div style={{ background: "#1e293b", borderRadius: 8, height: 8, marginTop: 12 }}>
            <div style={{
              background: getSuhuWarna(), height: 8, borderRadius: 8,
              width: `${(suhu / 50) * 100}%`, transition: "width 0.5s"
            }} />
          </div>
        </div>

        <div style={{ background: "#0f172a", borderRadius: 12, padding: 16, textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>💧</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#3b82f6" }}>
            {lembab.toFixed(1)}%
          </div>
          <div style={{ color: "#3b82f6", fontSize: 13, marginTop: 4 }}>{getLembabStatus()}</div>
          <div style={{ background: "#1e293b", borderRadius: 8, height: 8, marginTop: 12 }}>
            <div style={{
              background: "#3b82f6", height: 8, borderRadius: 8,
              width: `${((lembab - 20) / 70) * 100}%`, transition: "width 0.5s"
            }} />
          </div>
        </div>
      </div>

      {!realtime && (
        <div style={{ marginBottom: 16 }}>
          <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 8 }}>🌡️ Suhu: {suhu.toFixed(1)}°C</p>
          <input type="range" min={0} max={50} step={0.5} value={suhu}
            onChange={e => setSuhu(Number(e.target.value))}
            style={{ width: "100%", marginBottom: 12 }} />
          <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 8 }}>💧 Kelembaban: {lembab.toFixed(1)}%</p>
          <input type="range" min={20} max={90} step={1} value={lembab}
            onChange={e => setLembab(Number(e.target.value))}
            style={{ width: "100%" }} />
        </div>
      )}

      <button onClick={() => setRealtime(r => !r)} style={{
        width: "100%", padding: "10px", borderRadius: 8, fontWeight: 600,
        background: realtime ? "#ef4444" : "#10b981", color: "#fff", marginBottom: 12
      }}>{realtime ? "⏹ Stop Simulasi" : "▶ Simulasi Realtime"}</button>

      <div style={{ background: "#1e293b", borderRadius: 8, padding: 12 }}>
        <p style={{ color: "#64748b", fontSize: 12, marginBottom: 4 }}>Output Serial Monitor:</p>
        <pre style={{ color: "#86efac", fontSize: 12 }}>{`Suhu: ${suhu.toFixed(1)} °C
Kelembaban: ${lembab.toFixed(1)} %`}</pre>
      </div>
    </div>
  )
}