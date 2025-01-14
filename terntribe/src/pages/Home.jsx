import React from 'react';
import Hero from '../components/Hero/Hero';
import Card from '../components/Card/Card';
import cause1 from '../assets/cause1.jpg';
import cause2 from '../assets/cause2.jpg';
import cause3 from '../assets/cause3.jpg';
import cause4 from '../assets/cause4.jpg';
import cause5 from '../assets/cause5.jpg';

const Home = () => {
  const causes = [
    { image: cause5, title: 'Education for All', description: 'Support universal education.' },
    { image: cause2, title: 'Clean Water', description: 'Provide clean water to communities.' },
    { image: cause4, title: 'Health Access', description: 'Ensure health services for everyone.' },
    { image: cause3, title: 'Environmental Protection', description: 'Protect our planet.' },
  ];

  return (
    <div>
      <Hero />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {causes.map((cause, index) => (
          <Card key={index} {...cause} />
        ))}
      </section>
    </div>
  );
};

export default Home;
