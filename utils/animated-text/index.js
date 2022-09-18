const colorValues = {
  html: document.querySelector('.html'),
  htmlColor: '#dd4b25',
  css: document.querySelector('.css'),
  cssColor: '#254bdd',
  sass: document.querySelector('.sass'),
  sassColor: '#c76395',
  js: document.querySelector('.js'),
  jsColor: '#efd81d',
  react: document.querySelector('.react'),
  reactColor: '#5ed3f3',
  redux: document.querySelector('.redux'),
  reduxColor: '#7248b6',
  middlewares: document.querySelector('.middlewares'),
  middlewaresColor: '#85d26a',
  git: document.querySelector('.git'),
  gitColor: '#e84e31',
};

const animationTiming = {
  duration: 5000,
  iterations: Infinity,
};

const animateColor = (elementColor) => [
  { color: '#1c1e53', transition: '1.9s' },
  { color: elementColor, transition: '1.9s' },
  { color: '#1c1e53', transition: '.2s', delay: '1s' },
];

const animatedText = (event, color, timing) => {
  window.addEventListener('load', () => {
    event.animate(color, timing);
  });
};

animatedText(
  colorValues.html,
  animateColor(colorValues.htmlColor),
  animationTiming
);

animatedText(
  colorValues.css,
  animateColor(colorValues.cssColor),
  animationTiming
);

animatedText(
  colorValues.sass,
  animateColor(colorValues.sassColor),
  animationTiming
);

animatedText(
  colorValues.js,
  animateColor(colorValues.jsColor),
  animationTiming
);

animatedText(
  colorValues.react,
  animateColor(colorValues.reactColor),
  animationTiming
);

animatedText(
  colorValues.redux,
  animateColor(colorValues.reduxColor),
  animationTiming
);

animatedText(
  colorValues.middlewares,
  animateColor(colorValues.middlewaresColor),
  animationTiming
);

animatedText(
  colorValues.git,
  animateColor(colorValues.gitColor),
  animationTiming
);
