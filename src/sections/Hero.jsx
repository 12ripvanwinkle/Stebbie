import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Hero = () => {
  const eyebrowRef  = useScrollAnimation()
  const titleRef    = useScrollAnimation()
  const taglineRef  = useScrollAnimation()
  const dateRef     = useScrollAnimation()
  const btnRef      = useScrollAnimation()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Petals ── */}
      {[
        { w:180, h:180, top:'8%',   left:'5%',  bg:'#fcc97a', delay:'0s'   },
        { w:120, h:120, top:'20%',  right:'8%', bg:'#ffe0ec', delay:'1.5s' },
        { w:90,  h:90,  bottom:'15%',left:'12%',bg:'#d8bfff', delay:'3s'   },
        { w:150, h:150, bottom:'10%',right:'6%',bg:'#fcc97a', delay:'2s'   },
        { w:60,  h:60,  top:'50%',  left:'50%', bg:'#ffe0ec', delay:'4s'   },
      ].map((p, i) => (
        <div key={i} className="petal" style={{
          width: p.w, height: p.h,
          top: p.top, left: p.left, right: p.right, bottom: p.bottom,
          backgroundColor: p.bg, animationDelay: p.delay,
        }}/>
      ))}

      <div className="relative z-10 text-center px-6 mt-10">

        {/* Eyebrow */}
        <p ref={eyebrowRef} className="fade-up font text-white/80 text-xs tracking-[0.35em] uppercase mb-6">
          Together with their families
        </p>

        {/* Title — each line staggers */}
        <h1 ref={titleRef} className="fade-up delay-200 font-serif text-white text-6xl md:text-8xl leading-tight mb-4">
          Barbie <br/>
          <span className="italic text-lavender-200">&amp;</span>
          <br/>Ken
        </h1>

        {/* Tagline */}
        <p ref={taglineRef} className="fade-up delay-300 font text-white/90 text-sm tracking-widest uppercase mt-4">
          Request the honour of your presence
        </p>

        {/* Date */}
        <div ref={dateRef} className="fade-up delay-400 mt-8 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-white/40" />
          <span className="font-serif italic text-white/90 text-lg">Saturday, 41th June 2014</span>
          <span className="h-px w-16 bg-white/40"/>
        </div>

        {/* CTA Button */}
        <div ref={btnRef} className="fade-up delay-500">
          <a href="#rsvp">
            <button className="mt-10 gradient-btn text-white font font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              RSVP NOW
            </button>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero