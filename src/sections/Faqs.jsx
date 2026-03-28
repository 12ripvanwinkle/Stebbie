import React, { useState } from 'react'
import { faqs, } from '../constants';

const Faqs = () => {
    const [open, setOpen] = useState(null);
  return (
    
    <section className="py-24 overflow-hidden" id='faqs'>
        <div className="max-w-2xl mx-auto px-6">
            <div className="text-center mb-14">
                <p className="text-lavender-100 text-xs tracking-widest uppercase font-semibold mb-2">
                    Good to Know
                </p>
                <h2 className="font text-4xl text-violet-900">
                    Frequently Asked Questions
                </h2>
            </div>
            <div className="space-y-3">
                {faqs.map((f, i) => (
                    <div key={i} className={`bg-white rounded-2xl border transition-all duration-200 ${open === i ? 'border-lilac-300 shadow-md' : 'border-lilac-100 shadow-sm'}`}>
                    <button className="w-full flex justify-between items-center px-6 py-4 text-left" onClick={() => setOpen(open === i ? null : i)}>
                        <span className="font text-sm font-semibold text-violet-700">{f.q}</span>
                        <span className={`text-babypink-400 text-lg font-light transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>+</span>
                    </button>
                    {open === i && (
                        <div className="px-6 pb-5">
                        <p className="font text-sm text-white leading-relaxed">{f.a}</p>
                        </div>
                    )}
                    </div>
                ))}
            </div>
            {/* For not frequently asked questions */}
            <div className="mt-12 text-center">
                <p className="font-sans text-sm text-lavender-100">Still have questions? Email us at <a href="mailto:hello@niteshanthony3@gmail.com" className="text-lavender-100 font-semibold hover:underline">hello@niteshanthony3@gmail.com</a></p>
            </div>
        </div>
    </section>
  )
}
export default Faqs