import gsap from 'gsap'

export const initCursor = () => {
  const cursor = document.getElementById('cursor')
  if (!cursor || window.innerWidth < 900) {
    cursor?.classList.add('is-hidden')
    return
  }

  const dot = cursor.querySelector('.cursor__dot') as HTMLElement
  const ring = cursor.querySelector('.cursor__ring') as HTMLElement
  const label = cursor.querySelector('.cursor__label') as HTMLElement

  let mouseX = window.innerWidth / 2
  let mouseY = window.innerHeight / 2
  let currentX = mouseX
  let currentY = mouseY

  const update = () => {
    currentX += (mouseX - currentX) * 0.15
    currentY += (mouseY - currentY) * 0.15
    dot.style.transform = `translate(${currentX}px, ${currentY}px)`
    ring.style.transform = `translate(${currentX}px, ${currentY}px)`
    label.style.transform = `translate(${currentX}px, ${currentY}px)`
    requestAnimationFrame(update)
  }
  update()

  window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX
    mouseY = event.clientY
  })

  const setState = (state: string | null) => {
    label.textContent = state ? state.toUpperCase() : ''
    gsap.to(ring, { scale: state ? 1.6 : 1, duration: 0.3 })
  }

  document.querySelectorAll<HTMLElement>('[data-cursor]').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      setState(el.dataset.cursor ?? null)
    })
    el.addEventListener('mouseleave', () => {
      setState(null)
    })
  })

  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    el.addEventListener('mousemove', (event) => {
      const rect = el.getBoundingClientRect()
      const x = event.clientX - rect.left - rect.width / 2
      const y = event.clientY - rect.top - rect.height / 2
      gsap.to(el, { x: x * 0.15, y: y * 0.15, duration: 0.3 })
    })
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.3 })
    })
  })
}
