import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

// Ensure public directory exists
const publicDir = path.resolve(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Master SVG design for Associação Barnabé (ABA) Favicon
const svgMaster = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E4270"/>
      <stop offset="100%" stop-color="#2B5F9E"/>
    </linearGradient>
    <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F39C12"/>
      <stop offset="100%" stop-color="#E67E22"/>
    </linearGradient>
    <filter id="subtleShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#1E4270" flood-opacity="0.15"/>
    </filter>
  </defs>

  <!-- Solid white rounded square background -->
  <rect width="512" height="512" rx="112" fill="#ffffff"/>
  
  <!-- Subtle border outline -->
  <rect x="8" y="8" width="496" height="496" rx="104" fill="none" stroke="#2B5F9E" stroke-opacity="0.12" stroke-width="8"/>

  <!-- Main House Roof + Shelter Arc -->
  <g filter="url(#subtleShadow)">
    <path d="M 120 200 L 256 90 L 392 200 L 350 200 L 256 125 L 162 200 Z" fill="url(#orangeGrad)"/>
  </g>

  <!-- Center ABA Stylized Monogram -->
  <g transform="translate(0, 10)">
    <!-- AB in Deep Blue -->
    <text x="135" y="325" font-family="'Inter', 'Arial Black', sans-serif" font-weight="900" font-style="italic" font-size="140" fill="url(#blueGrad)" letter-spacing="-6">AB</text>
    <!-- A in Warm Orange -->
    <text x="325" y="325" font-family="'Inter', 'Arial Black', sans-serif" font-weight="900" font-style="italic" font-size="140" fill="url(#orangeGrad)" letter-spacing="-6">A</text>
  </g>

  <!-- Subtitle emblem text -->
  <text x="256" y="420" text-anchor="middle" font-family="'Inter', 'Arial', sans-serif" font-weight="800" font-size="34" fill="#1E4270" letter-spacing="8">BARNABÉ</text>
</svg>`;

// Monochrome SVG for Safari pinned tab mask-icon
const svgSafariPinned = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path fill="#2b5f9e" d="M 120 200 L 256 90 L 392 200 L 350 200 L 256 125 L 162 200 Z M 135 250 L 220 250 L 240 360 L 200 360 L 190 310 L 150 310 L 140 360 L 100 360 Z M 155 270 L 175 270 L 165 300 Z M 250 250 L 330 250 C 350 250 360 260 360 275 C 360 285 350 295 335 300 C 355 305 365 315 365 335 C 365 350 350 360 330 360 L 250 360 Z M 285 275 L 285 295 L 315 295 C 325 295 330 290 330 285 C 330 280 325 275 315 275 Z M 285 315 L 285 340 L 320 340 C 330 340 335 335 335 328 C 335 320 330 315 320 315 Z"/>
</svg>`;

// Write master SVG files
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgMaster, 'utf8');
fs.writeFileSync(path.join(publicDir, 'safari-pinned-tab.svg'), svgSafariPinned, 'utf8');

console.log('Saved master SVG favicons.');

// Generate raster PNG files using sharp
const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'mstile-150x150.png', size: 150 },
];

async function generatePngs() {
  const svgBuffer = Buffer.from(svgMaster);

  for (const item of sizes) {
    const outputPath = path.join(publicDir, item.name);
    await sharp(svgBuffer)
      .resize(item.size, item.size)
      .png()
      .toFile(outputPath);
    console.log(`Generated ${item.name} (${item.size}x${item.size})`);
  }

  // Generate favicon.ico (using 32x32 PNG as ico buffer)
  const icoPath = path.join(publicDir, 'favicon.ico');
  await sharp(svgBuffer)
    .resize(32, 32)
    .toFormat('png')
    .toFile(icoPath);
  console.log('Generated favicon.ico');
}

generatePngs().catch(console.error);
