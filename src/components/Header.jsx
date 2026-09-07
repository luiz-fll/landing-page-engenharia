import '../stylesheets/Header.css'
import './icons/WhatsAppIcon'
import WhatsAppIcon from './icons/WhatsAppIcon'

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <a href="#" className="logo">
            ENGENHARIA
          </a>

          <div className="header-contact">
            <a href="tel:+5515999999999" className="phone">
              (15) 99999-9999
            </a>

            <a
              href="https://wa.me/5515999999999"
              className="whatsapp-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="whatsapp-icon" />
              <span>Fale conosco</span>
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
