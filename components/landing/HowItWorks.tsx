import Image from "next/image";

const STEPS = [
  {
    step: "01",
    title: "Set your intention",
    description:
      "Open the task manager, add what you need to accomplish today, and assign priorities. Takes under two minutes.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    alt: "Task manager view",
  },
  {
    step: "02",
    title: "Start a focus session",
    description:
      "Pick a task and start the Pomodoro timer. 25 minutes of uninterrupted work, then a short break. Repeat.",
    image:
      "/images/feature.png",
    alt: "Focus timer view",
  },
  {
    step: "03",
    title: "Capture your thinking",
    description:
      "Use the integrated notes editor to log insights, code snippets, or ideas as they come — right inside the app.",
    image:
      "/images/notes.png",
    alt: "Notes editor view",
  },
];

export function HowItWorks() {
  return (
  <section id="how-it-works" className="bg-[#060a14] pt-10 pb-12">

    <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">

      {/* Header (tightened) */}
      <div className="text-center max-w-2xl mx-auto mb-8">

        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
          The workflow
        </span>

        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Productive in{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            3 simple steps
          </span>
        </h2>

      </div>

      {/* Steps (reduced spacing) */}
      <div className="flex flex-col gap-10 md:gap-12">

        {STEPS.map(({ step, title, description, image, alt }, i) => (
          <div
            key={step}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center"
          >

            {/* Text */}
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>

              <div className="text-7xl font-black text-slate-800 leading-none select-none mb-4">
                {step}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {title}
              </h3>

              <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                {description}
              </p>

            </div>

            {/* Image */}
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>

              <div className="relative group">

                <div className="absolute inset-0 rounded-2xl blur-2xl scale-105 bg-gradient-to-br from-violet-500/15 to-cyan-500/10" />

                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-slate-800 shadow-xl">

                  <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>

  </section>
);
}