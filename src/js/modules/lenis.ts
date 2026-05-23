import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

let lenisInstance: Lenis | null = null

export const initLenis = () => {
  lenisInstance = new Lenis({
    lerp: 0.08,
    smoothWheel: true,
  })

  function raf(time: number) {
    lenisInstance?.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  lenisInstance.on('scroll', () => {
    ScrollTrigger.update()
  })

  gsap.ticker.add((time) => {
    lenisInstance?.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
}
