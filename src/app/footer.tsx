import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
export const Footer = ({}) => {
  return (
    <footer className="flex w-full h-[280px] py-[40px] justify-center items-start gap-[48px] bg-[#4338CA] text-[#FAFAFA] ">
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
                strokeLinecap="round"
                strokeLinejoin="round"
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
  );
};
