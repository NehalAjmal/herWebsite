const fs = require('fs');
const imgBuffer = fs.readFileSync('./public/favicon.png');
const base64Img = imgBuffer.toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <clipPath id="circleView">
      <circle cx="50" cy="50" r="50" />
    </clipPath>
  </defs>
  <image width="115" height="115" x="-7.5" y="-7.5" href="data:image/png;base64,${base64Img}" clip-path="url(#circleView)" preserveAspectRatio="xMidYMid slice" />
</svg>`;
fs.writeFileSync('./public/favicon.svg', svg);
