"use client";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigation } from "@/app/navigation";
import { Footer } from "../../footer";
import { Staffinfo } from "@/app/mycomponents/staffinfo";
import { Genres } from "@/components/ui/genres";
import { CiPlay1 } from "react-icons/ci";
import { Movie } from "@/components/ui/movie";

export default function Detail({ params: { id } }: any) {
  type data = {
    adult: Boolean;
    title: String;
    release_date: String;
    runtime: String;
    vote_average: String;
  };
  type datatrailer = {
    name: String;
    type: String;
    key: Number;
  };
  console.log(id, "hi");
  const [data, setData] = useState<data[]>([]);
  const [datatrailer, setDatatrailer] = useState<data[]>([]);
  const [datasimiliar, setDatasimiliar] = useState<data[]>([]);

  function timeConvert(n: number) {
    let num = n;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "min";
  }

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
        },
      })
      .then((res) => setData(res.data));
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?&api_key=d67d8bebd0f4ff345f6505c99e9d0289language=en-US`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
          },
        }
      )
      .then((res) => setDatatrailer(res.data.results[0]));
  }, []);
  console.log(datatrailer, "hi");

  const [button, setButton] = useState(false);
  const handlebutton = () => {
    setButton(!button);
    console.log("hi");
  };
  const router = useRouter();
  const handleonclick = (id: string) => {
    router.push(`/detail/${id}`);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
          },
        }
      )
      .then((res) => setDatasimiliar(res.data.results));
  }, []);
  return (
    <div className="w-screen h-screen justify-center items-center">
      <Navigation />
      <div className="flex w-full flex-col items-start gap-6 text-[#09090B] py-10 px-[80px]">
        <div className="flex w-full pr-3 justify-between items-center self-stretch">
          <div className="flex w-fit flex-col items-start gap-1">
            <a href="https://hdplayer.icu/index.php?id=6574&key=146ff4" className="self-stretch w-fit text-[36px] font-bold">{data.title}</a>
            <p className="self-stretch text-[18px] w-[300px]">
              {data.release_date} · {data.adult == false ? "PG" : "R18+"} ·{" "}
              {timeConvert(data.runtime)}
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
                    {(Math.round(data.vote_average * 10) / 10).toFixed(1)}
                  </p>
                  <p className="text-[16px] text-[#71717A]">/10</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <p className="text-[12px] text-[#71717A]">
                    {Math.floor(data.popularity)}k
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-8 self-stretch">
          <img
            className="w-[290px] h-[428px]"
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}></img>
          <div
            className="flex items-end pb-[24px] w-[760px] h-[428px] bg-cover brightness-70 rounded-sm"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
            }}>
            <div className="flex brightness-100 w-fit items-center gap-3 text-white pl-6">
              <button
                onClick={handlebutton}
                className="size-10 flex h-10 px-2 py-2 justify-center items-center gap-2 rounded-full bg-white">
                <CiPlay1 className="size-4 text-black" />
              </button>
              <p className="text-4 ">Play trailer </p>
              <p className="text-[14px]">2:35</p>
            </div>
          </div>
        </div>
        <iframe
          src={`https://youtube.com/embed/${datatrailer.key}?si=UMWGenzXIx0OnlcK`}
          className={`w-[997px] h-[561px] aspect-video absolute ${
            button ? "flex" : "hidden"
          }`}></iframe>

        <div className="flex w-[1080px] flex-col items-start gap-5 text-[#09090B]">
          <div className="flex items-center gap-3">
            <Genres genre="Fairy Tale" />
          </div>
          <p className="self-stretch text-[16px]">{data.overview}</p>
          <div className="flex flex-col items-start gap-5 self-stretch">
            <Staffinfo id={id} />
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 text-[#09090B]">
          <div className="flex justify-between items-start self-stretch">
            <p className="w-[198px] text-[24px] font-semibold">More Like This</p>
            <button className="flex h-[36px] px-4 py-2 justify-center items-center gap-2">
            
              <p className="text-[14px]">See more</p>
              <FaArrowRight className="size-[16px]" />
            </button>
          </div>
          <div className="flex items-start gap-8 self-stretch">
            {datasimiliar?.slice(0, 5).map((value: Object,index:Number) => {
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
      </div>
      <Footer />
    </div>
  );
}
