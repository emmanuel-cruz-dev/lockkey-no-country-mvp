import { Action, InitialStateType } from "./types";

export const reducer = (state: InitialStateType, action: Action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};
