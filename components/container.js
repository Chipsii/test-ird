import Image from "next/image";
import { useRouter } from "next/router";

const Container = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      {/* navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b  ">
        <div className="px-3  lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              {/* <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
                  </button> */}
              <a href="/" className="flex ml-2 md:mr-24">
                <Image
                  src="foodnetwork-1.svg"
                  alt="FlowBite Logo"
                  width={72}
                  height={36}
                />
              </a>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-between">
              <input
                className="hidden lg:border-solid my-1 border-2 border-gray-400 rounded-3xs px-3 font-inter text-xs bg-[transparent] w-[390px] h-10 lg:flex items-center justify-center"
                placeholder="Search Best Food"
                type="text"
              />
              <img
                className="hidden lg:flex flex-row ml-[-50px] w-12 h-9 cursor-pointer hover:opacity-80 active:scale-90"
                alt=""
                src="/frame-741.svg"
                onClick={() => router.push("/404")}
              />
            </div>

            <div className="flex items-center">
              <div className="flex items-center ml-3"></div>
              <div className="flex items-center ml-3">
                <div>
                  <button
                    type="button"
                    className="hidden lg:flex text-sm bg-gray-800 hover:opacity-80 active:scale-90 cursor-pointer"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <Image
                      className="pt-2"
                      src="Frame 767.svg"
                      alt="light mode"
                      width={32}
                      height={32}
                    />
                  </button>
                </div>
              </div>
              <div className="flex items-center ml-3">
                <div>
                  <button
                    type="button"
                    className="hidden lg:flex text-sm bg-gray-800 hover:opacity-80 active:scale-90 cursor-pointer"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <Image
                      className="pt-2 "
                      src="frame-769.svg"
                      alt="nintendo"
                      width={32}
                      height={32}
                    />
                  </button>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="lg:hidden flex text-sm bg-gray-800 hover:opacity-80 active:scale-90 cursor-pointer"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <Image
                    className="pt-2"
                    src="Frame 741.svg"
                    alt="search"
                    width={32}
                    height={32}
                  />
                </button>
              </div>
              <div className="flex items-center ml-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <Image
                      className="pt-2 hover:opacity-80 active:scale-90"
                      src="frame-765.svg"
                      alt="menu"
                      width={32}
                      height={32}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* sidebar */}
      <aside
        id="logo-sidebar"
        className="hidden md:flex md:fixed lg:left-2 lg:top-[110px] md:top-0 w-[38px] lg:h-screen lg:pt-20 lg:transition-transform lg:bg-white lg:border-r lg:border-gray-200 "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <div className="hidden lg:flex flex-col items-center justify-start gap-[35px]">
            <button
              className="cursor-pointer p-0 bg-tomato-400 relative rounded-md box-border w-[38px] h-[38px] overflow-hidden shrink-0 border-[2px] border-solid border-tomato-400 active:bg-gray-900 active:border-gray-900"
              onClick={() => router.push("/")}
            >
              <img
                className="  w-[22px] h-[22px] overflow-hidden active:scale-90"
                alt=""
                src="/home011.svg"
              />
            </button>
            <button
              className="cursor-pointer p-0 bg-gray-900 relative rounded-md w-9 h-9 border-[2px] border-solid border-white overflow-hidden active:bg-tomato-400 active:border-tomato-400  "
              onClick={() => router.push("/404")}
            >
              <div className="cursor-pointer [border:none] p-0 bg-[transparent]  w-[30px] h-[22px] overflow-hidden">
                <img
                  className="flex-1 px-1.5  overflow-hidden active:scale-90"
                  alt=""
                  src="/dashboardcircle.svg"
                />
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-gray-900 relative rounded-md w-[34px] h-[34px]">
              <img
                className=" flex-1 px-1.5 overflow-hidden max-h-full active:scale-90"
                alt=""
                src="/name32.svg"
              />
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-gray-900 relative rounded-md w-9 h-9">
              <img
                className=" flex-1 px-1.5 overflow-hidden max-h-full active:scale-90"
                alt=""
                src="/videoreplay.svg"
              />
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-gray-900 relative rounded-md w-9 h-9">
              <img
                className=" flex-1 px-1.5 overflow-hidden max-h-full active:scale-90"
                alt=""
                src="/more01.svg"
              />
            </button>
          </div>
        </div>
      </aside>
      {/* main content */}
      <div className="lg:p-4 rounded-lg my-[38px] mr-9 lg:m-[38px]">
        <div className="p-4 bg-[#EEF0F2] border-gray-200 w-full h-full rounded-xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
