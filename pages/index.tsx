import React from 'react';
import strank from './strank.png';

const Index = () => (
  <div
    className="w-screen h-screen bg-black"
    style={{
      background: `url('${strank.src}') no-repeat center`,
      backgroundSize: 'cover',
    }}
  />
);

export default Index;
