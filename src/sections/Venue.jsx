import React from 'react'
import { petals } from '../constants'

const Venue = () => {
  return (
    <section className='py-24 relative overflow-hidden' id='venue'>
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
            <div className="text-center mb-14">
                <p className="font-sans text-softserve-100 text-xs tracking-widest uppercase font-semibold mb-2">
                    Where We Tie The Knot
                </p>
                <h2 className="font-serif text-4xl text-violet-600">
                    Venue Details
                </h2>
            </div>
            {/* Venue Card */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-violet-100">
                <div className="h-48 flex items-center justify-center text-6xl"
                    style={{background:'linear-gradient(135deg,#ede0ff,#ffe0ec)'}}
                >
                    🌿
                </div>
                <div className="p-7">
                    <h3 className="font-serif text-2xl text-violet-700 mb-1">The Dolly House Estate</h3>
                    <p className="font-sans text-flamingo-400 text-xs tracking-widest uppercase font-semibold mb-4">Ceremony & Reception</p>
                    <ul className="space-y-3 font-sans text-sm text-gray-600">
                        <li className="flex items-start gap-3"><span className="text-violet-400 mt-0.5">📍</span>BuckToe Street, Kingston -10</li>
                        <li className="flex items-start gap-3"><span className="text-violet-400 mt-0.5">🕒</span>Doors open at 2:30 PM</li>
                        <li className="flex items-start gap-3"><span className="text-violet-400 mt-0.5">🚗</span>Free valet parking available on-site</li>
                        <li className="flex items-start gap-3"><span className="text-violet-400 mt-0.5">♿</span>Fully accessible venue</li>
                    </ul>
                    <a href="https://www.google.com/maps/dir//Sts.+Peter+and+Paul+Roman+Catholic+Church,+120+Old+Hope+Road,+Kingston/@18.0322304,-76.7688704,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8edb3efd37338119:0x2966e0428053d31d!2m2!1d-76.7690113!2d18.0187718?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener">
                        <button className="mt-6 w-full gradient-btn text-white font-sans text-xs font-semibold tracking-widest uppercase py-3 rounded-xl transition-all hover:scale-[1.02]">
                        Get Directions
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Venue