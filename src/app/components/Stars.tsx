'use client';

import React, { useEffect, useState } from 'react';

export default function Stars() {
  let meteors = Array.from({ length: 50 }).map((_, index) => (
    <div
      key={index}
      className="meteor"
      style={{
        opacity: 0,
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100 - 20}vw`,
        animationDelay: `${Math.random() * 15}s`,
      }}
    />
  ));

  return <div className="w-full h-full absolute">{meteors}</div>;
}
