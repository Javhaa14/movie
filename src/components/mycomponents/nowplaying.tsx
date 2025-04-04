"use client";

import { CarouselItem } from "@/components/ui/carousel";
import { CiPlay1 } from "react-icons/ci";

interface propsType {
  title: string;
  rate: string;
  description: string;
  src: string;
  onclick: () => void;
  data: Array<any>;
  mode: boolean;
}

export const Nowplaying = ({
  mode,
  title,
  rate,
  description,
  src,
  onclick,
  data,
}: propsType) => {
  return (
    <CarouselItem
      onClick={onclick}
      className="w-full h-[510px] sm:h-[600px] flex justify-center overflow-hidden relative">
      <img
        id={`slde-1`}
        className="w-[375px] h-[246px] sm:w-[1440px] sm:h-[700px] absolute"
        src={`https://image.tmdb.org/t/p/original${src}`}></img>
      <div
        className={`flex flex-col p-5 w-[375px] min-h-[250px] items-start gap-4 absolute left-[15px] sm:left-[140px] top-[245px] sm:top-[150px] ${
          mode ? "text-[#09090B]" : " text-white"
        } sm:text-white sm:bg-[rgba(0,0,0,0.5)] rounded-xl`}>
        <div className="flex justify-between sm:justify-normal flex-row sm:flex-col items-start gap-0 w-full">
          <div className="flex h-[52px] sm:h-full overflow-hidden flex-col max-w-[252px] sm:max-w-[500px]">
            <p className="text-[14px] sm:text-[16px]">Now Playing:</p>
            <p className="text-[24px] sm:text-[36px] font-bold">{title}</p>
          </div>
          <div className="flex w-[83px] h-[48px] items-center gap-1">
            <div className="flex items-start gap-[10px] self-stretch pt-2">
              <img className="size-[28px]" src="star.svg"></img>
            </div>
            <div className="flex flex-row items-center justify-center">
              <p className="text-[18px] font-[600]">{rate}</p>
              <p className="text-[16px] text-[#71717A]">/10</p>
            </div>
          </div>
        </div>
        <p className="w-[310px] h-[100px] sm:h-full overflow-scroll text-[12px] font-[400]">
          {description}
        </p>
        <button className="flex w-fit h-[40px] py-2 px-4 justify-center items-center gap-2 rounded-md bg-[#F4F4F5]">
          <CiPlay1 className="size-4 text-[#18181B]" />
          <p className="text-[#18181B] text-[14px] font-[400]">Watch Trailer</p>
        </button>
      </div>
      <div className="inline-flex w-full items-center gap-2 absolute top-55 sm:top-140 justify-center">
        {data?.slice(0, 5).map((_, index) => {
          return (
            <a
              key={index}
              className="size-3 rounded-[50%] bg-[#808080] hover:bg-white"
              href="#slde-1"></a>
          );
        })}
      </div>
    </CarouselItem>
  );
};
