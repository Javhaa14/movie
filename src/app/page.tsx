"use client";
import { useEffect, useState } from "react";
import { Navigation } from "@/app/navigation";
import axios from "axios";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { List } from "@/components/ui/list";

import { Nowplaying } from "@/components/ui/nowplaying";

import { Footer } from "@/app/footer";

export default function Home() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?&api_key=d67d8bebd0f4ff345f6505c99e9d0289language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
          },
        }
      )
      .then((res) => setData(res.data.results));
  }, []);
  const sectiondata = [
    { name: "Upcoming", path: "upcoming" },
    { name: "Popular", path: "popular" },
    { name: "Top rated", path: "top_rated" },
  ];
  const [mode, setMode] = useState(true);
  const handleonclick = () => {
    setMode(!mode);
  };
  return (
    <div
      className={`flex flex-col w-screen h-screen gap-[74px] ${
        mode ? "bg-white" : "bg-black"
      }`}>
      <section className="flex flex-col w-full h-[600px] gap-6">
        <Navigation mode={mode} handleonclick={handleonclick} />
        <Carousel className="w-full h-[600px] ">
          <CarouselContent>
            {data?.slice(0, 3).map((value: any, index: any) => {
              return (
                <Nowplaying
                  key={index}
                  src={value.backdrop_path}
                  title={value.original_title}
                  rate={(Math.round(value.vote_average * 10) / 10).toFixed(1)}
                  description={value.overview}
                />
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="ml-[100px] mt-[50px]" />
          <CarouselNext className="mr-[100px] mt-[50px]" />
        </Carousel>
      </section>
      {sectiondata.map((value) => {
        return (
          <List
            className={`${
              mode ? "bg-white text-[#09090B]" : "bg-black text-white"
            }`}
            key={value.name}
            type={value.path}
            name={value.name}
          />
        );
      })}
      <Footer />
    </div>
  );
}
