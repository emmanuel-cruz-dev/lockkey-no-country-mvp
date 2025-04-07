export interface HeaderNavBarProps {
  handleClick: () => void;
}

export interface FeatureCardProps {
  img: string;
  title: string;
  paragraph: string;
}

export interface CounterItemProps {
  count: string;
  text: string;
}

export interface ShieldItemProps {
  title: string;
  text: string;
}

export interface PricingCardProps {
  category: string;
  img: string;
  price: number;
  list: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  img: string;
  review: string;
}

export interface CarouselProps {
  testimonials: Testimonial[];
}

export interface SocialIconsProps {
  borderRadius: boolean;
  linkedin?: string;
  github?: string;
  portfolio?: string;
}

export interface ServicesCardProps {
  title: string;
  img: string;
  paragraph: string;
}

export interface TeamCardProps {
  img: string;
  name: string;
  occupation: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface AccordionProps {
  id: number;
  title: string;
  content: string;
}
