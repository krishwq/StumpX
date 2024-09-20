// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-hero-pattern bg-cover h-screen flex items-center">
      <div className="text-center w-full">
        <h1 className="text-white text-5xl font-bold">Welcome to XYZ Cricket Tournaments</h1>
        <p className="text-white mt-4 text-xl">Join the best cricket action in various formats!</p>
        <a href="/tournaments" className="mt-6 px-6 py-2 bg-yellow-500 text-white rounded-full text-xl">View Upcoming Tournaments</a>
      </div>
    </section>
  );
};

export default Hero;
