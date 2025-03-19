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
import { List } from "@/components/ui/list";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { CiPlay1 } from "react-icons/ci";

export default function Home() {
  const sectiondata = ["Upcoming", "Popular", "Top Rated"];
  return (
    <div className="flex flex-col w-screen h-screen gap-[74px]">
      <section className="flex flex-col w-full h-[600px] gap-6">
        <div className="flex w-[100%] h-[59px] py-6 px-[80px] justify-between items-center">
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
          <CarouselContent>
            <CarouselItem className="w-full h-[600px] flex justify-center overflow-hidden">
              <img
                id="slde-1"
                className="w-[1440px] h-[700px] absolute"
                src="https://s3-alpha-sig.figma.com/img/c78e/5e57/16d36abbdaa8df480db189d5729e384a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mLG2xOJZNT2vGCrvhDwo3-iKl0QLHOJCxUbykqD81OWYT61RDmWH~sY5qc4qVMmDHRoLdT3VXAnqpxjl4QRY7lvqwtvVTj2-RScRPADrSRE2X1dKJ6MNwI89GQsAr7CVA~Sw886s4cN3GzZCxbhX6nG5wCcsdExQ3ZifH-DrPK1y2qNpWDmJzamRmYUQB4G5gKUvdNeqjPEES5nuyWmp4tVWbJDWV1Ve6DECdtwn6WwE~0puD445Fe7qQpsvTO15bYmHP3E7sN6ZamI~BBe1H7Aisb1JjhHE35MH~r0CHClF6Ayy8aDTsnbuKYmE-rzkB3IlXZLoaZaJNRHFDc~Erg__"></img>
              <div className="flex flex-col items-start gap-4 absolute left-[140px] bottom-[158px] text-white">
                <div className="flex flex-col items-start gap-0 w-[404px] ">
                  <p className="text-[16px]">Now Playing:</p>
                  <p className="text-[36px] font-bold">Wicked</p>
                  <div className="flex w-[83px] h-[48px] items-center gap-1">
                    <div className="flex items-start gap-[10px] self-stretch pt-2">
                      <img className="size-[28px]" src="star.svg"></img>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                      <p className="text-[18px] font-[600]">6.9</p>
                      <p className="text-[16px] text-[#71717A]">/10</p>
                    </div>
                  </div>
                </div>
                <p className="w-[310px] text-[12px] font-[400]">
                  Elphaba, a misunderstood young woman because of her green
                  skin, and Glinda, a popular girl, become friends at Shiz
                  University in the Land of Oz. After an encounter with the
                  Wonderful Wizard of Oz, their friendship reaches a crossroads.{" "}
                </p>
                <button className="flex w-fit h-[40px] py-2 px-4 justify-center items-center gap-2 rounded-md bg-[#F4F4F5]">
                  <CiPlay1 className="size-4 text-[#18181B]" />
                  <p className="text-[#18181B] text-[14px] font-[400]">
                    Watch Trailer
                  </p>
                </button>
              </div>
              <div className="inline-flex items-center gap-2 absolute top-140">
                <a
                  className="size-2 rounded-[50%] bg-[#fff]"
                  href="#slde-1"></a>
                <a
                  className="size-2 rounded-[50%] bg-[#ffffffcc]"
                  href="#slde-2"></a>
                <a
                  className="size-2 rounded-[50%] bg-[#ffffffcc]"
                  href="#slde-3"></a>
              </div>
            </CarouselItem>
            <CarouselItem>...ssss</CarouselItem>
            <CarouselItem>...</CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="ml-[100px] mt-[50px]" />
          <CarouselNext className="mr-[100px] mt-[50px]" />
        </Carousel>
      </section>
      {sectiondata.map((value) => {
        return <List key={value} type={value} />;
      })}
      <footer className="flex w-full h-[280px] py-[40px] justify-center items-start gap-[48px] bg-[#4338CA] text-[#FAFAFA]">
        <div className="w-full flex flex-row justify-between items-start px-20">
          <div className="flex flex-col w-[300px] items-start gap-3 self-stretch">
            <div className="flex flex-row items-center gap-2 w-[109px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none">
                <path
                  d="M5.83366 1.6665V18.3332M14.167 1.6665V18.3332M1.66699 9.99984H18.3337M1.66699 5.83317H5.83366M1.66699 14.1665H5.83366M14.167 14.1665H18.3337M14.167 5.83317H18.3337M3.48366 1.6665H16.517C17.5203 1.6665 18.3337 2.47985 18.3337 3.48317V16.5165C18.3337 17.5198 17.5203 18.3332 16.517 18.3332H3.48366C2.48034 18.3332 1.66699 17.5198 1.66699 16.5165V3.48317C1.66699 2.47985 2.48034 1.6665 3.48366 1.6665Z"
                  stroke="#FAFAFA"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="flex text-[16px] font-bold">Movie Z</p>
            </div>
            <p className="text-[16px]">© 2024 Movie Z. All Rights Reserved.</p>
          </div>
          <div className="flex justify-end items-start gap-[96px]">
            <div className="flex flex-col h-[200px] items-start gap-3">
              <p className="text-[14px]">Contact Information</p>
              <div className="flex flex-col items-start gap-6">
                <div className="flex items-center gap-3">
                  <MdOutlineEmail className="size-4" />
                  <div className="flex flex-col items-start">
                    <p>Email:</p>
                    <p>support@movieZ.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FiPhone className="size-4" />
                  <div className="flex flex-col items-start">
                    <p>Phone:</p>
                    <p>+976 (11) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3 text-[14px]">
              <p>Follow us </p>
              <div className="flex items-center gap-3">
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Instagram</p>
                <p>Youtube</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
