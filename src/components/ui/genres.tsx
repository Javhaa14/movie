import { IoIosArrowForward } from "react-icons/io";
export const Genres = ({ genre, onClick }: { genre: string }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-row py-[2px] pl-[10px] pr-[4px] items-center gap-2 rounded-full border-[1px] border-[#E4E4E7] solid">
      <p className=" text-3 font-semibold">{genre}</p>
      <IoIosArrowForward className="text-4" />
    </button>
  );
};
