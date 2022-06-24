import classNames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  const activeCursor = useSelector((state) => state.cursor.active);

  return (
    <motion.div
      variants={variants}
      animate="default"
      className={classNames({
        'sm:h-5 sm:w-5 rounded-full mix-blend-difference bg-white pointer-events-none top-0 fixed sm:visible z-40':
          activeCursor,
      })}
    />
  );
};

export default Cursor;
