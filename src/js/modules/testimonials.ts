export const initTestimonials = () => {
  const carousel = document.querySelector('[data-carousel]')
  if (!carousel) return
  const testimonials = Array.from(carousel.querySelectorAll<HTMLElement>('[data-testimonial]'))
  const dots = Array.from(carousel.querySelectorAll<HTMLButtonElement>('[data-dot]'))
  let current = 0
  let timer: number | undefined

  const setActive = (index: number) => {
    testimonials.forEach((item, i) => {
      item.dataset.active = i === index ? 'true' : 'false'
    })
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index)
    })
    current = index
  }

  const start = () => {
    timer = window.setInterval(() => {
      setActive((current + 1) % testimonials.length)
    }, 5000)
  }

  carousel.addEventListener('mouseenter', () => {
    if (timer) window.clearInterval(timer)
  })
  carousel.addEventListener('mouseleave', start)

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const index = Number(dot.dataset.dot)
      setActive(index)
    })
  })

  setActive(0)
  start()
}
