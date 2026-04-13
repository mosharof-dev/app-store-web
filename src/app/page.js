
import Banner from "@/Components/Home/Banner";
import Stats from "@/Components/Home/Stats";
import TrandingApps from "@/Components/Home/TrandingApps";
import LoadingSpinner from "@/Components/LoadingSpinner/LoadingSpinner";
import useApps from "@/Hooks/useApps";
import { HashLoader } from "react-spinners";


export default function Home() {
  
  return (
  <>
   <Banner/>
    <Stats/>
    <TrandingApps from="HomePage" />
   </>
   
  );
}
