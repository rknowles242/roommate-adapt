import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MatchPreview from '../components/MatchPreview'
import HowItWorks from '../components/HowItWorks'
import WhyRoommateAdapt from '../components/WhyRoommateAdapt'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main>
        <section className="bg-[#F8F7FB]">
          <div className="mx-auto grid max-w-[1264px] items-center gap-10 px-5 py-10 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">

            {/* Hero content */}
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-brand">
                Roommate matching for students
              </p>

              <h1 className="max-w-[600px] text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[52px]">
                Find a roommate who fits your life.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Shared spaces work better when expectations align.
                Discover compatible roommates based on your
                lifestyle and living preferences.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  to="/signup"
                  className="rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
                >
                  Find my match
                </Link>

                <a
                  href="#how-it-works"
                  className="rounded-lg border border-border bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-gray-50"
                >
                  See how it works
                </a>
              </div>

              <p className="mt-6 text-sm text-muted">
                Thoughtful matching. Better living together.
              </p>
            </div>

            {/* Match preview */}
            <div className="flex justify-center">
              <MatchPreview />
            </div>

          </div>
        </section>
        <HowItWorks />
        <WhyRoommateAdapt />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage