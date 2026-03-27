/* ── TIMELINE ── */
const timelineItems = [
  { time: '3:00 PM', event: 'Guests Arrive', desc: 'Welcome drinks and mingling in the garden courtyard.', icon: '🌸' },
  { time: '3:45 PM', event: 'Ceremony Begins', desc: 'Please be seated in the Grand Pavilion. Ceremony lasts approximately 45 minutes.', icon: '💍' },
  { time: '4:30 PM', event: 'Cocktail Hour', desc: 'Canapés, signature cocktails and live acoustic music on the terrace.', icon: '🥂' },
  { time: '6:00 PM', event: 'Dinner Reception', desc: 'Three-course plated dinner in the Orangery Ballroom.', icon: '🍽️' },
  { time: '7:30 PM', event: 'Speeches & Toasts', desc: 'Heartfelt words from the wedding party and family.', icon: '🎤' },
  { time: '8:00 PM', event: 'First Dance', desc: 'Amara & Julian take the floor, followed by the bridal party dance.', icon: '💃' },
  { time: '8:30 PM', event: 'Dancing & Celebrations', desc: 'Live DJ, photo booth and dessert bar open.', icon: '🎶' },
  { time: '11:30 PM', event: 'Send-Off', desc: 'Sparkler exit and shuttle service to nearby hotels.', icon: '✨' },
];
 
function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-sans text-flamingo-400 text-xs tracking-widest uppercase font-semibold mb-2">Plan Your Day</p>
          <h2 className="font-serif text-4xl text-violet-600">Day Timeline</h2>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-300 via-flamingo-300 to-softserve-300"/>
          {timelineItems.map((item, i) => (
            <div key={i} className="relative flex items-start gap-6 mb-10">
              <div className="relative z-10 flex-shrink-0 w-16 h-16 timeline-dot rounded-2xl flex items-center justify-center text-2xl shadow-md">
                {item.icon}
              </div>
              <div className="pt-1">
                <span className="font-sans text-xs text-flamingo-400 font-bold tracking-widest uppercase">{item.time}</span>
                <h3 className="font-serif text-xl text-violet-700 mt-0.5">{item.event}</h3>
                <p className="font-sans text-gray-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}