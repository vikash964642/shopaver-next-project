import HeroSection from "./Section/HeroSection";
import ControllBusiness from "./Section/ControllBusiness";
import ImportantNotes from "./Section/ImportantNotes";
import UpgradeBusiness from "./Section/UpgradeBusiness";
import Form from '@/Component/Utils/Form';
import Faq from './Section/FAQ';

export const metadata = {
  title: ": All-in-One POS Solutions for Small, Medium & Large Businesses.",
  description:
    "",
};


function PricingPlan() {
  return (
    <div>
       <HeroSection/>
       <ControllBusiness/>
       <ImportantNotes/>
       <UpgradeBusiness/>
      <Form from={"PricingPage"}/>
      <Faq />
       
    </div>
  )
}

export default PricingPlan