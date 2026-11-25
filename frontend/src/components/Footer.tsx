import { Link } from 'react-router-dom'
import Logo from './Logo'

function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-[1264px] px-6 pt-12">

        <div className="grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">

          {/* Brand information */}
          <div>
            <Logo />

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Thoughtful matching. Better living together.
            </p>
          </div>

          {/* Explore links */}
          <div>
            <h3 className="text-sm font-semibold text-ink">
              Explore
            </h3>

            <div className="mt-4 flex flex-col items-start gap-3">
              <a
                href="/#how-it-works"
                className="text-sm text-muted transition-colors hover:text-brand"
              >
                How it works
              </a>

              <a
                href="/#why-roommate-adapt"
                className="text-sm text-muted transition-colors hover:text-brand"
              >
                Why Roommate Adapt
              </a>
            </div>
          </div>

          {/* Account links */}
          <div>
            <h3 className="text-sm font-semibold text-ink">
              Account
            </h3>

            <div className="mt-4 flex flex-col items-start gap-3">
              <Link
                to="/login"
                className="text-sm text-muted transition-colors hover:text-brand"
              >
                Log in
              </Link>

              <Link
                to="/signup"
                className="text-sm text-muted transition-colors hover:text-brand"
              >
                Create an account
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border py-6">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Roommate Adapt.
          </p>

          <p className="text-xs text-muted">
            Built for student living.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer