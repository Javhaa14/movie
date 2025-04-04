"use client";
import { FaArrowRight } from "react-icons/fa6";
import { Movie } from "./movie";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useMode } from "@/app/modecontext";

export const List = ({ type, name, className, seemore }: any) => {
  const [data, setData] = useState([{}]);
  const { mode, toggleMode } = useMode();

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
        },
      })
      .then((res) => setData(res.data.results));
  }, []);
  const router = useRouter();

  const handleonclick = (id: string) => {
    router.push(`/detail/${id}`);
  };
  return (
    <div
      className={`flex w-full h-fit gap-[32px] px-[20px] sm:px-[80px] pt-6 flex-col ${className}`}>
      <div
        className={`flex w-[335px] sm:w-full justify-between items-start${className}`}>
        <p className="text-[24px]">{name}</p>
        <button
          onClick={() => seemore(type)}
          className="flex h-[36px] px-4 py-2 justify-center items-center gap-2">
          <p className="text-[14px]">See more</p>
          <FaArrowRight className="size-[16px]" />
        </button>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8">
        {data?.slice(0, 10).map((value: any) => {
          return (
            <Movie
              cla={`w-[157px] sm:w-[230px] min-h-[233px] sm:min-h-[340px]`}
              na={`h-[60px] sm:h-[214px]`}
              className={`w-[158px] sm:w-[230px] h-[309px] sm:h-[439px] ${
                mode
                  ? "text-[#09090B] bg-[#F4F4F5]"
                  : "text-[#FFF] bg-[#222222]"
              }`}
              onclick={() => {
                handleonclick(value.id);
              }}
              key={value.id}
              name={value.title}
              image={`https://image.tmdb.org/t/p/original${value.poster_path}`}
              rating={(Math.round(value.vote_average * 10) / 10).toFixed(1)}
            />
          );
        })}
      </div>
    </div>
  );
};
