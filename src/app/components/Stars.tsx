'use client';º

import { useEffect, useState } from 'react';

export default function Stars() {
  const [meteors, setMeteors] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const newMeteors = Array.from({ length: 10 }).map((_, index) => (
      <div
        key={index}
        className="meteor"
        style={{
          opacity: 0,
          top: `${Math.random() * 70}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ));
    setMeteors(newMeteors);
  }, []);

  return <div className="w-full h-full absolute">{meteors}</div>;
}
