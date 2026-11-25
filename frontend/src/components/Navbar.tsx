import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-border bg-white">
      <nav className="mx-auto flex min-h-[72px] max-w-[1264px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:min-h-[88px]">

        <Logo />

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <a
            href="/#how-it-works"
            className="text-sm text-ink transition-colors hover:text-brand"
          >
            How it works
          </a>

          <a
            href="/#why-roommate-adapt"
            className="text-sm text-ink transition-colors hover:text-brand"
          >
            Why Roommate Adapt
          </a>

          <Link
            to="/login"
            className="text-sm text-ink transition-colors hover:text-brand"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            className="rounded-lg bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
          >
            Get started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="rounded-md p-2 text-ink hover:bg-brand-light lg:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border px-6 py-5 lg:hidden"
        >
          <div className="flex flex-col gap-5">
            <a
              href="/#how-it-works"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-ink"
            >
              How it works
            </a>

            <a
              href="/#why-roommate-adapt"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-ink"
            >
              Why Roommate Adapt
            </a>

            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-ink"
            >
              Log in
            </Link>

            <Link
              to="/signup"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg bg-brand px-6 py-3 text-center text-sm font-medium text-white hover:bg-brand-hover"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar