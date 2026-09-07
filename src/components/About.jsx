import '../stylesheets/About.css';
import CheckMarkIcon from './icons/CheckMarkIcon';
import PillarsIcon from './icons/PillarsIcon';
import StarIcon from './icons/StarIcon';

const highlights = [
  {
    title: 'Experiência',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: ( <PillarsIcon /> ),
  },
  {
    title: 'Qualidade',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: ( <StarIcon /> ),
  },
  {
    title: 'Compromisso',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: ( <CheckMarkIcon /> ),
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