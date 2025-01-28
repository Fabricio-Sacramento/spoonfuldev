import Spheres1Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.17/build/backgrounds/spheres1.cdn.min.js';

// Inicializar o fundo de esferas
const bg = Spheres1Background(document.getElementById('webgl-canvas'), {
  count: 300,    // Número de esferas
  minSize: 0.2,  // Tamanho mínimo das esferas
  maxSize: 0.8,    // Tamanho máximo das esferas
  gravity: 0.2   // Gravidade inicial
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
