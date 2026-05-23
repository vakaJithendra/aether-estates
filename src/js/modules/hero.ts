import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Splitting from 'splitting'

export const initHero = () => {
  Splitting({ by: 'words' })

  gsap.from('.hero__title .word', {
    y: 40,
    opacity: 0,
    duration: 1.2,
    stagger: 0.08,
    ease: 'power3.out',
  })

  gsap.from('.hero__subtitle', {
    opacity: 0,
    y: 20,
    delay: 0.6,
  })

  gsap.utils.toArray<HTMLElement>('[data-splitting]').forEach((el) => {
    gsap.from(el.querySelectorAll('.word'), {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      stagger: 0.06,
    })
  })

  gsap.to('.hero__right', {
    yPercent: 10,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      scrub: true,
    },
  })
}
