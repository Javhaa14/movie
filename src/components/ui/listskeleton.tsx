import { MovieSkeleton } from "./movieskeleton";
export const ListSkeleton = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="flex flex-col items-start gap-8 px-[80px]">
      <div className="flex w-[1277px] justify-between items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="251"
          height="32"
          viewBox="0 0 251 32"
          fill="none">
          <path
            d="M0.5 16C0.5 7.16344 7.66344 0 16.5 0H234.5C243.337 0 250.5 7.16344 250.5 16C250.5 24.8366 243.337 32 234.5 32H16.5C7.66345 32 0.5 24.8366 0.5 16Z"
            fill="#F4F4F5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="166"
          height="36"
          viewBox="0 0 166 36"
          fill="none">
          <path
            d="M0.5 18C0.5 8.05888 8.55888 0 18.5 0H147.5C157.441 0 165.5 8.05888 165.5 18C165.5 27.9411 157.441 36 147.5 36H18.5C8.55888 36 0.5 27.9411 0.5 18Z"
            fill="#F4F4F5"
          />
        </svg>
      </div>
      <div className="items-start content-start gap-8 self-stretch grid grid-cols-5">
        {arr.map((value: any) => {
          return (
            <MovieSkeleton key={value} className={`w-[230px] h-[439px]`} />
          );
        })}
      </div>
    </div>
  );
};
