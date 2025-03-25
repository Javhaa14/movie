"use client";
import { useEffect, useState } from "react";
import { Navigation } from "@/app/navigation";
import axios from "axios";
import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";

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

export default function Searchresults() {
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
  return (
    <div
      className={`flex flex-col w-screen h-screen gap-[74px] overflow-hidden`}>
      <Navigation />
      <div className="flex w-full h-[894px] px-[80px] flex-col items-start gap-8 self-stretch text-[#09090B]">
        <p className="self-stretch text-[30px] font-semibold ">
          Search results
        </p>
        <div className="flex flex-row items-start gap-7">
          <div className="flex w-[804px] flex-col items-start gap-8"></div>
          <div className="flex w-[826px] rotate-90 px-0 py-4 flex-col items-start gap-[10px]"></div>
          <div className="flex w-[387px] flex-col items-start gap-5"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
