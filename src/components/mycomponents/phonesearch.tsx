import { GoChevronDown } from "react-icons/go";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

export const Phonesearch = ({ mode, change, buttonsearch, down }: any) => {
  return (
    <div
      className={`flex w-[338px] md:hidden h-[59px] px-5 justify-between items-center gap-5 ${
        mode ? "bg-white text-black" : "bg-black text-white"
      }`}>
      <div className="flex items-center gap-3">
        <button
          onClick={down}
          className={`flex justify-center items-center size-[36px] gap-2 rounded-md border-[1px] solid shadow-sm  border-[#E4E4E7]`}>
          <GoChevronDown
            className={`${mode ? "text-[#09090B]" : "text-[#fff]"}`}
          />
        </button>
      </div>
      <div
        className={`flex w-[227px] h-[44px] py-[0px] px-3 items-center gap-[10px] focus-visible:outline-white ${
          mode ? "bg-white text-black" : "bg-black text-white"
        }`}>
        <FaMagnifyingGlass
          className={`${mode ? "text-[#09090B]" : "text-[#fff]"}`}
        />
        <input
          onChange={change}
          className="w-full flex py-3 items-center gap-[10px]"
          type="text"
          placeholder="Search..."></input>
      </div>
      <button onClick={buttonsearch} className="flex justify-end items-center">
        <div className="flex size-[36px] justify-end items-center gap-2">
          <RxCross1 className={`${mode ? "text-[#09090B]" : "text-[#fff]"}`} />
        </div>
      </button>
    </div>
  );
};
