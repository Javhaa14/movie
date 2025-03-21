export const Searchmovie = ({ src, title, rate, date }: any) => {
  return (
    <div>
      <div className="flex w-[577px] p-2 items-center gap-4 self-stretch rounded-lg">
        <img className="w-[67px] h-[100px] rounded-md" src={`${src}`}></img>
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-col items-start self-stretch">
            <div className="flex justify-center items-center gap-[10px]">
              <p className="text-[20px] font-600">{title}</p>
            </div>
            <div className="flex h-[23px] gap-1 self-stretch">
              <div className="flex w-4 pt-[2px] items-center gap-[10px]">
                <img src="star.svg"></img>
              </div>
              <div className="flex items-start self-stretch">
                <p className="text-[14px] font-medium">{rate}</p>
                <p className="text-[#71717A] text-[12px] font-normal">/10</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-[454px] justify-between items-start self-stretch text-[14px] font-medium">
            <p className="">{date}</p>
            <button className="flex h-9 px-4 py-2 justify-center items-center gap-2 rounded-md">
              <p className=" ">See more</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none">
                <path
                  d="M3.33301 7.99967H12.6663M12.6663 7.99967L7.99967 3.33301M12.6663 7.99967L7.99967 12.6663"
                  stroke="#18181B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-[550px] py-2 flex-col items-start gap-[10px] self-stretch">
        <div className="h-[1px] self-stretch border-[1px] solid border-[#E4E4E7]"></div>
      </div>
    </div>
  );
};
