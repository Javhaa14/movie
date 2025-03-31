"use client";
import axios from "axios";
import { useEffect, useState, useRef, ChangeEvent, use } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";
import { Genres } from "@/components/ui/genres";
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
import { Autocomplete } from "@/components/autocomplete";
import { Input } from "@/components/ui/input";
import { MdSunny } from "react-icons/md";
import { Searchmovie } from "@/components/ui/searchmovie";
import { useMode } from "./modecontext";
import { axiosInstance } from "@/lib/utils";

export const Navigation = () => {
  const { mode, toggleMode } = useMode();

  const [data, setData] = useState([{}]);
  const [inputvalue, setInputvalue] = useState("");
  const debouncedInputvalue = useDebounce(inputvalue, 200);
  const handleonchange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputvalue(event.target.value);
  };
  console.log("rerendering", debouncedInputvalue);

  useEffect(() => {
    axiosInstance
      .get(`search/movie?query=${debouncedInputvalue}&language=en-US&page=1`)
      .then((res) => setData(res.data.results));
  }, [debouncedInputvalue]);
  console.log(data, "hi");

  const [genre, setGenre] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`genre/movie/list?language=en`)
      .then((res) => setGenre(res.data.genres));
  }, []);
  const router = useRouter();
  const handletosearchresults = (id: string) => {
    router.push(`/searchresults/${id}`);
    setInputvalue("");
  };

  const handletodetail = (id: string) => {
    router.push(`/detail/${id}`);
    setInputvalue("");
  };
  const handletomore = (id: string) => {
    router.push(`/morelikethis/${id}`);
    setInputvalue("");
  };
  type OptionType = {
    value: string;
    label: string;
  };

  interface AutocompleteProps {
    options: OptionType[];
  }

  const handletosearchfilter = (id: string) => {
    router.push(`/searchfilter/${id}`);
    setInputvalue("");
  };

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
                } flex w-[577px] p-5 flex-col items-start gap-0 rounded-[8px]${
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
                    return (
                      <Genres
                        key={value.name}
                        genre={value.name}
                        onClick={() => {
                          handletosearchfilter(value.id);
                        }}
                      />
                    );
                  })}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Input mode={mode} change={handleonchange}></Input>
        <div
          className={`flex w-[577px] p-3 h-fit gap-100px flex-col items-start gap-0 rounded-lg border-[1px] solid border-[#E4E4E7] absolute left-[34vw] top-[5vh] z-30 ${
            mode ? "bg-white" : "bg-black"
          } ${inputvalue !== "" ? "flex" : "hidden"}`}>
          {data?.slice(0, 5).map((value) => {
            return (
              <Searchmovie
                onclick={() => {
                  handletodetail(value.id);
                }}
                seemore={() => {
                  handletomore(value.id);
                }}
                mode={mode}
                key={value}
                title={value.title}
                src={`https://image.tmdb.org/t/p/original${value.poster_path}`}
                rate={(Math.round(value.vote_average * 10) / 10).toFixed(1)}
                date={value.release_date}
              />
            );
          })}
          <button
            onClick={() => {
              handletosearchresults(debouncedInputvalue);
            }}
            className={`${
              data.length == 0 ? "hidden" : "flex"
            } w-full h-10 px-4 py-2 justify-start items-center gap-2 rounded-md`}>
            <p className="text-[14px] font-medium">
              See all results for "{debouncedInputvalue}"
            </p>
          </button>
          <div
            className={`${
              data.length == 0 ? "flex" : "hidden"
            } w-[577px] h-[95px] pt-6 pb-4 px-5 rounded-lg `}>
            <div className="flex w-full h-full justify-center items-center">
              <p className="text-[14px] font-medium">No results found.</p>
            </div>
          </div>
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
