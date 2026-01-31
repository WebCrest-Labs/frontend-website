import { useEffect, useState } from 'react';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - prevScrollY) < 5) {
        // Ignore small scroll changes to prevent jitter
        ticking = false;
        return;
      }

      if (scrollY > prevScrollY && scrollY > 80) {
        // Scrolling down and past threshold
        setScrollDirection('down');
      } else if (scrollY < prevScrollY) {
        // Scrolling up
        setScrollDirection('up');
      }

      setPrevScrollY(scrollY);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [prevScrollY]);

  return scrollDirection;
};

export default useScrollDirection;
