import HeroSection from "./Section/HeroSection";
import ControllBusiness from "./Section/ControllBusiness";
import ImportantNotes from "./Section/ImportantNotes";
import UpgradeBusiness from "./Section/UpgradeBusiness";
import Form from '../../Component/Utils/Form';
import Faq from './Section/FAQ';
import StratFreeTrial from'./Section/StratFreeTrial';
export const metadata = {
  metadataBase: new URL("https://shopaver.com"),
  title: "Shopaver Pricing Plans – Best POS & Inventory Software",
  description: "Explore Shopaver POS pricing plans. Manage billing, inventory & GST easily. बजट में powerful software – try free now",
   alternates: {
    canonical: "/pricing-plan", 
  },
};


function PricingPlan() {
  return (
    <div>
       <HeroSection/>
       {/* <ControllBusiness/> */}
       <UpgradeBusiness/>
       <StratFreeTrial />
         <Faq />
        <ImportantNotes/>
      <Form from={"PricingPage"}/>
    
       
    </div>
  )
}

export default PricingPlan