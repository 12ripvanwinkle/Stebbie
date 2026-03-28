import React from 'react'
import { storyChapters, petals } from '../constants'

const OurStory = () => {
  return (
    <section className="py-24 relative overflow-hidden" id='story'>

        {petals.map((p, i) => (
            <div
            key={i}
            className="petal"
            style={{
                width: p.w, height: p.h,
                top: p.top, left: p.left, right: p.right, bottom: p.bottom,
                backgroundColor: p.bg,
                animationDelay: p.delay,
            }}
            />
        ))}
      <div className="max-w-5xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <p className="font-sans text-white/70 text-xs tracking-widest uppercase font-semibold mb-2">
            How It All Began
          </p>
          <h2 className="font-serif text-4xl text-white">
            Our Story
          </h2>
          <div className="mt-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-white/40" />
            <span className="font-serif italic text-white/70 text-sm">a love like no other</span>
            <span className="h-px w-12 bg-white/40" />
          </div>
        </div>

        {/* ── Content: Image + Text side by side ── */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* ── Photo ── */}
          <div className="w-full md:w-1/2 shrink-0">
            <div className="relative">

              {/* White box behind the image */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-white/30"
                style={{ backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.5)' }}
              />

              <img
                src="/images/barbie-ken.jpg"
                alt="How We Met"
                className="relative z-10 w-full h-105 object-cover rounded-3xl shadow-xl"
              />

              <div
                className="absolute -bottom-5 -right-5 z-20 px-5 py-3 rounded-2xl shadow-lg"
                style={{ background: 'linear-gradient(135deg, #967bb6, #f472b6)' }}
              >
                <p className="font-serif italic text-white text-sm">Est. Many Moons Ago ✨</p>
              </div>
            </div>
          </div>

          {/* ── Story Text ── */}
          <div className="w-full md:w-1/2 space-y-5">

            {storyChapters.map(({ title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-5"
                style={{
                  background:    'rgba(255,255,255,0.15)',
                  backdropFilter:'blur(12px)',
                  border:        '1px solid rgba(255,255,255,0.25)',
                }}
              >
                <h3 className="font-serif text-xl text-white mb-2">{title}</h3>
                <p className="font-sans text-white/80 leading-relaxed text-sm">{body}</p>
              </div>
            ))}

            {/* Decorative divider */}
            <div className="flex items-center gap-4 pt-2">
              <span className="h-px flex-1 bg-linear-to-r from-white/40 to-transparent" />
              <span className="font-serif italic text-white text-lg">forever &amp; always</span>
              <span className="h-px flex-1 bg-linear-to-l from-white/40 to-transparent" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory