import '../stylesheets/Navbar.css'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#clientes">Clientes</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
