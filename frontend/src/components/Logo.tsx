import { Users } from 'lucide-react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2.5"
      aria-label="Roommate Adapt home"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
        <Users size={20} strokeWidth={2} />
      </div>

      <span className="text-lg font-semibold tracking-tight text-ink">
        roommate adapt
      </span>
    </Link>
  )
}

export default Logo