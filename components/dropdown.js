import { useRouter } from "next/router";
import React from "react";

const Dropdown = () => {
  const router = useRouter();
  return (
    <div className="self-stretch flex flex-col items-center justify-center pb-1 lg:hidden">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-black text-left bg-white focus:ring-4 focus:outline-none focus:ring-tomato-300 font-medium rounded-lg text-sm font-inter px-4 py-2.5 inline-flex items-center w-full "
        type="button"
        onClick={() => {
          router.push("/404");
        }}
      >
        Select Food Item
        <svg
          className="w-2.5 h-2.5 ml-auto cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      
    </div>
  );
};

export default Dropdown;
