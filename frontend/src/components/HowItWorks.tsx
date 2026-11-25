function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create your profile',
      description:
        'Introduce yourself and share a little about your student life.',
    },
    {
      number: '02',
      title: 'Set your preferences',
      description:
        'Tell us about your cleanliness, sleep, noise, guests, and study habits.',
    },
    {
      number: '03',
      title: 'Explore your matches',
      description:
        'Compare compatibility scores and discover potential roommates who fit your lifestyle.',
    },
  ]

  return (
    <section
      id="how-it-works"
      className="bg-white"
    >
      <div className="mx-auto max-w-[1264px] px-6 py-16 lg:py-20">

        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          A better way to find your fit
        </h2>

        <p className="mt-4 text-base text-muted">
          Three simple steps to more confident roommate decisions.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-xl border border-border p-7"
            >
              <p className="text-sm font-medium text-brand">
                {step.number}
              </p>

              <h3 className="mt-3 text-xl font-semibold text-ink">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HowItWorks