const CONFIG = {
  // ─── Artist Info ───────────────────────────────────────
  name: "Your DJ Name",
  tagline: "Melodic Techno · Progressive · Underground",
  location: "Miami, FL",
  profileImage: "https://images.unsplash.com/photo-1571266028241-4d4b4b4b4b4b?w=800", // replace with your photo URL

  // ─── Bio ───────────────────────────────────────────────
  bio: `Write a short professional bio here (2–4 sentences). 
Mention your style, notable gigs, residencies, or what makes your sound unique. 
Keep it punchy — bookers skim these.`,

  // ─── Genres / Tags ─────────────────────────────────────
  genres: ["Melodic Techno", "Progressive House", "Deep House"],

  // ─── Social Links ──────────────────────────────────────
  socials: {
    soundcloud: "https://soundcloud.com/yourname",
    instagram: "https://instagram.com/yourname",
    spotify: "https://open.spotify.com/artist/xxxx",
    mixcloud: "https://mixcloud.com/yourname",
    // youtube: "https://youtube.com/@yourname",
    // tiktok: "https://tiktok.com/@yourname",
  },

  // ─── Featured Mix / Track ──────────────────────────────
  // Paste a SoundCloud or Mixcloud embed iframe code, or leave empty
  featuredEmbed: `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" 
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/123456789&color=%23818cf8&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>`,

  // ─── Upcoming Shows ────────────────────────────────────
  shows: [
    {
      date: "Nov 15, 2026",
      venue: "Club Space",
      city: "Miami",
      link: "https://ra.co/events/xxxxx"
    },
    {
      date: "Dec 02, 2026",
      venue: "Factory Town",
      city: "Miami",
      link: ""
    },
    // Add more shows here
  ],

  // ─── Press Photos ──────────────────────────────────────
  // Use direct image URLs (Imgur, Cloudinary, your own hosting, etc.)
  photos: [
    "https://images.unsplash.com/photo-1571266028241-4d4b4b4b4b4b?w=600",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600",
  ],

  // ─── Booking / Contact ─────────────────────────────────
  bookingEmail: "booking@yourname.com",
  bookingNote: "For bookings, residencies & collaborations",
  
  // Optional: link to a Google Form, Typeform, or just leave empty
  bookingForm: "",

  // ─── Tech / Preferences (optional) ─────────────────────
  techRider: "Preferred: 2x CDJ-3000 + DJM-A9 or equivalent. Happy to play vinyl on request.",
};