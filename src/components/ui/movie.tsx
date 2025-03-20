export const Movie = ({
  image,
  rating,
  name,
}: {
  image: string;
  rating: string;
  name: string;
}) => {
  return (
    <div className="w-[229px] h-[439px] flex flex-col items-start gap-1 rounded-xl bg-[#F4F4F5] overflow-scroll">
      <img className="w-[229.73px] h-[340px] rounded-t-xl" src={image}></img>
      <div className="flex p-2 flex-col items-start self-stretch">
        <div className="flex h-[23px] items-start gap-1 self-stretch">
          <img
            className="flex w-4 pt-[2px] items-center gap-[10px]"
            src="star.svg"
            alt=""
          />
          <p className="text-[#09090B] text-[14px] ">{rating}</p>
          <p className="text-[#71717A] text-[12px]">/10</p>
        </div>
        <div className="flex justify-center items-center gap-[10px] self-stretch">
          <p className="overflow-hidden text-ellipsis text-[#09090B] text-[18px]">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};
