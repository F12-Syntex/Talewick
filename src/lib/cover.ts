/** Stable hue for a title, used by generated covers when a book has no cover image. */
export function titleHue(title: string) {
  let h = 0;
  for (let i = 0; i < title.length; i++) h = (h * 31 + title.charCodeAt(i)) | 0;
  return Math.abs(h) % 360;
}

export function coverGradient(title: string) {
  const hue = titleHue(title);
  return `linear-gradient(160deg, hsl(${hue} 28% 24%), hsl(${(hue + 30) % 360} 32% 9%))`;
}
