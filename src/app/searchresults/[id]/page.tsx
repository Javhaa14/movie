"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Genres } from "@/components/ui/genres";
import { Searchmovie } from "@/components/ui/searchmovie";
import { useSearchParams } from "next/navigation";
import { Movie } from "@/components/ui/movie";
import { useMode } from "@/app/modecontext";

export default function Searchresults({
  params: { id },
}: {
  params: { id: string };
}) {
  const [data, setData] = useState([{}]);
  const params = useParams();
  const { mode, toggleMode } = useMode();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${id}&language=en-US&page=1`,
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
  const router = useRouter();

  const handletodetail = (id: string) => {
    router.push(`/detail/${id}`);
  };
  return (
    <div
      className={`flex flex-col gap-[74px] w-fit h-fit ${
        mode ? "text-[#09090B] bg-white" : "text-[#FFF] bg-black"
      }`}>
      <div className="flex w-full h-fit px-[80px] flex-col items-start gap-8 self-stretch ">
        <p className="self-stretch text-[30px] font-semibold ">
          Search results
        </p>
        <div className="flex flex-row h-fit items-start gap-7">
          <div className="flex w-[804px] flex-col items-start gap-8">
            <div className="flex flex-col items-start gap-8">
              <p className="text-[20px] font-semibold">
                {data.length} results for "{id}"
              </p>
            </div>
            <div className="grid grid-cols-4 w-fit h-fit items-center gap-8 self-stretch">
              {data.map((value) => {
                return (
                  <Movie
                    className={`w-[165px] h-[331px] ${
                      mode
                        ? "text-[#09090B] bg-[#F4F4F5]"
                        : "text-[#FFF] bg-[#222222]"
                    }`}
                    onclick={() => {
                      handletodetail(value.id);
                    }}
                    key={value}
                    name={value.title}
                    image={`https://image.tmdb.org/t/p/original${value.poster_path}`}
                    rating={(Math.round(value.vote_average * 10) / 10).toFixed(
                      1
                    )}
                  />
                );
              })}
            </div>
            <div className="flex flex-col items-end gap-[10px] self-stretch"></div>
          </div>
          <div className="h-[826px] self-stretch border-[1px] solid border-[#E4E4E7]"></div>
          <div className="flex w-[387px] flex-col items-start gap-5">
            <div className="flex w-[213px] flex-col items-start gap-1">
              <h3 className="text-[24px] font-semibold">Search by genre</h3>
              <p className="text-[16px]">See lists of movies by genre</p>
            </div>
            <div className="flex items-start content-start gap-4 self-stretch flex-wrap">
              {genre?.map((value: any) => {
                return <Genres key={value.name} genre={value.name} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
