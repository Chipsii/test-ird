import { Switch, FormControlLabel } from "@mui/material";

const RightBar = () => {
  return (
    <div className="hidden lg:rounded-3xs lg:bg-white lg:w-[200px] h-full lg:flex flex-col items-start justify-start p-[15px] text-left text-base text-gray-200 font-inter">
      <div className="flex flex-col items-center justify-start p-1 ">
        <div className="rounded-4xs flex flex-col items-center justify-start px-2.5 py-1 gap-[24px] text-sm text-tomato-100 border-[1.5px] border-solid border-gray-500 active:hidden">
          <div className="self-stretch flex flex-row items-center justify-between ">
            <div className="flex flex-row items-center justify-start gap-[15px]">
              <img
                className="relative w-5 h-5 overflow-hidden"
                alt=""
                src="/textsquare.svg"
              />
              <div className="relative font-semibold">Settings</div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent]  overflow-hidden  active:hidden">
              <img
                className="max-w-full overflow-hidden max-h-full"
                alt=""
                src="/name17.svg"
              />
            </button>
          </div>
          <div className=" flex flex-col items-start justify-start py-0 pr-0 pl-[5px] gap-[20px] text-gray-200">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch flex flex-row items-center justify-between ">
                <div className="flex-1 font-medium">
                  Paragraph font size
                </div>
                <div className=" text-xs font-medium text-tomato-100 text-right">
                  19
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start relative">
                <div className="self-stretch rounded-3xs bg-gray-500 h-1" />
                <div className=" my-[-4px] w-20 h-1 rounded-3xs bg-tomato-100" />
                <div className=" my-[-2.5px] mx-[70px] rounded-3xs bg-tomato-100 w-2.5 h-2.5 z-[2]" />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch relative font-medium">
                Choose Vitamin Type
              </div>
              <div className="self-stretch rounded-8xs bg-gray-500 overflow-hidden flex flex-row items-end justify-between py-2.5 px-[15px] text-xs cursor-pointer hover:opacity-70 active:opacity-100">
                <div className="relative">All Vitamin</div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-3.5 h-3.5 overflow-hidden shrink-0">
                  <img
                    className=" h-2/5 w-[69.29%] top-[32.14%] right-[15%] bottom-[27.86%] left-[15.71%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/name18.svg"
                  />
                </button>
              </div>
            </div>
            <div className=" flex flex-col items-start justify-start py-[5px]">
              <div className=" flex flex-row items-start justify-start gap-[10px]">
                <div className="flex-1 relative font-medium">
                  Turn Off Subtitle
                </div>
                <FormControlLabel control={<Switch color="primary" />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
