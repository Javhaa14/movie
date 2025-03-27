"use client";
import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { List } from "@/components/ui/list";
import { Nowplaying } from "@/components/ui/nowplaying";
import { useMode } from "./modecontext";
import { Pageskel } from "@/components/ui/pageskel";
import { Task } from "@/components/ui/task";
export default function Home() {
  const { mode, toggleMode } = useMode();

  const [data, setData] = useState(undefined);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?&api_key=d67d8bebd0f4ff345f6505c99e9d0289&language=en-US&page=1`,
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
  }, []);

  const sectiondata = [
    { name: "Upcoming", path: "upcoming" },
    { name: "Popular", path: "popular" },
    { name: "Top rated", path: "top_rated" },
  ];

  const router = useRouter();

  const handleon = (id: string) => {
    router.push(`/detail/${id}`);
  };

  const handletomore = (id: string) => {
    router.push(`/morelikethis/${id}`);
  };
  // Counter
  // Show input text
  // const [button, setButton] = useState(0);
  // const [input, setInput] = useState("");
  // const [toggle, setToggle] = useState(false);
  // const [character, setCharacter] = useState(0);

  // const handler = () => {
  //   setButton(button + 1);
  // };
  // const inputhandle = (event: any) => {
  //   setInput(event.target.value);
  //   setInputvalue(event.target.value);
  // };
  // const toggler = () => {
  //   setToggle(!toggle);
  // };
  // const charcounter = (input: string) => {
  //   setCharacter(input.length);
  // };
  // const arr: any[] = [];
  // const [task, setTask] = useState(arr);
  // const [inputvalue, setInputvalue] = useState("");
  // const buttonhandler = () => {
  //   setButton(button + 1);
  //   setTask([...task, { task: inputvalue, id: button }]);
  //   setInputvalue("");
  // };
  // const del = (id: number) => {
  //   setTask(task.filter((value) => value.id !== id));
  // };
  // console.log(task);
  if (!data || !sectiondata) {
    return <Pageskel />;
  }
  return (
    <Suspense fallback={<Pageskel />}>
      <div
        className={`flex flex-col w-screen h-fit mt-6 mb-[71px] gap-[73px] ${
          mode ? "bg-white" : "bg-black"
        }`}>
        <section className="flex flex-col w-full h-[600px] gap-6">
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full h-[600px] ">
            <CarouselContent>
              {data?.slice(0, 5).map((value: any, index: any) => {
                return (
                  <Nowplaying
                    data={data}
                    onclick={() => {
                      handleon(value.id);
                      console.log(value.id);
                    }}
                    key={index}
                    src={value.backdrop_path}
                    title={value.original_title}
                    rate={(Math.round(value.vote_average * 10) / 10).toFixed(1)}
                    description={value.overview}
                  />
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="ml-[100px] mt-[50px]" />
            <CarouselNext className="mr-[100px] mt-[50px]" />
          </Carousel>
        </section>
        {sectiondata?.map((value) => {
          return (
            <List
              seemore={handletomore}
              className={`${
                mode ? "bg-white text-[#09090B]" : "bg-black text-white"
              }`}
              key={value.name}
              type={value.path}
              name={value.name}
            />
          );
        })}
      </div>
    </Suspense>
  );
}
// <div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
//   <div className="flex gap-4">
//     <input
//       value={inputvalue}
//       onChange={inputhandle}
//       className="w-[300px] h-[20px] bg-yellow-100"></input>
//     <button onClick={buttonhandler}>Add ToDo</button>
//   </div>
//   <div className="w-full h-fit flex items-center flex-col">
//     {task.map((value) => {
//       return (
//         <Task
//           key={value.id}
//           task={value.task}
//           onclick={() => {
//             del(value.id);
//           }}
//         />
//       );
//     })}
//   </div>
// </div>
{
  /* <button className="size-[50px] bg-black text-white" onClick={handler}>
        Click
      </button>
      <p className="text-black">{button}</p>
      <input
        onChange={inputhandle}
        className="w-[300px] h-[20px] bg-yellow-100"></input>
      <p>{input}</p>
      <button
        className={`size-[50px] ${
          toggle ? "bg-black text-red-700" : "bg-white text-black"
        } `}
        onClick={toggler}>
        hey
      </button>
      <button
        className={`size-[50px] `}
        onClick={() => {
          charcounter(input);
        }}>
        tooloh
      </button>
      <p>{character}</p> */
}
