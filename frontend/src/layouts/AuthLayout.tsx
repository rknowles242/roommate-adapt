import type { ReactNode } from 'react'
import Logo from '../components/Logo'

type AuthLayoutProps = {
  children: ReactNode
  sideContent: ReactNode
}

function AuthLayout({
  children,
  sideContent,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-white lg:grid lg:grid-cols-2">

      {/* Left panel */}
      <main className="flex min-h-screen flex-col px-6 py-8 sm:px-12 lg:px-16">

        <div className="mx-auto w-full max-w-[440px]">
          <Logo />
        </div>

        <div className="flex flex-1 items-start justify-center py-10 sm:py-16 lg:items-center lg:py-12">
          <div className="w-full max-w-[440px]">
            {children}
          </div>
        </div>

      </main>

      {/* Right panel */}
      <aside className="hidden items-center justify-center bg-[#F5F3FA] px-12 py-16 lg:flex">
        <div className="w-full max-w-[520px]">
          {sideContent}
        </div>
      </aside>

    </div>
  )
}

export default AuthLayout