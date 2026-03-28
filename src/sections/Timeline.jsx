import React from 'react'
import { timelineItems, petals } from '../constants'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Timeline = () => {
  const eyebrowRef = useScrollAnimation()
  const titleRef   = useScrollAnimation()

  return (
    <section className="py-24 relative overflow-hidden" id='timeline'>

      {/* ── Petals ── */}
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

      <div className="max-w-2xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <p ref={eyebrowRef} className="fade-up font text-white text-xs tracking-widest uppercase font-semibold mb-2">
            Plan Your Day
          </p>
          <h2 ref={titleRef} className="fade-up delay-200 font-serif text-4xl text-violet-900">
            Day Timeline
          </h2>
        </div>

        {/* ── Timeline items ── */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-lilac-300 via-babypink-300 to-lavender-300"/>

          {timelineItems.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

/* ── Each item gets its own observer so they stagger as you scroll down ── */
function TimelineItem({ item, index }) {
  const itemRef = useScrollAnimation({ threshold: 0.3 })

  // Alternate: odd items fade from right, even from left
  const direction = index % 2 === 0 ? 'fade-left' : 'fade-right'

  return (
    <div
      ref={itemRef}
      className={`${direction} relative flex items-start gap-6 mb-10`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="relative z-10 shrink-0 w-16 h-16 timeline-dot rounded-2xl flex items-center justify-center text-2xl shadow-md">
        {item.icon}
      </div>
      <div className="pt-1">
        <span className="font text-xs text-violet-100 font-bold tracking-widest uppercase">
          {item.time}
        </span>
        <h3 className="font-serif text-xl text-violet-700 mt-0.5">{item.event}</h3>
        <p className="font text-lavender-100 text-sm mt-1 leading-relaxed">{item.desc}</p>
      </div>
    </div>
  )
}

export default Timeline