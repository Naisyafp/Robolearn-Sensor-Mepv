import { useState } from "react"
import { darkTheme, lightTheme } from "./theme"
import Home from "./pages/Home"
import Modul from "./pages/Modul"
import Kuis from "./pages/Kuis"
import Kamus from "./pages/Kamus"

export default function App() {
  const [page, setPage] = useState("home")
  const [poin, setPoin] = useState(0)
  const [isDark, setIsDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const t = isDark ? darkTheme : lightTheme

  const navItems = [
    { id: "home", label: "🏠 Home" },
    { id: "modul", label: "📚 Modul" },
    { id: "kuis", label: "🧩 Kuis" },
    { id: "kamus", label: "🔌 Kamus" },
  ]

  return (
    <div style={{
      background: t.gradientBg, color: t.text,
      minHeight: "100vh", transition: "all 0.3s"
    }}>
      {/* NAVBAR */}
      <nav style={{
        background: t.bgNav, borderBottom: `1px solid ${t.border}`,
        padding: "0 20px", height: 60,
        display: "flex", alignItems: "center",
        justifyContent: "space-between",
        position: "sticky", top: 0, zIndex: 200,
        boxShadow: "0 2px 20px rgba(168,85,247,0.15)",
        backdropFilter: "blur(10px)"
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 28 }}>🤖</span>
          <span className="gradient-text" style={{ fontSize: 20, fontWeight: 800 }}>
            RoboLearn
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="nav-links" style={{
          background: menuOpen ? t.bgCard : "transparent",
          borderRadius: menuOpen ? 12 : 0,
          border: menuOpen ? `1px solid ${t.border}` : "none"
        }}>
          {navItems.map(item => (
            <button key={item.id}
              onClick={() => { setPage(item.id); setMenuOpen(false) }}
              style={{
                padding: "8px 16px", borderRadius: 8, fontWeight: 600, fontSize: 14,
                background: page === item.id
                  ? "linear-gradient(135deg, #a855f7, #ec4899)"
                  : "transparent",
                color: page === item.id ? "#fff" : t.textMuted,
                transition: "all 0.2s"
              }}>
              {item.label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Poin */}
          <div style={{
            background: "linear-gradient(135deg, #a855f722, #ec489922)",
            border: `1px solid ${t.border}`,
            borderRadius: 20, padding: "4px 12px",
            fontSize: 13, fontWeight: 700, color: t.primary
          }}>
            ⭐ {poin} Poin
          </div>

          {/* Theme Toggle */}
          <button onClick={() => setIsDark(d => !d)} style={{
            background: "linear-gradient(135deg, #a855f7, #ec4899)",
            borderRadius: 20, padding: "6px 12px",
            color: "#fff", fontSize: 13, fontWeight: 600
          }}>
            {isDark ? "☀️ Terang" : "🌙 Gelap"}
          </button>

          {/* Hamburger */}
          <div className="hamburger" onClick={() => setMenuOpen(m => !m)}>
            <span style={{ background: t.primary }} />
            <span style={{ background: t.secondary }} />
            <span style={{ background: t.primary }} />
          </div>
        </div>
      </nav>

      {/* PAGES */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
        {page === "home" && <Home setPage={setPage} t={t} />}
        {page === "modul" && <Modul t={t} />}
        {page === "kuis" && <Kuis poin={poin} setPoin={setPoin} t={t} />}
        {page === "kamus" && <Kamus t={t} />}
      </div>
    </div>
  )
}