import { CaretCircleLeft, CaretCircleRight } from "phosphor-react";
import { useState } from "react";

export const Slider = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translate, setTranslate] = useState(0);

  const nextSlide = () => {
    if (activeIndex === slides.length - 1 || activeIndex > slides.length - 1) {
      setActiveIndex(0);
      setTranslate(0);
      return;
    }

    setActiveIndex(activeIndex + 1);
    setTranslate((activeIndex + 1) * 750);
  };

  const prevSlide = () => {
    if (activeIndex >= slides.length - 1) {
      setActiveIndex(0);
      setTranslate(0);
      return;
    }
    if (activeIndex === 0) {
      setActiveIndex(slides.length - 1);
      setTranslate((slides.length - 1) * 750);
      return;
    }

    setActiveIndex(activeIndex + 1);
    setTranslate((activeIndex + 1) * 750);
  };

  return (
    <div className="flex items-center h-[680px] w-[750px] rounded-xl overflow-hidden relative">
      <CaretCircleLeft
        size={32}
        weight="fill"
        color="#17181f"
        onClick={prevSlide}
        className={`absolute cursor-pointer -left-0 z-10`}
      />
      <div
        className={`flex items-center h-full w-full -translate-x-[${translate}px] transition-transform duration-700`}
      >
        {slides.map((image, i) => {
          return (
            <img
              key={image + i}
              src={image}
              alt={image}
              className="min-w-[750px]"
            />
          );
        })}
      </div>
      <CaretCircleRight
        size={32}
        weight="fill"
        color="#17181f"
        onClick={nextSlide}
        className={`absolute cursor-pointer right-0 z-10`}
      />
    </div>
  );
};
