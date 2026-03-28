import React, { useState } from 'react'

// ── Replace these with your actual image imports ──
// import photo1 from '../assets/gallery/photo1.jpg'
// import photo2 from '../assets/gallery/photo2.jpg'
// ... etc

const PHOTOS = [
  {
    src:     'https://placehold.co/600x700/f0e6ff/967bb6?text=Photo+1',
    caption: 'Our first trip together 🌍',
    size:    'tall',   // tall = 2 rows, normal = 1 row
  },
  {
    src:     'https://placehold.co/600x400/ffe6f0/f472b6?text=Photo+2',
    caption: 'Saturday mornings ☕',
    size:    'normal',
  },
  {
    src:     'https://placehold.co/600x400/f9e8f7/c478c4?text=Photo+3',
    caption: 'The proposal night 💍',
    size:    'normal',
  },
  {
    src:     'https://placehold.co/600x700/f0e6ff/967bb6?text=Photo+4',
    caption: 'New Year\'s Eve 2023 🎆',
    size:    'tall',
  },
  {
    src:     'https://placehold.co/600x400/ffe6f0/f472b6?text=Photo+5',
    caption: 'Beach days 🌊',
    size:    'normal',
  },
  {
    src:     'https://placehold.co/600x400/f9e8f7/c478c4?text=Photo+6',
    caption: 'Just us 🌸',
    size:    'normal',
  },
]

const PhotoGallery = () => {
  const [lightbox, setLightbox] = useState(null) // holds the photo object when open

  return (
    <section className="py-24 bg-white overflow-hidden" id="photos">
      <div className="max-w-5xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <p className="font-sans text-babypink-500 text-xs tracking-widest uppercase font-semibold mb-2">
            Captured Moments
          </p>
          <h2 className="font-serif text-4xl text-lilac-600">
            Photos of Us
          </h2>
          <p className="font-sans text-gray-400 text-sm mt-3">
            A few of our favourite memories together 🤍
          </p>
        </div>

        {/* ── Masonry-style grid ── */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl shadow-md"
              onClick={() => setLightbox(photo)}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Caption overlay on hover */}
              <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ background: 'linear-gradient(to top, rgba(150,123,182,0.85), transparent)' }}>
                <p className="font-serif italic text-white text-sm px-4 pb-4">
                  {photo.caption}
                </p>
              </div>
            </div>
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
            className="relative max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl"
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
            {/* Close button */}
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

export default PhotoGallery