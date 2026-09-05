import '../stylesheets/About.css';

const highlights = [
  {
    title: 'Experiência',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2L3 7v2h18V7l-9-5zm-7 9v8H3v2h18v-2h-2v-8h-2v8h-2v-8h-2v8h-2v-8H5zm-2 11h18v2H3v-2z" />
      </svg>
    ),
  },
  {
    title: 'Qualidade',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l2.2 6.6H21l-5.5 4.1 2.1 6.6L12 15.2 6.4 19.3l2.1-6.6L3 8.6h6.8L12 2zm0 4.8L10.7 11H7.6l2.5 1.9-.9 3 2.8-2 2.8 2-.9-3 2.5-1.9h-3.1L12 6.8z" />
      </svg>
    ),
  },
  {
    title: 'Compromisso',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm-1.1 15.1l-4-4 1.4-1.4 2.6 2.6 5.7-5.7L18 10l-7.1 7.1z" />
      </svg>
    ),
  },
];

function About() {
  return (
    <section id="sobre" className="about">
      <div className="about-container">

        <div className="about-main">
          <div className="about-content">
            <h2>Sobre Nós</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer nec odio. Praesent libero. Sed cursus ante dapibus
              diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </p>

            <p>
              Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
              augue semper porta. Mauris massa. Vestibulum lacinia arcu
              eget nulla. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra.
            </p>
          </div>

          <div className="about-image">
            <span>Foto da empresa ou obra</span>
          </div>
        </div>

        <div className="about-highlights">
          {highlights.map((item) => (
            <article className="highlight" key={item.title}>
              <div className="highlight-icon">
                {item.icon}
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;