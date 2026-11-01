// Generates the light version of every blog SVG, as name.light.svg next to
// name.svg, by swapping the dark theme's colors for the light theme's. Run
// after adding or changing an image, then pass the result as <Figure lightSrc>:
//   node scripts/draw-light-images.mjs
//
// Fails on a color with no mapping, so an image never ships half converted.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const BLOG_IMAGES = fileURLToPath(new URL("../public/blog/", import.meta.url));

// Values from globals.css, dark to light
const LIGHT_COLORS = {
  "#101010": "#f7f5f0", // bg
  "#171717": "#efece5", // surface
  "#1f1f1f": "#e7e3da", // surface-raised
  "#262626": "#e4e0d8", // border
  "#404040": "#bdb7ac", // border-strong
  "#f5f5f5": "#1a1a1a", // text
  "#a3a3a3": "#57534e", // text-muted
  "#858585": "#625d55", // text-subtle
  "#ff6a4d": "#b83314", // accent
  "#2d1b17": "#f0ded6", // accent-subtle on bg, as a solid color
};

function toLight(svg, file) {
  return svg.replace(/#[0-9a-f]{6}\b/gi, (color) => {
    const light = LIGHT_COLORS[color.toLowerCase()];
    if (!light) {
      throw new Error(`${file}: no light color for ${color}`);
    }
    return light;
  });
}

const files = readdirSync(BLOG_IMAGES, { recursive: true })
  .filter((file) => file.endsWith(".svg") && !file.endsWith(".light.svg"))
  .sort();

for (const file of files) {
  const svg = readFileSync(`${BLOG_IMAGES}${file}`, "utf8");
  const output = file.replace(/\.svg$/, ".light.svg");
  writeFileSync(`${BLOG_IMAGES}${output}`, toLight(svg, file));
  console.log(`public/blog/${output}`);
}
