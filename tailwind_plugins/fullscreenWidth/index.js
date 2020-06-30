const plugin = require('tailwindcss/plugin');

const fullscreenWidth = plugin(function({addComponents}) {
  const styles = {
    '.w-fullscreen': {
      width: '100vw',
      position: 'relative',
      left: 'calc(-50vw + 50%)',
    },
  };
  addComponents(styles);
});

module.exports = fullscreenWidth;
