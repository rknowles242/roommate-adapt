import { CircleCheck, Users } from 'lucide-react'

function MatchPreview() {
  const sharedPreferences = [
    { label: 'Cleanliness', value: 'Very tidy' },
    { label: 'Noise level', value: 'Prefers quiet' },
    { label: 'Study environment', value: 'Quiet and private' },
  ]

  return (
    <div className="w-full max-w-[430px] rounded-xl border border-border bg-white p-6 sm:p-7">

      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted">
          Example roommate match
        </p>

        <Users
          size={17}
          className="text-muted"
          aria-hidden="true"
        />
      </div>

      {/* Student profile */}
      <div className="mt-6 flex items-center gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-light text-lg font-semibold text-brand"
          aria-hidden="true"
        >
          AM
        </div>

        <div>
          <h2 className="text-lg font-semibold text-ink">
            Alex Morgan
          </h2>

          <p className="mt-1 text-xs text-muted">
            Junior · Computer Science
          </p>

          <p className="mt-1 text-xs text-muted">
            Philander Smith University
          </p>
        </div>
      </div>

      {/* Compatibility score */}
      <div className="mt-6 flex items-center justify-between gap-3 border-y border-border py-5">
        <div>
          <p className="text-sm text-muted">
            Compatibility score
          </p>

          <p className="mt-1 text-3xl font-semibold text-success">
            89%
          </p>
        </div>

        <span className="text-sm font-medium text-success">
          Strong match
        </span>
      </div>

      {/* Shared preferences */}
      <div className="mt-5">
        <h3 className="text-sm font-semibold text-ink">
          Shared living preferences
        </h3>

        <div className="mt-4 space-y-4">
          {sharedPreferences.map((preference) => (
            <div
              key={preference.label}
              className="flex flex-wrap items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2">
                <CircleCheck
                  size={15}
                  className="shrink-0 text-success"
                  aria-hidden="true"
                />

                <span className="text-xs text-muted">
                  {preference.label}
                </span>
              </div>

              <span className="text-xs font-medium text-ink">
                {preference.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 text-xs text-muted">
        Illustrative profile and compatibility score.
      </p>
    </div>
  )
}

export default MatchPreview