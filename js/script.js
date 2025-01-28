import Spheres1Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.17/build/backgrounds/spheres1.cdn.min.js';

// Inicializar o fundo de esferas
const bg = Spheres1Background(document.getElementById('webgl-canvas'), {
  count: 250,    // Número de esferas
  minSize: 0.4,  // Tamanho mínimo das esferas
  maxSize: 1.2,    // Tamanho máximo das esferas
  gravity: 0.5,   // Gravidade inicial
  colors: [
    0xF4A70B, // Laranja
    0xB77D08, // Verde claro
    0x553A04  // Azul
  ]
});

// Alternar gravidade
document.getElementById('gravity-btn').addEventListener('click', () => {
  bg.spheres.config.gravity = bg.spheres.config.gravity === 0 ? 1 : 0;
});

// Alterar cores aleatórias
document.getElementById('colors-btn').addEventListener('click', () => {
  bg.spheres.setColors([
    0xffffff * Math.random(),
    0xffffff * Math.random(),
    0xffffff * Math.random()
  ]);
});
