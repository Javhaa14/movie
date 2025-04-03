"use client";
import { Suspense, useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { List } from "@/components/mycomponents/list";
import { Nowplaying } from "@/components/mycomponents/nowplaying";
import { useMode } from "./modecontext";
import { Pageskel } from "@/components/mycomponents/skeleton/pageskel";
import { axiosInstance } from "@/lib/utils";

interface Movie {
  id: string;
  backdrop_path: string;
  original_title: string;
  vote_average: number;
  overview: string;
}

export default function Home() {
  const { mode, toggleMode } = useMode();

  const [data, setData] = useState<Movie[] | undefined>(undefined);

  useEffect(() => {
    axiosInstance
      .get(
        `movie/now_playing?&api_key=d67d8bebd0f4ff345f6505c99e9d0289&language=en-US&page=1`
      )
      .then((res) => setData(res.data.results));
  }, []);

  const sectiondata = [
    { name: "Upcoming", path: "upcoming" },
    { name: "Popular", path: "popular" },
    { name: "Top rated", path: "top_rated" },
  ];

  const router = useRouter();

  const handleon = (id: string) => {
    router.push(`/detail/${id}`);
  };

  const handletomore = (id: string) => {
    router.push(`/morelikethis/${id}`);
  };

  if (!data || !sectiondata) {
    return <Pageskel />;
  }

  return (
    <Suspense fallback={<Pageskel />}>
      <div
        className={`flex flex-col w-screen h-fit mt-6 mb-[71px] gap-[73px] ${
          mode ? "bg-white" : "bg-black"
        }`}>
        <section className="flex flex-col w-full h-[600px] gap-6">
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full h-[600px]">
            <CarouselContent>
              {data?.slice(0, 5).map((value: Movie, index: number) => {
                return (
                  <Nowplaying
                    data={data}
                    onclick={() => {
                      handleon(value.id);
                      console.log(value.id);
                    }}
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
        {sectiondata?.map((value) => {
          return (
            <List
              seemore={handletomore}
              className={`${
                mode ? "bg-white text-[#09090B]" : "bg-black text-white"
              }`}
              key={value.name}
              type={value.path}
              name={value.name}
            />
          );
        })}
      </div>
    </Suspense>
  );
}
