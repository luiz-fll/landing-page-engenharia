import '../stylesheets/Hero.css'
import WhatsAppIcon from './icons/WhatsAppIcon'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Lorem ipsum dolor sit amet consectetur</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero, sed cursus ante dapibus diam.
          </p>

          <div className="hero-buttons">
            <a href="#servicos" className="hero-button primary">
              Conheça nossos serviços
            </a>

            <a
              href="https://wa.me/5515999999999"
              className="hero-button whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="whatsapp-icon" />
              Fale conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
