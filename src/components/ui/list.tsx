"use client";
import { FaArrowRight } from "react-icons/fa6";
import { Movie } from "./movie";
import { useEffect, useState } from "react";
import axios from "axios";
export const List = ({ type }: any) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
        },
      })
      .then((res) => setData(res.data.results));
  }, []);

  const moviedata = [
    {
      name: "Dear Santa",
      image: "movie1.png",
      rating: "6.9",
    },
    {
      name: "How To Train Your Dragon",
      image: "movie2.png",
      rating: "6.9",
    },
    {
      name: "Allen Romulus",
      image: "movie3.png",
      rating: "6.9",
    },
    {
      name: "From The Ashes",
      image: "movie4.png",
      rating: "6.9",
    },
    {
      name: "Space Dogg",
      image: "movie5.png",
      rating: "6.9",
    },
    {
      name: "The Order",
      image: "movie6.png",
      rating: "6.9",
    },
    {
      name: "Y2K",
      image: "movie7.png",
      rating: "6.9",
    },
    {
      name: "Solo Level",
      image: "movie8.png",
      rating: "6.9",
    },
    {
      name: "Get AWay",
      image: "movie9.png",
      rating: "6.9",
    },
    {
      name: "Sonic",
      image: "movie10.png",
      rating: "6.9",
    },
  ];
  return (
    <div className="flex w-full h-[978px] gap-[32px] px-[80px] pt-6 flex-col">
      <div className="flex w-full justify-between items-start">
        <p className="text-[#09090B] text-[24px]">{type}</p>
        <button className="flex h-[36px] px-4 py-2 justify-center items-center gap-2">
          <p className="text-[#09090B] text-[14px]">See more</p>
          <FaArrowRight className="size-[16px]" />
        </button>
      </div>
      <div className="w-full grid grid-cols-5 gap-8">
        {data?.slice(0, 10).map((value) => {
          return (
            <Movie
              key={value.title}
              name={value.title}
              image={`https://image.tmdb.org/t/p/w300${value.poster_path}`}
              rating={Math.floor(value.vote_average)}
            />
          );
        })}
      </div>
    </div>
  );
};
