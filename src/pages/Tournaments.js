// src/pages/Tournaments.js
import React, { useState } from 'react';

const tournamentsData = [
  { name: "T20 Championship", date: "2024-10-15", format: "T20" },
  { name: "ODI Cup", date: "2024-11-01", format: "ODI" },
];

const Tournaments = () => {
  const [tournaments] = useState(tournamentsData);

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Upcoming Tournaments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tournaments.map((tournament, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-md">
              <h3 className="text-2xl font-bold">{tournament.name}</h3>
              <p className="mt-2">Date: {tournament.date}</p>
              <p>Format: {tournament.format}</p>
              <a href={`/tournament/${index}`} className="text-blue-500 mt-4 block">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tournaments;
