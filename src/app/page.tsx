import Image from "next/image";
import Banner from "./_components/Home/Banner";
import Expertise from "./_components/Home/Expertise";
import Reccomendations from "./_components/Home/Reccomendations";
import Clients from "./_components/Home/Clients";
import Footer from "./_components/Common/Footer";
import Roadmap from "./_components/Home/CPJourney";
import CompetitionsJourney from "./_components/Home/CompetitionsJourney";
import CPJourney from "./_components/Home/CPJourney";

export default function Home() {
  
  return (
    <>
      <div className="Home-page -z-10">
        <Banner/>
        <Expertise/>
        <CompetitionsJourney/>

        {/* <CPJourney/> */}
        {/* <Reccomendations/> */}
        {/* <Clients/> */}
        <Footer/>
      </div>
    </>
  );
}
