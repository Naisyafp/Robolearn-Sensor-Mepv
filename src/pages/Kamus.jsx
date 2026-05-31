import { useState } from "react"

const komponenData = [
  { nama: "Arduino Uno", icon: "🔧", kategori: "Mikrokontroler", deskripsi: "Papan mikrokontroler berbasis ATmega328P dengan 14 pin digital, 6 pin analog, clock 16MHz.", tegangan: "5V", kegunaan: "Otak dari sistem robotika, membaca sensor dan mengontrol aktuator" },
  { nama: "Sensor HC-SR04", icon: "📡", kategori: "Sensor Jarak", deskripsi: "Sensor ultrasonik untuk mengukur jarak 2cm-400cm menggunakan gelombang suara.", tegangan: "5V", kegunaan: "Deteksi halangan, pengukuran jarak, robot penjelajah" },
  { nama: "Sensor DHT11", icon: "🌡️", kategori: "Sensor Lingkungan", deskripsi: "Sensor digital untuk mengukur suhu (0-50°C) dan kelembaban (20-90% RH).", tegangan: "3.3V-5V", kegunaan: "Monitoring suhu ruangan, sistem HVAC, weather station" },
  { nama: "Motor DC", icon: "⚙️", kategori: "Aktuator", deskripsi: "Motor listrik yang mengubah energi listrik menjadi gerak rotasi. Kecepatan dikontrol dengan PWM.", tegangan: "3V-12V", kegunaan: "Penggerak roda robot, konveyor, kipas" },
  { nama: "Driver L298N", icon: "🎛️", kategori: "Driver Motor", deskripsi: "Modul driver motor H-Bridge yang dapat mengontrol 2 motor DC sekaligus.", tegangan: "5V-35V", kegunaan: "Mengontrol arah dan kecepatan motor DC dari Arduino" },
  { nama: "Sensor LDR", icon: "💡", kategori: "Sensor Cahaya", deskripsi: "Light Dependent Resistor — resistansinya berubah sesuai intensitas cahaya.", tegangan: "3.3V-5V", kegunaan: "Lampu otomatis, robot line follower, alarm cahaya" },
  { nama: "Servo Motor", icon: "🔩", kategori: "Aktuator", deskripsi: "Motor dengan kontrol posisi sudut presisi 0-180 derajat menggunakan sinyal PWM.", tegangan: "4.8V-6V", kegunaan: "Lengan robot, steering robot, kamera pan-tilt" },
  { nama: "LED", icon: "💎", kategori: "Output", deskripsi: "Light Emitting Diode — komponen semikonduktor yang memancarkan cahaya saat dialiri arus.", tegangan: "1.8V-3.3V", kegunaan: "Indikator status, display, penerangan robot" },
  { nama: "Push Button", icon: "🔘", kategori: "Input", deskripsi: "Tombol tekan sederhana yang menghubungkan atau memutus rangkaian saat ditekan.", tegangan: "3.3V-5V", kegunaan: "Input manual, reset sistem, mode selector" },
  { nama: "Sensor IR", icon: "👁️", kategori: "Sensor", deskripsi: "Sensor inframerah untuk mendeteksi garis hitam/putih atau objek di depannya.", tegangan: "3.3V-5V", kegunaan: "Line follower robot, deteksi objek, remote control" },
]

export default function Kamus({ t }) {
  const [cari, setCari] = useState("")
  const [kategoriAktif, setKategoriAktif] = useState("Semua")
  const [detail, setDetail] = useState(null)

  const kategori = ["Semua", ...new Set(komponenData.map(k => k.kategori))]

  const filtered = komponenData.filter(k => {
    const cocokCari = k.nama.toLowerCase().includes(cari.toLowerCase()) ||
      k.deskripsi.toLowerCase().includes(cari.toLowerCase())
    const cocokKategori = kategoriAktif === "Semua" || k.kategori === kategoriAktif
    return cocokCari && cocokKategori
  })

  return (
    <div>
      <h2 style={{ marginBottom: 8, fontSize: "clamp(20px,4vw,28px)", background: t.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
        🔌 Kamus Komponen Mekatronika
      </h2>
      <p style={{ color: t.textMuted, marginBottom: 20 }}>Klik komponen untuk melihat detail lengkap</p>

      <input
        placeholder="🔍 Cari komponen..."
        value={cari}
        onChange={e => setCari(e.target.value)}
        style={{
          width: "100%", padding: "12px 16px", borderRadius: 12,
          background: t.bgCard, border: `1px solid ${t.border}`,
          color: t.text, fontSize: 15, marginBottom: 16,
          outline: "none", transition: "border 0.2s"
        }}
        onFocus={e => e.target.style.border = `1px solid ${t.primary}`}
        onBlur={e => e.target.style.border = `1px solid ${t.border}`}
      />

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
        {kategori.map(k => (
          <button key={k} onClick={() => setKategoriAktif(k)} style={{
            padding: "6px 16px", borderRadius: 20, fontWeight: 600, fontSize: 13,
            background: kategoriAktif === k ? t.gradient : t.bgCard,
            color: kategoriAktif === k ? "#fff" : t.textMuted,
            border: `1px solid ${kategoriAktif === k ? "transparent" : t.border}`,
            transition: "all 0.2s"
          }}>{k}</button>
        ))}
      </div>

      <div className="grid-auto" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 16
      }}>
        {filtered.map(k => (
          <div key={k.nama} onClick={() => setDetail(detail?.nama === k.nama ? null : k)}
            className="card-hover"
            style={{
              background: t.bgCard, borderRadius: 16, padding: 20, cursor: "pointer",
              border: detail?.nama === k.nama ? `2px solid ${t.primary}` : `1px solid ${t.border}`,
              transition: "all 0.2s",
              boxShadow: detail?.nama === k.nama ? "0 8px 32px rgba(168,85,247,0.2)" : "none"
            }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>{k.icon}</div>
            <h3 style={{ color: t.text, marginBottom: 6, fontSize: 15 }}>{k.nama}</h3>
            <span style={{
              background: t.gradient, color: "#fff",
              fontSize: 11, padding: "3px 10px", borderRadius: 10, fontWeight: 600
            }}>{k.kategori}</span>

            {detail?.nama === k.nama && (
              <div style={{ marginTop: 14, borderTop: `1px solid ${t.border}`, paddingTop: 14 }}>
                <p style={{ color: t.textMuted, fontSize: 13, lineHeight: 1.6, marginBottom: 10 }}>{k.deskripsi}</p>
                <p style={{ color: t.textMuted, fontSize: 12 }}>
                  ⚡ Tegangan: <span style={{ color: t.primary, fontWeight: 600 }}>{k.tegangan}</span>
                </p>
                <p style={{ color: t.textMuted, fontSize: 12, marginTop: 4 }}>
                  🎯 Kegunaan: <span style={{ color: t.textMuted }}>{k.kegunaan}</span>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", color: t.textMuted, padding: 60 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
          <p>Komponen tidak ditemukan</p>
        </div>
      )}
    </div>
  )
}