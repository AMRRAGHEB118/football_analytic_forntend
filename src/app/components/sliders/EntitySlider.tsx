'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import Image from 'next/image';
import { useState } from "react";
import PrevArrow from "./PrevArrow";
import { useRouter } from "next/navigation";



type props = {
  data: Array<any>,
  type: "team" | "player"
};

const ESlider = ({ data, type }: props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const router = useRouter();

  const handleClick = (id: string) => {
    if (type === "team") {
      router.push(`/leagues/league/teams/${id}`);
    } else if (type === "player") {
      router.push(`/leagues/league/teams/team/players/${id}`);
    }
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 7,
    speed: 500,
    focusOnSelect: true,
    draggable: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (currentSlide: number) => setActiveIndex(currentSlide),
  };

  const handleActiveStyle = (index: number) => (
    index === activeIndex
      ? "justify-center items-center scale-125 my-auto"
      : "justify-center items-center my-auto brightness-50"
  );

  return (
    <div className={`slider-container h-[175px]  sm:w-[1100px] m-auto`}>
      <Slider {...settings} className="flex items-center h-[175px]">
        {data.map((e: any, idx) => (
          <div key={type === 'player' ? e.id : e._id} className={`${handleActiveStyle(idx)} flex flex-col h-[160px] transition duration-500 mt-10 cursor-pointer`}
            onClick={() => {
              if (activeIndex === idx) handleClick(type === 'player' ? e.id : e._id)
            }}>
            <Image
              src={e.image}
              alt="picture"
              height={88}
              width={88}
              className={`rounded-full ${type === 'player' && 'bg-secondary-200'} ${activeIndex === idx && 'scale-110'} h-[88px] w-[88px] object-contain m-auto cursor-pointer transition duration-500`}
            />
            <h5 className="text-white/80 text-center text-sm mt-4">{e.name}</h5>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ESlider;
