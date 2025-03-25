"use client";
import { useEffect, useState } from "react";
import axios from "axios";
export const Staffinfo = ({ id, mode }: any) => {
  type data = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
  };
  type data2 = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
  };
  const [data, setData] = useState<data[]>([]);
  const [data2, setData2] = useState<data[]>([]);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
        },
      })
      .then((res) => {
        setData(res.data.crew), setData2(res.data.cast);
      });
  }, []);
  return (
    <div className={`w-full ${mode ? "" : "text-[#FFF]"}`}>
      <div className="flex w-full flex-col items-start gap-1 self-stretch">
        <div className="flex w-fit flex-row items-center gap-[50px] self-stretch text-4">
          <p className="font-bold w-[50px]">Director</p>
          <div className="gap-2 flex flex-row">
            {data.map((a) =>
              a.job == "Director" ? (
                <p key={a.id} className="flex font-normal w-fit self-stretch">
                  {a.name} ·
                </p>
              ) : (
                <p className="hidden"></p>
              )
            )}
          </div>
        </div>
        <div className="flex p-1 flex-col items-start gap-[10px] self-stretch">
          <div className="h-[1px] self-stretch border-[1px] solid text-[#E4E4E7]"></div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-1 self-stretch">
        <div className="flex items-center gap-[50px] self-stretch text-4">
          <p className="font-bold w-[50px]">Writers</p>
          <div className="flex gap-2">
            {data.map((a) =>
              a.department === "Writing" &&
              a.known_for_department === "Writing" ? (
                <p key={a.id} className="font-normal">
                  {a.name} ·
                </p>
              ) : (
                <p className="hidden"></p>
              )
            )}
          </div>
        </div>
        <div className="flex p-1 flex-col items-start gap-[10px] self-stretch">
          <div className="h-[1px] self-stretch border-[1px] solid text-[#E4E4E7]"></div>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-1 self-stretch">
        <div className="flex items-center gap-[50px] self-stretch  text-4">
          <p className="font-bold w-[50px]">Stars</p>
          <div className="flex flex-row gap-2">
            {data2.slice(0, 5).map((a) => {
              return (
                <p key={a.id} className="font-normal">
                  {a.name} ·
                </p>
              );
            })}
          </div>
        </div>
        <div className="w-full flex p-1 flex-col items-start gap-[10px] self-stretch">
          <div className="h-[1px] self-stretch border-[1px] solid text-[#E4E4E7]"></div>
        </div>
      </div>
    </div>
  );
};
