import { useState, useEffect } from "react"

export default function SimulasiUltrasonik() {
  const [jarak, setJarak] = useState(50)
  const [animasi, setAnimasi] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => setAnimasi(a => !a), 500)
    return () => clearInterval(interval)
  }, [])

  function getWarna() {
    if (jarak < 20) return "#ef4444"
    if (jarak < 50) return "#f59e0b"
    return "#10b981"
  }

  function getStatus() {
    if (jarak < 20) return "⚠️ BAHAYA! Objek sangat dekat!"
    if (jarak < 50) return "⚡ Objek terdeteksi"
    return "✅ Aman, tidak ada objek"
  }

  return (
    <div style={{ padding: 20 }}>
      <h4 style={{ color: "#3b82f6", marginBottom: 16, textAlign: "center" }}>
        🎮 Simulasi Sensor HC-SR04
      </h4>

      <div style={{ position: "relative", background: "#0f172a", borderRadius: 12, padding: 20, marginBottom: 16, height: 120, overflow: "hidden" }}>
        <div style={{
          position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)",
          background: "#1e293b", border: "2px solid #3b82f6",
          borderRadius: 8, padding: "8px 12px", fontSize: 12, color: "#3b82f6", fontWeight: 700
        }}>HC-SR04</div>

        {[1, 2, 3].map(i => (
          <div key={i} style={{
            position: "absolute", left: `${80 + (animasi ? i * 20 : i * 15)}px`,
            top: "50%", transform: "translateY(-50%)",
            width: 2, height: `${30 - i * 6}px`,
            background: `rgba(59,130,246,${animasi ? 0.8 - i * 0.2 : 0.3})`,
            borderRadius: 2, transition: "all 0.5s"
          }} />
        ))}

        <div style={{
          position: "absolute", right: `${100 - jarak}%`,
          top: "50%", transform: "translateY(-50%)",
          width: 30, height: 60, background: "#334155",
          borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 20
        }}>📦</div>
      </div>

      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <span style={{ fontSize: 32, fontWeight: 700, color: getWarna() }}>{jarak} cm</span>
        <p style={{ color: getWarna(), fontSize: 13, marginTop: 4 }}>{getStatus()}</p>
      </div>

      <input type="range" min={5} max={100} value={jarak}
        onChange={e => setJarak(Number(e.target.value))}
        style={{ width: "100%", marginBottom: 12 }}
      />
      <p style={{ color: "#64748b", fontSize: 12, textAlign: "center" }}>
        Geser untuk simulasikan jarak objek
      </p>

      <div style={{ background: "#1e293b", borderRadius: 8, padding: 12, marginTop: 12 }}>
        <p style={{ color: "#64748b", fontSize: 12, marginBottom: 4 }}>Perhitungan:</p>
        <pre style={{ color: "#86efac", fontSize: 12 }}>{`durasi = ${(jarak * 58.2).toFixed(0)} mikrodetik
jarak = durasi / 58.2 = ${jarak} cm`}</pre>
      </div>
    </div>
  )
}