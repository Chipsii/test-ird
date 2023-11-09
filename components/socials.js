const Socials = () => {
  return (
    <div className="hidden lg:flex flex-col items-start justify-start py-[60px] px-0 gap-[22px]">
      <a className="[text-decoration:none] relative w-7 h-7 cursor-pointer">
        <img
          className=" h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-31xl max-w-full overflow-hidden max-h-full"
          alt=""
          src="/name19.svg"
        />
        <img
          className=" h-3/6 w-6/12 top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/name20.svg"
        />
      </a>
      <a className="[text-decoration:none] relative w-7 h-7 cursor-pointer">
        <img
          className=" h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-31xl max-w-full overflow-hidden max-h-full"
          alt=""
          src="/name21.svg"
        />
        <img
          className=" h-3/6 w-6/12 top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/name22.svg"
        />
      </a>
      <a className="[text-decoration:none] relative w-7 h-7 cursor-pointer">
        <img
          className=" h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-31xl max-w-full overflow-hidden max-h-full"
          alt=""
          src="/name23.svg"
        />
        <img
          className=" h-[40.71%] w-6/12 top-[29.64%] right-[25%] bottom-[29.64%] left-[25%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/name24.svg"
        />
      </a>
      <div className="w-7 h-7 flex flex-col items-center justify-end cursor-pointer">
        <img
          className="relative rounded-31xl w-7 h-7"
          alt=""
          src="/name25.svg"
        />
        <div className="flex flex-row items-start justify-start gap-[2px] mt-[-15px]">
          <div className="relative rounded-[50%] bg-white w-1 h-1 mb-3" />
          <div className="relative rounded-[50%] bg-white w-1 h-1" />
          <div className="relative rounded-[50%] bg-white w-1 h-1" />
        </div>
      </div>
    </div>
  );
};

export default Socials;
