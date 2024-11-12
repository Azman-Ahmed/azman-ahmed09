import Image from "next/image";
import Banner from "./_components/HomeComponents/Banner";
import Expertise from "./_components/HomeComponents/Expertise";
import Reccomendations from "./_components/HomeComponents/Reccomendations";
import Clients from "./_components/HomeComponents/Clients";
import Footer from "./_components/HomeComponents/Footer";

export default function Home() {
  return (
    <>
      <div className="Home-page -z-10">
        <Banner/>
        <Expertise/>
        <Reccomendations/>
        <Clients/>
        <Footer/>
      </div>
    </>
  );
}
