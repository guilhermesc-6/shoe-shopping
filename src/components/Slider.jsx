import { shoes } from "../data/data";

import { CaretCircleLeft, CaretCircleRight } from "phosphor-react";
import { useState } from "react";

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translate, setTranslate] = useState(0);

  const nextSlide = () => {
    if (
      activeIndex === shoes[0].images.length - 1 ||
      activeIndex > shoes[0].images.length - 1
    ) {
      setActiveIndex(0);
      setTranslate(0);
      return;
    }

    setActiveIndex(activeIndex + 1);
    setTranslate((activeIndex + 1) * 750);
  };

  const prevSlide = () => {
    if (activeIndex >= shoes[0].images.length - 1) {
      setActiveIndex(0);
      setTranslate(0);
      return;
    }
    if (activeIndex === 0) {
      setActiveIndex(shoes[0].images.length - 1);
      setTranslate((shoes[0].images.length - 1) * 750);
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
        className={`flex items-center h-full w-[750px] -translate-x-[${translate}px]`}
      >
        {shoes[0].images.map((image, i) => {
          return <img src={image} alt="" className="w-[750px]" />;
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
