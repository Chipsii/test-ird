import Image from "next/image";
import Socials from "./socials";

const Midbar = () => {
  return (
    <div className=" rounded-3xs bg-white w-fit h-full flex flex-row items-center justify-center pt-[15px] gap-[10px]">
      <div className=" flex-1 flex-col items-start justify-start w-full h-full text-left text-lg font-inter p-4 ">
        <div className="self-stretch flex flex-col items-start justify-center gap-[24px]">
          <div className="  rounded-3xs flex flex-col lg:flex-row items-start justify-start gap-[10px] lg:gap-[15px]">
            <div className=" flex flex-col items-start justify-start gap-[30px] lg:gap-[30px] font-inter">
              <div className=" flex flex-row items-start justify-start text-5xl lg:text-[38px]">
                <h1 className="m-0 flex-1 relative text-[24px] leading-[130%] capitalize font-black font-inherit">
                  Health benefits of an avocado
                </h1>
              </div>
              <div className=" rounded-3xs flex flex-col items-start justify-start gap-[10px] lg:gap-[15px] ">
                <div className=" flex flex-row items-start justify-start ">
                  <b className="relative leading-[160%]">{`Supports eye health: `}</b>
                </div>
                <div className=" relative text-xs leading-[160%] lg:text-mini">
                  Spinach contains high levels of vitamin A and other
                  antioxidants that help maintain healthy vision and protect
                  against age-related macular degeneration.
                </div>
              </div>
              <div className=" rounded-3xs flex flex-col items-start justify-start gap-[10px] lg:gap-[15px] ">
                <div className=" flex flex-row items-start justify-start ">
                  <b className="leading-[160%]">{`Supports eye health: `}</b>
                </div>
                <div className=" relative flex flex-col items-center justify-center text-xs leading-[160%] lg:text-mini">
                  Spinach contains high levels of vitamin A and other
                  antioxidants that help maintain healthy vision and protect
                  against age-related macular degeneration.
                </div>
              </div>
            </div>
            <Image
              className="relative rounded-3xs max-w-full overflow-hidden h-[130px] shrink-0 object-cover lg:rounded-11xl lg:w-[520px] lg:h-80"
              alt=""
              width={520}
              height={130}
              src="/name26@2x.png"
            />
          </div>
          <div className=" rounded-3xs flex flex-col items-start justify-start gap-[10px] lg:gap-[15px]">
            <div className=" flex flex-row items-start justify-start">
              <b className="relative leading-[160%]">{`Supports eye health: `}</b>
            </div>
            <div className=" relative text-xs leading-[160%] lg:text-mini">{`Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. `}</div>
          </div>
          <div className=" flex flex-col items-start justify-start gap-[30px] text-left text-sm text-white-mode-main-text-color font-inter lg:flex-row">
            <Image
              className=" relative rounded-3xs max-w-full overflow-hidden h-[130px] shrink-0 object-cover lg:rounded-11xl lg:w-[520px] lg:h-80"
              alt=""
              width={520}
              height={130}
              src="/name27@2x.png"
            />
            <div className=" rounded-3xs flex flex-col items-start justify-start gap-[10px] lg:gap-[15px]">
              <div className=" flex flex-row items-start justify-start">
                <b className="relative leading-[160%]">{`Supports eye health: `}</b>
              </div>
              <div className=" relative text-xs leading-[160%] lg:text-mini">{`Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy `}</div>
            </div>
          </div>
        </div>
        <div className="rounded-xl flex flex-row items-center justify-start lg:font-sf-subheadline-semibold">
          <div className="flex flex-col items-start justify-center gap-[10px]">
            <div className="relative leading-[160%] lg:tracking-[0.01em] lg:leadnig-[190%] lg:capitalize lg:font-black">
              Was this helpful?
            </div>
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <img
                className="relative w-7 h-7 overflow-hidden shrink-0 cursor-pointer"
                alt=""
                src="/star2.svg"
              />
              <img
                className="relative w-7 h-7 overflow-hidden shrink-0 cursor-pointer"
                alt=""
                src="/star2.svg"
              />
              <img
                className="relative w-7 h-7 overflow-hidden shrink-0 cursor-pointer"
                alt=""
                src="/star2.svg"
              />
              <img
                className="relative w-7 h-7 overflow-hidden shrink-0 cursor-pointer"
                alt=""
                src="/star2.svg"
              />
              <img
                className="relative w-7 h-7 overflow-hidden shrink-0 cursor-pointer opacity-[0.5]"
                alt=""
                src="/star3.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Midbar;
