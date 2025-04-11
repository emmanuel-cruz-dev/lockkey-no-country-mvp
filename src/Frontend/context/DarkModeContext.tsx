import { createContext } from "react";
import { DarkModeContextProps } from "../Store/types";

export const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined
);
