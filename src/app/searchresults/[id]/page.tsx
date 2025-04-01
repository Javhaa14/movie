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
  PaginationEllipsis,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { axiosInstance } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

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
  const params = useParams();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const [pagcount, setPagcount] = useState<number>(Number(page) || 1);
  const totalpages = 500;
  const [data, setData] = useState<MovieData[]>([]);
  const { mode, toggleMode } = useMode();

  useEffect(() => {
    if (id) {
      axiosInstance
        .get(`search/movie?query=${id}&language=en-US&page=${pagcount}`)
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
      className={`flex justify-center items-center px-[80px] mb-[100px] w-screen h-fit ${
        mode ? "text-[#09090B] bg-white" : "text-[#FFF] bg-black"
      }`}>
      <div className="flex w-full h-full flex-col items-start gap-8 self-stretch mt-[63.5px]">
        <p className="self-stretch text-[30px] font-semibold ">
          Search results
        </p>
        <div className="flex w-full flex-row h-fit items-start gap-7">
          <div className="flex w-full flex-col h-fit justify-between">
            <div className="flex w-full h-fit flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-8">
                <p className="text-[20px] font-semibold">
                  {genrefilter.length} results for "{id.replaceAll("%20", " ")}"
                </p>
              </div>
              <div className="grid grid-cols-4 w-fit h-fit items-center gap-8 self-stretch">
                {genrefilter.slice(0, 20).map((value) => {
                  return (
                    <Movie
                      na={`149px`}
                      cla={`w-[165px] min-h-[244px] `}
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
                    <PaginationPrevious
                      href={`?page=${pagcount > 1 ? pagcount - 1 : pagcount}`}
                    />
                  </PaginationItem>
                  {pagcount > 2 && (
                    <PaginationItem>
                      <PaginationLink href={`?page=${1}`}>{1}</PaginationLink>
                    </PaginationItem>
                  )}
                  {pagcount > 3 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                  {pagcount > 1 && (
                    <PaginationItem>
                      <PaginationLink href={`?page=${pagcount - 1}`}>
                        {pagcount - 1}
                      </PaginationLink>
                    </PaginationItem>
                  )}
                  <PaginationItem>
                    <PaginationLink
                      href={`?page=${pagcount}`}
                      className={`${
                        mode
                          ? pagcount === 0
                            ? "bg-blue-500 text-white"
                            : "bg-black text-white"
                          : pagcount === 0
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      } px-4 py-2 rounded-lg transition-colors duration-300`}>
                      {pagcount}
                    </PaginationLink>
                  </PaginationItem>

                  {pagcount < totalpages && (
                    <PaginationItem>
                      <PaginationLink href={`?page=${pagcount + 1}`}>
                        {pagcount + 1}
                      </PaginationLink>
                    </PaginationItem>
                  )}

                  {pagcount < totalpages - 2 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}

                  {pagcount < totalpages - 1 && (
                    <PaginationItem>
                      <PaginationLink href={`?page=${totalpages}`}>
                        {totalpages}
                      </PaginationLink>
                    </PaginationItem>
                  )}

                  {pagcount < totalpages && (
                    <PaginationItem>
                      <PaginationNext
                        href={`?page=${
                          pagcount < totalpages ? pagcount + 1 : pagcount
                        }`}
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            </div>
          </div>
          <div className="h-[826px] self-stretch border-[1px] solid border-[#E4E4E7]"></div>
          <div className="flex max-w-[387px] flex-col items-start gap-5">
            <div className="flex w-[213px] flex-col items-start gap-1">
              <h3 className="text-[24px] font-semibold">Search by genre</h3>
              <p className="text-[16px]">See lists of movies by genre</p>
            </div>
            <div className="flex flex-wrap w-full items-start content-start gap-4 self-stretch">
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
