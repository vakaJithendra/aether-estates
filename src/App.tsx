import { useEffect } from 'react'
import { initAether } from './js/main'

function App() {
  useEffect(() => {
    initAether()
  }, [])

  return (
    <div className="app" data-scroll-container>
      <div id="preloader" className="preloader" aria-hidden="true">
        <div className="preloader__inner">
          <div className="preloader__logo">
            <span>AETHER</span>
            <span>ESTATES</span>
          </div>
          <div className="preloader__line">
            <span className="preloader__progress" />
          </div>
          <div className="preloader__particles" />
        </div>
      </div>

      <div className="cursor" id="cursor">
        <span className="cursor__dot" />
        <span className="cursor__ring" />
        <span className="cursor__label" />
      </div>

      <header className="site-header">
        <div className="container header__inner">
          <div className="logo">AETHER ESTATES</div>
          <nav className="nav">
            <a href="#properties">Properties</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className="ghost-button" data-magnetic data-cursor="view">Schedule Viewing</button>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <video className="hero__video" autoPlay muted loop playsInline poster="/assets/property-obsidian.jpg">
            <source src="/assets/hero.mp4" type="video/mp4" />
          </video>
          <div className="hero__overlay" />
          <div className="hero__gradient" />
          <div className="container hero__content">
            <div className="hero__left">
              <p className="eyebrow">LUXURY REDEFINED</p>
              <h1 className="hero__title" data-splitting>
                WHERE ARCHITECTURE BECOMES ART
              </h1>
              <p className="hero__subtitle">
                AETHER ESTATES curates the world&apos;s most iconic residences, blending sculptural design, intelligent living, and cinematic
                storytelling into a singular lifestyle.
              </p>
              <div className="hero__actions">
                <button className="primary-button" data-magnetic data-cursor="view">Explore Portfolio</button>
                <button className="secondary-button" data-magnetic data-cursor="expand">Request Private Tour</button>
              </div>
              <div className="scroll-indicator">
                <span />
                <p>Scroll to Discover</p>
              </div>
            </div>
            <div className="hero__right">
              <canvas id="hero-canvas" aria-hidden="true" />
              <img className="hero__fallback" src="/assets/property-celestial.jpg" alt="Luxury villa exterior" />
            </div>
          </div>
        </section>

        <section className="properties" id="properties">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">FEATURED PROPERTIES</p>
              <h2 className="section-title" data-splitting>Curated Architectural Masterpieces</h2>
            </div>
            <div className="properties__grid">
              {[
                {
                  name: 'Aurora Penthouse',
                  location: 'Bel Air',
                  price: '$28.5M',
                  image: '/assets/property-aurora.jpg',
                  specs: '5 Bed · 6 Bath · 11,400 sqft',
                },
                {
                  name: 'Obsidian Villa',
                  location: 'Miami',
                  price: '$19.2M',
                  image: '/assets/property-obsidian.jpg',
                  specs: '6 Bed · 7 Bath · 13,800 sqft',
                },
                {
                  name: 'Celestial Residence',
                  location: 'Malibu',
                  price: '$34.7M',
                  image: '/assets/property-celestial.jpg',
                  specs: '7 Bed · 8 Bath · 15,600 sqft',
                },
                {
                  name: 'Horizon Estate',
                  location: 'Aspen',
                  price: '$22.1M',
                  image: '/assets/property-horizon.jpg',
                  specs: '5 Bed · 5 Bath · 9,800 sqft',
                },
                {
                  name: 'Eclipse Manor',
                  location: 'Hamptons',
                  price: '$41.0M',
                  image: '/assets/property-eclipse.jpg',
                  specs: '8 Bed · 9 Bath · 18,500 sqft',
                },
                {
                  name: 'Maison Lumière',
                  location: 'Monaco',
                  price: '€55.0M',
                  image: '/assets/property-lumiere.jpg',
                  specs: '6 Bed · 7 Bath · 14,200 sqft',
                },
              ].map((property) => (
                <article className="property-card" key={property.name} data-cursor="view">
                  <div className="property-card__image">
                    <img src={property.image} alt={property.name} loading="lazy" />
                  </div>
                  <div className="property-card__body">
                    <div>
                      <h3>{property.name}</h3>
                      <p>{property.location}</p>
                    </div>
                    <span className="property-card__price">{property.price}</span>
                  </div>
                  <p className="property-card__specs">{property.specs}</p>
                  <button className="property-card__cta" data-magnetic>View Estate</button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="container about__grid">
            <div className="about__content">
              <p className="eyebrow">ABOUT AETHER</p>
              <h2 className="section-title" data-splitting>Luxury is not space. It is experience.</h2>
              <p>
                From Bel Air penthouses to Monaco waterfronts, AETHER ESTATES crafts bespoke journeys that merge architecture, art, and
                technology. We curate homes as living galleries, blending sculptural forms with a hospitality-grade lifestyle.
              </p>
              <div className="timeline">
                {[
                  { year: '2014', label: 'Founded' },
                  { year: '2017', label: 'Global Expansion' },
                  { year: '2021', label: 'Smart Residences' },
                  { year: '2026', label: '1200+ Clients' },
                ].map((item) => (
                  <div className="timeline__item" key={item.year}>
                    <span className="timeline__dot" />
                    <div>
                      <strong>{item.year}</strong>
                      <p>{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about__visual" data-cursor="expand">
              <img src="/assets/gallery-architecture.jpg" alt="Futuristic architectural landmark" loading="lazy" />
              <div className="about__quote">“Luxury is not space. It is experience.”</div>
            </div>
          </div>
        </section>

        <section className="why">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">WHY CHOOSE US</p>
              <h2 className="section-title" data-splitting>Precision, Privacy, and Poise</h2>
            </div>
            <div className="why__grid">
              {[
                { title: 'Architectural Excellence', number: '01', text: 'Curated residences with iconic global architects and designers.' },
                { title: 'Prime Global Locations', number: '02', text: 'From the French Riviera to Beverly Hills, every address is elite.' },
                { title: 'Bespoke Living Experience', number: '03', text: 'Concierge lifestyle services tailored to your pace and rhythm.' },
              ].map((item) => (
                <div className="glass-card" key={item.number}>
                  <span className="glass-card__number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials" id="testimonials">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">TESTIMONIALS</p>
              <h2 className="section-title" data-splitting>Whispers from the Elite</h2>
            </div>
            <div className="testimonial-carousel" data-carousel>
              {[
                {
                  name: 'Amelia Sterling',
                  role: 'Collector, London',
                  quote: 'AETHER curated a residence that feels like a private museum. Flawless experience.',
                },
                {
                  name: 'Marco DeLuca',
                  role: 'Entrepreneur, Milan',
                  quote: 'Every detail, from lighting to materials, was orchestrated with obsessive precision.',
                },
                {
                  name: 'Sienna Laurent',
                  role: 'Creative Director, Paris',
                  quote: 'The team translated our lifestyle into architecture. It is cinematic living.',
                },
              ].map((review, index) => (
                <div className="testimonial" key={review.name} data-testimonial data-active={index === 0}>
                  <div className="testimonial__avatar">{review.name[0]}</div>
                  <div>
                    <p className="testimonial__quote">“{review.quote}”</p>
                    <p className="testimonial__name">{review.name}</p>
                    <p className="testimonial__role">{review.role}</p>
                  </div>
                </div>
              ))}
              <div className="testimonial__dots" data-dots>
                {Array.from({ length: 3 }).map((_, index) => (
                  <button key={index} aria-label={`Go to testimonial ${index + 1}`} data-dot={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="gallery" id="gallery">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">GALLERY</p>
              <h2 className="section-title" data-splitting>Spatial Luxury in Motion</h2>
            </div>
            <div className="gallery__grid" data-gallery>
              {[
                '/assets/gallery-pool.jpg',
                '/assets/gallery-rooftop.jpg',
                '/assets/gallery-interior.jpg',
                '/assets/gallery-architecture.jpg',
                '/assets/gallery-lounge.jpg',
              ].map((src, index) => (
                <button className="gallery__item" key={src} data-gallery-item={index} data-cursor="expand">
                  <img src={src} alt="Luxury property gallery" loading="lazy" />
                  <span className="gallery__overlay">Expand</span>
                </button>
              ))}
            </div>
          </div>
          <div className="lightbox" id="lightbox" aria-hidden="true">
            <button className="lightbox__close" data-lightbox-close aria-label="Close">×</button>
            <button className="lightbox__nav" data-lightbox-prev aria-label="Previous">‹</button>
            <div className="lightbox__content">
              <img src="" alt="Expanded luxury property" />
              <p className="lightbox__counter">1 / 5</p>
            </div>
            <button className="lightbox__nav" data-lightbox-next aria-label="Next">›</button>
          </div>
        </section>

        <section className="stats">
          <div className="container stats__grid">
            {[
              { value: 1200, label: 'Clients' },
              { value: 48, label: 'Properties' },
              { value: 16, label: 'Locations' },
              { value: 12, label: 'Years Experience' },
            ].map((stat) => (
              <div className="stat" key={stat.label}>
                <span className="stat__value" data-count={stat.value}>0</span>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container contact__grid">
            <div className="contact__info">
              <p className="eyebrow">CONTACT</p>
              <h2 className="section-title" data-splitting>Private Consultations</h2>
              <p>Connect with our estate curators for bespoke property journeys and private showings.</p>
              <div className="contact__details">
                <div>
                  <span>Email</span>
                  <a href="mailto:vakajithendra.dev@gmail.com">vakajithendra.dev@gmail.com</a>
                </div>
                <div>
                  <span>WhatsApp</span>
                  <a href="https://wa.me/918977423050?text=Hi%20I%20am%20interested%20in%20AETHER%20ESTATES" target="_blank" rel="noreferrer">
                    +91 89774 23050
                  </a>
                </div>
                <div>
                  <span>Studio</span>
                  <p>Rue de la Paix, Monaco · Beverly Hills · London</p>
                </div>
              </div>
              <div className="contact__map" data-cursor="drag">
                <img src="/assets/gallery-rooftop.jpg" alt="Aether estates map" loading="lazy" />
              </div>
            </div>
            <form className="contact__form" id="contact-form" noValidate>
              <div className="form-field">
                <input type="text" name="name" required placeholder=" " />
                <label>Full Name</label>
              </div>
              <div className="form-field">
                <input type="email" name="email" required placeholder=" " />
                <label>Email</label>
              </div>
              <div className="form-field">
                <input type="tel" name="phone" placeholder=" " />
                <label>Phone</label>
              </div>
              <div className="form-field">
                <input type="text" name="interest" required placeholder=" " />
                <label>Property Interest</label>
              </div>
              <div className="form-field">
                <textarea name="message" required placeholder=" " rows={4} />
                <label>Message</label>
              </div>
              <button type="submit" className="primary-button" data-cursor="view">
                <span className="button__text">Send Inquiry</span>
                <span className="button__spinner" aria-hidden="true" />
              </button>
              <p className="form-note">Or email directly if you prefer a bespoke conversation.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div>
            <div className="logo">AETHER ESTATES</div>
            <p>Elite real estate experiences crafted with architectural artistry.</p>
          </div>
          <div className="footer__links">
            <a href="#properties">Properties</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer__social">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a>
          </div>
        </div>
        <div className="footer__legal">
          <span>© 2026 AETHER ESTATES. All Rights Reserved.</span>
          <span>Privacy · Terms · Legal</span>
        </div>
      </footer>
    </div>
  )
}

export default App
