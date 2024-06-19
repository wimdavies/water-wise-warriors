import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: 'John Doe', quote: 'An amazing app for finding new spots to swim!' },
    { name: 'Jane Smith', quote: 'I love the community aspect of this app.' },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p>"{testimonial.quote}"</p>
              <h4>- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
