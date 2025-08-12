import React, { useEffect, useState } from 'react';

const Confetti = ({ x, y }: { x: number; y: number }) => {
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const isSerpentine = Math.random() > 0.5;

    let particleStyle = {};

    if (isSerpentine) {
      const width = Math.random() * 15 + 5;
      const height = Math.random() * 5 + 2;
      particleStyle = {
        width: `${width}px`,
        height: `${height}px`,
        animation: 'sway-fall 1.5s linear forwards',
      };
    } else {
      const size = Math.random() * 10 + 5;
      particleStyle = {
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        animation: 'fall 1s linear forwards',
      };
    }

    setStyle({
      left: `${x}px`,
      top: `${y}px`,
      backgroundColor: randomColor,
      position: 'absolute',
      pointerEvents: 'none',
      zIndex: 9999,
      ...particleStyle,
    });

    const timer = setTimeout(() => {
      // The element will be removed by the parent component
    }, 1500);

    return () => clearTimeout(timer);
  }, [x, y]);

  return <div style={style} />;
};

export default Confetti;