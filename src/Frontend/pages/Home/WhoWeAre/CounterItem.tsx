import { FC } from "react";
import { CounterItemProps } from "../../../Store/types";
import { useDarkMode } from "../../../hooks/useDarkMode";

export const CounterItem: FC<CounterItemProps> = ({ count, text }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div>
      <h3 className="text__purple-dark text-4xl font-semibold mb-2">
        {count}
        <span className="text-2xl align-top">+</span>
      </h3>
      <p className={`${isDarkMode ? "text-white/60" : "text-neutral-700"}`}>
        {text}
      </p>
    </div>
  );
};
