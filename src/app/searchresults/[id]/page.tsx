"use client";
import { useParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Movie } from "@/components/mycomponents/movie";
import { Autocomplete } from "@/components/ui/autocomplete";
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
import { Noresult } from "@/components/mycomponents/noresult";

export default function Searchresults({
  params: { id },
}: {
  params: { id: string };
}) {
  type MovieType = {
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
  type Pages = {
    page: number;
    results: MovieType;
    total_pages: number;
    total_results: number;
  };
  const params = useParams();
  const pathName = usePathname();

  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const [pagcount, setPagcount] = useState<number>(Number(page) || 1);
  const [data, setData] = useState<MovieType[]>([]);
  const { mode, toggleMode } = useMode();
  const [genre, setGenre] = useState<Genre[]>([]);
  const router = useRouter();
  const [pages, setPages] = useState<Pages | null>(null);
  const [totalpages, setTotalpages] = useState<number>(0);

  const genreParams = searchParams.getAll("genres");

  //Detail ruu shiljih
  const handletodetail = (id: string) => {
    router.push(`/detail/${id}`);
  };
  //search hiisen data
  useEffect(() => {
    if (id) {
      axiosInstance
        .get(`search/movie?query=${id}&language=en-US&page=${pagcount}`)
        .then((res) => {
          setData(res.data.results);
          setPages(res.data);
          setTotalpages(res.data.total_pages);
        });
    }
  }, [id, pagcount]);
  useEffect(() => {
    setPagcount(Number(searchParams.get("page")) || 1);
  }, [searchParams]);
  useEffect(() => {
    axiosInstance
      .get(`genre/movie/list?language=en`)
      .then((res) => setGenre(res.data.genres));
  }, []);

  const handleSelect = (option: OptionType) => {
    const params = new URLSearchParams(searchParams.toString());
    let Paramsgenres = params.getAll("genres");

    // Toggle selection
    if (Paramsgenres.includes(option.id.toString())) {
      Paramsgenres = Paramsgenres.filter(
        (genre) => genre !== option.id.toString()
      );
    } else {
      Paramsgenres.push(option.id.toString());
    }

    // Update URL parameters
    params.delete("genres");
    Paramsgenres.forEach((genre) => params.append("genres", genre));

    router.push(`?${params.toString()}`, { scroll: false });

    console.log(Paramsgenres, "genres");
  };

  const genreParamsAsNumbers = genreParams.map((id) => Number(id));
  const genrefilter = data.filter((item) => {
    return genreParamsAsNumbers.every((id) => item.genre_ids?.includes(id));
  });

  const updatePageParam = (newPage: number) => {
    const updatedParams = new URLSearchParams(searchParams.toString());
    updatedParams.set("page", newPage > 0 ? newPage.toString() : "1");

    return updatedParams.toString();
  };
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
                  {pages?.total_results} results for "
                  {id.replaceAll("%20", " ")}"
                </p>
              </div>
              {genrefilter.length == 0 ? (
                <Noresult mode={mode} />
              ) : (
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
              )}
            </div>

            <div className="flex w-full flex-col items-end gap-[10px] self-stretch mt-8 pb-">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href={`${pathName}?${updatePageParam(pagcount - 1)}`}
                    />
                  </PaginationItem>
                  {pagcount > 2 && (
                    <PaginationItem>
                      <PaginationLink href={`?${updatePageParam(1)}`}>
                        {1}
                      </PaginationLink>
                    </PaginationItem>
                  )}
                  {pagcount > 3 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                  {pagcount > 1 && (
                    <PaginationItem>
                      <PaginationLink
                        href={`?${updatePageParam(pagcount - 1)}`}>
                        {pagcount - 1}
                      </PaginationLink>
                    </PaginationItem>
                  )}
                  <PaginationItem>
                    <PaginationLink
                      href={`?${updatePageParam(pagcount)}`}
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
                      <PaginationLink
                        href={`?${updatePageParam(pagcount + 1)}`}>
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
                      <PaginationLink href={`?${updatePageParam(totalpages)}`}>
                        {totalpages}
                      </PaginationLink>
                    </PaginationItem>
                  )}

                  {pagcount < totalpages && (
                    <PaginationItem>
                      <PaginationNext
                        href={`${pathName}?${updatePageParam(pagcount + 1)}`}
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            </div>
          </div>
          <div className="h-auto min-h-[500px] self-stretch border-[1px] solid border-[#E4E4E7] mb-[100px]"></div>
          <div className="flex max-w-[387px] flex-col items-start gap-5 sticky top-20">
            <div className="flex w-[213px] flex-col items-start gap-1">
              <h3 className="text-[24px] font-semibold">Search by genre</h3>
              <p className="text-[16px]">See lists of movies by genre</p>
            </div>
            <div className="flex flex-wrap w-full items-start content-start gap-4 self-stretch">
              <Autocomplete
                options={genre}
                mode={mode}
                selectedOptions={genreParams}
                onSelect={handleSelect}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
