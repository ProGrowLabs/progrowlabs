import { useEffect, useRef, useState } from 'react'
import './App.css'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

function FadeIn({ children, delay = 0, className = '' }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

const services = [
  { icon: '⬡', title: 'Website Design', desc: 'Pixel-perfect sites built for speed, clarity, and conversion — not just aesthetics.' },
  { icon: '◎', title: 'Mobile Optimization', desc: 'Your customers browse on phones. We make sure every pixel looks great there.' },
  { icon: '↗', title: 'Lead-Focused Layout', desc: 'Strategic design that guides visitors toward calling you, not clicking away.' },
]

const stats = [
  { value: '3×', label: 'More leads on average' },
  { value: '48h', label: 'Demo turnaround' },
  { value: '100%', label: 'Free, no commitment' },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="app">

      {/* NAV */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <span className="nav-logo">ProGrowLabs</span>
        <a href="mailto:hello@progrowlabs.com" className="nav-btn">Get Demo →</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-badge">For Local Businesses</div>
          <h1>
            Turn your website<br />
            <span>into a lead machine</span>
          </h1>
          <p className="hero-sub">
            Simple, fast websites designed to turn visitors into calls — built specifically for local businesses.
          </p>
          <div className="hero-btns">
            <a href="mailto:hello@progrowlabs.com" className="btn-primary">Get Free Demo</a>
            <a href="#services" className="btn-secondary">See How It Works</a>
          </div>
        </div>
        <div className="scroll-cue">
          <span>SCROLL</span>
          <span>↓</span>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.12}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <div className="services-inner">
          <FadeIn>
            <p className="section-label">What We Do</p>
            <h2>Everything a local business needs to win online</h2>
          </FadeIn>
          <div className="services-grid">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.15}>
                <div className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-glow" />
        <FadeIn>
          <div className="cta-inner">
            <div className="cta-badge">No commitment required</div>
            <h2>See what your site<br />could look like</h2>
            <p>We'll build a free demo website for your business. No strings attached — just a preview of what's possible.</p>
            <a href="mailto:hello@progrowlabs.com" className="btn-white">Request Free Demo →</a>
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <p className="footer-name">ProGrowLabs</p>
          <p className="footer-tagline">Helping local businesses grow online</p>
        </div>
        <a href="mailto:hello@progrowlabs.com" className="footer-email">hello@progrowlabs.com</a>
      </footer>

    </div>
  )
}