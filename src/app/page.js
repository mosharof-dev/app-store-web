
import Banner from "@/Components/Home/Banner";
import Stats from "@/Components/Home/Stats";
import TrandingApps from "@/Components/Home/TrandingApps";


export default function Home() {
  
  return (
  <>
   <Banner/>
    <Stats/>
    <TrandingApps from="HomePage" />
   </>
   
  );
}
