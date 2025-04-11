import { FC, ReactNode, RefObject, useEffect, useRef } from "react";
import "./AnimationComponent.css";

export interface GetAnimationClassesProps {
  animation: string;
  direction?: string;
  delay?: number;
}

// funcion que trae las clases
const getAnimationClasses = ({
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

export interface UseAnimationProps {
  threshold?: number;
  animation: string;
}

type UseAnimationReturn = RefObject<HTMLDivElement | null>;

// el hook
const useAnimation = ({
  threshold = 0.1,
  animation,
}: UseAnimationProps): UseAnimationReturn => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(`${animation}-in`);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, animation]);

  return elementRef;
};

interface AnimatedComponentProps {
  children: ReactNode;
  threshold?: number;
  animation?: string;
  direction?: string;
  delay?: number;
}

// el componente
export const AnimatedComponent: FC<AnimatedComponentProps> = ({
  children,
  threshold = 0.1,
  animation = "fade",
  direction = "up",
  delay = 0,
}) => {
  const elementRef = useAnimation({ threshold, animation });

  return (
    <div
      ref={elementRef}
      className={getAnimationClasses({ animation, direction, delay })}
    >
      {children}
    </div>
  );
};

export default AnimatedComponent;
