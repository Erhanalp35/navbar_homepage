"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Vision", href: "#vision" },
  { label: "Expertise", href: "#expertise" },
  { label: "Process", href: "#process" },
];

const services = [
  { number: "01", title: "Digital Direction", text: "Distinct positioning, sharp systems and a point of view built to endure." },
  { number: "02", title: "Experience Design", text: "Interfaces that feel effortless, cinematic and unmistakably yours." },
  { number: "03", title: "Creative Technology", text: "Motion, interaction and emerging tech shaped into memorable digital moments." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handlePointer = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };
    const handleScroll = () => document.documentElement.style.setProperty("--scroll", `${window.scrollY}px`);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("in-view")),
      { threshold: 0.16 },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    window.addEventListener("pointermove", handlePointer);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="site-shell">
      <div className="noise" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />

      <header className="nav-wrap">
        <nav className="navbar" aria-label="Main navigation">
          <a className="brand magnetic" href="#top" aria-label="Astra home">
            <span className="brand-mark">A</span>
            <span>ASTRA<span className="brand-dot">.</span></span>
          </a>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            {navItems.map((item, index) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                <span>0{index + 1}</span>{item.label}
              </a>
            ))}
            <a className="nav-cta mobile-cta" href="#contact" onClick={() => setMenuOpen(false)}>Start a project <span>↗</span></a>
          </div>
          <a className="nav-cta desktop-cta" href="#contact">Start a project <span>↗</span></a>
          <button className={`menu-button ${menuOpen ? "is-open" : ""}`} type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><i /><i /></button>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker reveal delay-1"><span className="pulse-dot" />Independent digital studio · London / Worldwide</div>
        <div className="hero-copy">
          <h1 className="hero-title" aria-label="Beyond ordinary digital experiences">
            <span className="title-line line-one"><em>BEYOND</em></span>
            <span className="title-line line-two"><strong>ORDINARY</strong></span>
            <span className="title-line line-three"><em>EXPERIENCES</em><span className="title-star">✦</span></span>
          </h1>
          <div className="hero-bottom reveal delay-4">
            <p>We design digital worlds that make ambitious brands not just visible, but <b>impossible to forget.</b></p>
            <a className="round-link" href="#vision" aria-label="Explore our vision"><span>EXPLORE</span><b>↓</b></a>
          </div>
        </div>
        <div className="orb orb-one" aria-hidden="true"><span /></div>
        <div className="orb orb-two" aria-hidden="true"><span /></div>
        <div className="side-note left-note" aria-hidden="true">EST. MMXXVI</div>
        <div className="side-note right-note" aria-hidden="true">SCROLL TO EXPLORE — 01</div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track"><span>STRATEGY ✦ DESIGN ✦ MOTION ✦ TECHNOLOGY ✦ CULTURE ✦ </span><span>STRATEGY ✦ DESIGN ✦ MOTION ✦ TECHNOLOGY ✦ CULTURE ✦ </span></div>
      </div>

      <section className="vision" id="vision">
        <div className="section-label" data-reveal><span>01</span> Our vision</div>
        <div className="vision-copy" data-reveal>
          <p>We turn <em>bold ideas</em> into digital experiences with gravity.</p>
          <p className="muted-line">Built to move people.</p>
          <p className="offset-line">Designed to move culture.</p>
        </div>
        <div className="vision-orbit" aria-hidden="true"><span>ASTRA / CREATIVE / STUDIO /</span><i /></div>
      </section>

      <section className="expertise" id="expertise">
        <div className="section-head" data-reveal>
          <div className="section-label"><span>02</span> What we do</div>
          <h2>Ideas deserve<br /><i>impact.</i></h2>
          <p>From first thought to final pixel, we build connected brand experiences for the next era.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number} data-reveal>
              <span className="service-number">{service.number}</span>
              <div className="card-orb" aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="card-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="process" id="process">
        <div className="process-sticky" data-reveal>
          <div className="section-label"><span>03</span> The approach</div>
          <h2>Not a formula.<br /><i>A frequency.</i></h2>
        </div>
        <div className="process-list">
          {["Discover the signal", "Shape the system", "Create the feeling", "Release the energy"].map((item, index) => (
            <div className="process-row" key={item} data-reveal><span>0{index + 1}</span><h3>{item}</h3><i>↘</i></div>
          ))}
        </div>
      </section>

      <section className="feature" aria-label="Studio manifesto">
        <div className="feature-glow" aria-hidden="true" />
        <div className="feature-copy" data-reveal>
          <span>THE ASTRA EFFECT™</span>
          <h2>Make them<br />feel <i>something.</i></h2>
          <p>Attention is temporary. Emotion lasts. We create for the moment after the scroll stops.</p>
        </div>
        <div className="kinetic-type" aria-hidden="true"><span>A</span><span>S</span><span>T</span><span>R</span><span>A</span></div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-meta" data-reveal><span>Have a beautiful problem?</span><span>New business · hello@astra.studio</span></div>
        <a href="mailto:hello@astra.studio" className="contact-title" data-reveal>LET&apos;S MAKE<br /><i>WAVES.</i><b>↗</b></a>
        <footer><span>ASTRA® 2026</span><span>London · Worldwide</span><span>Instagram &nbsp; LinkedIn</span></footer>
      </section>
    </main>
  );
}
