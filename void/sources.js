// Massive curated firehose of "humanity"
const STATIC_SOURCES = [
  // --- Lo-fi / Chill / Music streams ---
  "https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&mute=1",
  "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1",
  "https://www.youtube.com/embed/21X5lGlDOfg?autoplay=1&mute=1", // NASA live

  // --- News / Reality ---
  "https://www.youtube.com/embed/9Auq9mYxFEE?autoplay=1&mute=1", // BBC
  "https://www.youtube.com/embed/21X5lGlDOfg?autoplay=1&mute=1", // NASA
  "https://www.youtube.com/embed/y60wDzZt8yg?autoplay=1&mute=1", // ISS live

  // --- War / Documentaries ---
  "https://www.youtube.com/embed/8ZcmTl_1ER8?autoplay=1&mute=1",
  "https://www.youtube.com/embed/qyJdH6glVlw?autoplay=1&mute=1",
  "https://www.youtube.com/embed/Sl9ZtY2hK6o?autoplay=1&mute=1",

  // --- Mukbangs / ASMR food ---
  "https://www.youtube.com/embed/7wNPlWuVWfw?autoplay=1&mute=1",
  "https://www.youtube.com/embed/x79XXtT5s5o?autoplay=1&mute=1",
  "https://www.youtube.com/embed/q8u0k0WkF3A?autoplay=1&mute=1",

  // --- Cartoons / Anime / Kids ---
  "https://www.youtube.com/embed/IUN664s7N-c?autoplay=1&mute=1",
  "https://www.youtube.com/embed/HgzGwKwLmgM?autoplay=1&mute=1",

  // --- Games / Twitch VOD vibes ---
  "https://www.youtube.com/embed/0j6zGf3zK1E?autoplay=1&mute=1",
  "https://www.youtube.com/embed/E7wJTI-1dvQ?autoplay=1&mute=1",
  "https://www.youtube.com/embed/NlOfNsxB4IU?autoplay=1&mute=1",

  // --- Random internet ephemera ---
  "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1",
  "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1",

  // --- Local mp4s if you want to host loops ---
  "videos/loop1.mp4",
  "videos/loop2.mp4",
  "videos/loop3.mp4",

  // ... Extend to ~400 entries (music, politics, memes, nature cams, CCTV dumps)
];

// Shuffle + export
async function loadSources() {
  window.SOURCES = STATIC_SOURCES.slice();

  // shuffle
  for (let i = window.SOURCES.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [window.SOURCES[i], window.SOURCES[j]] = [window.SOURCES[j], window.SOURCES[i]];
  }
}
