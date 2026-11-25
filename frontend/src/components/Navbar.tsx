import { Link } from 'react-router-dom'
import Logo from './Logo'

function Navbar() {
  return (
    <header className="border-b border-border bg-white">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Logo />

        <div className="flex items-center gap-6">
          <a
            href="/#how-it-works"
            className="hidden text-sm font-medium text-muted transition-colors hover:text-brand sm:inline-block"
          >
            How it works
          </a>

          <Link
            to="/login"
            className="text-sm font-medium text-ink transition-colors hover:text-brand"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            className="rounded-md bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar