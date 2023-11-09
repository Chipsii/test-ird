import Image from "next/image";
import BottomBar from "@/components/footer2";
import Container from "@/components/container";


const Dashboard = () => {
  return (
    <Container>
      <div className="rounded-3xs bg-white w-full h-full flex flex-row items-center justify-center pt-[15px] px-0 pb-0 box-border gap-[10px]">
      <div className=" flex flex-row items-center justify-center">
        <div className=" w-full rounded-3xs bg-white h-screen flex flex-col items-center justify-center">
          <Image
            alt=""
            width={526}
            height={298}
            src="/image-1@2x.png"
          />
          <b className="relative leading-[130%] capitalize">
            This page is empty
          </b>
        </div>
      </div>
      </div>
      <BottomBar/>
      
    </Container>
  );
};

export default Dashboard;












// const Dashboard = () => {
//   return (
//     <div className="relative bg-white w-full h-[1850.3px] overflow-hidden text-left text-sm text-white-mode-main-text-color font-inter lg:h-full">
//       <div className="relative top-[152px] bg-whitesmoke-300  h-full lg:top-[60px] lg:left-[69.8px] lg:rounded-tl-3xl lg:rounded-tr-none lg:rounded-b-none lg:w-full lg:h-[990px]" />
//       <div className=" top-[210px] w-full flex flex-col items-start justify-start lg:top-[72px] lg:left-[calc(50%_-_559.2px)] lg:w-[1190px] lg::min-w-[700px] lg:max-w-[1190px] lg:text-left lg:text-lg">
//         <div className=" w-full rounded-3xs bg-white h-[830px] flex flex-col items-center justify-center gap-[42px]">
//           <img
//             className="relative w-[526.6px] h-[298.3px] object-cover"
//             alt=""
//             src="/image-1@2x.png"
//           />
//           <b className="relative leading-[130%] capitalize">
//             This page is empty
//           </b>
//         </div>
//       </div>
//       <div className="top-[60px] left-[0px] rounded-3xs bg-white w-[70px] h-[830px] flex flex-col items-center justify-center pt-[15px] px-0 pb-0 box-border gap-[10px]">
//         <div className="flex flex-col items-center justify-center z-[0]">
//           <ContainerButton />
//         </div>
//         <Image
//           className=" my-0 mx-[!important] bottom-[20px] left-[17px] rounded-md w-9 h-9 hidden z-[1]"
//           alt=""
//           width={9}
//           height={9}
//           src="/frame-767.svg"
//         />
//       </div>
//       <BottomBar/>
//       <MainHeader />
//     </div>
//   );
// };

// export default Dashboard;
