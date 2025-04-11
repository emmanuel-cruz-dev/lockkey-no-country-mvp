import { GetAnimationClassesProps } from "../Store/types";

export const getAnimationClasses = ({
  animation,
  direction,
  delay = 0,
}: GetAnimationClassesProps): string => {
  const classes = ["animated", animation];

  if (animation === "slide" && direction) {
    classes.push(direction);
  }

  if (delay > 0) {
    classes.push(`delay-${delay}`);
  }

  return classes.join(" ");
};

export const isValidEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};
