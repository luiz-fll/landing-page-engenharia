import '../stylesheets/Contact.css'
import LocationIcon from './icons/LocationIcon'
import EmailIcon from './icons/EmailIcon'
import WhatsAppIcon from './icons/WhatsAppIcon'
import ArrowRightIcon from './icons/ArrowRightIcon'

function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="contact-container">

        <div className="contact-header">
          <h2>Entre em Contato</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-location">
            <div className="location-icon">
              <LocationIcon />
            </div>

            <div>
              <h3>Onde atendemos</h3>
              <p>
                Rua Exemplo, 123 — Centro
                <br />
                Sorocaba - SP
              </p>
              <span>Atendemos toda a região de Sorocaba e cidades vizinhas.</span>
            </div>
          </div>

          <div className="contact-links">

            <a
              href="mailto:contato@engenharia.com.br"
              className="contact-link"
            >
              <div className="contact-link-icon">
                <EmailIcon />
              </div>

              <div className="contact-link-text">
                <span>Email</span>
                <strong>contato@engenharia.com.br</strong>
              </div>

              <ArrowRightIcon className='contact-arrow'/>
            </a>

            <a
              href="https://wa.me/5515999999999"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-link-icon whatsapp">
                <WhatsAppIcon />
              </div>

              <div className="contact-link-text">
                <span>WhatsApp</span>
                <strong>(15) 99999-9999</strong>
              </div>

              <ArrowRightIcon className='contact-arrow'/>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;