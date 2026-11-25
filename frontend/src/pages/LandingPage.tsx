import Navbar from '../components/Navbar'
import Input from '../components/Input'
import Button from '../components/Button'

function LandingPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main className="mx-auto max-w-md px-6 py-16">
        <h1 className="mb-8 text-2xl font-semibold">
          Input Component Test
        </h1>

        <div className="flex flex-col gap-6">
          <Input
            label="Full name"
            placeholder="Enter your full name"
          />

          <Input
            label="University email"
            type="email"
            placeholder="student@university.edu"
          />

          <Input
            label="Password"
            type="password"
            defaultValue="1234"
            error="Password must contain at least 8 characters."
          />

          <Input
            label="University"
            defaultValue="Philander Smith University"
            disabled
          />

          <Button className="w-full">
            Continue
          </Button>
        </div>
      </main>
    </div>
  )
}

export default LandingPage