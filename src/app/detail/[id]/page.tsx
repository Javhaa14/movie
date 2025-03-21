"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigation } from "@/app/navigation";
import { Footer } from "../../footer";
import { Staffinfo } from "@/app/mycomponents/staffinfo";

export default function Detail({ params: { id } }: any) {
  console.log(id, "hi");
  return (
    <div className="w-screen h-screen">
      <Navigation />
      {/* <iframe
        src="https://youtube.com/embed/g64CUG2XQSw?si=UMWGenzXIx0OnlcK"
        title="hahah"
        className="h-[100%] w-auto aspect-video"></iframe> */}
      <div className="flex w-[1080px] flex-col items-start gap-6 text-[#09090B]">
        <div className="flex pr-3 justify-between items-center self-stretch">
          <div className="flex w-[211px] flex-col items-start gap-1">
            <p className="self-stretch text-[36px] font-bold"></p>
            <p className="self-stretch text-[18px]"></p>
          </div>
          <div className="flex flex-col items-start gap-0">
            <p className="text-3 font-medium"></p>
            <div className="flex h-[48px] items-center gap-1 self-stretch">
              <div className="flex pt-2 items-start gap-[10px] self-stretch">
                <img className="size-[28px]" src="star.svg"></img>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex flex-row items-center justify-center">
                  <p className="text-[18px] font-semibold"></p>
                  <p className="text-[16px] text-[#71717A]">/10</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <p className="text-[12px] text-[#71717A]"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 self-stretch"></div>
      </div>
      <div className="flex w-[1080px] flex-col items-start gap-5 text-[#09090B]">
        <div className="flex items-center gap-3"></div>
        <p className="self-stretch text-[16px]"></p>
        <div className="flex flex-col items-start gap-5 self-stretch">
          <Staffinfo id={id} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
