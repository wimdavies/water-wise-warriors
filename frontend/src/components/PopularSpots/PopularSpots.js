import React from 'react';


const PopularSpots = () => {
  const spots = [
    { name: 'Lake Windermere', description: 'A beautiful lake in the Lake District.' },
    { name: 'Hampstead Heath Ponds', description: 'Popular swimming ponds in London.' },
    { name: 'Loch Lomond', description: 'A large freshwater loch in Scotland.' },
  ];

  return (
    <section id="spots" className="popular-spots">
      <div className="container">
        <h2>Popular Spots</h2>
        <div className="spots-list">
          {spots.map((spot, index) => (
            <div key={index} className="spot">
              <h3>{spot.name}</h3>
              <p>{spot.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSpots;
