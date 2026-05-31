import { useState } from "react"
import SimulasiLED from "../simulasi/SimulasiLED"
import SimulasiUltrasonik from "../simulasi/SimulasiUltrasonik"
import SimulasiDHT from "../simulasi/SimulasiDHT"
import SimulasiMotor from "../simulasi/SimulasiMotor"
import SimulasiGas from "../simulasi/SimulasiGas"
import SimulasiPIR from "../simulasi/SimulasiPIR"
import SimulasiLDR from "../simulasi/SimulasiLDR"
import RangkaianArduino from "../rangkaian/RangkaianArduino"
import RangkaianUltrasonik from "../rangkaian/RangkaianUltrasonik"
import RangkaianDHT from "../rangkaian/RangkaianDHT"
import RangkaianMotor from "../rangkaian/RangkaianMotor"
import RangkaianGas from "../rangkaian/RangkaianGas"
import RangkaianPIR from "../rangkaian/RangkaianPIR"
import RangkaianLDR from "../rangkaian/RangkaianLDR"

const modulData = [
  {
    id: 1, judul: "Pengenalan Arduino", icon: "🔧",
    warna: "#1a7a4a", warnaLight: "#e8f5e9",
    konten: [
      { subjudul: "Apa itu Arduino?", teks: "Arduino adalah papan mikrokontroler open-source yang mudah digunakan. Arduino dapat membaca input (sensor, tombol) dan mengubahnya menjadi output (motor, LED, dll)." },
      { subjudul: "Komponen Utama Arduino", teks: "• Digital Pin: untuk sinyal HIGH/LOW\n• Analog Pin: untuk membaca nilai 0-1023\n• Power Pin: 5V, 3.3V, GND\n• USB Port: untuk upload program\n• Mikrokontroler ATmega328P: otak dari Arduino" },
      { subjudul: "Contoh Program Pertama (Blink LED)", teks: "void setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}" },
    ],
    Simulasi: SimulasiLED,
    Rangkaian: RangkaianArduino,
  },
  {
    id: 2, judul: "Sensor Ultrasonik HC-SR04", icon: "📡",
    warna: "#00796b", warnaLight: "#e0f2f1",
    konten: [
      { subjudul: "Apa itu Sensor Ultrasonik?", teks: "Sensor HC-SR04 menggunakan gelombang suara frekuensi tinggi untuk mengukur jarak. Sensor ini mengirim gelombang ultrasonik dan menghitung waktu pantulannya." },
      { subjudul: "Pin-pin HC-SR04", teks: "• VCC: dihubungkan ke 5V Arduino\n• GND: dihubungkan ke GND Arduino\n• TRIG: pin trigger untuk mengirim gelombang\n• ECHO: pin untuk menerima pantulan gelombang" },
      { subjudul: "Rumus Menghitung Jarak", teks: "Jarak (cm) = durasi / 58.2" },
    ],
    Simulasi: SimulasiUltrasonik,
    Rangkaian: RangkaianUltrasonik,
  },
  {
    id: 3, judul: "Sensor Suhu DHT11", icon: "🌡️",
    warna: "#1565c0", warnaLight: "#e3f2fd",
    konten: [
      { subjudul: "Apa itu DHT11?", teks: "DHT11 adalah sensor digital yang dapat mengukur suhu (0-50°C) dan kelembaban udara (20-90% RH). Sangat populer digunakan dalam proyek IoT dan monitoring lingkungan." },
      { subjudul: "Koneksi DHT11 ke Arduino", teks: "• Pin 1 (VCC): ke 5V\n• Pin 2 (DATA): ke pin digital Arduino (misal pin 2)\n• Pin 4 (GND): ke GND\n• Tambahkan resistor 10kΩ antara VCC dan DATA" },
      { subjudul: "Library yang Digunakan", teks: '#include "DHT.h"\n#define DHTPIN 2\n#define DHTTYPE DHT11' },
    ],
    Simulasi: SimulasiDHT,
    Rangkaian: RangkaianDHT,
  },
  {
    id: 4, judul: "Motor DC & Driver L298N", icon: "⚙️",
    warna: "#1565c0", warnaLight: "#e8eaf6",
    konten: [
      { subjudul: "Apa itu Motor DC?", teks: "Motor DC mengubah energi listrik menjadi energi gerak rotasi. Kecepatan dan arahnya dapat dikontrol menggunakan driver motor seperti L298N." },
      { subjudul: "Mengenal Driver L298N", teks: "• IN1 & IN2: kontrol arah motor A\n• IN3 & IN4: kontrol arah motor B\n• ENA: kontrol kecepatan motor A (PWM)\n• ENB: kontrol kecepatan motor B (PWM)" },
      { subjudul: "Kontrol Kecepatan", teks: "analogWrite(ENA, 200); // 0-255\n// 0 = berhenti, 255 = kecepatan penuh" },
    ],
    Simulasi: SimulasiMotor,
    Rangkaian: RangkaianMotor,
  },
  {
    id: 5, judul: "Sensor Gas MQ-2", icon: "💨",
    warna: "#c0392b", warnaLight: "#fdecea",
    konten: [
      { subjudul: "Apa itu Sensor MQ-2?", teks: "MQ-2 adalah sensor gas yang dapat mendeteksi LPG, asap, alkohol, propana, hidrogen, dan metana. Sangat berguna untuk sistem deteksi kebocoran gas dan alarm kebakaran." },
      { subjudul: "Pin-pin MQ-2", teks: "• VCC: ke 5V Arduino\n• GND: ke GND Arduino\n• AOUT: output analog (nilai 0-1023)\n• DOUT: output digital (HIGH jika gas terdeteksi)" },
      { subjudul: "Contoh Kode", teks: "int nilaiGas = analogRead(A0);\nif (nilaiGas > 400) {\n  digitalWrite(7, HIGH); // buzzer ON\n} else {\n  digitalWrite(7, LOW);\n}" },
    ],
    Simulasi: SimulasiGas,
    Rangkaian: RangkaianGas,
  },
  {
    id: 6, judul: "Sensor PIR HC-SR501", icon: "👁️",
    warna: "#5d4037", warnaLight: "#efebe9",
    konten: [
      { subjudul: "Apa itu Sensor PIR?", teks: "PIR (Passive Infrared) mendeteksi perubahan radiasi inframerah dari objek bergerak seperti manusia atau hewan. Jangkauan deteksi hingga 7 meter dengan sudut 120°." },
      { subjudul: "Pin-pin PIR HC-SR501", teks: "• VCC: ke 5V Arduino\n• OUT: ke pin digital Arduino\n• GND: ke GND Arduino\n• Trimpot 1: atur sensitivitas\n• Trimpot 2: atur waktu tunda output" },
      { subjudul: "Contoh Kode", teks: "int pir = digitalRead(2);\nif (pir == HIGH) {\n  digitalWrite(ledPin, HIGH);\n  Serial.println(\"Gerak Terdeteksi!\");\n}" },
    ],
    Simulasi: SimulasiPIR,
    Rangkaian: RangkaianPIR,
  },
  {
    id: 7, judul: "Sensor Cahaya LDR", icon: "💡",
    warna: "#f57f17", warnaLight: "#fffde7",
    konten: [
      { subjudul: "Apa itu LDR?", teks: "LDR (Light Dependent Resistor) adalah resistor yang nilainya berubah sesuai intensitas cahaya. Saat terang resistansi turun, saat gelap resistansi meningkat." },
      { subjudul: "Rangkaian Voltage Divider", teks: "• LDR dihubungkan seri dengan resistor 10kΩ\n• Titik tengah dihubungkan ke pin Analog (A0)\n• 5V ke salah satu ujung LDR\n• GND ke ujung resistor 10kΩ" },
      { subjudul: "Contoh Kode", teks: "int cahaya = analogRead(A0);\n// Nilai tinggi = gelap\n// Nilai rendah = terang\nif (cahaya > 700) {\n  digitalWrite(9, HIGH); // LED ON\n}" },
    ],
    Simulasi: SimulasiLDR,
    Rangkaian: RangkaianLDR,
  },
]

