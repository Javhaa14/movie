"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigation } from "@/app/navigation";
import { Footer } from "../../footer";
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

export default function Morelike({
  params: { id },
}: {
  params: { id: string };
}) {
  type data = {
    adult: Boolean;
    title: String;
    release_date: String;
    runtime: String;
    vote_average: number;
    id: any;
    poster_path?: string;
  };

  console.log(id, "id");
  const [datasimiliar, setDatasimiliar] = useState<data[]>([]);

  const router = useRouter();
  const handleonclick = (id: string) => {
    router.push(`/detail/${id}`);
  };
  //   useEffect(() => {
  //     axios
  //       .get(
  //         `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
  //         {
  //           method: "GET",
  //           headers: {
  //             accept: "application/json",
  //             Authorization:
  //               "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
  //           },
  //         }
  //       )
  //       .then((res) => setDatasimiliar(res.data.results));
  //   }, []);
  const [data, setData] = useState<data[]>([]);
  const [pagcount, setPagcount] = useState<number>(1);
  const nemegch = () => {
    if (pagcount < 100) {
      setPagcount((pagcount) => pagcount + 1);
    }
  };
  const hasagch = () => {
    if (pagcount > 1) {
      setPagcount((prev) => prev - 1);
    }
  };
  const shiljigch = () => {
    setPagcount((pagcount) => pagcount + 2);
  };
  const last = () => {
    setPagcount((pagcount) => (pagcount = 100));
  };
  console.log(pagcount, "haha");
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&page=${pagcount}`,
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
  }, [pagcount]);

  function SearchBar() {
    const searchParams = useSearchParams();

    const search = searchParams.get("search");

    // URL -> `/dashboard?search=my-project`
    // `search` -> 'my-project'
    return <>Search: {search}</>;
  }
  const searchParams = useSearchParams();
  return (
    <div className="w-screen h-screen flex flex-col gap-[52px]">
      <Navigation />
      <div className="flex px-[80px] w-full flex-col items-start gap-[32px] text-[#09090B]">
        <div className="flex justify-between items-start self-stretch">
          <p className="w-[198px] text-[24px] font-semibold">More Like This</p>
        </div>
        <div className="w-full h-full grid grid-cols-5 gap-8">
          {data?.map((value: Object, index: Number) => {
            return (
              <Movie
                onclick={() => {
                  handleonclick(value.id);
                  console.log(id);
                }}
                className={"w-[190px] h-[373px]"}
                key={index}
                image={`https://image.tmdb.org/t/p/original${value.poster_path}`}
                rating={(Math.round(value.vote_average * 10) / 10).toFixed(1)}
                name={value.title}
              />
            );
          })}
        </div>
      </div>
      <div className="flex w-full flex-col justify-end items-end gap-[10px] self-stretch">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={hasagch} href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className={`${pagcount == 100 ? "hidden" : "flex"}`}
                href="#">
                {pagcount}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={nemegch} href="#">
                {pagcount == 100 ? pagcount - 2 : pagcount + 1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={shiljigch} href="#">
                {pagcount == 100 ? pagcount - 1 : pagcount + 2}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className={`${pagcount >= 97 ? "hidden" : "flex"}`}>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={last} href="#">
                {100}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext onClick={nemegch} href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <Footer />
    </div>
  );
}
