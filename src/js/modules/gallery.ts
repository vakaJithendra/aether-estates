import gsap from 'gsap'

export const initGallery = () => {
  const lightbox = document.getElementById('lightbox')
  if (!lightbox) return

  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-gallery-item]'))
  const image = lightbox.querySelector('img') as HTMLImageElement
  const counter = lightbox.querySelector('.lightbox__counter') as HTMLElement
  let current = 0

  const update = (index: number) => {
    const target = items[index]
    if (!target) return
    const img = target.querySelector('img') as HTMLImageElement
    image.src = img.src
    counter.textContent = `${index + 1} / ${items.length}`
    current = index
  }

  const open = (index: number) => {
    lightbox.classList.add('is-open')
    lightbox.setAttribute('aria-hidden', 'false')
    update(index)
    gsap.fromTo(lightbox, { opacity: 0 }, { opacity: 1, duration: 0.4 })
  }

  const close = () => {
    gsap.to(lightbox, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        lightbox.classList.remove('is-open')
        lightbox.setAttribute('aria-hidden', 'true')
      },
    })
  }

  items.forEach((item) => {
    item.addEventListener('click', () => {
      const index = Number(item.dataset.galleryItem)
      open(index)
    })
  })

  lightbox.querySelector('[data-lightbox-close]')?.addEventListener('click', close)
  lightbox.querySelector('[data-lightbox-prev]')?.addEventListener('click', () => {
    update((current - 1 + items.length) % items.length)
  })
  lightbox.querySelector('[data-lightbox-next]')?.addEventListener('click', () => {
    update((current + 1) % items.length)
  })

  document.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('is-open')) return
    if (event.key === 'Escape') close()
    if (event.key === 'ArrowLeft') update((current - 1 + items.length) % items.length)
    if (event.key === 'ArrowRight') update((current + 1) % items.length)
  })
}
