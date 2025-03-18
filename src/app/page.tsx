import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { WiNightClear } from "react-icons/wi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <section className="flex flex-col w-screen h-screen">
      <div className="flex w-[100%] h-[59px] py-0 px-[80px] justify-between items-center">
        <div className="flex items-center gap-2 w-[92px] h-[20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none">
            <path
              d="M5.83366 2.1665V18.8332M14.167 2.1665V18.8332M1.66699 10.4998H18.3337M1.66699 6.33317H5.83366M1.66699 14.6665H5.83366M14.167 14.6665H18.3337M14.167 6.33317H18.3337M3.48366 2.1665H16.517C17.5203 2.1665 18.3337 2.97985 18.3337 3.98317V17.0165C18.3337 18.0198 17.5203 18.8332 16.517 18.8332H3.48366C2.48034 18.8332 1.66699 18.0198 1.66699 17.0165V3.98317C1.66699 2.97985 2.48034 2.1665 3.48366 2.1665Z"
              stroke="#4338CA"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-4 text-[#4338CA] font-extrabold font-italic">
            Movie Z
          </p>
        </div>
        <div className="flex w-[488px] items-center gap-3">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Genre</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex w-[379px] py-0 px-3 items-center gap--[10px] rounded-2xl border-[1px] bg-white focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]">
            <FaMagnifyingGlass className="opacity-[0.5]" />
            <Input />
          </div>
        </div>

        <WiNightClear className="size-[36px] flex justify-end items-center" />
      </div>
      <Carousel className="w-full h-[600px] relative">
        <CarouselContent className="w-full">
          <CarouselItem>
            <img
              id="slde-1"
              className="w-full"
              src="https://s3-alpha-sig.figma.com/img/c78e/5e57/16d36abbdaa8df480db189d5729e384a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mLG2xOJZNT2vGCrvhDwo3-iKl0QLHOJCxUbykqD81OWYT61RDmWH~sY5qc4qVMmDHRoLdT3VXAnqpxjl4QRY7lvqwtvVTj2-RScRPADrSRE2X1dKJ6MNwI89GQsAr7CVA~Sw886s4cN3GzZCxbhX6nG5wCcsdExQ3ZifH-DrPK1y2qNpWDmJzamRmYUQB4G5gKUvdNeqjPEES5nuyWmp4tVWbJDWV1Ve6DECdtwn6WwE~0puD445Fe7qQpsvTO15bYmHP3E7sN6ZamI~BBe1H7Aisb1JjhHE35MH~r0CHClF6Ayy8aDTsnbuKYmE-rzkB3IlXZLoaZaJNRHFDc~Erg__"></img>
          </CarouselItem>
          <CarouselItem>...ssss</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="ml-[100px] mt-[100px]" />
        <CarouselNext className="mr-[100px] mt-[100px]" />
      </Carousel>
      <div className="flex gap-2 w-fit h-fit z-40 left-[45%] top-[82%] absolute">
        <a
          className="w-[10px] h-[10px] rounded-[50%] bg-white opacity-[0.75] transition-opacity"
          href="#slde-1"></a>
        <a
          className="w-[10px] h-[10px] rounded-[50%] bg-white opacity-[0.75] transition-opacity"
          href="#slde-2"></a>
        <a
          className="w-[10px] h-[10px] rounded-[50%] bg-white opacity-[0.75] transition-opacity"
          href="#slde-3"></a>
        <a
          className="w-[10px] h-[10px] rounded-[50%] bg-white opacity-[0.75] transition-opacity"
          href="#slde-4"></a>
        <a
          className="w-[10px] h-[10px] rounded-[50%] bg-white opacity-[0.75] transition-opacity"
          href="#slde-5"></a>
      </div>
    </section>
  );
}
