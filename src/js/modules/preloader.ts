import gsap from 'gsap'

export const initPreloader = () => {
  const preloader = document.getElementById('preloader')
  if (!preloader) return

  const skipped = sessionStorage.getItem('aether-skip-preloader')
  if (skipped) {
    preloader.style.display = 'none'
    return
  }

  const progress = preloader.querySelector('.preloader__progress') as HTMLElement | null

  const tl = gsap.timeline({
    onComplete: () => {
      sessionStorage.setItem('aether-skip-preloader', 'true')
      preloader.style.display = 'none'
    },
  })

  tl.fromTo(
    preloader.querySelector('.preloader__logo'),
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1 },
  )
    .to(progress, { width: '100%', duration: 1.6, ease: 'power2.out' })
    .to(preloader, { opacity: 0, duration: 0.8 })
}
