import React from 'react'
import { useState } from 'react'

import { photos } from '../constants'

const Photos = () => {
  const [lightbox, setLightbox] = useState(null) // holds the photo object when open

  return (
    <section className='py-24 relative overflow-hidden' id='photos'>
        <div className="max-w-5xl mx-auto px-6">
            
            {/* Header */}
            <div className="text-center mb-16">
                <p className="text-white text-xs tracking-widest uppercase font-semibold mb-2">
                    Captured Moments
                </p>
                <h2 className="text-4xl text-violet-600">
                    Photos of Us 
                </h2>
                <p className="text-white text-sm mt-3">
                    A few of our favourite memories together
                </p>
            </div>

            {/* Masonry style grid */}
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                {photos.map((photo, i) => (
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

        {/* Light Box */}
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

export default Photos