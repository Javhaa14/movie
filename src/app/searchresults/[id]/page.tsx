"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Movie } from "@/components/ui/movie";
import { Autocomplete } from "@/components/autocomplete";
import { useMode } from "@/app/modecontext";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { axiosInstance } from "@/lib/utils";
export default function Searchresults({
  params: { id },
}: {
  params: { id: string };
}) {
  type MovieData = {
    id: string;
    title: string;
    poster_path: string;
    vote_average: number;
    genre_ids: number[];
  };
  type Genre = {
    id: number;
    name: string;
  };
  type OptionType = {
    id: number;
    name: string;
  };
  
  const [data, setData] = useState<MovieData[]>([]);
  const params = useParams();
  const { mode, toggleMode } = useMode();

  useEffect(() => {
    if (id) {
      axiosInstance
        .get(`search/movie?query=${id}&language=en-US&page=1`)
        .then((res) => setData(res.data.results));
    }
  }, [id]);
  
  const [genre, setGenre] = useState<Genre[]>([]);

  useEffect(() => {
    axiosInstance
      .get(`genre/movie/list?language=en`)
      .then((res) => setGenre(res.data.genres));
  }, []);
  const router = useRouter();

  const handletodetail = (id: string) => {
    router.push(`/detail/${id}`);
  };

  const [slice, setSlice] = useState(0);
  const [slice2, setSlice2] = useState(8);
  const page = [
    { slice1: 0, slice2: 8 },
    { slice1: 8, slice2: 16 },
    { slice1: 16, slice2: 24 },
  ];
  const shiljigch = (huudas: number) => {
    if (huudas >= 0 && huudas <= 2) {
      setSlice(page[huudas].slice1);
      setSlice2(page[huudas].slice2);
    }
  };
  
  const nemegch = () => {
    if (slice !== 16 && slice2 !== 24) {
      setSlice(slice + 8);
      setSlice2(slice2 + 8);
    }
  };
  
  const hasagch = () => {
    if (slice !== 0 && slice2 !== 8) {
      setSlice(slice - 8);
      setSlice2(slice2 - 8);
    }
  };

  
  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);
  const handleSelect = (option: OptionType) => {
    setSelectedOptions((prev) => {
      const isSelected = prev.some((item) => item.name === option.name);
      if (isSelected) {
        return prev.filter((item) => item.name !== option.name);
      } else {
        return [...prev, option];
      }
    });
  };
  const genrefilter =
    selectedOptions.length > 0
      ? data.filter((item) => {
          const test = selectedOptions.filter((option) => {
            return item.genre_ids?.includes(option.id);
          });
          return test.length === selectedOptions.length;
        })
      : data;
  
  console.log(genrefilter, "ho");
  console.log(selectedOptions, "selected");
  console.log(data, "data");
  return (
    <div
      className={`flex flex-col gap-[74px] w-fit h-[1290px] ${
        mode ? "text-[#09090B] bg-white" : "text-[#FFF] bg-black"
      }`}>
      <div className="flex w-full h-fit px-[80px] flex-col items-start gap-8 self-stretch mt-[63.5px]">
        <p className="self-stretch text-[30px] font-semibold ">
          Search results
        </p>
        <div className="flex flex-row h-fit items-start gap-7">
          <div className="flex flex-col h-[804px] justify-between">
            <div className="flex w-[804px] flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-8">
                <p className="text-[20px] font-semibold">
                  {genrefilter.length} results for "{id.replaceAll("%20", " ")}"
                </p>
              </div>
              <div className="grid grid-cols-4 w-fit h-fit items-center gap-8 self-stretch">
                {genrefilter.slice(slice, slice2).map((value) => {
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
                      key={value.id}
                      name={value.title}
                      image={`https://image.tmdb.org/t/p/original${value.poster_path}`}
                      rating={(
                        Math.round(value.vote_average * 10) / 10
                      ).toFixed(1)}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex w-full flex-col items-end gap-[10px] self-stretch mt-8 pb-">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious onClick={hasagch} />
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationLink
                      className={`${
                        mode
                          ? "bg-white focus:bg-black text-black focus:text-white"
                          : "bg-black focus:bg-white text-white focus:text-black"
                      }`}
                      onClick={() => shiljigch(0)}
                      href="#">
                      {1}
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      className={`${
                        mode
                          ? "bg-white focus:bg-black text-black focus:text-white"
                          : "bg-black focus:bg-white text-white focus:text-black"
                      }`}
                      onClick={() => shiljigch(1)}
                      href="#">
                      {2}
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      className={`${
                        mode
                          ? "bg-white focus:bg-black text-black focus:text-white"
                          : "bg-black focus:bg-white text-white focus:text-black"
                      }`}
                      onClick={() => shiljigch(2)}
                      href="#">
                      {3}
                    </PaginationLink>
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationNext onClick={nemegch} />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
          <div className="h-[810px] self-stretch border-[1px] solid border-[#E4E4E7]"></div>
          <div className="flex w-[387px] flex-col items-start gap-5">
            <div className="flex w-[213px] flex-col items-start gap-1">
              <h3 className="text-[24px] font-semibold">Search by genre</h3>
              <p className="text-[16px]">See lists of movies by genre</p>
            </div>
            <div className="flex items-start content-start gap-4 self-stretch flex-wrap">
              <Autocomplete
                options={genre}
                mode={mode}
                selectedOptions={selectedOptions}
                onSelect={handleSelect}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
