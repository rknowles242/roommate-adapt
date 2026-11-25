import { CircleCheck } from 'lucide-react'

function WhyRoommateAdapt() {
  const benefits = [
    {
      title: 'Lifestyle-based matching',
      description:
        'Find students with compatible daily routines and living habits.',
    },
    {
      title: 'Transparent compatibility',
      description:
        'Understand why someone is recommended to you.',
    },
    {
      title: 'Built for students',
      description:
        'Designed around the realities of shared campus living.',
    },
  ]

  return (
    <section
      id="why-roommate-adapt"
      className="bg-[#F8F7FB]"
    >
      <div className="mx-auto grid max-w-[1264px] items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-20 lg:py-20">

        {/* Section introduction */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand">
            Why Roommate Adapt
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Compatibility goes beyond shared interests.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted">
            Finding someone to live with shouldn't be a
            guessing game. Make more informed decisions
            based on the habits that shape your everyday
            living experience.
          </p>
        </div>

        {/* Platform benefits */}
        <div className="divide-y divide-border">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex items-start gap-4 py-5"
            >
              <CircleCheck
                size={20}
                className="mt-1 shrink-0 text-success"
                aria-hidden="true"
              />

              <div>
                <h3 className="text-base font-semibold text-ink">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyRoommateAdapt