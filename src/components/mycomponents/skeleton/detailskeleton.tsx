import { MovieSkeleton } from "./movieskeleton";

export const Detailskeleton = ({}) => {
  const arr = [0, 1, 2, 3, 4];
  return (
    <div className="w-screen h-fit flex flex-col items-center mt-[52px] mb-[112px]">
      <div className="flex w-[1080px] flex-col items-start gap-6">
        <div className="flex pr-3 justify-between items-center self-stretch">
          <div className="flex w-[211px] flex-col items-start gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="211"
              height="40"
              viewBox="0 0 211 40"
              fill="none">
              <path
                d="M0 20C0 8.95431 8.95431 0 20 0H191C202.046 0 211 8.95431 211 20C211 31.0457 202.046 40 191 40H20C8.9543 40 0 31.0457 0 20Z"
                fill="#F4F4F5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="237"
              height="28"
              viewBox="0 0 237 28"
              fill="none">
              <path
                d="M0 14C0 6.26801 6.26801 0 14 0H223C230.732 0 237 6.26801 237 14C237 21.732 230.732 28 223 28H14C6.26801 28 0 21.732 0 14Z"
                fill="#F4F4F5"
              />
            </svg>
          </div>
          <div className="flex flex-col items-start gap-0">
            <p className="text-[#09090B] text-3">Rating</p>
            <div className="flex -[48px] pt-1 items-center gap-1 self-stretch">
              <div className="flex w-[83px] flex-col justify-between items-start self-stretch">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="83"
                  height="20"
                  viewBox="0 0 83 20"
                  fill="none">
                  <path
                    d="M0 10C0 4.47715 4.47715 0 10 0H73C78.5229 0 83 4.47715 83 10C83 15.5228 78.5229 20 73 20H10C4.47715 20 0 15.5228 0 10Z"
                    fill="#F4F4F5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="83"
                  height="16"
                  viewBox="0 0 83 16"
                  fill="none">
                  <path
                    d="M0 8C0 3.58172 3.58172 0 8 0H75C79.4183 0 83 3.58172 83 8C83 12.4183 79.4183 16 75 16H8C3.58172 16 0 12.4183 0 8Z"
                    fill="#F4F4F5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 self-stretch">
          <div className="flex w-[290px] h-[428px] flex-col justify-center items-center rounded-sm">
            <div className="w-[290px] h-[428px] rounded-lg bg-[#F4F4F5]"></div>
          </div>
          <div className="flex w-[760px] h-[428px] justify-center items-center rounded-sm">
            <div className="w-[760] h-[428px] rounded-lg bg-[#F4F4F5]"></div>
          </div>
        </div>
      </div>
      <div className="flex w-[1080px] flex-col items-start gap-5">
        <div className="flex items-center gap-3"></div>
        <div className="flex flex-col items-start gap-1 self-stretch">
          <div className="flex h-[22px] justify-center items-center self-stretch">
            <div className="w-[1080px] h-[22px] rounded-full bg-[#F4F4F5]"></div>
          </div>
          <div className="flex w-[699px] h-[22px] justify-center items-center">
            <div className="w-[699px] h-[22px] rounded-full bg-[#F4F4F5]"></div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 self-stretch">
          <div className="flex flex-col items-start gap-1 self-stretch">
            <div className="flex items-center gap-[53px] self-stretch">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="28"
                viewBox="0 0 64 28"
                fill="none">
                <path
                  d="M0 14C0 6.26801 6.26801 0 14 0H50C57.732 0 64 6.26801 64 14C64 21.732 57.732 28 50 28H14C6.26801 28 0 21.732 0 14Z"
                  fill="#F4F4F5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="137"
                height="28"
                viewBox="0 0 137 28"
                fill="none">
                <path
                  d="M0 14C0 6.26801 6.26801 0 14 0H123C130.732 0 137 6.26801 137 14C137 21.732 130.732 28 123 28H14C6.26801 28 0 21.732 0 14Z"
                  fill="#F4F4F5"
                />
              </svg>
            </div>
            <div className="flex p-1 flex-col items-start gap-[10px] self-stretch">
              <div className="h-[1px] self-stretch border-[1px] solid border-[#E4E4E7]"></div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-1 self-stretch">
            <div className="flex items-center gap-[53px] self-stretch">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="28"
                viewBox="0 0 64 28"
                fill="none">
                <path
                  d="M0 14C0 6.26801 6.26801 0 14 0H50C57.732 0 64 6.26801 64 14C64 21.732 57.732 28 50 28H14C6.26801 28 0 21.732 0 14Z"
                  fill="#F4F4F5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="137"
                height="28"
                viewBox="0 0 137 28"
                fill="none">
                <path
                  d="M0 14C0 6.26801 6.26801 0 14 0H123C130.732 0 137 6.26801 137 14C137 21.732 130.732 28 123 28H14C6.26801 28 0 21.732 0 14Z"
                  fill="#F4F4F5"
                />
              </svg>
            </div>
            <div className="flex p-1 flex-col items-start gap-[10px] self-stretch">
              <div className="h-[1px] self-stretch border-[1px] solid border-[#E4E4E7]"></div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-1 self-stretch">
            <div className="flex items-center gap-[53px] self-stretch">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="28"
                viewBox="0 0 64 28"
                fill="none">
                <path
                  d="M0 14C0 6.26801 6.26801 0 14 0H50C57.732 0 64 6.26801 64 14C64 21.732 57.732 28 50 28H14C6.26801 28 0 21.732 0 14Z"
                  fill="#F4F4F5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="137"
                height="28"
                viewBox="0 0 137 28"
                fill="none">
                <path
                  d="M0 14C0 6.26801 6.26801 0 14 0H123C130.732 0 137 6.26801 137 14C137 21.732 130.732 28 123 28H14C6.26801 28 0 21.732 0 14Z"
                  fill="#F4F4F5"
                />
              </svg>
            </div>
            <div className="flex p-1 flex-col items-start gap-[10px] self-stretch">
              <div className="h-[1px] self-stretch border-[1px] solid border-[#E4E4E7]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-8 px-[80px]">
        <div className="flex w-[1080px] justify-between items-start">
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
        <div className="flex items-start content-start gap-8 self-stretch flex-wrap">
          {arr.map((value: any) => {
            return (
              <MovieSkeleton key={value} className={`w-[190px] h-[372px]`} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
