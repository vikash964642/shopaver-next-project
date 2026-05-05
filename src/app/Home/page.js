
import HeroSection from "./Section/HeroSection";
import HomeTitle from "./Section/HomeTitle";
import PosBilling from "./Section/PosBilling";
import QuickBilling from "./Section/QuickBilling";
import InventoryManagement from "./Section/InventoryManagement";
import DigitalKhata from "./Section/DigitalKhata";
import OnlineStore from "./Section/OnlineStore";
import WhatsappCommerce from "./Section/WhatsappCommerce";
import Marketing from "./Section/Marketing";
import FaqSection from "./Section/Faq";
import Certification from "./Section/Certification";
import Download from "./Section/Download";
import TestimonialSlider from "./Section/TestimonialSlider";
import HomeSlider from "./Section/HomeSlider";
import Counter from "./Section/Counter";
function HomePage() {
  return (
        <div className="m-auto">
          <HeroSection />
          <HomeSlider />
           {/* <HomeTitle/> */}
           <PosBilling/>
           <QuickBilling/>
           <InventoryManagement/>
           <DigitalKhata/>
           <OnlineStore/>
           <WhatsappCommerce/>
           <Marketing/>
           <TestimonialSlider/>
           <Counter />
           <FaqSection/>
           <Download/>
           <Certification/>
        </div>
  );

}

export default HomePage;
