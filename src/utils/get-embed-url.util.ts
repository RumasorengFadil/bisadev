interface EmbedOptions {
  autoplay?: boolean;
  muted?: boolean;
}

export function getEmbedUrl(url: string, options: EmbedOptions = {}): string | null {
  if (!url) return null;

  const { autoplay = false, muted = false } = options;

  /* =======================
     YouTube
  ======================= */
  const youtubeRegex = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  const ytMatch = url.match(youtubeRegex);

  if (ytMatch?.[1]) {
    const params = new URLSearchParams({
      autoplay: autoplay ? "1" : "0",
      mute: muted || autoplay ? "1" : "0", // autoplay wajib mute
      rel: "0",
      modestbranding: "1",
    });

    return `https://www.youtube.com/embed/${ytMatch[1]}?${params.toString()}`;
  }

  /* =======================
     Google Drive
  ======================= */
  // Google Drive
  const driveRegex = /\/d\/([a-zA-Z0-9_-]+)/;
  const driveMatch = url.match(driveRegex);

  if (driveMatch?.[1]) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
  }

  return null;
}
