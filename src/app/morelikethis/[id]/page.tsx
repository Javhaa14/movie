"use client";
import { useParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "@/components/ui/movie";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";
import { useMode } from "@/app/modecontext";
import { axiosInstance } from "@/lib/utils";
type data = {
  adult: Boolean;
  title: string;
  release_date: string;
  runtime: string;
  vote_average: number;
  id: any;
  poster_path?: string;
};
export default function Morelike({
  params: { id },
}: {
  params: { id: string };
}) {
  const { mode, toggleMode } = useMode();
  const params = useParams();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const [datasimiliar, setDatasimiliar] = useState<data[]>([]);
  const [data, setData] = useState<data[]>([]);
  const [pagcount, setPagcount] = useState<number>(Number(page) || 1);
  const router = useRouter();
  const handleonclick = (id: string) => {
    router.push(`/detail/${id}`);
  };
  useEffect(() => {
    axiosInstance
      .get(`movie/${params.id}/similar?language=en-US&page=${pagcount}`)
      .then((res) => setDatasimiliar(res.data.results));
  }, [pagcount]);

  const totalpages = 500;

  console.log(pagcount, "pagenumber");
  useEffect(() => {
    axiosInstance
      .get(`movie/${id}?language=en-US&page=${pagcount}`)
      .then((res) => setData(res.data.results));
  }, [pagcount]);

  console.log(totalpages, "total");

  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'

  const nemegch = () => {
    if (pagcount < totalpages) {
      setPagcount(pagcount + 1);
    }
  };

  const hasagch = () => {
    if (pagcount > 1) {
      setPagcount(pagcount - 1);
    }
  };

  const shiljigch = (page: number) => {
    if (page >= 1 && page <= totalpages) {
      setPagcount(page);
    }
  };

  return (
    <div className="w-screen h-fit flex flex-col mt-[52px] ">
      <div
        className={`flex px-[80px] w-full flex-col items-start gap-[32px] mb-[32px] ${
          mode ? "text-[#09090B]" : "text-[#FFF]"
        }`}>
        <div className="flex justify-between items-start self-stretch">
          <p className="w-[198px] text-[30px] font-semibold">More Like This</p>
        </div>

        <div className="w-full h-full grid grid-cols-5 gap-8">
          {datasimiliar?.map((movie: data, index: number) => (
            <Movie
              cla={`w-[230px] min-h-[340px]`}
              na={`h-[214px]`}
              key={index}
              onclick={() => handleonclick(movie.id)}
              className={"w-[190px] h-[373px]"}
              image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              rating={(Math.round(movie.vote_average * 10) / 10).toFixed(1)}
              name={movie.title}
            />
          ))}
        </div>

        <div className="w-full h-full grid grid-cols-5 gap-8">
          {data?.map((movie: data, index: number) => (
            <Movie
              cla={`w-[230px] min-h-[340px]`}
              na={`h-[214px]`}
              key={index}
              onclick={() => handleonclick(movie.id)}
              className={`w-[230px] h-[439px] ${
                mode
                  ? "text-[#09090B] bg-[#F4F4F5]"
                  : "text-[#FFF] bg-[#222222]"
              }`}
              image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              rating={(Math.round(movie.vote_average * 10) / 10).toFixed(1)}
              name={movie.title}
            />
          ))}
        </div>
      </div>
      <div
        className={`flex w-full flex-col justify-end items-end gap-[10px] self-stretch mb-[76px] ${
          mode ? "text-[#09090B]" : "text-[#FFF]"
        }`}>
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
  );
}
