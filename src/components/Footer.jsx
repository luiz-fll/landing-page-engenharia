import '../stylesheets/Footer.css'
import WhatsAppIcon from './icons/WhatsAppIcon'
import EmailIcon from './icons/EmailIcon'
import InstagramIcon from './icons/InstagramIcon'
import LinkedInIcon from './icons/LinkedInIcon'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <span className="footer-name">
          Fulano de Tal
        </span>

        <div className="footer-socials">

          {/* WhatsApp */}
          <a
            href="https://wa.me/5515999999999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
          </a>

          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>

          {/* Email */}
          <a
            href="mailto:contato@engenharia.com.br"
            aria-label="Email"
          >
            <EmailIcon />
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;