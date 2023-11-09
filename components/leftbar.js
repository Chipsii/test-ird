import { useRouter } from "next/router";

const LeftBar = () => {
  const router = useRouter();
  return (
    <div>
      <div className="hidden rounded-mini bg-white w-fill h-[830px] lg:flex flex-col items-start justify-start lg:p-[15px] lg:gap-[15px]">
        <div className="rounded-mini bg-white w-[300px]  flex flex-col items-start justify-start p-[15px] box-border relative gap-[15px] text-xs text-tomato-100 font-inter">
          <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-start p-1 gap-[10px] z-[0] text-sm border-[2px] border-solid border-tomato-200">
            <div className="flex-1 rounded-6xs bg-tomato-400 flex flex-row items-center justify-center py-2.5 px-1 hover:opacity-70 cursor-pointer active:scale-90 "
            >
              <div className="relative font-semibold ">Fruits</div>
            </div>
            <div className="flex-1 rounded-6xs bg-white flex flex-row items-center justify-center py-2.5 px-1 text-gray-200 cursor-pointer">
              <div className="relative">Vegetables</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between ">
          <input
            className="border-solid border-2 rounded-3xs px-3 font-inter text-xs w-full h-8 flex flex-col items-center justify-between border-whitesmoke-100"
            placeholder="Search by Fruits Name"
            type="text"
          />
          <img
            className=" flex flex-row cursor-pointer h-7 ml-[-35px] hover:opacity-80 active:scale-90"
            alt=""
            src="/frame-741.svg"
            onClick={() => router.push("/404")}
          />
        </div>

        <div className="self-stretch overflow-auto flex flex-col items-start justify-start gap-[10px] z-[2]">
          <div className="  font-medium">Fruits List</div>
          <div className=" flex flex-col items-start justify-start gap-[5px] text-sm">
            <button className=" cursor-pointer py-[9px] px-2.5 rounded-6xs flex flex-row items-center justify-start gap-[10px] bg-transparent active:scale-90">
              <div className=" flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                  <div className="relative rounded-2xs  z-[0]" />
                  <img
                    className=" my-0 mx-[!important] top-[calc(50%-_21.4px)] left-[calc(50%-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                    alt=""
                    src="/Frame 714.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className=" relative text-sm leading-[100%] font-medium font-inter text-gray-100 text-left">
                    Oranges
                  </div>
                  <div className="relative text-xs font-inter  text-left">
                    Vitamin C
                  </div>
                </div>
              </div>
            </button>
            <button className="cursor-pointer  py-[9px] px-2.5  self-stretch rounded-6xs flex flex-row items-center justify-start gap-[10px] bg-transparent active:scale-90">
              <div className=" flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                  <div className="relative rounded-2xs z-[0]" />
                  <img
                    className=" my-0 mx-[!important] top-[calc(50%-_21.4px)] left-[calc(50%-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                    alt=""
                    src="/Frame 716.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative text-sm leading-[100%] font-medium font-inter text-gray-100 text-left">
                    Apples
                  </div>
                  <div className="self-stretch relative text-xs font-inter  text-left">
                    Vitamin C
                  </div>
                </div>
              </div>
            </button>
            <button className="cursor-pointer border-none py-[9px] px-2.5  self-stretch rounded-6xs flex flex-row items-center justify-start gap-[10px] bg-transparent active:scale-90">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                  <div className="relative rounded-2xs z-[0]" />
                  <img
                    className=" my-0 mx-[!important] top-[calc(50%-_21.4px)] left-[calc(50%-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                    alt=""
                    src="/Frame 715.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative text-sm leading-[100%] font-medium font-inter text-gray-100 text-left">
                    Avocado
                  </div>
                  <div className="self-stretch relative text-xs font-inter  text-left">
                    Vitamin B6
                  </div>
                </div>
              </div>
            </button>
            <button className="cursor-pointer border-none py-[9px] px-2.5  self-stretch rounded-6xs flex flex-row items-center justify-start gap-[10px] bg-transparent active:scale-90">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                  <div className="relative rounded-2xs z-[0]" />
                  <img
                    className=" my-0 mx-[!important] top-[calc(50%-_21.4px)] left-[calc(50%-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                    alt=""
                    src="/Frame 715.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative text-sm leading-[100%] font-medium font-inter text-gray-100 text-left">
                    Strawberries
                  </div>
                  <div className="self-stretch relative text-xs font-inter  text-left">
                    Vitamin C
                  </div>
                </div>
              </div>
            </button>
            <button className="cursor-pointer border-none py-[9px] px-2.5  self-stretch rounded-6xs flex flex-row items-center justify-start gap-[10px] bg-transparent active:scale-90">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                  <div className="relative rounded-2xs z-[0]" />
                  <img
                    className=" my-0 mx-[!important] top-[calc(50%-_21.4px)] left-[calc(50%-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                    alt=""
                    src="/Frame 715.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative text-sm leading-[100%] font-medium font-inter text-gray-100 text-left">
                   Mangoes
                  </div>
                  <div className="self-stretch relative text-xs font-inter  text-left">
                    Vitamin A, C
                  </div>
                </div>
              </div>
            </button>
            <button className="cursor-pointer border-none py-[9px] px-2.5  self-stretch rounded-6xs flex flex-row items-center justify-start gap-[10px] bg-transparent active:scale-90">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                  <div className="relative rounded-2xs z-[0]" />
                  <img
                    className=" my-0 mx-[!important] top-[calc(50%-_21.4px)] left-[calc(50%-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                    alt=""
                    src="/Frame 715.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative text-sm leading-[100%] font-medium font-inter text-gray-100 text-left">
                    Blueberries
                  </div>
                  <div className="self-stretch relative text-xs font-inter  text-left">
                    Vitamin C, K
                  </div>
                </div>
              </div>
            </button>
            <button className="cursor-pointer border-none py-[9px] px-2.5  self-stretch rounded-6xs flex flex-row items-center justify-start gap-[10px] bg-transparent active:scale-90">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                  <div className="relative rounded-2xs z-[0]" />
                  <img
                    className=" my-0 mx-[!important] top-[calc(50%-_21.4px)] left-[calc(50%-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                    alt=""
                    src="/Frame 715.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative text-sm leading-[100%] font-medium font-inter text-gray-100 text-left">
                   Grapes
                  </div>
                  <div className="self-stretch relative text-xs font-inter  text-left">
                    Vitamin C, K
                  </div>
                </div>
              </div>
            </button>
            <button className="cursor-pointer border-none py-[9px] px-2.5  self-stretch rounded-6xs flex flex-row items-center justify-start gap-[10px] bg-transparent active:scale-90">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                  <div className="relative rounded-2xs z-[0]" />
                  <img
                    className=" my-0 mx-[!important] top-[calc(50%-_21.4px)] left-[calc(50%-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                    alt=""
                    src="/Frame 715.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative text-sm leading-[100%] font-medium font-inter text-gray-100 text-left">
                    Pinepples
                  </div>
                  <div className="self-stretch relative text-xs font-inter  text-left">
                    Vitamin C, K
                  </div>
                </div>
              </div>
            </button>
            <button className="cursor-pointer border-none py-[9px] px-2.5  self-stretch rounded-6xs flex flex-row items-center justify-start gap-[10px] bg-transparent active:scale-90">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                  <div className="relative rounded-2xs z-[0]" />
                  <img
                    className=" my-0 mx-[!important] top-[calc(50%-_21.4px)] left-[calc(50%-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                    alt=""
                    src="/Frame 715.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative text-sm leading-[100%] font-medium font-inter text-gray-100 text-left">
                    Bananas
                  </div>
                  <div className="self-stretch relative text-xs font-inter  text-left">
                    Vitamin B6, C
                  </div>
                </div>
              </div>
            </button>
            <button className="cursor-pointer border-none py-[9px] px-2.5  self-stretch rounded-6xs flex flex-row items-center justify-start gap-[10px] bg-transparent active:scale-90">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                  <div className="relative rounded-2xs z-[0]" />
                  <img
                    className=" my-0 mx-[!important] top-[calc(50%-_21.4px)] left-[calc(50%-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                    alt=""
                    src="/Frame 715.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative text-sm leading-[100%] font-medium font-inter text-gray-100 text-left">
                    Bananas
                  </div>
                  <div className="self-stretch relative text-xs font-inter  text-left">
                    Vitamin B6, C
                  </div>
                </div>
              </div>
            </button>
            <button className="cursor-pointer border-none py-[9px] px-2.5  self-stretch rounded-6xs flex flex-row items-center justify-start gap-[10px] bg-transparent active:scale-90">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                  <div className="relative rounded-2xs z-[0]" />
                  <img
                    className=" my-0 mx-[!important] top-[calc(50%-_21.4px)] left-[calc(50%-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                    alt=""
                    src="/Frame 715.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative text-sm leading-[100%] font-medium font-inter text-gray-100 text-left">
                    Bananas
                  </div>
                  <div className="self-stretch relative text-xs font-inter  text-left">
                    Vitamin B6, C
                  </div>
                </div>
              </div>
            </button>
            <button className="cursor-pointer border-none py-[9px] px-2.5  self-stretch rounded-6xs flex flex-row items-center justify-start gap-[10px] bg-transparent active:scale-90">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                  <div className="relative rounded-2xs z-[0]" />
                  <img
                    className=" my-0 mx-[!important] top-[calc(50%-_21.4px)] left-[calc(50%-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                    alt=""
                    src="/Frame 715.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative text-sm leading-[100%] font-medium font-inter text-gray-100 text-left">
                    Bananas
                  </div>
                  <div className="self-stretch relative text-xs font-inter  text-left">
                    Vitamin B6, C
                  </div>
                </div>
              </div>
            </button>
            <button className="cursor-pointer border-none py-[9px] px-2.5  self-stretch rounded-6xs flex flex-row items-center justify-start gap-[10px] bg-transparent active:scale-90">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                  <div className="relative rounded-2xs z-[0]" />
                  <img
                    className=" my-0 mx-[!important] top-[calc(50%-_21.4px)] left-[calc(50%-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                    alt=""
                    src="/Frame 715.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative text-sm leading-[100%] font-medium font-inter text-gray-100 text-left">
                    Bananas
                  </div>
                  <div className="self-stretch relative text-xs font-inter  text-left">
                    Vitamin B6, C
                  </div>
                </div>
              </div>
            </button>
            <button className="cursor-pointer border-none py-[9px] px-2.5  self-stretch rounded-6xs flex flex-row items-center justify-start gap-[10px] bg-transparent active:scale-90">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                  <div className="relative rounded-2xs z-[0]" />
                  <img
                    className=" my-0 mx-[!important] top-[calc(50%-_21.4px)] left-[calc(50%-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                    alt=""
                    src="/Frame 715.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative text-sm leading-[100%] font-medium font-inter text-gray-100 text-left">
                    Bananas
                  </div>
                  <div className="self-stretch relative text-xs font-inter  text-left">
                    Vitamin B6, C
                  </div>
                </div>
              </div>
            </button>
            <button className="cursor-pointer border-none py-[9px] px-2.5  self-stretch rounded-6xs flex flex-row items-center justify-start gap-[10px] bg-transparent active:scale-90">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[15px]">
                <div className="rounded-6xl flex flex-row items-center justify-center relative gap-[10px]">
                  <div className="relative rounded-2xs z-[0]" />
                  <img
                    className=" my-0 mx-[!important] top-[calc(50%-_21.4px)] left-[calc(50%-_21.8px)] w-[42.5px] h-[42.5px] object-cover z-[2]"
                    alt=""
                    src="/Frame 715.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative text-sm leading-[100%] font-medium font-inter text-gray-100 text-left">
                    Bananas
                  </div>
                  <div className="self-stretch relative text-xs font-inter  text-left">
                    Vitamin B6, C
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
