"use client";
import { useEffect, useState } from "react";
import axios from "axios";
export const Staffinfo = ({ id }: any) => {
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
  console.log(data2);
  return (
    <div>
      <div className="flex flex-col items-start gap-1 self-stretch">
        <div className="flex items-center gap-[53px] self-stretch text-[#09090B] text-4">
          <p className="font-bold">Director</p>
          {data?.map((a) =>
            a.job === "Director" ? (
              <p key={a.id} className="font-normal">
                {a.name}
              </p>
            ) : (
              ""
            )
          )}
        </div>
        <div className="flex p-1 flex-col items-start gap-[10px] self-stretch">
          <div className="h-[1px] self-stretch border-[1px] solid text-[#E4E4E7]"></div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-1 self-stretch">
        <div className="flex items-center gap-[53px] self-stretch text-[#09090B] text-4">
          <p className="font-bold">Writers</p>
          {data?.splice(0, 3).map((a) =>
            a.department === "Writing" ? (
              <p key={a.id} className="font-normal">
                {a.name}
              </p>
            ) : (
              ""
            )
          )}
        </div>
        <div className="flex p-1 flex-col items-start gap-[10px] self-stretch">
          <div className="h-[1px] self-stretch border-[1px] solid text-[#E4E4E7]"></div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-1 self-stretch">
        <div className="flex items-center gap-[53px] self-stretch text-[#09090B] text-4">
          <p className="font-bold">Stars</p>
          {data2.slice(0, 3).map((a) => {
            return (
              <p key={a.id} className="font-normal">
                {a.name}
              </p>
            );
          })}
        </div>
        <div className="flex p-1 flex-col items-start gap-[10px] self-stretch">
          <div className="h-[1px] self-stretch border-[1px] solid text-[#E4E4E7]"></div>
        </div>
      </div>
    </div>
  );
};
