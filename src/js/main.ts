import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { initLenis } from './modules/lenis'
import { initPreloader } from './modules/preloader'
import { initHero } from './modules/hero'
import { initThreeScene } from './modules/three-scene'
import { initProperties } from './modules/properties'
import { initGallery } from './modules/gallery'
import { initTestimonials } from './modules/testimonials'
import { initContact } from './modules/contact'
import { initCursor } from './modules/cursor'

export const initAether = () => {
  gsap.registerPlugin(ScrollTrigger)
  initLenis()
  initPreloader()
  initHero()
  initThreeScene()
  initProperties()
  initGallery()
  initTestimonials()
  initContact()
  initCursor()
  ScrollTrigger.refresh()

  const observer = new ResizeObserver(() => {
    ScrollTrigger.refresh()
  })
  observer.observe(document.body)
}
