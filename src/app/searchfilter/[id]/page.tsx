"use client";
import { useEffect, useState } from "react";
import { Navigation } from "@/app/navigation";
import axios from "axios";
import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
import { Genres } from "@/components/ui/genres";
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

export default function Searchfilter() {
  const [data, setData] = useState([{}]);

  //   useEffect(() => {
  //     axios
  //       .get(
  //         `https://api.themoviedb.org/3/movie/now_playing?&api_key=d67d8bebd0f4ff345f6505c99e9d0289language=en-US&page=1`,
  //         {
  //           method: "GET",
  //           headers: {
  //             accept: "application/json",
  //             Authorization:
  //               "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
  //           },
  //         }
  //       )
  //       .then((res) => setData(res.data.results));
  //   }, []);
  //   const sectiondata = [
  //     { name: "Upcoming", path: "upcoming" },
  //     { name: "Popular", path: "popular" },
  //     { name: "Top rated", path: "top_rated" },
  //   ];
  //   const [mode, setMode] = useState(true);
  //   const handleonclick = () => {
  //     setMode(!mode);
  //   };
  //   const router = useRouter();

  //   const handleon = (id: string) => {
  //     router.push(`/detail/${id}`);
  //   };
  //   const handle = (id: string) => {
  //     router.push(`/morelikethis/${id}`);
  //   };
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?language=en`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
        },
      })
      .then((res) => setGenre(res.data.genres));
  }, []);
  return (
    <div className={`flex flex-col w-[1440px] h-fit gap-8 `}>
      <div className="flex w-[1280px] flex-col items-start gap-8 self-stretch text-[#09090B]">
        <p className="self-stretch text-[30px] font-semibold ">Search filter</p>
        <div className="flex flex-row items-start gap-1">
          <div className="flex w-[387px] flex-col items-start gap-5">
            <div className="flex w-[213px] flex-col items-center gap-1">
              <p className="text-[24px] font-semibold">Genres</p>
              <p className="text-[16px] font-normal">
                See lists of movies by genre
              </p>
            </div>
            <div className="flex w-full items-start content-start gap-4 flex-wrap">
              {genre?.map((value: any) => {
                return <Genres key={value.name} genre={value.name} />;
              })}
            </div>
          </div>
          <div className="flex w-[1189px] rotate-90 px-0 py-4 flex-col items-start gap-[10px]">
            <div className="h-[1px] self-stretch border-[1px] solid border-[#E4E4E7]"></div>
          </div>
          <div className="flex w-[806px] flex-col items-start gap-8">
            <div className="flex flex-col items-start gap-8">
                <p className="text-[20px] font-semibold">81 titles in “Animation”</p>
            </div>
            <div className="flex flex-col items-start gap-8 self-stretch"></div>
            <div className="flex flex-col items-end gap-[10px] self-stretch"></div>
          </div>
        </div>
      </div>
    </div>s
  );
}
