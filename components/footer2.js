import { useRouter } from "next/router";

const BottomBar = () => {

    const router = useRouter();

  return (
    <div className="fixed bottom-[0px] left-[0px] rounded-t-3xs rounded-b-none bg-white w-full flex flex-row items-center justify-center py-2.5 px-0 box-border gap-[10px] lg:hidden">
    <div className="flex flex-row items-center justify-center z-[0]">
      <div className="flex flex-row items-start justify-center gap-[35px]">
        <img
          className="relative rounded-md w-[38px] h-[38px] overflow-hidden shrink-0"
          alt=""
          src="/icons4.svg"
          onClick={() => router.push('/')}
        />
        <img
          className="relative rounded-md w-9 h-9 overflow-hidden shrink-0 cursor-pointer"
          alt=""
          src="/icons5.svg"
          onClick={() => router.push('/dashboard')}
        />
        <img
          className="relative rounded-md w-9 h-9 overflow-hidden shrink-0 hidden"
          alt=""
          src="/icons.svg"
        />
        <img
          className="relative rounded-md w-9 h-9 hidden"
          alt=""
          src="/icons1.svg"
        />
        <img
          className="relative rounded-md w-9 h-9 hidden"
          alt=""
          src="/icons2.svg"
        />
        <img
          className="relative rounded-md w-9 h-9 hidden"
          alt=""
          src="/icons3.svg"
        />
        <img
          className="relative rounded-md w-[34px] h-[34px]"
          alt=""
          src="/icons6.svg"
        />
        <img
          className="relative rounded-md w-9 h-9"
          alt=""
          src="/icons7.svg"
        />
        <img
          className="relative rounded-md w-9 h-9"
          alt=""
          src="/icons8.svg"
        />
      </div>
    </div>
    <img
      className=" my-0 mx-[!important] bottom-[20px] left-[17px] rounded-md w-9 h-9 hidden z-[1]"
      alt=""
      src="/frame-767.svg"
    />
  </div>
  )
}

export default BottomBar;