"use client";
import { ModuleSource } from "module";
import { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import axios from "axios";
import { useRouter } from "next/router";
type OptionType = {
  id: string;
  name: string;
};
type mode = boolean;
interface AutocompleteProps {
  options: OptionType[];
}
type data = {
  adult: Boolean;
  title: String;
  release_date: String;
  runtime: String;
  vote_average: String;
};
export const Autocomplete: React.FC<AutocompleteProps> = ({
  options,
  mode,
}) => {
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
  // const [datagenre, setDatagenre] = useState<data[]>([]);

  // useEffect(() => {
  //   axios
  //     .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
  //       method: "GET",
  //       headers: {
  //         accept: "application/json",
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
  //       },
  //     })
  //     .then((res) => setDatagenre(res.data.genres));
  // }, []);
  // const router = useRouter();
  // const handletosearchfilter = (id: string) => {
  //   router.push(`/searchfilter/${id}`);
  // };
  console.log(selectedOptions, "jj");

  return (
    <div className="w-[537px] h-fit">
      <div
        className={`flex items-start content-start gap-4 self-stretch flex-wrap `}>
        {options.map((option) => {
          const isSelected = selectedOptions.some(
            (item) => item.id === option.id
          );
          return (
            <button
              className={`flex py-[2px] pl-[10px] pr-[4px] justify-center items-start gap-2 rounded-full border-[1px] border-[#E4E4E7] solid text-[12px] font-semibold 
                ${
                  mode && isSelected
                    ? "bg-black text-white"
                    : !mode && isSelected
                    ? "bg-white text-black"
                    : mode
                    ? "text-black"
                    : "bg-black text-white"
                }`}
              key={option.id}
              onClick={() => handleSelect(option)}>
              {option.name}
              {isSelected ? (
                <LiaTimesSolid className="size-4" />
              ) : (
                <IoIosArrowForward className="size-4" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
