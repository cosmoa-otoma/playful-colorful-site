
import React from 'react';

// Fictional data for the testimonials
const testimonials = [
  {
    name: 'Elara Vance',
    quote: 'The Aura Pulse doesn\'t just play music; it translates emotions into soundwaves. A truly transcendent experience.',
    imageUrl: 'https://i.imgur.com/gphG35E.jpg',
  },
  {
    name: 'Jaxon Reed',
    quote: 'My CHRONOS watch doesn\'t tell time, it bends it. I\'ve never been so punctually ahead of schedule.',
    imageUrl: 'https://i.imgur.com/kQsoQp8.jpg',
  },
  {
    name: 'Lyra Silvers',
    quote: 'Using the NOVA-BOOK is like writing on starlight. My code has never been more elegant or inspired.',
    imageUrl: 'https://i.imgur.com/f9Yk7n6.jpg',
  },
  {
    name: 'Kaelen Moore',
    quote: 'The NEXUS console isn\'t a game machine, it\'s a portal to other realities. I forgot I had a \'real\' life.',
    imageUrl: 'https://i.imgur.com/9nFw61N.jpg',
  },
  {
    name: 'Seraphina Cruz',
    quote: 'VORTEX VR makes my waking life look low-res. Reality is just a suggestion now, and I\'m not subscribed.',
    imageUrl: 'https://i.imgur.com/fScJ29T.jpg',
  },
  {
    name: 'Orion Blackwood',
    quote: 'The SONOSCAPE speaker doesn\'t fill a room with sound, it builds new architecture from it. My apartment feels bigger.',
    imageUrl: 'https://i.imgur.com/R3Obd40.jpg',
  },
];

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0], style?: React.CSSProperties }> = ({ testimonial, style }) => {
  return (
    <div
      className="bg-[#f2f2f2] rounded-lg p-6 shadow-xl flex-shrink-0 w-80 sm:w-96 animate-on-load"
      style={style}
    >
      <div className="flex items-start space-x-4">
        <img
          src={testimonial.imageUrl}
          alt={`Profile of ${testimonial.name}`}
          className="w-16 h-16 rounded-full object-cover flex-shrink-0"
        />
        <div>
          <blockquote className="text-gray-800">
            <p>"{testimonial.quote}"</p>
          </blockquote>
          <cite className="block text-right mt-4 not-italic font-semibold text-gray-700">
            - <em>{testimonial.name}</em>
          </cite>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold text-center mb-2 animate-on-load text-black" style={{ animationDelay: '100ms' }}>
        Whispers from the Void
      </h2>
      <p className="text-center text-gray-500 mb-8 animate-on-load" style={{ animationDelay: '200ms' }}>
        Hear what pioneers are saying on the other side.
      </p>
      <div className="flex space-x-6 overflow-x-auto pb-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={index} 
            testimonial={testimonial}
            style={{ animationDelay: `${300 + index * 100}ms` }}
          />
        ))}
      </div>
       <style>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        .overflow-x-auto {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
