import { FaMagnifyingGlass } from "react-icons/fa6";

export const Input = ({ change, mode }: any) => {
  return (
    <div
      className={`flex w-[379px] px-[12px] py-[0px] items-center gap-[10px] rounded-lg border-[1px] solid border-[#E4E4E7] focus-visible:outline-white ${
        mode ? "bg-white text-black" : "bg-black text-white"
      }`}>
      <FaMagnifyingGlass
        className={`${mode ? "text-[#09090B]" : "text-[#fff]"}`}
      />
      <input
        onChange={change}
        className="w-full flex py-2 items-center gap-[10px]"
        type="text"
        placeholder="Search..."></input>
    </div>
  );
};
