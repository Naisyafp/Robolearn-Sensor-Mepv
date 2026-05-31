import { useState } from "react"

const modulKuis = [
  {
    id: 1, judul: "Arduino Uno", icon: "🔧",
    soal: [
      { pertanyaan: "Apa kepanjangan dari IDE pada Arduino IDE?", pilihan: ["Integrated Development Environment", "Internal Device Engine", "Input Display Editor", "Integrated Design Engine"], jawaban: 0 },
      { pertanyaan: "Berapa tegangan operasi Arduino Uno?", pilihan: ["3.3V", "9V", "5V", "12V"], jawaban: 2 },
      { pertanyaan: "Fungsi perintah pinMode() pada Arduino adalah?", pilihan: ["Membaca nilai sensor", "Mengatur pin sebagai INPUT atau OUTPUT", "Menghidupkan LED", "Mengatur kecepatan motor"], jawaban: 1 },
      { pertanyaan: "Perintah untuk menyalakan pin digital Arduino adalah?", pilihan: ["digitalWrite(pin, LOW)", "digitalRead(pin)", "digitalWrite(pin, HIGH)", "analogWrite(pin, 0)"], jawaban: 2 },
      { pertanyaan: "Berapa jumlah pin digital pada Arduino Uno?", pilihan: ["6", "10", "14", "20"], jawaban: 2 },
      { pertanyaan: "Fungsi void setup() pada Arduino adalah?", pilihan: ["Dijalankan berulang-ulang", "Dijalankan sekali saat Arduino menyala", "Membaca sensor", "Mengontrol motor"], jawaban: 1 },
      { pertanyaan: "Fungsi void loop() pada Arduino adalah?", pilihan: ["Dijalankan sekali", "Menginisialisasi pin", "Dijalankan terus-menerus", "Mematikan Arduino"], jawaban: 2 },
      { pertanyaan: "Perintah delay(1000) artinya?", pilihan: ["Tunggu 1 detik", "Tunggu 1 milidetik", "Tunggu 1 menit", "Tunggu 100 detik"], jawaban: 0 },
      { pertanyaan: "Mikrokontroler yang digunakan Arduino Uno adalah?", pilihan: ["ATmega2560", "ATmega328P", "ESP8266", "STM32"], jawaban: 1 },
      { pertanyaan: "Perintah Serial.begin(9600) digunakan untuk?", pilihan: ["Mengatur kecepatan motor", "Membuka komunikasi serial", "Membaca sensor analog", "Mengatur PWM"], jawaban: 1 },
      { pertanyaan: "Berapa jumlah pin analog pada Arduino Uno?", pilihan: ["4", "6", "8", "10"], jawaban: 1 },
      { pertanyaan: "Nilai maksimum analogRead() pada Arduino Uno adalah?", pilihan: ["255", "512", "1023", "4095"], jawaban: 2 },
      { pertanyaan: "Pin 13 pada Arduino Uno terhubung ke?", pilihan: ["Sensor suhu", "LED onboard", "Motor DC", "Buzzer"], jawaban: 1 },
      { pertanyaan: "Perintah untuk membaca nilai pin digital adalah?", pilihan: ["analogRead()", "digitalRead()", "digitalWrite()", "analogWrite()"], jawaban: 1 },
      { pertanyaan: "Frekuensi clock Arduino Uno adalah?", pilihan: ["8 MHz", "12 MHz", "16 MHz", "32 MHz"], jawaban: 2 },
    ]
  },
  {
    id: 2, judul: "Sensor HC-SR04", icon: "📡",
    soal: [
      { pertanyaan: "Apa fungsi pin TRIG pada sensor HC-SR04?", pilihan: ["Menerima pantulan gelombang", "Mengirim gelombang ultrasonik", "Memberikan tegangan 5V", "Menghubungkan ke GND"], jawaban: 1 },
      { pertanyaan: "Apa fungsi pin ECHO pada sensor HC-SR04?", pilihan: ["Mengirim gelombang", "Menerima pantulan gelombang", "Power supply", "Ground"], jawaban: 1 },
      { pertanyaan: "Jangkauan pengukuran HC-SR04 adalah?", pilihan: ["1cm - 100cm", "2cm - 400cm", "5cm - 200cm", "10cm - 500cm"], jawaban: 1 },
      { pertanyaan: "Rumus menghitung jarak pada HC-SR04 adalah?", pilihan: ["jarak = durasi * 58.2", "jarak = durasi / 58.2", "jarak = durasi + 58.2", "jarak = durasi - 58.2"], jawaban: 1 },
      { pertanyaan: "Tegangan operasi HC-SR04 adalah?", pilihan: ["3.3V", "5V", "9V", "12V"], jawaban: 1 },
      { pertanyaan: "Fungsi pulseIn() pada kode HC-SR04 adalah?", pilihan: ["Mengirim pulsa", "Mengukur durasi pulsa HIGH", "Mengatur kecepatan", "Membaca suhu"], jawaban: 1 },
      { pertanyaan: "Lama pulsa TRIG yang harus dikirim adalah?", pilihan: ["5 mikrodetik", "10 mikrodetik", "100 mikrodetik", "1000 mikrodetik"], jawaban: 1 },
      { pertanyaan: "HC-SR04 menggunakan gelombang jenis apa?", pilihan: ["Inframerah", "Radio", "Ultrasonik", "Laser"], jawaban: 2 },
      { pertanyaan: "Berapa jumlah pin pada HC-SR04?", pilihan: ["2", "3", "4", "5"], jawaban: 2 },
      { pertanyaan: "Perintah delayMicroseconds(10) artinya?", pilihan: ["Tunggu 10 detik", "Tunggu 10 milidetik", "Tunggu 10 mikrodetik", "Tunggu 10 menit"], jawaban: 2 },
      { pertanyaan: "HC-SR04 cocok digunakan untuk?", pilihan: ["Mengukur suhu", "Mendeteksi jarak/halangan", "Mengontrol motor", "Membaca cahaya"], jawaban: 1 },
      { pertanyaan: "Pin TRIG dihubungkan sebagai?", pilihan: ["INPUT", "OUTPUT", "ANALOG", "PWM"], jawaban: 1 },
      { pertanyaan: "Pin ECHO dihubungkan sebagai?", pilihan: ["OUTPUT", "INPUT", "ANALOG", "PWM"], jawaban: 1 },
      { pertanyaan: "Frekuensi gelombang ultrasonik HC-SR04 adalah?", pilihan: ["20 kHz", "40 kHz", "80 kHz", "100 kHz"], jawaban: 1 },
      { pertanyaan: "Jika durasi = 582 mikrodetik, maka jaraknya adalah?", pilihan: ["5 cm", "10 cm", "20 cm", "100 cm"], jawaban: 1 },
    ]
  },
  {
    id: 3, judul: "Sensor DHT11", icon: "🌡️",
    soal: [
      { pertanyaan: "DHT11 dapat mengukur?", pilihan: ["Jarak dan cahaya", "Suhu dan kelembaban", "Tekanan dan suhu", "Kecepatan dan arah"], jawaban: 1 },
      { pertanyaan: "Range suhu yang bisa diukur DHT11 adalah?", pilihan: ["-20°C sampai 80°C", "0°C sampai 50°C", "10°C sampai 100°C", "-40°C sampai 125°C"], jawaban: 1 },
      { pertanyaan: "Range kelembaban yang bisa diukur DHT11 adalah?", pilihan: ["0% - 100%", "20% - 90%", "10% - 80%", "30% - 95%"], jawaban: 1 },
      { pertanyaan: "Library yang digunakan untuk DHT11 adalah?", pilihan: ["Servo.h", "DHT.h", "Wire.h", "SPI.h"], jawaban: 1 },
      { pertanyaan: "Berapa jumlah pin aktif pada DHT11?", pilihan: ["2", "3", "4", "5"], jawaban: 1 },
      { pertanyaan: "Resistor pull-up pada DHT11 dipasang antara?", pilihan: ["GND dan DATA", "VCC dan DATA", "VCC dan GND", "DATA dan ECHO"], jawaban: 1 },
      { pertanyaan: "Nilai resistor pull-up yang direkomendasikan untuk DHT11?", pilihan: ["1kΩ", "4.7kΩ", "10kΩ", "100kΩ"], jawaban: 2 },
      { pertanyaan: "Perintah membaca suhu dari DHT11 adalah?", pilihan: ["dht.readHumidity()", "dht.readTemperature()", "dht.readSensor()", "dht.getSuhu()"], jawaban: 1 },
      { pertanyaan: "Tegangan operasi DHT11 adalah?", pilihan: ["1.8V", "3.3V - 5V", "9V", "12V"], jawaban: 1 },
      { pertanyaan: "DHT11 menggunakan protokol komunikasi?", pilihan: ["SPI", "I2C", "Single wire digital", "UART"], jawaban: 2 },
      { pertanyaan: "Akurasi pengukuran suhu DHT11 adalah?", pilihan: ["±0.1°C", "±0.5°C", "±1°C", "±2°C"], jawaban: 2 },
      { pertanyaan: "DHT11 sering digunakan dalam proyek?", pilihan: ["Line follower", "Weather station/IoT", "Robot arm", "Drone"], jawaban: 1 },
      { pertanyaan: "Perintah dht.begin() diletakkan di dalam?", pilihan: ["void loop()", "void setup()", "void main()", "void start()"], jawaban: 1 },
      { pertanyaan: "Jika dht.readTemperature() mengembalikan NaN artinya?", pilihan: ["Suhu sangat tinggi", "Pembacaan gagal/error", "Suhu normal", "Sensor panas"], jawaban: 1 },
      { pertanyaan: "DHT22 dibanding DHT11 memiliki?", pilihan: ["Harga lebih murah", "Akurasi lebih rendah", "Range dan akurasi lebih baik", "Ukuran lebih besar"], jawaban: 2 },
    ]
  },
  {
    id: 4, judul: "Motor DC & L298N", icon: "⚙️",
    soal: [
      { pertanyaan: "Driver motor L298N digunakan untuk?", pilihan: ["Membaca sensor suhu", "Mengontrol arah dan kecepatan motor DC", "Mengukur jarak", "Menyimpan data"], jawaban: 1 },
      { pertanyaan: "Perintah analogWrite() menghasilkan sinyal?", pilihan: ["Digital HIGH/LOW", "PWM (Pulse Width Modulation)", "Analog murni", "Serial data"], jawaban: 1 },
      { pertanyaan: "Nilai maksimum analogWrite() adalah?", pilihan: ["100", "255", "512", "1023"], jawaban: 1 },
      { pertanyaan: "Pin ENA pada L298N berfungsi untuk?", pilihan: ["Mengontrol arah motor", "Mengontrol kecepatan motor A", "Power supply", "Ground"], jawaban: 1 },
      { pertanyaan: "Untuk membuat motor berputar maju dengan L298N?", pilihan: ["IN1=LOW, IN2=LOW", "IN1=HIGH, IN2=HIGH", "IN1=HIGH, IN2=LOW", "IN1=LOW, IN2=HIGH"], jawaban: 2 },
      { pertanyaan: "L298N dapat mengontrol berapa motor DC sekaligus?", pilihan: ["1", "2", "3", "4"], jawaban: 1 },
      { pertanyaan: "Tegangan input motor L298N maksimal adalah?", pilihan: ["5V", "12V", "35V", "50V"], jawaban: 2 },
      { pertanyaan: "Motor DC mengubah energi listrik menjadi?", pilihan: ["Energi panas", "Energi cahaya", "Energi gerak rotasi", "Energi suara"], jawaban: 2 },
      { pertanyaan: "Untuk menghentikan motor dengan L298N?", pilihan: ["Cabut kabel", "IN1=LOW, IN2=LOW", "ENA=255", "Restart Arduino"], jawaban: 1 },
      { pertanyaan: "PWM singkatan dari?", pilihan: ["Power Width Module", "Pulse Width Modulation", "Power Wave Mode", "Pulse Wave Module"], jawaban: 1 },
      { pertanyaan: "analogWrite(ENA, 128) artinya kecepatan motor?", pilihan: ["0%", "25%", "50%", "100%"], jawaban: 2 },
      { pertanyaan: "L298N menggunakan rangkaian?", pilihan: ["Half bridge", "H-Bridge", "Full wave", "Half wave"], jawaban: 1 },
      { pertanyaan: "Pin PWM pada Arduino Uno ditandai dengan?", pilihan: ["Tanda *", "Tanda ~", "Tanda #", "Tanda @"], jawaban: 1 },
      { pertanyaan: "Motor DC berputar mundur jika?", pilihan: ["Tegangan dinaikkan", "Polaritas dibalik", "Kecepatan dikurangi", "Ground dilepas"], jawaban: 1 },
      { pertanyaan: "Fungsi dioda flyback pada rangkaian motor DC adalah?", pilihan: ["Menambah kecepatan", "Melindungi dari arus balik", "Mengukur tegangan", "Filter sinyal"], jawaban: 1 },
    ]
  },
  {
    id: 5, judul: "Sensor Gas MQ-2", icon: "💨",
    soal: [
      { pertanyaan: "Sensor MQ-2 digunakan untuk mendeteksi?", pilihan: ["Suhu udara", "Kadar gas berbahaya", "Intensitas cahaya", "Kelembaban"], jawaban: 1 },
      { pertanyaan: "MQ-2 dapat mendeteksi gas apa saja?", pilihan: ["CO2 dan O2", "LPG, asap, alkohol, hidrogen", "Nitrogen dan helium", "Ozon dan klorin"], jawaban: 1 },
      { pertanyaan: "Output MQ-2 terhubung ke pin apa pada Arduino?", pilihan: ["Pin digital saja", "Pin analog (A0-A5)", "Pin PWM saja", "Pin power"], jawaban: 1 },
      { pertanyaan: "Satuan yang digunakan untuk kadar gas adalah?", pilihan: ["Volt", "Ampere", "PPM (Part Per Million)", "Ohm"], jawaban: 2 },
      { pertanyaan: "Tegangan operasi MQ-2 adalah?", pilihan: ["3.3V", "5V", "9V", "12V"], jawaban: 1 },
      { pertanyaan: "Perintah membaca nilai MQ-2 di Arduino adalah?", pilihan: ["digitalRead(A0)", "analogRead(A0)", "pulseIn(A0)", "tone(A0)"], jawaban: 1 },
      { pertanyaan: "Nilai analogRead MQ-2 saat udara bersih biasanya?", pilihan: ["0-50", "100-300", "500-700", "900-1023"], jawaban: 1 },
      { pertanyaan: "MQ-2 membutuhkan waktu pemanasan berapa lama?", pilihan: ["10 detik", "1 menit", "20-30 detik", "5 menit"], jawaban: 2 },
      { pertanyaan: "Elemen sensitif dalam sensor MQ-2 terbuat dari?", pilihan: ["Karbon", "Timah oksida (SnO2)", "Tembaga", "Silikon"], jawaban: 1 },
      { pertanyaan: "Jika nilai analogRead MQ-2 > 400, artinya?", pilihan: ["Udara bersih", "Gas terdeteksi, perlu waspada", "Sensor rusak", "Tegangan kurang"], jawaban: 1 },
      { pertanyaan: "MQ-2 sering digunakan dalam sistem?", pilihan: ["Navigasi robot", "Detektor kebocoran gas/asap", "Pengukur jarak", "Kontrol motor"], jawaban: 1 },
      { pertanyaan: "Pin DOUT pada MQ-2 menghasilkan sinyal?", pilihan: ["Analog", "Digital HIGH/LOW", "PWM", "Serial"], jawaban: 1 },
      { pertanyaan: "Resistansi sensor MQ-2 akan turun jika?", pilihan: ["Udara bersih", "Kadar gas meningkat", "Suhu turun", "Tegangan turun"], jawaban: 1 },
      { pertanyaan: "MQ-2 sebaiknya dikalibrasi pada kondisi?", pilihan: ["Ruangan penuh asap", "Udara bersih dan segar", "Suhu tinggi", "Kelembaban tinggi"], jawaban: 1 },
      { pertanyaan: "Aktuator yang sering dipasangkan dengan MQ-2 adalah?", pilihan: ["Motor servo", "Buzzer/alarm", "LCD display saja", "LED saja"], jawaban: 1 },
    ]
  },
  {
    id: 6, judul: "Sensor PIR", icon: "👁️",
    soal: [
      { pertanyaan: "PIR singkatan dari?", pilihan: ["Passive Infrared Ray", "Passive Infrared Receiver", "Passive Infrared Radar", "Pulse Infrared Ray"], jawaban: 0 },
      { pertanyaan: "Sensor PIR mendeteksi gerakan berdasarkan?", pilihan: ["Gelombang suara", "Radiasi inframerah dari tubuh manusia", "Cahaya tampak", "Gelombang radio"], jawaban: 1 },
      { pertanyaan: "Output sensor PIR adalah sinyal?", pilihan: ["Analog", "Digital HIGH/LOW", "PWM", "Serial"], jawaban: 1 },
      { pertanyaan: "Tegangan operasi sensor PIR adalah?", pilihan: ["3.3V", "5V - 12V", "9V saja", "12V saja"], jawaban: 1 },
      { pertanyaan: "Jangkauan deteksi sensor PIR umumnya?", pilihan: ["0-1 meter", "3-7 meter", "10-20 meter", "50 meter"], jawaban: 1 },
      { pertanyaan: "Sudut deteksi sensor PIR umumnya?", pilihan: ["45 derajat", "90 derajat", "110 derajat", "180 derajat"], jawaban: 2 },
      { pertanyaan: "Pin output PIR dihubungkan sebagai?", pilihan: ["OUTPUT", "INPUT", "ANALOG", "PWM"], jawaban: 1 },
      { pertanyaan: "Sensor PIR sering digunakan untuk?", pilihan: ["Mengukur suhu", "Sistem keamanan/lampu otomatis", "Mengukur jarak", "Kontrol motor"], jawaban: 1 },
      { pertanyaan: "Trimpot sensitivity pada PIR digunakan untuk?", pilihan: ["Mengatur tegangan", "Mengatur jangkauan deteksi", "Mengatur kecepatan", "Mengatur warna LED"], jawaban: 1 },
      { pertanyaan: "Trimpot time-delay pada PIR digunakan untuk?", pilihan: ["Mengatur jarak", "Mengatur lama output HIGH setelah deteksi", "Mengatur tegangan", "Mengatur sudut"], jawaban: 1 },
      { pertanyaan: "Saat PIR mendeteksi gerakan, output menjadi?", pilihan: ["LOW (0V)", "HIGH (5V)", "Analog", "Tidak berubah"], jawaban: 1 },
      { pertanyaan: "Lensa Fresnel pada PIR berfungsi untuk?", pilihan: ["Memfilter cahaya", "Memfokuskan radiasi IR ke elemen sensor", "Melindungi dari debu", "Mengatur sensitivitas"], jawaban: 1 },
      { pertanyaan: "PIR tidak dapat mendeteksi?", pilihan: ["Manusia bergerak", "Hewan bergerak", "Benda mati tidak bergerak", "Robot bersuhu tubuh"], jawaban: 2 },
      { pertanyaan: "Komponen utama dalam sensor PIR adalah?", pilihan: ["LDR", "Elemen pyroelectric", "Transistor NPN", "Kapasitor"], jawaban: 1 },
      { pertanyaan: "Waktu stabilisasi sensor PIR setelah dinyalakan adalah?", pilihan: ["1 detik", "30-60 detik", "5 menit", "10 menit"], jawaban: 1 },
    ]
  },
  {
    id: 7, judul: "Sensor LDR", icon: "💡",
    soal: [
      { pertanyaan: "LDR singkatan dari?", pilihan: ["Light Dependent Resistor", "Low Density Resistor", "Light Digital Reader", "Linear Dependent Relay"], jawaban: 0 },
      { pertanyaan: "Resistansi LDR akan turun jika?", pilihan: ["Gelap", "Cahaya terang", "Suhu naik", "Tegangan turun"], jawaban: 1 },
      { pertanyaan: "LDR dihubungkan ke pin apa pada Arduino?", pilihan: ["Pin digital saja", "Pin analog (A0-A5)", "Pin PWM saja", "Pin 13"], jawaban: 1 },
      { pertanyaan: "Nilai analogRead LDR saat gelap adalah?", pilihan: ["Mendekati 0", "Mendekati 1023", "Tepat 512", "Tidak tentu"], jawaban: 0 },
      { pertanyaan: "Nilai analogRead LDR saat terang adalah?", pilihan: ["Mendekati 0", "Mendekati 1023", "Tepat 512", "Selalu 0"], jawaban: 1 },
      { pertanyaan: "Rangkaian LDR pada Arduino menggunakan?", pilihan: ["Rangkaian seri saja", "Pembagi tegangan (voltage divider)", "Rangkaian paralel saja", "Rangkaian jembatan"], jawaban: 1 },
      { pertanyaan: "Resistor yang dipasang seri dengan LDR biasanya bernilai?", pilihan: ["100 Ω", "1 kΩ", "10 kΩ", "1 MΩ"], jawaban: 2 },
      { pertanyaan: "LDR sering digunakan untuk?", pilihan: ["Mengukur suhu", "Lampu otomatis berbasis cahaya", "Mengukur jarak", "Kontrol motor"], jawaban: 1 },
      { pertanyaan: "Elemen sensitif LDR terbuat dari?", pilihan: ["Silikon murni", "Kadmium sulfida (CdS)", "Tembaga", "Karbon"], jawaban: 1 },
      { pertanyaan: "LDR termasuk jenis komponen?", pilihan: ["Aktif", "Pasif", "Digital", "Induktif"], jawaban: 1 },
      { pertanyaan: "Pada robot line follower, LDR digunakan untuk?", pilihan: ["Mengukur kecepatan", "Membedakan warna garis hitam/putih", "Mengukur jarak", "Mendeteksi suhu"], jawaban: 1 },
      { pertanyaan: "Tegangan output LDR berubah karena?", pilihan: ["Perubahan suhu", "Perubahan intensitas cahaya", "Perubahan kelembaban", "Perubahan tekanan"], jawaban: 1 },
      { pertanyaan: "Simbol LDR dalam skema rangkaian adalah?", pilihan: ["Resistor dengan panah", "Resistor dengan garis miring dan panah cahaya", "Kapasitor dengan panah", "Dioda dengan cahaya"], jawaban: 1 },
      { pertanyaan: "LDR bekerja berdasarkan prinsip?", pilihan: ["Efek fotolistrik", "Fotoresistivitas", "Efek piezoelektrik", "Efek Hall"], jawaban: 1 },
      { pertanyaan: "Aplikasi LDR dalam kehidupan sehari-hari adalah?", pilihan: ["Pengisi daya HP", "Lampu jalan otomatis", "Remote control TV", "Sensor sidik jari"], jawaban: 1 },
    ]
  },
]

