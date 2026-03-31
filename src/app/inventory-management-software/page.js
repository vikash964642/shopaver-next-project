
import HeroSection from './Section/Herosection';
import Video from './Section/Video';
import InventoryFeatures from './Section/InventoryFeatures';
import BlackBox from './Section/BlackBox';
import Form from '../../Component/Utils/Form'
import KhataTitle from './Section/KhataTitle';
import FAQ from './Section/FAQ';
import Service from './Section/Services';

export const metadata = {
   metadataBase: new URL("https://shopaver.com"),
  title: " Top Inventory Management Software for Businesses of All Sizes",
  description:
    "Looking for top inventory management software for businesses of all sizes. Automate stock control, reduce waste, track expiry, and get low stock alerts.",
       alternates: {
    canonical: "/inventory-management-software", 
  },
};
function Inventory() {
  return (
    <>

    <HeroSection/>
    <Video/>
    <KhataTitle/>
    <InventoryFeatures/>
    <BlackBox/>
    <Form from={"Inventory"}/>
    <FAQ/>
    <Service/>
    
    </>
  )
}

export default Inventory