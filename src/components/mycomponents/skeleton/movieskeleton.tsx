export const MovieSkeleton = ({ className }:any) => {
  return (
    <div
      className={`flex flex-col justify-center items-center rounded-lg ${className}`}>
      <div className="w-full h-full rounded-lg bg-[#F4F4F5]"></div>
    </div>
  );
};
