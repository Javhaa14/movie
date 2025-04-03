export const Noresult = ({ mode }: any) => {
  return (
    <div
      className={`flex w-full h-[95px] py-6 px-5 flex-col justify-center items-center gap-0 self-stretch rounded-lg border-[1px] solid border-[#E4E4E7] ${
        mode ? "text-[#09090B] bg-white" : "text-[#FFF] bg-black"
      }`}>
      <label className="flex justify-center items-center">
        <p className="text-[14px] font-medium">No results found.</p>
      </label>
    </div>
  );
};
