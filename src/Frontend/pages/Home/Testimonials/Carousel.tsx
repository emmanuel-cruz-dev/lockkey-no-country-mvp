import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MdStar } from "react-icons/md";
import "swiper/swiper-bundle.css";
import "./Carousel.css";
import { FC } from "react";
import { CarouselProps } from "../../../Store/types";

export const Carousel: FC<CarouselProps> = ({ testimonials }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000 }}
        loop
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide
            key={testimonial.id}
            className="flex items-center text-center justify-center"
          >
            <div className="flex justify-center text-3xl mb-3 text__accent-purple">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </div>
            <p className="md:text-2xl font-semibold w-5/6 mx-auto mb-4">
              "{testimonial.review}"
            </p>
            <figure className="max-w-20 shadow-lg shadow-black/30 rounded-full overflow-hidden mx-auto mb-4">
              <img
                className="w-full h-full object-cover"
                src={testimonial.img}
                alt={`Imagen de ${testimonial.name}`}
                width={370}
                height={370}
                loading="lazy"
              />
            </figure>
            <div>
              <h3 className="font-bold text-xl">{testimonial.name}</h3>
              <h4 className="mb-10 text-neutral-700">{testimonial.position}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
