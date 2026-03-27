/* ── VENUE ── */
function Venue() {
  return (
    <section id="venue" className="py-24 gradient-section">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-sans text-flamingo-400 text-xs tracking-widest uppercase font-semibold mb-2">Where We Celebrate</p>
          <h2 className="font-serif text-4xl text-violet-600">Venue Details</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Venue Card */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-violet-100">
            <div className="h-48 flex items-center justify-center text-6xl" style={{background:'linear-gradient(135deg,#ede0ff,#ffe0ec)'}}>
              🌿
            </div>
            <div className="p-7">
              <h3 className="font-serif text-2xl text-violet-700 mb-1">The Rosewood Estate</h3>
              <p className="font-sans text-flamingo-400 text-xs tracking-widest uppercase font-semibold mb-4">Ceremony & Reception</p>
              <ul className="space-y-3 font-sans text-sm text-gray-600">
                <li className="flex items-start gap-3"><span className="text-violet-400 mt-0.5">📍</span>1240 Rose Garden Lane, Malibu, CA 90265</li>
                <li className="flex items-start gap-3"><span className="text-violet-400 mt-0.5">🕒</span>Doors open at 2:30 PM</li>
                <li className="flex items-start gap-3"><span className="text-violet-400 mt-0.5">🚗</span>Free valet parking available on-site</li>
                <li className="flex items-start gap-3"><span className="text-violet-400 mt-0.5">♿</span>Fully accessible venue</li>
              </ul>
              <a href="https://maps.google.com" target="_blank" rel="noopener">
                <button className="mt-6 w-full gradient-btn text-white font-sans text-xs font-semibold tracking-widest uppercase py-3 rounded-xl transition-all hover:scale-[1.02]">
                  Get Directions
                </button>
              </a>
            </div>
          </div>
          {/* Hotel Card */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-flamingo-100">
              <h4 className="font-serif text-lg text-violet-700 mb-1">🏨 Recommended Accommodation</h4>
              <p className="font-sans text-xs text-flamingo-400 uppercase font-semibold tracking-widest mb-3">Block rate reserved for guests</p>
              <div className="space-y-3">
                {[
                  { name: 'The Ocean View Hotel', dist: '5 min drive', code: 'AMARA25' },
                  { name: 'Sunset Palms Inn', dist: '8 min drive', code: 'JULIAN25' },
                ].map(h => (
                  <div key={h.name} className="flex justify-between items-center py-2 border-b border-violet-50 last:border-0">
                    <div>
                      <p className="font-sans text-sm font-semibold text-gray-700">{h.name}</p>
                      <p className="font-sans text-xs text-gray-400">{h.dist} · Code: <span className="text-flamingo-400 font-bold">{h.code}</span></p>
                    </div>
                    <span className="text-violet-300 text-lg">→</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 border border-softserve-100">
              <h4 className="font-serif text-lg text-violet-700 mb-1">🚌 Shuttle Service</h4>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">A complimentary shuttle will run between the venue and recommended hotels. Pickup at <strong>2:00 PM</strong>, return at <strong>12:00 AM</strong>.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 border border-violet-100">
              <h4 className="font-serif text-lg text-violet-700 mb-2">🌡️ Weather</h4>
              <p className="font-sans text-sm text-gray-500">June evenings in Malibu are warm (72–80°F). The reception moves indoors at 6 PM — a light layer is recommended.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}