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
        link: "#fund",
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

export {navlinks, timelineItems, petals};