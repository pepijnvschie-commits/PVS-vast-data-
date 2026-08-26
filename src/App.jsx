import { motion } from 'motion/react'
import { Plus } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1]

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260714_113715_c7e0daa0-8bdd-4486-a2da-040901f8f0ea.mp4'

function Logo() {
  return (
    <svg
      className="logo"
      viewBox="0 0 256 256"
      width="24"
      height="24"
      fill="#1B133C"
      aria-hidden="true"
    >
      <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z" />
      <path d="M 256 128 L 128 128 L 0 0 L 128 0 Z" />
    </svg>
  )
}

export default function App() {
  return (
    <section className="hero">
      {/* Background video */}
      <motion.div
        className="video-wrap"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
      >
        <video
          className="bg-video"
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>

      {/* Navigation */}
      <motion.header
        className="nav-outer"
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <nav className="nav-pill">
          <a className="brand" href="#" aria-label="Axon home">
            <Logo />
            <span className="brand-name">Axon</span>
          </a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#plans">Plans</a>
            <a href="#security">Security</a>
            <a href="#about">About</a>
          </div>
          <button className="menu-btn" type="button">
            <span className="menu-btn-circle">
              <Plus size={12} strokeWidth={3} />
            </span>
            <span className="menu-btn-label">Menu</span>
          </button>
        </nav>
      </motion.header>

      {/* Hero content */}
      <div className="hero-content">
        <motion.div
          className="badge"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
        >
          <span className="badge-icon">Y</span>
          Funded by Y Combinator
        </motion.div>

        <motion.h1
          className="heading"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
        >
          Deploy digital workers
          <br />
          for mundane workflows
        </motion.h1>

        <motion.p
          className="subtitle"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
        >
          Eliminate your tedious browser work and 10x your team&rsquo;s
          capacity. Put intelligent agents on every routine process so you grow
          faster and deliver more for clients &mdash; effortlessly.
        </motion.p>

        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
        >
          <button className="cta" type="button">
            Get Early Access
          </button>
        </motion.div>
      </div>

      {/* Footer strip */}
      <motion.footer
        className="hero-footer"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.1, ease: EASE }}
      >
        <div className="footer-left">
          <span className="footer-dot" />
          Automating 12,000+ workflows every day
        </div>
        <div className="footer-tags">
          <span className="tag">Browser Agents</span>
          <span className="tag">Workflow AI</span>
          <span className="tag">Autonomous Ops</span>
        </div>
      </motion.footer>
    </section>
  )
}
