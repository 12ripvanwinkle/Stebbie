import React from 'react'
import { timelineItems, petals } from '../constants'


const Timeline = () => {
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
            <div className="text-center mb-14">
                <p className="font text-flamingo-400 text-xs tracking-widest uppercase font-semibold mb-2">
                    Plan Your Day
                </p>
                <h2 className="font-serif text-4xl text-violet-600">
                    Day Timeline
                </h2>
            </div>
            <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-violet-300 via-flamingo-300 to-softserve-300"/>
                {timelineItems.map((item, i) => (
                    <div key={i} className="relative flex items-start gap-6 mb-10">
                    <div className="relative z-10 shrink-0 w-16 h-16 timeline-dot rounded-2xl flex items-center justify-center text-2xl shadow-md">
                        {item.icon}
                    </div>
                    <div className="pt-1">
                        <span className="font text-xs text-softserve-100 font-bold tracking-widest uppercase">{item.time}</span>
                        <h3 className="font-serif text-xl text-violet-700 mt-0.5">{item.event}</h3>
                        <p className="font text-softserve-100 text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Timeline