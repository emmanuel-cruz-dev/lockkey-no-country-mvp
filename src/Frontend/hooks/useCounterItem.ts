import { useEffect, useState } from "react";

const useCounterItem = (number: number, animate: boolean) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    if (!animate) return;

    let start = 0;
    const duration = 1600;
    const increment = number / (duration / 18);

    const animateCounter = () => {
      start += increment;
      if (start < number) {
        setCurrentNumber(Math.floor(start));
        requestAnimationFrame(animateCounter);
      } else {
        setCurrentNumber(number);
      }
    };

    animateCounter();
  }, [number, animate]);

  return currentNumber;
};

export default useCounterItem;
