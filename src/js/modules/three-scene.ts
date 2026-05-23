import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export const initThreeScene = () => {
  const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement | null
  if (!canvas) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(35, canvas.clientWidth / canvas.clientHeight, 0.1, 100)
  camera.position.set(0, 2.2, 6)

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  })
  const resizeRenderer = () => {
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    const dpr = Math.min(window.devicePixelRatio, 1.6)
    renderer.setPixelRatio(dpr)
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }
  resizeRenderer()

  const ambient = new THREE.AmbientLight(0xffffff, 0.4)
  const directional = new THREE.DirectionalLight(0xfff2d4, 1)
  directional.position.set(4, 6, 4)
  const goldLight = new THREE.PointLight(0xc6a972, 2, 10)
  goldLight.position.set(-3, 2, 2)

  scene.add(ambient, directional, goldLight)

  const group = new THREE.Group()
  const base = new THREE.BoxGeometry(3.6, 0.2, 2.2)
  const tower = new THREE.BoxGeometry(1.6, 2.2, 1.4)
  const roof = new THREE.ConeGeometry(1.4, 0.7, 4)
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.1,
    roughness: 0,
    transmission: 0.9,
    thickness: 0.8,
    envMapIntensity: 1.2,
  })
  const metal = new THREE.MeshStandardMaterial({
    color: 0x1c1c1c,
    metalness: 0.8,
    roughness: 0.2,
  })
  const gold = new THREE.MeshStandardMaterial({
    color: 0xc6a972,
    metalness: 1,
    roughness: 0.2,
    emissive: 0xc6a972,
    emissiveIntensity: 0.3,
  })

  const baseMesh = new THREE.Mesh(base, metal)
  baseMesh.position.set(0, -1.1, 0)
  const towerMesh = new THREE.Mesh(tower, glass)
  towerMesh.position.set(0, 0.3, 0)
  const roofMesh = new THREE.Mesh(roof, gold)
  roofMesh.position.set(0, 1.7, 0)

  group.add(baseMesh, towerMesh, roofMesh)

  const wingGeometry = new THREE.BoxGeometry(1.8, 0.6, 1.2)
  const wingLeft = new THREE.Mesh(wingGeometry, glass)
  wingLeft.position.set(-2, -0.2, 0)
  const wingRight = new THREE.Mesh(wingGeometry, glass)
  wingRight.position.set(2, -0.2, 0)
  group.add(wingLeft, wingRight)

  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = 200
  const positions = new Float32Array(particlesCount * 3)
  for (let i = 0; i < particlesCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 6
    positions[i + 1] = Math.random() * 4
    positions[i + 2] = (Math.random() - 0.5) * 6
  }
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const particlesMaterial = new THREE.PointsMaterial({
    color: 0xc6a972,
    size: 0.05,
    transparent: true,
    opacity: 0.6,
  })
  const particles = new THREE.Points(particlesGeometry, particlesMaterial)

  scene.add(group, particles)

  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  composer.addPass(new UnrealBloomPass(new THREE.Vector2(canvas.clientWidth, canvas.clientHeight), 0.6, 0.6, 0.2))

  const animate = () => {
    group.rotation.y += 0.002
    particles.rotation.y -= 0.001
    composer.render()
    requestAnimationFrame(animate)
  }
  animate()

  gsap.to(camera.position, {
    z: 5,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  })

  window.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 0.6
    const y = (event.clientY / window.innerHeight - 0.5) * 0.6
    gsap.to(group.rotation, { x: y * 0.3, y: x * 0.8, duration: 1.2 })
  })

  window.addEventListener('resize', () => {
    resizeRenderer()
    composer.setSize(canvas.clientWidth, canvas.clientHeight)
  })
}
