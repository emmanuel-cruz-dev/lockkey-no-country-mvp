import { useState } from "react";

export const useActiveIndex = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return { activeIndex, toggleSection };
};
