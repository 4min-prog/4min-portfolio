import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WIDTH = 1200;
const HEIGHT = 630;

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="subtleGlow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a0533" />
      <stop offset="100%" stop-color="#0B0B0F" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#7C3AED" />
      <stop offset="100%" stop-color="#A855F7" />
    </linearGradient>
    <linearGradient id="cardShine" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="rgba(124,58,237,0.15)" />
      <stop offset="50%" stop-color="rgba(168,85,247,0.08)" />
      <stop offset="100%" stop-color="rgba(124,58,237,0.15)" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#0B0B0F" />

  <!-- Subtle grid pattern -->
  <g opacity="0.03">
    <line x1="0" y1="0" x2="0" y2="${HEIGHT}" stroke="white" stroke-width="0.5" />
    <line x1="60" y1="0" x2="60" y2="${HEIGHT}" stroke="white" stroke-width="0.5" />
    <line x1="120" y1="0" x2="120" y2="${HEIGHT}" stroke="white" stroke-width="0.5" />
    <line x1="180" y1="0" x2="180" y2="${HEIGHT}" stroke="white" stroke-width="0.5" />
    <line x1="240" y1="0" x2="240" y2="${HEIGHT}" stroke="white" stroke-width="0.5" />
    <line x1="300" y1="0" x2="300" y2="${HEIGHT}" stroke="white" stroke-width="0.5" />
    <line x1="360" y1="0" x2="360" y2="${HEIGHT}" stroke="white" stroke-width="0.5" />
    <line x1="420" y1="0" x2="420" y2="${HEIGHT}" stroke="white" stroke-width="0.5" />
    <line x1="480" y1="0" x2="480" y2="${HEIGHT}" stroke="white" stroke-width="0.5" />
    <line x1="540" y1="0" x2="540" y2="${HEIGHT}" stroke="white" stroke-width="0.5" />
    <line x1="600" y1="0" x2="600" y2="${HEIGHT}" stroke="white" stroke-width="0.5" />
    <line x1="660" y1="0" x2="660" y2="${HEIGHT}" stroke="white" stroke-width="0.5" />
    <line x1="720" y1="0" x2="720" y2="${HEIGHT}" stroke="white" stroke-width="0.5" />
    <line x1="780" y1="0" x2="780" y2="${HEIGHT}" stroke="white" stroke-width="0.5" />
    <line x1="840" y1="0" x2="840" y2="${HEIGHT}" stroke="white" stroke-width="0.5" />
    <line x1="900" y1="0" x2="900" y2="${HEIGHT}" stroke="white" stroke-width="0.5" />
    <line x1="960" y1="0" x2="960" y2="${HEIGHT}" stroke="white" stroke-width="0.5" />
    <line x1="1020" y1="0" x2="1020" y2="${HEIGHT}" stroke="white" stroke-width="0.5" />
    <line x1="1080" y1="0" x2="1080" y2="${HEIGHT}" stroke="white" stroke-width="0.5" />
    <line x1="1140" y1="0" x2="1140" y2="${HEIGHT}" stroke="white" stroke-width="0.5" />
    <line x1="1200" y1="0" x2="1200" y2="${HEIGHT}" stroke="white" stroke-width="0.5" />
  </g>
  <g opacity="0.03">
    <line x1="0" y1="0" x2="${WIDTH}" y2="0" stroke="white" stroke-width="0.5" />
    <line x1="0" y1="63" x2="${WIDTH}" y2="63" stroke="white" stroke-width="0.5" />
    <line x1="0" y1="126" x2="${WIDTH}" y2="126" stroke="white" stroke-width="0.5" />
    <line x1="0" y1="189" x2="${WIDTH}" y2="189" stroke="white" stroke-width="0.5" />
    <line x1="0" y1="252" x2="${WIDTH}" y2="252" stroke="white" stroke-width="0.5" />
    <line x1="0" y1="315" x2="${WIDTH}" y2="315" stroke="white" stroke-width="0.5" />
    <line x1="0" y1="378" x2="${WIDTH}" y2="378" stroke="white" stroke-width="0.5" />
    <line x1="0" y1="441" x2="${WIDTH}" y2="441" stroke="white" stroke-width="0.5" />
    <line x1="0" y1="504" x2="${WIDTH}" y2="504" stroke="white" stroke-width="0.5" />
    <line x1="0" y1="567" x2="${WIDTH}" y2="567" stroke="white" stroke-width="0.5" />
    <line x1="0" y1="630" x2="${WIDTH}" y2="630" stroke="white" stroke-width="0.5" />
  </g>

  <!-- Purple glow circle top right -->
  <circle cx="950" cy="100" r="250" fill="#7C3AED" opacity="0.06" />
  <circle cx="200" cy="500" r="200" fill="#A855F7" opacity="0.04" />

  <!-- 4MIN Logo -->
  <text x="70" y="98" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="26" font-weight="800" fill="white" letter-spacing="1">4MIN</text>
  <rect x="70" y="108" width="28" height="3" rx="1.5" fill="#7C3AED" />

  <line x1="70" y1="140" x2="530" y2="140" stroke="rgba(255,255,255,0.06)" stroke-width="1" />

  <!-- Main Title -->
  <text x="70" y="220" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="700" fill="white" letter-spacing="-0.5">Modern</text>
  <text x="70" y="290" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="700" fill="white" letter-spacing="-0.5">Web <tspan fill="#A855F7">Solutions</tspan></text>

  <!-- Subtitle -->
  <text x="70" y="355" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="17" font-weight="400" fill="rgba(255,255,255,0.5)" letter-spacing="0.3">Web Design • Landing Pages • React Development • SEO</text>

  <!-- Portfolio screenshot mockup -->
  <rect x="700" y="115" width="420" height="265" rx="12" fill="url(#cardShine)" stroke="rgba(124,58,237,0.2)" stroke-width="1" />

  <!-- Mockup window dots -->
  <circle cx="722" cy="137" r="5" fill="#FF5F56" />
  <circle cx="742" cy="137" r="5" fill="#FFBD2E" />
  <circle cx="762" cy="137" r="5" fill="#27C93F" />

  <!-- Mockup URL bar -->
  <rect x="790" y="127" width="160" height="20" rx="10" fill="rgba(255,255,255,0.06)" />

  <!-- Mockup navbar -->
  <rect x="720" y="170" width="80" height="8" rx="4" fill="rgba(255,255,255,0.08)" />
  <rect x="815" y="170" width="50" height="8" rx="4" fill="rgba(255,255,255,0.08)" />
  <rect x="880" y="170" width="55" height="8" rx="4" fill="rgba(255,255,255,0.08)" />
  <rect x="950" y="170" width="60" height="8" rx="4" fill="rgba(255,255,255,0.08)" />
  <rect x="1025" y="170" width="75" height="8" rx="4" fill="rgba(255,255,255,0.08)" />

  <!-- Mockup hero gradient -->
  <rect x="720" y="200" width="380" height="160" rx="8" fill="url(#accentGrad)" opacity="0.08" />

  <rect x="740" y="220" width="200" height="10" rx="5" fill="rgba(255,255,255,0.15)" />
  <rect x="740" y="240" width="160" height="10" rx="5" fill="rgba(255,255,255,0.15)" />

  <rect x="740" y="270" width="280" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
  <rect x="740" y="284" width="240" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
  <rect x="740" y="298" width="260" height="6" rx="3" fill="rgba(255,255,255,0.06)" />

  <!-- Mockup buttons -->
  <rect x="740" y="325" width="100" height="30" rx="6" fill="#7C3AED" opacity="0.3" />
  <rect x="855" y="325" width="100" height="30" rx="6" fill="rgba(255,255,255,0.06)" />

  <!-- Bottom tagline -->
  <text x="70" y="580" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="400" fill="rgba(255,255,255,0.2)" letter-spacing="1">4MIN.NETLIFY.APP</text>
  <text x="70" y="600" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="400" fill="rgba(255,255,255,0.2)" letter-spacing="1">CRAFTING THE FUTURE</text>

  <text x="1080" y="600" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="500" fill="rgba(124,58,237,0.4)" letter-spacing="1.5" text-anchor="end">WEB DEVELOPER</text>
</svg>
`;

const outputDir = path.resolve(__dirname, '..', 'public', 'image');
const pngPath = path.join(outputDir, 'og-image.png');
const jpgPath = path.join(outputDir, 'og-image.jpg');

// Generate flattened PNG + JPEG (no alpha channel — LinkedIn needs this)
Promise.all([
  sharp(Buffer.from(svg))
    .resize(WIDTH, HEIGHT)
    .flatten({ background: '#0B0B0F' })
    .png()
    .toFile(pngPath)
    .then(info => console.log(`PNG: ${pngPath} — ${info.width}x${info.height}, ${info.size} bytes`)),

  sharp(Buffer.from(svg))
    .resize(WIDTH, HEIGHT)
    .flatten({ background: '#0B0B0F' })
    .jpeg({ quality: 95 })
    .toFile(jpgPath)
    .then(info => console.log(`JPG: ${jpgPath} — ${info.width}x${info.height}, ${info.size} bytes`))
])
.then(() => console.log('\nDone — both images generated without alpha channel.'))
.catch(err => { console.error(err); process.exit(1); });
