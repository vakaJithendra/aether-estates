export const initContact = () => {
  const form = document.getElementById('contact-form') as HTMLFormElement | null
  if (!form) return

  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    form.classList.add('is-loading')

    const formData = new FormData(form)
    try {
      const response = await fetch('https://formspree.io/f/mknapjqg', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        form.reset()
        form.classList.add('is-success')
      }
    } catch (error) {
      form.classList.add('is-error')
    } finally {
      form.classList.remove('is-loading')
    }
  })
}
