const SOURCES = [
  // 🌌 Space / Earth feeds
  "https://www.youtube.com/embed/21X5lGlDOfg?autoplay=1&mute=1", // NASA live
  "https://www.youtube.com/embed/DDU-rZs-Ic4?autoplay=1&mute=1", // Earth from ISS
  "https://www.youtube.com/embed/XBPjVzSoepo?autoplay=1&mute=1", // SpaceX stream sample

  // 🎶 Music / Lo-Fi / Vibes
  "https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&mute=1", // Lo-fi hip hop
  "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1", // Lo-fi beats
  "https://www.youtube.com/embed/7NOSDKb0HlU?autoplay=1&mute=1", // Chillhop livestream
  "https://www.youtube.com/embed/36YnV9STBqc?autoplay=1&mute=1", // 24/7 jazz & coffee

  // 📰 News
  "https://www.youtube.com/embed/9Auq9mYxFEE?autoplay=1&mute=1", // Sky News live
  "https://www.youtube.com/embed/5YXVMCHG-Nk?autoplay=1&mute=1", // ABC News live
  "https://www.youtube.com/embed/Ue5qdxz4wlg?autoplay=1&mute=1", // France24 live

  // 📺 Random cultural noise
  "https://www.youtube.com/embed/ZZ5LpwO-An4?autoplay=1&mute=1", // He-Man heyayay
  "https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1&mute=1", // Big Buck Bunny (classic open movie)
  "https://www.youtube.com/embed/tPEE9ZwTmy0?autoplay=1&mute=1", // People are Awesome
  "https://www.youtube.com/embed/_OBlgSz8sSM?autoplay=1&mute=1", // Charlie bit my finger

  // 🕹 Gameplay / Twitch-like vibes
  "https://www.youtube.com/embed/-TzdDFe7Q64?autoplay=1&mute=1", // Minecraft longplay
  "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1", // Funny cats (lol filler)
  "https://www.youtube.com/embed/lXMskKTw3Bc?autoplay=1&mute=1", // Rick Astley rickroll

  // 🍜 Mukbang / food
  "https://www.youtube.com/embed/Z3ZAGBL6UBA?autoplay=1&mute=1", // Korean street food
  "https://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1&mute=1", // meme insert

  // 🏙 City cams
  "https://www.youtube.com/embed/WmCzZQ8E0pQ?autoplay=1&mute=1", // Shibuya live cam
  "https://www.youtube.com/embed/84NI5fjTfpQ?autoplay=1&mute=1", // NYC Times Square live
];

// Grid builder
window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("void-grid");
  SOURCES.forEach(src => {
    const frame = document.createElement("iframe");
    frame.src = src;
    frame.frameBorder = "0";
    frame.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    frame.allowFullscreen = true;
    frame.width = "560";
    frame.height = "315";
    container.appendChild(frame);
  });
});
