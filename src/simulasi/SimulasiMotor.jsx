import { useState, useEffect } from "react"

export default function SimulasiMotor() {
  const [kecepatan, setKecepatan] = useState(0)
  const [arah, setArah] = useState("maju")
  const [rotasi, setRotasi] = useState(0)

  useEffect(() => {
    if (kecepatan === 0) return
    const interval = setInterval(() => {
      setRotasi(r => arah === "maju" ? r + kecepatan / 20 : r - kecepatan / 20)
    }, 50)
    return () => clearInterval(interval)
  }, [kecepatan, arah])

  function getPWM() { return Math.round((kecepatan / 100) * 255) }

  function getWarnaMotor() {
    if (kecepatan === 0) return "#334155"
    if (kecepatan < 40) return "#10b981"
    if (kecepatan < 70) return "#f59e0b"
    return "#ef4444"
  }

  return (
    <div style={{ padding: 20 }}>
      <h4 style={{ color: "#3b82f6", marginBottom: 16, textAlign: "center" }}>
        🎮 Simulasi Motor DC + L298N
      </h4>

      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <div style={{
          width: 100, height: 100, borderRadius: "50%",
          border: `6px solid ${getWarnaMotor()}`,
          margin: "0 auto", display: "flex", alignItems: "center",
          justifyContent: "center", position: "relative",
          transition: "border-color 0.3s"
        }}>
          <div style={{
            width: 8, height: 40, background: getWarnaMotor(),
            borderRadius: 4, transformOrigin: "bottom center",
            transform: `rotate(${rotasi}deg)`, transition: "background 0.3s"
          }} />
          <div style={{
            position: "absolute", width: 16, height: 16,
            borderRadius: "50%", background: getWarnaMotor()
          }} />
        </div>
        <p style={{ color: "#94a3b8", fontSize: 12, marginTop: 8 }}>
          {kecepatan === 0 ? "⏹ Motor Berhenti" : arah === "maju" ? "↻ Berputar Maju" : "↺ Berputar Mundur"}
        </p>
      </div>

      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 16 }}>
        {["maju", "mundur"].map(a => (
          <button key={a} onClick={() => setArah(a)} style={{
            padding: "8px 20px", borderRadius: 8, fontWeight: 600,
            background: arah === a ? "#3b82f6" : "#1e293b",
            color: "#fff"
          }}>{a === "maju" ? "▶ Maju" : "◀ Mundur"}</button>
        ))}
        <button onClick={() => setKecepatan(0)} style={{
          padding: "8px 20px", borderRadius: 8, fontWeight: 600,
          background: "#ef4444", color: "#fff"
        }}>⏹ Stop</button>
      </div>

      <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 8 }}>
        Kecepatan: {kecepatan}% (PWM: {getPWM()}/255)
      </p>
      <input type="range" min={0} max={100} value={kecepatan}
        onChange={e => setKecepatan(Number(e.target.value))}
        style={{ width: "100%", marginBottom: 16 }} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
        {[25, 50, 75, 100].map(v => (
          <button key={v} onClick={() => setKecepatan(v)} style={{
            padding: "6px", borderRadius: 8, background: "#1e293b",
            color: "#94a3b8", fontSize: 13, fontWeight: 600
          }}>{v}% ({Math.round(v / 100 * 255)})</button>
        ))}
      </div>

      <div style={{ background: "#1e293b", borderRadius: 8, padding: 12 }}>
        <p style={{ color: "#64748b", fontSize: 12, marginBottom: 4 }}>Kode Arduino:</p>
        <pre style={{ color: "#86efac", fontSize: 12 }}>{`digitalWrite(IN1, ${arah === "maju" ? "HIGH" : "LOW"});
digitalWrite(IN2, ${arah === "maju" ? "LOW" : "HIGH"});
analogWrite(ENA, ${getPWM()}); // ${kecepatan}%`}</pre>
      </div>
    </div>
  )
}