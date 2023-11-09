
const Footer = () => {
  return (
    <div className="flex flex-row items-start justify-start py-2.5 px-0 gap-[22px] lg:hidden">
    <img className="relative w-7 h-7 cursor-pointer active:opacity-80" alt="" src="/facebook.svg" />
    <img className="relative w-7 h-7 cursor-pointer active:opacity-80" alt="" src="/linkedin.svg" />
    <img className="relative w-7 h-7 cursor-pointer active:opacity-80" alt="" src="/twitter.svg" />
    <div className="relative w-7 h-7">
      <img
        className=" h-full w-full rounded-31xl cursor-pointer active:opacity-80 max-w-full overflow-hidden max-h-full"
        alt=""
        src="/link.svg"
      />
    </div>
  </div>
  )
}

export default Footer;