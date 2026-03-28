const navlinks = [
    {
        name: "RSVP",
        link: "#rsvp",
    },
    {
        name: "Timeline",
        link: "#timeline",
    },
    {
        name: "Venue",
        link: "#venue",
    },
    {
        name: "Honeymoon Fund",
        link: "#gifts",
    },
    {
        name: "FAQs",
        link: "#faqs",
    },
];

const timelineItems = [
    { time: '3:00 PM', event: 'Guests Arrive', desc: 'Welcome drinks and mingling in the garden courtyard.', icon: '🌸' },
    { time: '3:45 PM', event: 'Ceremony Begins', desc: 'Please be seated in the Grand Pavilion. Ceremony lasts approximately 45 minutes.', icon: '💍' },
    { time: '4:30 PM', event: 'Cocktail Hour', desc: 'Canapés, signature cocktails and live acoustic music on the terrace.', icon: '🥂' },
    { time: '6:00 PM', event: 'Dinner Reception', desc: 'Three-course plated dinner in the Orangery Ballroom.', icon: '🍽️' },
    { time: '7:30 PM', event: 'Speeches & Toasts', desc: 'Heartfelt words from the wedding party and family.', icon: '🎤' },
    { time: '8:00 PM', event: 'First Dance', desc: 'Barbie & Ken take the floor, followed by the bridal party dance.', icon: '💃' },
    { time: '8:30 PM', event: 'Dancing & Celebrations', desc: 'Live DJ, photo booth and dessert bar open.', icon: '🎶' },
    { time: '11:30 PM', event: 'Send-Off', desc: 'Sparkler exit and shuttle service to nearby hotels.', icon: '✨' },
];

const petals = [
  { w: 180, h: 180, top: '8%',    left: '5%',   bg: '#fcc97a', delay: '0s'   },
  { w: 120, h: 120, top: '20%',   right: '8%',  bg: '#ffe0ec', delay: '1.5s' },
  { w: 90,  h: 90,  bottom: '15%',left: '12%',  bg: '#d8bfff', delay: '3s'   },
  { w: 150, h: 150, bottom: '10%',right: '6%',  bg: '#fcc97a', delay: '2s'   },
  { w: 60,  h: 60,  top: '50%',   left: '50%',  bg: '#ffe0ec', delay: '4s'   },
];

const storyChapters = [
  {
    title: 'The Night We Met',
    body: `It was during the 2002 World Cup — Debbie was a humble Spectator who attended due to Keisha Leyow's opportunity. During the second half the legendary Ronaldo Nazario was subbed off for the long time legend Stevealdo Leyow "mesmerizer" where he came on and provided the Winning Assist.`
  },
  {
    title: 'The Moment We Knew',
    body: `We ended up meeting due to Debbie's interest in Stevealdo's play style, as Debbie believes assists are more beautiful than goals. When their eyes locked — and like how stand users attract other stand users — it was love at first sight.`
  },
  {
    title: 'The Proposal',
    body: `Two million years later at Keisha's house, Stevealdo and Keisha conducted a plan to propose and the rest is history. 💍`
  },
];

const photos = [
    {
        src:     '/images/bruno.jpg',
        caption: 'Our first trip together 🌍',
        size:    'tall',   // tall = 2 rows, normal = 1 row
    },
    {
        src:     '/images/diego.png',
        caption: 'Saturday mornings ☕',
        size:    'normal',
    },
    {
        src:     '/images/giorno.jpg',
        caption: 'The proposal night 💍',
        size:    'normal',
    },
    {
        src:     '/images/gyro.jpg',
        caption: 'New Year\'s Eve 2023 🎆',
        size:    'tall',
    },
    {
        src:     '/images/josuke.jpg',
        caption: 'Beach days 🌊',
        size:    'normal',
    },
    {
        src:     '/images/jotaro.jpg',
        caption: 'Just us 🌸',
        size:    'normal',
    },
];

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

export {navlinks, timelineItems, petals, storyChapters, photos, faqs};