import React from 'react';
import Navbar from '../components/Navbar';

const service = () => {
  return (
    <>
      <Navbar />
      <h3>This is service pagfe</h3>
      <style jsx>{`
        h3 {
          color: white;
          background: black;
        }
      `}</style>
    </>
  );
};

export default service;
