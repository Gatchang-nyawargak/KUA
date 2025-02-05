import Navbar from "./compnents/Navbar";
import Landingpage from "./compnents/Landingpage";
import About from "./compnents/About";
import Footer from "./compnents/Footer";
import Services from "./compnents/Services";
import Team from "./compnents/Team";
import CoreValues from "./compnents/CoreValues";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Landingpage/>
      <About/>
      <CoreValues/>
      <Services/>
      <Team/>
      <Footer/>
    </div>
  );
}
