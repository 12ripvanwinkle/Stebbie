import React from 'react'
import { useState } from 'react';
import { petals } from '../constants';
import useScrollAnimation from '../hooks/useScrollAnimation';

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycby8gbzzSd_sM5dwFRa7fhsP-Pd9wPNq7FJBrXo3m2AUDOkZG8nqns0HHWsHfnqgGuCgXw/exec';

const RSVP = () => {
  const [form, setForm] = useState({
    name: '', email: '', guests: '1',
    meal: '', dietary: '', attending: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState('');

  // ── Scroll animation refs ──
  const eyebrowRef = useScrollAnimation()
  const titleRef   = useScrollAnimation()
  const dateRef    = useScrollAnimation()
  const formRef    = useScrollAnimation()

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const submit = async () => {
    if (!form.name || !form.email || !form.attending) {
      setError('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method:  'POST',
        mode:    'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      });
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const isAccepting = form.attending === 'Joyfully accepts';

  return (
    <section className="relative py-24 overflow-hidden" id="rsvp">

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

      <div className="relative z-10 max-w-2xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <p ref={eyebrowRef} className="fade-up font-sans text-white/70 text-xs tracking-[0.35em] uppercase font-semibold mb-2">
            You're Invited
          </p>
          <h2 ref={titleRef} className="fade-up delay-200 font-serif text-white text-4xl md:text-5xl">
            RSVP
          </h2>
          <div ref={dateRef} className="fade-up delay-300 mt-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-white/40" />
            <p className="font-serif italic text-white/80 text-sm">
              Kindly reply by{' '}
              <strong className="not-italic font-semibold text-softserve-200">
                December 19th, 2022
              </strong>
            </p>
            <span className="h-px w-12 bg-white/40" />
          </div>
        </div>

        {/* ── Success State ── */}
        {submitted ? (
          <div
            className="fade-in animate-in text-center py-16 px-8 rounded-3xl shadow-2xl"
            style={{
              background:    'rgba(255,255,255,0.15)',
              backdropFilter:'blur(16px)',
              border:        '1px solid rgba(255,255,255,0.3)',
            }}
          >
            {isAccepting ? (
              <>
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="font-serif text-3xl text-white mb-2">
                  See you there, {form.name}!
                </h3>
                <p className="font-sans text-white/70 text-sm">
                  We're so excited to celebrate with you. Get ready for a night to remember! 💕
                </p>
              </>
            ) : (
              <>
                <div className="text-5xl mb-4">🥹</div>
                <h3 className="font-serif text-3xl text-white mb-2">
                  We'll miss you, {form.name}.
                </h3>
                <p className="font-sans text-white/70 text-sm">
                  We're sad you can't make it, but we're grateful you let us know. You'll be with us in spirit. 🤍
                </p>
              </>
            )}
          </div>

        ) : (

          /* ── Form Card ── */
          <div
            ref={formRef}
            className="fade-up delay-400 rounded-3xl shadow-2xl p-8 md:p-12"
            style={{
              background:    'rgba(255,255,255,0.12)',
              backdropFilter:'blur(20px)',
              border:        '1px solid rgba(255,255,255,0.25)',
            }}
          >
            {/* Attending toggle */}
            <label className="block font-sans text-xs text-white/70 tracking-widest uppercase font-semibold mb-2">
              Will you attend? <span className="text-softserve-200">*</span>
            </label>
            <div className="flex gap-3 mb-6">
              {['Joyfully accepts', 'Regretfully declines'].map(opt => (
                <button
                  key={opt}
                  onClick={() => set('attending', opt)}
                  className="flex-1 py-3 rounded-xl border-2 font-sans text-sm font-semibold transition-all"
                  style={form.attending === opt
                    ? { borderColor: '#fcc97a', background: 'rgba(252,201,122,0.2)', color: '#fcc97a' }
                    : { borderColor: 'rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.6)' }
                  }
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { label: 'Full Name', key: 'name',  type: 'text',  placeholder: 'Your full name', required: true },
                { label: 'Email',     key: 'email', type: 'email', placeholder: 'you@email.com',  required: true },
              ].map(({ label, key, type, placeholder, required }) => (
                <div key={key}>
                  <label className="block font-sans text-xs text-white tracking-widest uppercase font-bold mb-1 drop-shadow">
                    {label} {required && <span className="text-yellow-200">*</span>}
                  </label>
                  <input
                    type={type}
                    value={form[key]}
                    onChange={e => set(key, e.target.value)}
                    placeholder={placeholder}
                    className="w-full rounded-xl px-4 py-3 font-sans text-sm font-semibold text-gray-800 placeholder-gray-400 border-0 outline-none transition-all"
                    style={{ background: 'rgba(255,255,255,0.95)' }}
                  />
                </div>
              ))}
            </div>

            {/* Dietary */}
            <div className="mt-5">
              <label className="block font-sans text-xs text-white tracking-widest uppercase font-bold mb-1 drop-shadow">
                Dietary Restrictions / Allergies
              </label>
              <textarea
                value={form.dietary}
                onChange={e => set('dietary', e.target.value)}
                rows={3}
                placeholder="Please let us know of any allergies or dietary needs…"
                className="w-full rounded-xl px-4 py-3 font-sans text-sm font-semibold text-gray-800 placeholder-gray-400 resize-none outline-none transition-all border-0"
                style={{ background: 'rgba(255,255,255,0.95)' }}
              />
            </div>

            {/* Error message */}
            {error && (
              <p className="mt-4 text-center font-sans text-xs font-semibold"
                style={{ color: '#fcc97a' }}>
                ⚠ {error}
              </p>
            )}

            {/* Submit */}
            <button
              onClick={submit}
              disabled={loading}
              className="mt-8 w-full gradient-btn text-white font-sans font-semibold text-sm tracking-widest uppercase py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Sending…
                </span>
              ) : 'Send RSVP'}
            </button>

          </div>
        )}
      </div>
    </section>
  );
};

export default RSVP;