const SOURCES = [
  // 🌌 Space / Earth feeds
  "https://www.youtube.com/embed/21X5lGlDOfg?autoplay=1&mute=1", // NASA live
  "https://www.youtube.com/embed/DDU-rZs-Ic4?autoplay=1&mute=1", // Earth from ISS

  // 📰 24/7 News Streams
  "https://www.youtube.com/embed/9Auq9mYxFEE?autoplay=1&mute=1", // Sky News
  "https://www.youtube.com/embed/5YXVMCHG-Nk?autoplay=1&mute=1", // ABC News (US)
  "https://www.youtube.com/embed/Ue5qdxz4wlg?autoplay=1&mute=1", // France24

  // 🎶 Continuous music / ambient streams
  "https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&mute=1", // Lo-fi hip hop
  "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1", // Lo-fi beats
  "https://www.youtube.com/embed/36YnV9STBqc?autoplay=1&mute=1", // Jazz & coffee shop
  "https://www.youtube.com/embed/7NOSDKb0HlU?autoplay=1&mute=1", // Chillhop

  // 🌍 World / City live cams
  "https://www.youtube.com/embed/84NI5fjTfpQ?autoplay=1&mute=1", // Times Square live
  "https://www.youtube.com/embed/WmCzZQ8E0pQ?autoplay=1&mute=1", // Tokyo Shibuya crossing
  "https://www.youtube.com/embed/F2eqD9pT_gw?autoplay=1&mute=1", // Miami beach cam
  "https://www.youtube.com/embed/84NI5fjTfpQ?autoplay=1&mute=1", // NYC again (backup)

  // 🎥 Documentaries / archival
  "https://www.youtube.com/embed/bTqVqk7FSmY?autoplay=1&mute=1", // Vietnam war doc
  "https://www.youtube.com/embed/YQHsXMglC9A?autoplay=1&mute=1", // Cultural doc example
  "https://www.youtube.com/embed/Ek1kUMb0ARo?autoplay=1&mute=1", // Archival color footage

  // 🍲 Food / lifestyle / surreal noise
  "https://www.youtube.com/embed/Z3ZAGBL6UBA?autoplay=1&mute=1", // Korean street food
  "https://www.youtube.com/embed/odM92ap8_c0?autoplay=1&mute=1", // Travel vlogging
  "https://www.youtube.com/embed/_8WQ_p-j0EA?autoplay=1&mute=1", // Mukbang stream

  // 🕹 Games / streaming culture
  "https://www.youtube.com/embed/-TzdDFe7Q64?autoplay=1&mute=1", // Minecraft longplay
  "https://www.youtube.com/embed/HZpCC2U7Ghg?autoplay=1&mute=1", // Elden Ring stream
  "https://www.youtube.com/embed/aWzlQ2N6qqg?autoplay=1&mute=1", // Esports commentary

  // 🚦 CCTV-like vibes
  "https://www.youtube.com/embed/OM9ZGnJD4Jc?autoplay=1&mute=1", // Traffic cam timelapse
  "https://www.youtube.com/embed/NimZJe4jLBY?autoplay=1&mute=1", // City surveillance montage
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
