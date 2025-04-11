import { FC } from "react";
import { CounterItemProps } from "../../../Store/types";
import { useDarkMode } from "../../../hooks/useDarkMode";
import useCounterItem from "../../../hooks/useCounterItem";
import useCounterAnimate from "../../../hooks/useCounterAnimate";

export const CounterItem: FC<CounterItemProps> = ({
  count,
  quantity,
  text,
}) => {
  const { isDarkMode } = useDarkMode();
  const { animate, sectionRef } = useCounterAnimate();
  const currentNumber = useCounterItem(count, animate);

  return (
    <article ref={sectionRef}>
      <h3 className="text__purple-dark text-4xl font-semibold mb-2">
        {currentNumber}
        {quantity}
        <span className="text-2xl align-top">+</span>
      </h3>
      <p className={`${isDarkMode ? "text-white/60" : "text-neutral-700"}`}>
        {text}
      </p>
    </article>
  );
};
