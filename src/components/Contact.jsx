import '../stylesheets/Contact.css';

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
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 18.1C9.9 17.5 7 13.2 7 9a5 5 0 0 1 10 0c0 4.2-2.9 8.5-5 11.1zM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
              </svg>
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
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>

              <div className="contact-link-text">
                <span>Email</span>
                <strong>contato@engenharia.com.br</strong>
              </div>

              <svg
                className="contact-arrow"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 4l-1.4 1.4 5.6 5.6H4v2h12.2l-5.6 5.6L12 20l8-8-8-8z" />
              </svg>
            </a>

            <a
              href="https://wa.me/5515999999999"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-link-icon whatsapp">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 1 1 8.372 4.632M20.52 3.449A11.815 11.815 0 0 0 12.053 0C5.495 0 .16 5.335.157 11.893c0 2.096.547 4.142 1.588 5.946L.057 24l6.304-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.557 0 11.893-5.335 11.896-11.893a11.821 11.821 0 0 0-3.425-8.452"
                  />
                </svg>
              </div>

              <div className="contact-link-text">
                <span>WhatsApp</span>
                <strong>(15) 99999-9999</strong>
              </div>

              <svg
                className="contact-arrow"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 4l-1.4 1.4 5.6 5.6H4v2h12.2l-5.6 5.6L12 20l8-8-8-8z" />
              </svg>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;