import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export const initProperties = () => {
  gsap.from('.property-card', {
    scrollTrigger: {
      trigger: '.properties__grid',
      start: 'top 80%',
    },
    opacity: 0,
    y: 30,
    stagger: 0.15,
  })
}
