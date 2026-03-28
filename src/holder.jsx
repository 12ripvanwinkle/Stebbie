/* ── FAQ ── */
const faqs = [
  { q: 'What is the dress code?', a: 'Formal attire. We encourage our guests to embrace jewel tones, blush pinks, and cream. Please avoid wearing white or black.' },
  { q: 'Are children welcome?', a: 'Our wedding is an adult-only celebration (18+). We hope this gives everyone a chance to relax and enjoy the evening. We appreciate your understanding.' },
  { q: 'Is the venue wheelchair accessible?', a: 'Yes! The Rosewood Estate is fully accessible. Please let us know in advance if you have any specific needs so we can make appropriate arrangements.' },
  { q: 'Can I take photos during the ceremony?', a: 'We are having an unplugged ceremony. We kindly ask all guests to put away phones and cameras so everyone can be fully present. Our photographer will capture every moment!' },
  { q: 'Will there be an open bar?', a: 'Yes — a full open bar will be available during the cocktail hour and reception. A signature "Amara Sunset" cocktail has been created just for the occasion!' },
  { q: 'What if I have a dietary restriction?', a: 'Please note any dietary requirements in your RSVP form. Our caterers are experienced with gluten-free, nut-free, vegan, and other special diets.' },
  { q: 'Where should I park?', a: 'Complimentary valet parking is available on-site. We recommend arriving 20–30 minutes early as there is limited self-parking for those who prefer it.' },
  { q: 'Will there be a gift table at the venue?', a: 'There will be a small gift table for cards. If you plan to bring a physical gift, smaller items are appreciated. Otherwise, our online gift fund is preferred.' },
];
 
function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="py-24 gradient-section">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font text-flamingo-400 text-xs tracking-widest uppercase font-semibold mb-2">Good to Know</p>
          <h2 className="font-serif text-4xl text-violet-600">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className={`bg-white rounded-2xl border transition-all duration-200 ${open === i ? 'border-violet-300 shadow-md' : 'border-violet-100 shadow-sm'}`}>
              <button className="w-full flex justify-between items-center px-6 py-4 text-left" onClick={() => setOpen(open === i ? null : i)}>
                <span className="font text-sm font-semibold text-violet-700">{f.q}</span>
                <span className={`text-flamingo-400 text-lg font-light transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="font text-sm text-gray-500 leading-relaxed">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="font text-sm text-gray-400">Still have questions? Email us at <a href="mailto:hello@amarajulian.com" className="text-flamingo-400 font-semibold hover:underline">hello@amarajulian.com</a></p>
        </div>
      </div>
    </section>
  );
}