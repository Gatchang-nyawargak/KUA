import Navbar from "./compnents/Navbar";
import Landingpage from "./compnents/Landingpage";
import About from "./compnents/About";
import Footer from "./compnents/Footer";
import Team from "./compnents/Team";
import CoreValues from "./compnents/CoreValues";
import NewsletterSubscription from "./compnents/NewsletterSubscription";
import InitiativeGrid from "./compnents/Products";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Landingpage/>
      <About/>
      <CoreValues/>
      <InitiativeGrid/>
      <Team/>
      <NewsletterSubscription/>
      <Footer/>
    </div>
  );
}
