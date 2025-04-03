"use client";
import { FaArrowRight } from "react-icons/fa6";
import { useParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import { Staffinfo } from "@/components/mycomponents/staffinfo";
import { Genres } from "@/components/mycomponents/genres";
import { CiPlay1 } from "react-icons/ci";
import { Movie } from "@/components/mycomponents/movie";
import { MdCancel } from "react-icons/md";
import { useMode } from "@/app/modecontext";
import { Detailskeleton } from "@/components/mycomponents/skeleton/detailskeleton";
import { axiosInstance } from "@/lib/utils";

type MovieData = {
  adult: boolean;
  title: string;
  release_date: string;
  runtime: number | undefined;
  vote_average: number | undefined;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  genres: Array<{ id: number; name: string }>;
  popularity: number;
};

type Datatrailer = {
  name: string;
  type: string;
  key: string;
};

type Datatrivia = {
  id: string | undefined;
  poster_path: string;
  title: string;
  vote_average: string | undefined;
};

export default function Detail() {
  const { id }: { id?: string } = useParams();
  const { mode, toggleMode } = useMode();
  const [data, setData] = useState<MovieData | null>(null);
  const [datatrailers, setDatatrailers] = useState<Datatrailer[]>([]);
  const [datasimiliar, setDatasimiliar] = useState<Datatrivia[]>([]);
  const [datagenre, setDatagenre] = useState<MovieData["genres"]>([]);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  console.log(iframeRef.current);
  const router = useRouter();
  const [button, setButton] = useState(false);

  function timeConvert(n: number | undefined): string {
    if (n === undefined) {
      return "0h 0min";
    }

    let hours = Math.floor(n / 60);
    let minutes = n % 60;
    return `${hours}h ${minutes}min`;
  }

  const trailer = (array: Datatrailer[]) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].type === "Trailer" || array[i].name === "Official Trailer") {
        return array[i].key;
      }
    }
  };

  const handlebutton = () => setButton(!button);

  const handleonclick = (id: string) => {
    router.push(`/detail/${id}`);
  };

  const handle = (id: string) => {
    router.push(`/morelikethis/${id}`);
  };
  const handletosearchfilter = (id: number) => {
    router.push(`/searchfilter/${id}?genres=${id}`);
  };

  useEffect(() => {
    if (id) {
      axiosInstance.get<MovieData>(`movie/${id}?language=en-US`).then((res) => {
        setData(res.data);
      });
      axiosInstance
        .get(
          `movie/${id}/videos?api_key=d67d8bebd0f4ff345f6505c99e9d0289&language=en-US`
        )
        .then((res) => setDatatrailers(res.data.results));
      axiosInstance
        .get(`movie/${id}/similar?language=en-US&page=1`)
        .then((res) => setDatasimiliar(res.data.results));
      axiosInstance
        .get(`movie/${id}?language=en-US`)
        .then((res) => setDatagenre(res.data.genres));
    }
  }, [id]);
  if (!data || !datatrailers || !datasimiliar || !datagenre) {
    return <Detailskeleton />;
  }
  return (
    <Suspense fallback={<Detailskeleton />}>
      <div className={`w-full h-fit flex justify-center items-center`}>
        <div
          className={`flex w-[1230px] justify-center flex-col items-start gap-6 py-10 px-[80px] ${
            mode ? "text-[#09090B]" : "text-[#FFF]"
          }`}>
          <div className="flex w-full pr-3 justify-between items-center self-stretch">
            <div className="flex w-fit flex-col items-start gap-1">
              <a
                href="https://hdplayer.icu/index.php?id=6574&key=146ff4"
                className="self-stretch w-fit text-[36px] font-bold">
                {data?.title}
              </a>
              <p className="self-stretch text-[18px] w-[300px]">
                {data?.release_date} · {data?.adult == false ? "PG" : "R18+"} ·
                {timeConvert(data?.runtime ?? 0)}
              </p>
            </div>
            <div className="flex flex-col items-start gap-0">
              <p className="text-3 font-medium">Rating</p>
              <div className="flex h-[48px] items-center gap-1 self-stretch">
                <div className="flex pt-2 items-start gap-[10px] self-stretch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none">
                    <path
                      d="M13.9997 2.33301L17.6047 9.63634L25.6663 10.8147L19.833 16.4963L21.2097 24.523L13.9997 20.7313L6.78967 24.523L8.16634 16.4963L2.33301 10.8147L10.3947 9.63634L13.9997 2.33301Z"
                      fill="#FDE047"
                      stroke="#FDE047"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex flex-row items-center justify-center">
                    <p className="text-[18px] font-semibold">
                      {data?.vote_average !== undefined
                        ? (Math.round(data?.vote_average * 10) / 10).toFixed(1)
                        : 0}
                    </p>
                    <p className="text-[16px] text-[#71717A]">/10</p>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-[10px]">
                    <p className="text-[12px] text-[#71717A]">
                      {Math.floor(data?.popularity ?? 0)}k
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center items-center gap-8 self-stretch relative">
            <img
              className="w-[290px] h-[428px]"
              src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}></img>
            <div
              className="flex items-end pb-[24px] w-[760px] h-[428px] bg-cover brightness-70 rounded-sm"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`,
              }}></div>
            <div className="flex flex-row brightness-100 pt-[300px] pr-[200px] w-[400px] h-[300px] justify-center items-center gap-3 text-white pl-6 absolute">
              <button
                onClick={handlebutton}
                className="size-10 flex h-10 px-2 py-2 justify-center items-center gap-2 rounded-full bg-white">
                <CiPlay1 className="size-4 text-black" />
              </button>
              <p className="text-4 ">Play trailer </p>
              <p className="text-[14px] pt-1">2:35</p>
            </div>
          </div>
          <div
            className={`flex w-fit vh-[50vh] bottom-[32%] ml-[50px] absolute ${
              button ? "flex" : "hidden"
            }`}>
            <iframe
              ref={iframeRef}
              src={`https://youtube.com/embed/${trailer(
                datatrailers
              )}?si=UMWGenzXIx0OnlcK`}
              className={`w-[997px] h-[561px] mt-10 aspect-video`}></iframe>
            <button
              onClick={handlebutton}
              className="flex w-fit h-fit justify-center items-center rounded-full bg-white">
              <MdCancel
                className={`size-10 text-black aspect-video ${
                  button ? "flex" : "hidden"
                }`}
              />
            </button>
          </div>

          <div
            className={`flex w-full flex-col items-start gap-5 ${
              mode ? "text-[#09090B]" : "text-[#FFF]"
            }`}>
            <div className="flex items-center gap-3">
              {datagenre.map((value) => {
                return (
                  <Genres
                    key={value.id}
                    genre={value.name}
                    onClick={() => {
                      handletosearchfilter(value.id);
                    }}
                  />
                );
              })}
            </div>
            <p className="w-full self-stretch text-[16px]">{data?.overview}</p>
            <div className={`flex flex-col items-start gap-5 self-stretch `}>
              <Staffinfo id={id} mode={mode} />
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-8 ">
            <div className="flex justify-between items-start self-stretch">
              <p className="w-[198px] text-[24px] font-semibold">
                More Like This
              </p>
              <button
                onClick={() => {
                  if (id) {
                    handle(id);
                  }
                }}
                className="flex h-[36px] px-4 py-2 justify-center items-center gap-2">
                <p className="text-[14px]">See more</p>
                <FaArrowRight className="size-[16px]" />
              </button>
            </div>
            <div className={`flex items-start gap-8 self-stretch `}>
              {datasimiliar?.slice(0, 5).map((value: Datatrivia) => {
                return (
                  <Movie
                    na={`h-[79px]`}
                    cla={`w-[190px] min-h-[281px] `}
                    key={value.id || "default"}
                    onclick={() => handleonclick(value.id || "")}
                    image={`https://image.tmdb.org/t/p/original${value.poster_path}`}
                    rating={(
                      Math.round(Number(value.vote_average ?? 0) * 10) / 10
                    ).toFixed(1)}
                    name={value.title}
                    className={`w-[190px] h-[372px] ${
                      mode
                        ? "text-[#09090B] bg-[#F4F4F5]"
                        : "text-[#FFF] bg-[#222222]"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
