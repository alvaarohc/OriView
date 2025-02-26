'use client';

import { IconDog } from '@tabler/icons-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Stars() {
  const [meteors, setMeteors] = useState<React.JSX.Element[]>([]);

  useEffect(() => {
    const newMeteors = Array.from({ length: 15 }).map((_, index) => (
      <div
        key={index}
        className="meteor"
        style={{
          opacity: 0,
          top: `${Math.random() * -150 + 50}px`,
          left: `${Math.random() * 100 - 10}%`,
          animationDelay: `${Math.random() * 10}s`,
          width: `${Math.random() * 6 + 1}px`,
          height: `${Math.random() * 150 + 50}px`,
        }}
      />
    ));
    setMeteors(newMeteors);
  }, []);

  return <div className="w-full h-full absolute">{meteors}</div>;
}
