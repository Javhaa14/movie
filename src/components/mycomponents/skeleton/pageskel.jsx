import { ListSkeleton } from "@/components/mycomponents/skeleton/listskeleton";
export const Pageskel = ({}) => {
  const arr = [0, 1, 2];
  return (
    <div className="w-screen h-fit flex flex-col justify-center items-center relative z-50">
      <div className="w-[1440px] h-[600px] bg-[#F4F4F5] mb-[52px]"></div>
      <div className="inline-flex flex-col items-start gap-[52px]">
        {arr.map((value) => {
          return <ListSkeleton key={value} />;
        })}
      </div>
    </div>
  );
};
