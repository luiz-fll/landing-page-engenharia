import '../stylesheets/Services.css';

const services = [
  {
    title: 'Projetos Estruturais',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
  },
  {
    title: 'Gerenciamento de Obras',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
  },
  {
    title: 'Consultoria',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
  },
  {
    title: 'Laudos Técnicos',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
  },
  {
    title: 'Avaliação de Imóveis',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
  },
  {
    title: 'Planejamento de Obras',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
  },
];

function Services() {
  return (
    <section id="servicos" className="services">
      <div className="services-container">

        <div className="services-header">
          <h2>Serviços Oferecidos</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-illustration">
                <span>Ilustração</span>
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;