"use client";
import { FaArrowRight } from "react-icons/fa6";
import { Movie } from "./movie";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export const List = ({ type, name, className }: any) => {
  const [data, setData] = useState([{}]);

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
      className={`flex w-full h-[978px] gap-[32px] px-[80px] pt-6 flex-col ${className}`}>
      <div className={`flex w-full justify-between items-start${className}`}>
        <p className="text-[24px]">{name}</p>
        <button className="flex h-[36px] px-4 py-2 justify-center items-center gap-2">
          <p className="text-[14px]">More Like This</p>
          <p className="text-[14px]">See more</p>
          <FaArrowRight className="size-[16px]" />
        </button>
      </div>
      <div className="w-full grid grid-cols-5 gap-8">
        {data?.slice(0, 10).map((value: any) => {
          return (
            <Movie
              className={"w-[229px] h-[439px]"}
              onclick={() => {
                handleonclick(value.id);
              }}
              key={value.title}
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
