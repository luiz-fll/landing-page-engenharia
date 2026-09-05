import { useState } from 'react';
import '../stylesheets/Clients.css';

const testimonials = [
  {
    name: 'João da Silva',
    date: '12/08/2026',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  },
  {
    name: 'Maria Oliveira',
    date: '28/07/2026',
    rating: 4.5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ante dapibus diam.',
  },
  {
    name: 'Carlos Souza',
    date: '15/06/2026',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis sem at nibh elementum imperdiet.',
  },
  {
    name: 'Ana Martins',
    date: '03/05/2026',
    rating: 4.5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis ipsum. Praesent mauris.',
  },
];

function StarRating({ rating }) {
  return (
    <div className="star-rating" aria-label={`Avaliação: ${rating} de 5`}>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span className={rating === 4.5 ? 'half-star' : ''}>★</span>

      <strong>{rating.toFixed(1)}</strong>
    </div>
  );
}

function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previous = () => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const next = () => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section id="clientes" className="clients">
      <div className="clients-container">

        <div className="clients-header">
          <h2>O que nossos clientes dizem</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer nec odio. Praesent libero.
          </p>
        </div>

        <div className="carousel">

          <button
            className="carousel-button previous"
            onClick={previous}
            aria-label="Avaliação anterior"
          >
            &#10094;
          </button>

          <article className="testimonial-card">

            <div className="testimonial-header">

              <div className="profile-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-8a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 10c-5 0-8 2.5-8 6v2h16v-2c0-3.5-3-6-8-6zm-5.9 6c.5-2.3 2.6-4 5.9-4s5.4 1.7 5.9 4H6.1z" />
                </svg>
              </div>

              <div className="testimonial-info">
                <h3>{testimonial.name}</h3>
                <span>{testimonial.date}</span>
              </div>

            </div>

            <StarRating rating={testimonial.rating} />

            <p className="testimonial-text">
              "{testimonial.text}"
            </p>

          </article>

          <button
            className="carousel-button next"
            onClick={next}
            aria-label="Próxima avaliação"
          >
            &#10095;
          </button>

        </div>

        <div className="carousel-indicators">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              className={
                index === currentIndex
                  ? 'indicator active'
                  : 'indicator'
              }
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ver avaliação ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Clients;