import Container from "../components/container";
import Footer from "@/components/footer";
import BottomBar from "@/components/footer2"
import Image from "next/image";
import RightBar from "@/components/rightbar";
import LeftBar from "@/components/leftbar";
import Dropdown from "@/components/dropdown";
import Midbar from "@/components/midbar";

const Index = () => {
  return (
    <Container>
      <Dropdown/>
      <div className=" flex flex-col md:flex-row  justify-center gap-4">
      <LeftBar />
      <Midbar/>
      <RightBar />
      </div>
      <Footer />
      <BottomBar />
      
    </Container>
  );
};

export default Index;