export default function Kuis({ poin, setPoin, t }) {
  const [modulDipilih, setModulDipilih] = useState(null)
  const [idx, setIdx] = useState(0)
  const [dipilih, setDipilih] = useState(null)
  const [selesai, setSelesai] = useState(false)
  const [skor, setSkor] = useState(0)
  const [sudahJawab, setSudahJawab] = useState(false)

  function mulaiKuis(modul) {
    setModulDipilih(modul)
    setIdx(0); setDipilih(null)
    setSelesai(false); setSkor(0); setSudahJawab(false)
  }

  function pilihJawaban(i) {
    if (sudahJawab) return
    setDipilih(i); setSudahJawab(true)
    if (i === modulDipilih.soal[idx].jawaban) {
      setSkor(s => s + 1); setPoin(p => p + 10)
    }
  }

  function lanjut() {
    if (idx + 1 >= modulDipilih.soal.length) setSelesai(true)
    else { setIdx(i => i + 1); setDipilih(null); setSudahJawab(false) }
  }

  if (!modulDipilih) return (
    <div>
      <h2 style={{ marginBottom: 8, fontSize: "clamp(20px,4vw,28px)", background: t.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>🧩 Kuis Interaktif</h2>
      <p style={{ color: t.textMuted, marginBottom: 24 }}>Pilih modul kuis yang ingin dikerjakan:</p>
      <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
        {modulKuis.map(m => (
          <div key={m.id} onClick={() => mulaiKuis(m)} className="card-hover"
            style={{ background: t.bgCard, borderRadius: 16, padding: 24, cursor: "pointer", border: `1px solid ${t.border}`, transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.border = `1px solid ${t.primary}`; e.currentTarget.style.boxShadow = "0 8px 32px rgba(168,85,247,0.2)" }}
            onMouseLeave={e => { e.currentTarget.style.border = `1px solid ${t.border}`; e.currentTarget.style.boxShadow = "none" }}
          >
            <div style={{ fontSize: 36, marginBottom: 8 }}>{m.icon}</div>
            <h3 style={{ color: t.text, marginBottom: 4 }}>{m.judul}</h3>
            <p style={{ background: t.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontSize: 13, fontWeight: 600 }}>{m.soal.length} soal • +{m.soal.length * 10} poin</p>
          </div>
        ))}
      </div>
      <div style={{ background: t.bgCard, borderRadius: 12, padding: 16, border: `1px solid ${t.border}` }}>
        <p style={{ background: t.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontWeight: 700 }}>⭐ Total Poin Kamu: {poin}</p>
      </div>
    </div>
  )

  if (selesai) return (
    <div style={{ maxWidth: 500, margin: "0 auto", textAlign: "center" }}>
      <div style={{ background: t.bgCard, borderRadius: 20, padding: 40, border: `1px solid ${t.border}` }}>
        <div style={{ fontSize: 64 }}>{skor >= 12 ? "🏆" : skor >= 8 ? "👍" : "📖"}</div>
        <h2 style={{ color: t.text, margin: "16px 0 8px" }}>Kuis Selesai!</h2>
        <p style={{ color: t.textMuted, marginBottom: 8 }}>Modul: {modulDipilih.judul}</p>
        <p style={{ color: t.textMuted, marginBottom: 20 }}>Skor: <span style={{ background: t.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontWeight: 700, fontSize: 28 }}>{skor}/{modulDipilih.soal.length}</span></p>
        <p style={{ color: t.warning, marginBottom: 16, fontWeight: 600 }}>+{skor * 10} poin didapat!</p>
        <p style={{ color: t.textMuted, marginBottom: 24 }}>{skor >= 12 ? "Luar biasa! 🎉" : skor >= 8 ? "Bagus! Pelajari lagi yang salah!" : "Yuk pelajari lagi modulnya!"}</p>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => mulaiKuis(modulDipilih)} style={{ background: t.gradient, color: "#fff", padding: "12px 24px", borderRadius: 10, fontWeight: 600 }}>🔄 Ulangi</button>
          <button onClick={() => setModulDipilih(null)} style={{ background: t.bgCard, color: t.text, padding: "12px 24px", borderRadius: 10, fontWeight: 600, border: `1px solid ${t.border}` }}>📚 Modul Lain</button>
        </div>
      </div>
    </div>
  )

  const s = modulDipilih.soal[idx]
  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
        <span style={{ color: t.textMuted }}>{modulDipilih.icon} {modulDipilih.judul}</span>
        <span style={{ color: t.warning, fontWeight: 700 }}>⭐ {poin} Poin</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ color: t.textMuted, fontSize: 13 }}>Soal {idx + 1} dari {modulDipilih.soal.length}</span>
        <span style={{ color: t.success, fontSize: 13 }}>Benar: {skor}</span>
      </div>
      <div style={{ background: t.border, borderRadius: 4, height: 6, marginBottom: 20 }}>
        <div style={{ background: t.gradient, height: 6, borderRadius: 4, width: `${((idx + 1) / modulDipilih.soal.length) * 100}%`, transition: "width 0.3s" }} />
      </div>
      <div style={{ background: t.bgCard, borderRadius: 16, padding: 24, marginBottom: 16, border: `1px solid ${t.border}` }}>
        <h3 style={{ color: t.text, fontSize: "clamp(14px,2.5vw,18px)", lineHeight: 1.5 }}>{s.pertanyaan}</h3>
      </div>
      <div style={{ display: "grid", gap: 10 }}>
        {s.pilihan.map((p, i) => {
          let bg = t.bgCard
          let border = `1px solid ${t.border}`
          if (sudahJawab) {
            if (i === s.jawaban) { bg = "#064e3b"; border = "2px solid #10b981" }
            else if (i === dipilih) { bg = "#450a0a"; border = "2px solid #ef4444" }
          }
          return (
            <button key={i} onClick={() => pilihJawaban(i)} style={{ background: bg, border, borderRadius: 12, padding: "14px 18px", color: t.text, fontSize: "clamp(13px,2vw,15px)", textAlign: "left", transition: "all 0.2s", width: "100%" }}>
              <span style={{ background: t.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontWeight: 700, marginRight: 10 }}>{["A", "B", "C", "D"][i]}.</span>
              {p} {sudahJawab && i === s.jawaban && "✅"} {sudahJawab && i === dipilih && i !== s.jawaban && "❌"}
            </button>
          )
        })}
      </div>
      {sudahJawab && (
        <button onClick={lanjut} style={{ marginTop: 16, width: "100%", background: t.gradient, color: "#fff", padding: "14px", borderRadius: 12, fontSize: 16, fontWeight: 700 }}>
          {idx + 1 >= modulDipilih.soal.length ? "Lihat Hasil 🏆" : "Soal Berikutnya →"}
        </button>
      )}
    </div>
  )
}