const fs = require('fs');
const plugin = require('tailwindcss/plugin');

const NAME = 'backgroundImage';

const backgroundImage = plugin(function ({addUtilities, e, theme, variants}) {
  const images = theme(NAME, {});
  const imageVariants = variants(NAME, []);

  const utilities = Object.entries(theme(NAME, {})).map(([name, {svgPath, svgAttrs}]) => {
    const svgOriginalSource = fs.readFileSync(svgPath).toString('utf8');
    const svgAttrsStr = svgAttrs && Object.entries(svgAttrs).map(
      ([key, val]) => `${key}="${val}"`
    ).join(' ');
    const svgSource = svgAttrsStr
      ? svgOriginalSource.replace(/<svg[^>]*/, match => `${match} ${svgAttrsStr}`)
      : svgOriginalSource;
    return {
      [`.${e(`bg-${name}`)}`]: {
        'background-image': `url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgSource)}")`,
      }
    };
  });

  addUtilities(utilities, imageVariants);
});

module.exports = backgroundImage;
