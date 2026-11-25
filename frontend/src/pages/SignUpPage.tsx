import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import Input from '../components/Input'
import Button from '../components/Button'

function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [formMessage, setFormMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()

  let isValid = true

  setEmailError('')
  setPasswordError('')
  setFormMessage('')

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!email.trim()) {
    setEmailError('Email address is required.')
    isValid = false
  } else if (!emailPattern.test(email.trim())) {
    setEmailError('Enter a valid email address.')
    isValid = false
  }

  if (!password) {
    setPasswordError('Password is required.')
    isValid = false
  } else if (password.length < 12) {
    setPasswordError(
      'Password must contain at least 12 characters.'
    )
    isValid = false
  }

  if (!isValid) {
    return
  }

  setFormMessage(
    'Validation successful. Account creation is not connected yet.'
  )
}

  return (
    <AuthLayout
      sideContent={
        <div>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-ink">
            A better roommate fit starts with you.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-muted">
            Find students whose everyday habits and expectations
            align with yours — before you share a space.
          </p>

          <div className="mt-8 space-y-7">
            <div>
              <h3 className="text-lg font-semibold text-ink">
                Share your preferences
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted">
                Tell us what matters to you: cleanliness, sleep,
                noise, visitors, and study habits.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-ink">
                See compatibility clearly
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted">
                Explore recommendations ranked by your shared
                living preferences.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-ink">
                Make an informed choice
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted">
                Review public profiles and decide who might
                be a good fit.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-sm font-semibold text-ink">
              Your account details stay private.
            </h3>

            <p className="mt-2 text-sm text-muted">
              Only approved profile information is shown
              to other students.
            </p>
          </div>
        </div>
      }
    >
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Create your account
        </h1>

        <p className="mt-4 text-base leading-relaxed text-muted">
          Start with a few details. Your ideal living setup
          begins here.
        </p>

        <form
            className="mt-6 space-y-5"
            onSubmit={handleSubmit}
            noValidate
        >
<Input
  label="Email address"
  type="email"
  name="email"
  placeholder="you@university.edu"
  autoComplete="email"
  value={email}
  error={emailError}
  onChange={(event) => {
    setEmail(event.target.value)
    setEmailError('')
    setFormMessage('')
  }}
  required
/>

<Input
  label="Password"
  type="password"
  name="password"
  placeholder="Create a password"
  autoComplete="new-password"
  value={password}
  error={passwordError}
  onChange={(event) => {
    setPassword(event.target.value)
    setPasswordError('')
    setFormMessage('')
  }}
  required
/>

  <p className="text-xs leading-relaxed text-muted">
    Use at least 12 characters for a stronger password.
  </p>

  <Button type="submit" className="w-full">
    Create account
  </Button>

  {formMessage && (
  <p role="status" className="text-sm text-muted">
    {formMessage}
  </p>
)}
</form>

<p className="mt-6 text-sm text-muted">
  Already have an account?{' '}
  <Link
    to="/login"
    className="font-medium text-brand hover:underline"
  >
    Log in
  </Link>
</p>

<p className="mt-5 text-xs leading-relaxed text-muted">
  By creating an account, you agree to use Roommate
  Adapt respectfully and protect other students’ privacy.
</p>
      </div>
    </AuthLayout>
  )
}

export default SignupPage