"use client";

import { useEffect, useState } from "react";

const navItems = ["Vizyon", "Sistem", "İletişim"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handlePointer = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", handlePointer);
    return () => window.removeEventListener("pointermove", handlePointer);
  }, []);

  return (
    <main className="site-shell">
      <div className="noise" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />

      <header className="nav-wrap">
        <nav className="navbar" aria-label="Ana menü">
          <a className="brand" href="#top" aria-label="Astra ana sayfa">
            <span className="brand-mark">A</span>
            <span>ASTRA<span className="brand-dot">.</span></span>
          </a>

          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            {navItems.map((item, index) => (
              <a key={item} href={`#${item.toLocaleLowerCase("tr-TR")}`} onClick={() => setMenuOpen(false)}>
                <span>0{index + 1}</span>{item}
              </a>
            ))}
            <a className="nav-cta mobile-cta" href="#başla" onClick={() => setMenuOpen(false)}>Projeyi başlat <span>↗</span></a>
          </div>

          <a className="nav-cta desktop-cta" href="#başla">Projeyi başlat <span>↗</span></a>
          <button
            className={`menu-button ${menuOpen ? "is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <i /><i />
          </button>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker reveal delay-1">
          <span className="pulse-dot" />
          Dijital deneyim stüdyosu · İstanbul
        </div>

        <div className="hero-copy">
          <h1 className="hero-title" aria-label="Sıradanın ötesinde dijital deneyimler">
            <span className="title-line line-one"><em>SIRADANIN</em></span>
            <span className="title-line line-two"><strong>ÖTESİNDE</strong></span>
            <span className="title-line line-three"><em>DENEYİMLER</em><span className="title-star">✦</span></span>
          </h1>

          <div className="hero-bottom reveal delay-4">
            <p>Markaları yalnızca görünür değil, <b>unutulmaz</b> kılan dijital dünyalar tasarlıyoruz.</p>
            <a className="round-link" href="#vizyon" aria-label="Keşfet">
              <span>KEŞFET</span>
              <b>↓</b>
            </a>
          </div>
        </div>

        <div className="orb orb-one" aria-hidden="true"><span /></div>
        <div className="orb orb-two" aria-hidden="true"><span /></div>

        <div className="side-note left-note" aria-hidden="true">EST. 2026</div>
        <div className="side-note right-note" aria-hidden="true">SCROLL TO EXPLORE — 01</div>
      </section>

      <section className="statement" id="vizyon" aria-label="Vizyon">
        <span>Fikirden etkiye.</span>
        <span>Stratejiden hisse.</span>
      </section>
      <div id="sistem" /><div id="iletişim" /><div id="başla" />
    </main>
  );
}
