"use client";
import { ModuleSource } from "module";
import { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import axios from "axios";
import { useRouter } from "next/router";
interface AutocompleteProps {
  options: OptionType[];
  selectedOptions: OptionType[];
  onSelect: (option: OptionType) => void;
  mode: boolean;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  options,
  mode,
  selectedOptions,
  onSelect,
}) => {
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
              onClick={() => onSelect(option)}>
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
