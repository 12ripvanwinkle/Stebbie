import React, { useState } from 'react'
import { photos, petals } from '../constants'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Photos = () => {
  const [lightbox, setLightbox] = useState(null)

  const eyebrowRef  = useScrollAnimation()
  const titleRef    = useScrollAnimation()
  const subtitleRef = useScrollAnimation()

  return (
    <section className='py-24 relative overflow-hidden' id='photos'>

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

      <div className="max-w-5xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <p ref={eyebrowRef} className="fade-up text-white text-xs tracking-widest uppercase font-semibold mb-2">
            Captured Moments
          </p>
          <h2 ref={titleRef} className="fade-up delay-200 font-serif text-4xl text-violet-600">
            Photos of Us
          </h2>
          <p ref={subtitleRef} className="fade-up delay-300 text-white text-sm mt-3">
            A few of our favourite memories together
          </p>
        </div>

        {/* ── Masonry grid — each photo animates in individually ── */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <PhotoCard
              key={i}
              photo={photo}
              index={i}
              onClick={() => setLightbox(photo)}
            />
          ))}
        </div>

      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="fade-up animate-in relative max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.caption}
              className="w-full object-cover"
            />
            <div className="px-6 py-4" style={{ background: 'rgba(255,255,255,0.95)' }}>
              <p className="font-serif italic text-lilac-600 text-base">{lightbox.caption}</p>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center font-sans font-bold text-sm text-white shadow-md"
              style={{ background: 'rgba(0,0,0,0.45)' }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </section>
  )
}

/* ── Each photo card gets its own observer ── */
function PhotoCard({ photo, index, onClick }) {
  const ref = useScrollAnimation({ threshold: 0.15 })

  // Every third card fans out: left, up, right for a natural masonry feel
  const directions = ['fade-left', 'fade-up', 'fade-right']
  const direction  = directions[index % 3]

  return (
    <div
      ref={ref}
      className={`${direction} break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl shadow-md`}
      style={{ transitionDelay: `${(index % 3) * 0.12}s` }}
      onClick={onClick}
    >
      <img
        src={photo.src}
        alt={photo.caption}
        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Caption overlay on hover */}
      <div
        className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{ background: 'linear-gradient(to top, rgba(150,123,182,0.85), transparent)' }}
      >
        <p className="font-serif italic text-white text-sm px-4 pb-4">
          {photo.caption}
        </p>
      </div>
    </div>
  )
}

export default Photos