"use client";
import axios from "axios";
import { useEffect, useState, useRef, ChangeEvent, use } from "react";
import { useDebounce } from "@uidotdev/usehooks";

import { useRouter } from "next/router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { WiNightClear } from "react-icons/wi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Searchmovie } from "@/components/ui/searchmovie";
import { Genres } from "@/components/ui/genres";
import { useMode } from "./modecontext";

export const Navigation = () => {
  const { mode, toggleMode } = useMode();
  const inputref = useRef("");

  const [data, setData] = useState([{}]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${debouncedInputvalue}&language=en-US&page=1`,
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
  //   const router = useRouter();
  // const goback=(()=>{
  //   router.push(``);
  // })
  const [inputvalue, setInputvalue] = useState("");
  const debouncedInputvalue = useDebounce(inputvalue, 500);
  const handleonchange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputvalue(event.target.value);
    // useDebounce(() => setInputvalue(event.target.value), 500);
  };
  console.log("rerendering", debouncedInputvalue);

  return (
    <div
      className={`flex w-[100%] h-[59px] py-6 px-[80px] justify-between items-center ${
        mode ? "bg-white text-red" : "bg-black text-white"
      }`}>
      <a
        href="http://localhost:3000/"
        className="flex items-center gap-2 w-[92px] h-[20px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none">
          <path
            d="M5.83366 2.1665V18.8332M14.167 2.1665V18.8332M1.66699 10.4998H18.3337M1.66699 6.33317H5.83366M1.66699 14.6665H5.83366M14.167 14.6665H18.3337M14.167 6.33317H18.3337M3.48366 2.1665H16.517C17.5203 2.1665 18.3337 2.97985 18.3337 3.98317V17.0165C18.3337 18.0198 17.5203 18.8332 16.517 18.8332H3.48366C2.48034 18.8332 1.66699 18.0198 1.66699 17.0165V3.98317C1.66699 2.97985 2.48034 2.1665 3.48366 2.1665Z"
            stroke="#4338CA"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-4 text-[#4338CA] font-extrabold font-italic">
          Movie Z
        </p>
      </a>
      <div className={`flex w-[488px] items-center gap-3`}>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`${
                  mode ? "bg-white text-red" : "bg-black text-white"
                }`}>
                Genre
              </NavigationMenuTrigger>
              <NavigationMenuContent
                className={`${
                  mode ? "bg-white text-black" : "bg-black text-white"
                }`}>
                <NavigationMenuLink
                  className={`flex w-[577px] p-5 flex-col items-start gap-0 rounded-[8px]${
                    mode ? "bg-white text-[#09090B]" : "bg-black text-white"
                  }`}>
                  <div className="flex w-[213px] flex-col items-start gap-1">
                    <p className="self-stretch text-6 font-semibold">Genres</p>
                    <p className="self-stretch text-4 font-normal">
                      See lists of movies by genre
                    </p>
                  </div>
                  <div className="flex w-[550px] py-4 flex-col items-start gap-[10px] self-stretch">
                    <div className="h-[1px] self-stretch border-[1px] solid border-[#E4E4E7]"></div>
                  </div>
                  <div className="flex items-start content-start gap-4 self-stretch flex-wrap">
                    {genre?.map((value: any) => {
                      return <Genres key={value.name} genre={value.name} />;
                    })}
                  </div>
                  {/* <button className="flex h-10 py-2 px-4 justify-center items-center gap-2 self-stretch rounded-[6px] bg-white"></button> */}
                </NavigationMenuLink>
                <NavigationMenuLink></NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div
          className={`flex w-[379px] py-0 px-3 items-center gap--[10px] rounded-2xl border-[1px] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${
            mode ? "bg-white text-red" : "bg-black text-white"
          }`}>
          <FaMagnifyingGlass className="opacity-[0.5]" />

          <Popover>
            <PopoverTrigger>
              <Input onChange={handleonchange}></Input>
            </PopoverTrigger>

            <PopoverContent className="flex w-[577px] h-fit p-3 flex-col items-start gap-0 rounded-lg border-[1px] solid border-[#E4E4E7] bg-white">
              {data?.slice(3, 8).map((value: any) => {
                return (
                  <Searchmovie
                    key={value.original_title}
                    src={`https://image.tmdb.org/t/p/original${value.poster_path}`}
                    title={value.debouncedInputvalue}
                    rate={(Math.round(value.vote_average * 10) / 10).toFixed(1)}
                    date={value.release_date?.slice(0, 4)}
                  />
                );
              })}
              <div className="flex h-10 py-2 px-4 justify-center items-center gap-2 rounded-md bg-white">
                <p className="text-[14px] font-medium">
                  See all results for {data[0]?.original_title}
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <button
        onClick={toggleMode}
        className={`flex justify-center items-center size-[36px] rounded-md border-[1px] solid border-[#E4E4E7] ${
          mode ? "bg-white" : "bg-black"
        } shadow-sm`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          className={`${mode ? "flex" : "hidden"}`}>
          <path
            d="M8 2.5C7.20435 3.29565 6.75736 4.37478 6.75736 5.5C6.75736 6.62522 7.20435 7.70435 8 8.5C8.79565 9.29565 9.87478 9.74264 11 9.74264C12.1252 9.74264 13.2044 9.29565 14 8.5C14 9.68669 13.6481 10.8467 12.9888 11.8334C12.3295 12.8201 11.3925 13.5892 10.2961 14.0433C9.19975 14.4974 7.99335 14.6162 6.82946 14.3847C5.66558 14.1532 4.59648 13.5818 3.75736 12.7426C2.91825 11.9035 2.3468 10.8344 2.11529 9.67054C1.88378 8.50666 2.0026 7.30026 2.45673 6.2039C2.91085 5.10754 3.67989 4.17047 4.66658 3.51118C5.65328 2.85189 6.81331 2.5 8 2.5Z"
            stroke="#18181B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <MdSunny
          className={`${mode ? "hidden text-black" : "flex text-white"}`}
        />
      </button>
    </div>
  );
};
