import React from 'react'

// ── Replace these with your actual image imports ──
// import couplePhoto from '../assets/how-we-met.jpg'

const OurStory = () => {
  return (
    <section className="py-24 gradient-section overflow-hidden" id="story">
      <div className="max-w-5xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <p className="font-sans text-babypink-500 text-xs tracking-widest uppercase font-semibold mb-2">
            How It All Began
          </p>
          <h2 className="font-serif text-4xl text-lilac-600">
            Our Story
          </h2>
        </div>

        {/* ── Content: image + text side by side ── */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* ── Photo ── */}
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="relative">
              {/* Decorative frame behind image */}
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-3xl"
                style={{ background: 'linear-gradient(135deg, #c9a8f5, #f98dbb)', opacity: 0.3 }}
              />
              <img
                // src={couplePhoto}
                src="/images/RE-protags.jpg"
                alt="How we met"
                className="relative z-10 w-full h-[420px] object-cover rounded-3xl shadow-xl"
              />
              {/* Little badge */}
              <div
                className="absolute -bottom-5 -right-5 z-20 px-5 py-3 rounded-2xl shadow-lg"
                style={{ background: 'linear-gradient(135deg, #967bb6, #f472b6)' }}
              >
                <p className="font-serif italic text-white text-sm">Est. 2019 ✨</p>
              </div>
            </div>
          </div>

          {/* ── Story text ── */}
          <div className="w-full md:w-1/2 space-y-6">

            <div>
              <h3 className="font-serif text-2xl text-lilac-600 mb-3">
                The Night We Met
              </h3>
              <p className="font-sans text-gray-500 leading-relaxed text-sm">
                It was a rainy Tuesday evening in October 2019 when fate decided to intervene.
                We were both reaching for the last copy of the same book at a small bookstore
                on 5th Avenue — and neither of us was willing to let go.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-lilac-600 mb-3">
                The Moment We Knew
              </h3>
              <p className="font-sans text-gray-500 leading-relaxed text-sm">
                We ended up sharing a coffee next door, talking for four hours straight.
                By the time the rain stopped, we both knew something extraordinary had just begun.
                Three months later, we were inseparable.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-lilac-600 mb-3">
                The Proposal
              </h3>
              <p className="font-sans text-gray-500 leading-relaxed text-sm">
                Five years later, on the same rainy Tuesday in October, he got down on one knee
                in that same little bookstore — beside the very shelf where it all started.
                Of course, she said yes. 💍
              </p>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center gap-4 pt-2">
              <span className="h-px flex-1 bg-gradient-to-r from-lilac-200 to-transparent" />
              <span className="font-serif italic text-lilac-400 text-lg">forever & always</span>
              <span className="h-px flex-1 bg-gradient-to-l from-lilac-200 to-transparent" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory