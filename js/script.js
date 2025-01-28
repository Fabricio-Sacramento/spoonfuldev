import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.153.0/build/three.module.min.js';
import Spheres1Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.17/build/backgrounds/spheres1.cdn.min.js';

// 🚀 Verificações de elementos essenciais
const canvas = document.getElementById('webgl-canvas');
const gravityBtn = document.getElementById('gravity-btn');
const colorsBtn = document.getElementById('colors-btn');

if (!canvas || !gravityBtn || !colorsBtn) {
    console.error("❌ Erro: Elementos essenciais não encontrados no DOM.");
}

// 📌 Inicializar o fundo de esferas
const bg = Spheres1Background(canvas, {
    count: 100,  // Número de esferas
    minSize: 0.5,
    maxSize: 1.5,
    gravity: 0.2,
    material: new THREE.MeshPhysicalMaterial({
        color: 0x66ccff, // Azul claro
        roughness: 0.2,
        metalness: 0,
        transmission: 0.9,
        opacity: 0.7,
        side: THREE.DoubleSide,
        clearcoat: 1,
        clearcoatRoughness: 0.1
    })
});

// 🕒 Criar um relógio para animação
const clock = new THREE.Clock();

// 📌 Esperar até que as esferas sejam carregadas antes de modificar os vértices
const checkSpheresLoaded = setInterval(() => {
    if (bg.spheres && bg.spheres.meshes && bg.spheres.meshes.length > 0) {
        clearInterval(checkSpheresLoaded);
        console.log("✅ Esferas carregadas!");

        // 💧 Tornar as esferas amorfas e líquidas
        function animate() {
            const time = clock.getElapsedTime();
            bg.spheres.meshes.forEach(mesh => {
                if (mesh.geometry.attributes.position) {
                    const vertices = mesh.geometry.attributes.position.array;
                    for (let i = 0; i < vertices.length; i += 3) {
                        vertices[i] += Math.sin(time + vertices[i] * 0.1) * 0.02;
                        vertices[i + 1] += Math.cos(time + vertices[i + 1] * 0.1) * 0.02;
                        vertices[i + 2] += Math.sin(time + vertices[i + 2] * 0.1) * 0.02;
                    }
                    mesh.geometry.attributes.position.needsUpdate = true;
                }
            });

            requestAnimationFrame(animate);
        }

        animate(); // 🔄 Inicia a animação amorfa
    }
}, 100);

// 🟢 Alternar gravidade
gravityBtn.addEventListener('click', () => {
    if (bg.spheres) {
        bg.spheres.config.gravity = bg.spheres.config.gravity === 0 ? 1 : 0;
        console.log("⚡ Gravidade alterada para:", bg.spheres.config.gravity);
    }
});

// 🎨 Alterar cores
colorsBtn.addEventListener('click', () => {
    if (bg.spheres) {
        bg.spheres.setColors([
            0x66ccff, // Azul claro
            0x33ccaa, // Verde água
            0xffffff  // Branco
        ]);
        console.log("🎨 Cores alteradas!");
    }
});
