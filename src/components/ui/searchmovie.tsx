import { MdArrowForward } from "react-icons/md";

export const Searchmovie = ({ src, title, rate, date, mode, onclick }: any) => {
  return (
    <div
      onClick={onclick}
      className={`${
        mode ? "bg-white" : "bg-black"
      } w-full h-full brightness-100 hover:brightness-120`}>
      <div className="flex w-[577px] h-fit p-2 items-center gap-4 self-stretch rounded-lg">
        <img className="w-[67px] h-[100px] rounded-md" src={`${src}`}></img>
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-col items-start self-stretch">
            <div className="flex justify-center items-center gap-[10px]">
              <p className="text-[20px] font-600">{title}</p>
            </div>
            <div className="flex h-[23px] gap-1 self-stretch">
              <div className="flex w-4 pt-[2px] items-center gap-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none">
                  <g clipPath="url(#clip0_829_5924)">
                    <path
                      d="M8.91862 1.33301L10.9786 5.50634L15.5853 6.17968L12.252 9.42634L13.0386 14.013L8.91862 11.8463L4.79862 14.013L5.58529 9.42634L2.25195 6.17968L6.85862 5.50634L8.91862 1.33301Z"
                      fill="#FDE047"
                      stroke="#FDE047"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_829_5924">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.917969)"
                      />
                    </clipPath>
                  </defs>
                </svg>
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
              <MdArrowForward />
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
