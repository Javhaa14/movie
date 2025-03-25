export const Movie = ({
  image,
  rating,
  name,
  onclick,
  className,
}: {
  image: string;
  rating: string;
  name: string;
  className: string;
  onclick: () => void;
}) => {
  return (
    <div
      onClick={onclick}
      className={`flex flex-col items-start gap-1 rounded-xl  w-[230px] h-[439px] overflow-scroll brightness-100 hover:brightness-90 ${className}`}>
      <img className="w-[230px] h-[340px] rounded-t-xl" src={image}></img>
      <div className={`flex p-2 flex-col items-start self-stretch `}>
        <div className="flex h-[23px] items-start gap-1 self-stretch">
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
          <p className="text-[14px] ">{rating}</p>
          <p className="text-[#71717A] text-[12px]">/10</p>
        </div>
        <div className="flex justify-center items-center gap-[10px] self-stretch">
          <p className="overflow-hidden text-ellipsis text-[18px]">{name}</p>
        </div>
      </div>
    </div>
  );
};
