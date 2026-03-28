import React, { useState } from 'react'
import { faqs } from '../constants'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Faqs = () => {
  const [open, setOpen] = useState(null)

  const eyebrowRef = useScrollAnimation()
  const titleRef   = useScrollAnimation()
  const contactRef = useScrollAnimation()

  return (
    <section className="py-24 relative overflow-hidden" id='faqs'>
      <div className="max-w-2xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <p ref={eyebrowRef} className="fade-up text-lavender-100 text-xs tracking-widest uppercase font-semibold mb-2">
            Good to Know
          </p>
          <h2 ref={titleRef} className="fade-up delay-200 font text-4xl text-violet-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* ── FAQ items ── */}
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FaqItem
              key={i}
              faq={f}
              index={i}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>

        {/* ── Contact note ── */}
        <div ref={contactRef} className="fade-up mt-12 text-center">
          <p className="font-sans text-sm text-lavender-100">
            Still have questions? Email us at{' '}
            <a
              href="mailto:niteshanthony3@gmail.com"
              className="text-lavender-100 font-semibold hover:underline"
            >
              niteshanthony3@gmail.com
            </a>
          </p>
        </div>

      </div>
    </section>
  )
}

function FaqItem({ faq, index, isOpen, onToggle }) {
  const ref = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`fade-up bg-white rounded-2xl border ${isOpen ? 'border-lilac-300 shadow-md' : 'border-lilac-100 shadow-sm'}`}
      // ↑ removed transition-all duration-200 — it was fighting the scroll animation
      style={{ transitionDelay: `${index * 0.07}s` }}
    >
      {/* transition-all moved here where it only affects the button's own states */}
      <button
        className="w-full flex justify-between items-center px-6 py-4 text-left transition-all duration-200"
        onClick={onToggle}
      >
        <span className="font text-sm font-semibold text-violet-700">{faq.q}</span>
        <span className={`text-babypink-400 text-lg font-light transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="font text-sm text-babypink-600 leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  )
}

export default Faqs