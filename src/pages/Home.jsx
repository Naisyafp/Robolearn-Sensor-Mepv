export default function Home({ setPage, t }) {
  return (
    <div>
      {/* Hero Section */}
      <div style={{
        textAlign: "center", padding: "50px 20px",
        background: t.bgCard, borderRadius: 20, marginBottom: 24,
        border: `1px solid ${t.border}`,
        boxShadow: "0 8px 32px rgba(168,85,247,0.1)"
      }}>
        <div style={{ fontSize: 72, marginBottom: 16 }}>🤖</div>
        <h1 style={{
          fontSize: "clamp(24px, 5vw, 40px)", fontWeight: 800,
          color: t.primary, marginBottom: 12
        }}>
          Selamat Datang di RoboLearn!
        </h1>
        <p style={{ color: t.textMuted, fontSize: "clamp(14px, 2vw, 18px)", marginBottom: 24 }}>
          Platform belajar Mekatronika & Robotika interaktif untuk Siswa SMK
        </p>
        <button onClick={() => setPage("modul")} style={{
          background: t.gradient, color: "#fff",
          padding: "14px 36px", borderRadius: 30,
          fontSize: 16, fontWeight: 700,
          boxShadow: "0 4px 20px rgba(168,85,247,0.4)",
          transition: "transform 0.2s"
        }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        >
          🚀 Mulai Belajar
        </button>
      </div>

      {/* Stats */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: 12, marginBottom: 24
      }}>
        {[
          { angka: "7", label: "Modul Belajar", icon: "📚" },
          { angka: "105", label: "Soal Kuis", icon: "🧩" },
          { angka: "7", label: "Simulasi", icon: "🎮" },
          { angka: "10", label: "Komponen", icon: "🔌" },
        ].map(s => (
          <div key={s.label} style={{
            background: t.bgCard, borderRadius: 12, padding: "16px",
            textAlign: "center", border: `1px solid ${t.border}`
          }}>
            <div style={{ fontSize: 28, marginBottom: 4 }}>{s.icon}</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: t.primary }}>{s.angka}</div>
            <div style={{ color: t.textMuted, fontSize: 12 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Menu Cards */}
      <div className="grid-3" style={{
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24
      }}>
        {[
          { icon: "📚", title: "Modul Belajar", desc: "Pelajari Arduino & Sensor step by step dengan simulasi interaktif", page: "modul" },
          { icon: "🧩", title: "Kuis Interaktif", desc: "Uji pemahamanmu dengan 105 soal dan kumpulkan poin", page: "kuis" },
          { icon: "🔌", title: "Kamus Komponen", desc: "Ensiklopedi lengkap komponen mekatronika", page: "kamus" },
        ].map(item => (
          <div key={item.page} onClick={() => setPage(item.page)}
            className="card-hover"
            style={{
              background: t.bgCard, borderRadius: 16, padding: 24,
              cursor: "pointer", border: `1px solid ${t.border}`,
              transition: "all 0.3s"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.border = `1px solid ${t.primary}`
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(168,85,247,0.2)"
            }}
            onMouseLeave={e => {
              e.currentTarget.style.border = `1px solid ${t.border}`
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 12 }}>{item.icon}</div>
            <h3 style={{ color: t.primary, marginBottom: 8, fontSize: 18 }}>{item.title}</h3>
            <p style={{ color: t.textMuted, fontSize: 13, lineHeight: 1.6 }}>{item.desc}</p>
            <div style={{
              marginTop: 16, display: "inline-block",
              background: t.gradient, borderRadius: 20,
              padding: "6px 16px", color: "#fff", fontSize: 12, fontWeight: 600
            }}>Buka →</div>
          </div>
        ))}
      </div>

      {/* Cara Belajar */}
      <div style={{
        background: t.bgCard, borderRadius: 16, padding: 24,
        border: `1px solid ${t.border}`,
        borderLeft: `4px solid ${t.primary}`
      }}>
        <h3 style={{ color: t.text, marginBottom: 16, fontSize: 18 }}>📌 Cara Belajar yang Efektif</h3>
        <div className="grid-3" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12
        }}>
          {[
            { step: "01", text: "Baca Modul Belajar — pahami teori & kode Arduino" },
            { step: "02", text: "Lihat Rangkaian — pelajari cara merangkai komponen" },
            { step: "03", text: "Coba Simulasi — eksplorasi interaktif cara kerja sensor" },
          ].map(s => (
            <div key={s.step} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div style={{
                background: t.gradient, borderRadius: 10,
                width: 36, height: 36, display: "flex",
                alignItems: "center", justifyContent: "center",
                color: "#fff", fontWeight: 800, fontSize: 13, flexShrink: 0
              }}>{s.step}</div>
              <p style={{ color: t.textMuted, fontSize: 13, lineHeight: 1.6 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}