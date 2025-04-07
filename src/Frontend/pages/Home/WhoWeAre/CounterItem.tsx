import { FC } from "react";
import { CounterItemProps } from "../../../Store/types";

export const CounterItem: FC<CounterItemProps> = ({ count, text }) => {
  return (
    <div>
      <h3 className="text__purple-dark text-4xl font-semibold mb-2">
        {count}
        <span className="text-2xl align-top">+</span>
      </h3>
      <p>{text}</p>
    </div>
  );
};