export default function Modul() {
  const [aktif, setAktif] = useState(null)
  const [tab, setTab] = useState({})

  function setTabModul(id, t) {
    setTab(prev => ({ ...prev, [id]: t }))
  }

  function getTab(id) {
    return tab[id] || "📖 Materi"
  }

  return (
    <div style={{ padding: 30, maxWidth: 960, margin: "0 auto" }}>
      <h2 style={{ color: "#3b82f6", marginBottom: 6 }}>📚 Modul Belajar Arduino & Sensor</h2>
      <p style={{ color: "#64748b", marginBottom: 24, fontSize: 14 }}>
        Pilih modul untuk mulai belajar — tersedia materi, simulasi, dan rangkaian
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {modulData.map(m => {
          const tabAktif = getTab(m.id)
          const terbuka = aktif === m.id

          return (
            <div key={m.id}>
              {/* Kartu Header */}
              <div
                onClick={() => setAktif(terbuka ? null : m.id)}
                style={{
                  background: terbuka ? m.warna : "#1e293b",
                  borderRadius: terbuka ? "12px 12px 0 0" : 12,
                  padding: 20,
                  cursor: "pointer",
                  border: terbuka ? `2px solid ${m.warna}` : "2px solid transparent",
                  transition: "all 0.2s",
                }}
              >
                <span style={{ fontSize: 32 }}>{m.icon}</span>
                <h3 style={{ color: "#f1f5f9", marginTop: 8, fontSize: 15 }}>{m.judul}</h3>
                <p style={{ color: terbuka ? "#fff" : "#3b82f6", fontSize: 13, marginTop: 4 }}>
                  {terbuka ? "▲ Tutup" : "▼ Buka Materi"}
                </p>
              </div>

              {/* Panel Konten */}
              {terbuka && (
                <div style={{
                  background: "#0f172a",
                  borderRadius: "0 0 12px 12px",
                  padding: 20,
                  border: `2px solid ${m.warna}`,
                  borderTop: "none",
                }}>
                  {/* Tab Buttons */}
                  <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                    {["📖 Materi", "🎮 Simulasi", "🔧 Rangkaian"].map(t => (
                      <button
                        key={t}
                        onClick={() => setTabModul(m.id, t)}
                        style={{
                          padding: "6px 14px",
                          borderRadius: 8,
                          fontWeight: 600,
                          fontSize: 12,
                          border: "none",
                          cursor: "pointer",
                          background: tabAktif === t ? m.warna : "#1e293b",
                          color: tabAktif === t ? "#fff" : "#94a3b8",
                          transition: "all 0.15s",
                        }}
                      >{t}</button>
                    ))}
                  </div>

                  {/* Tab: Materi */}
                  {tabAktif === "📖 Materi" && (
                    <div>
                      {m.konten.map((k, i) => (
                        <div key={i} style={{ marginBottom: 16 }}>
                          <h4 style={{ color: m.warna === "#1e293b" ? "#3b82f6" : m.warna, marginBottom: 6, fontSize: 14 }}>
                            {k.subjudul}
                          </h4>
                          <pre style={{
                            color: "#cbd5e1",
                            fontSize: 13,
                            whiteSpace: "pre-wrap",
                            fontFamily: k.teks.includes("{") || k.teks.includes("#include") ? "monospace" : "inherit",
                            background: k.teks.includes("{") || k.teks.includes("#include") ? "#1e293b" : "transparent",
                            padding: k.teks.includes("{") || k.teks.includes("#include") ? 12 : 0,
                            borderRadius: 8,
                            border: k.teks.includes("{") || k.teks.includes("#include") ? "1px solid #334155" : "none",
                          }}>{k.teks}</pre>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tab: Simulasi */}
                  {tabAktif === "🎮 Simulasi" && (
                    <div style={{
                      background: "#1e293b",
                      borderRadius: 10,
                      padding: 16,
                    }}>
                      <m.Simulasi />
                    </div>
                  )}

                  {/* Tab: Rangkaian */}
                  {tabAktif === "🔧 Rangkaian" && (
                    <div style={{
                      background: "#fff",
                      borderRadius: 10,
                      padding: 16,
                    }}>
                      <m.Rangkaian />
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}