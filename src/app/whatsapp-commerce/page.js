import HeroSectionWhatsappC from './Sections/HeroSectionWhatsappC';
import Video from './Sections/Video';
import WhatsappCTitle from './Sections/WhatsappCTitle';
import FeaturesWhatsappC from './Sections/FeaturesWhatsappC';
import Services from './Sections/Services';
import BlackBox from './Sections/BlackBox';
import Form from '@/component/Utils/Form';
import FaqSection from './Sections/FAQ';

export const metadata = {
  title: " WhatsApp Commerce: Boost Sales and Connect with Customers",
  description:
    "Learn how to sell online with WhatsApp Commerce. Explore best practices for setting up your business account, creating catalogs, and engaging customers.",
    url:"https://shopaver.com/whatsapp-commerce"
};

function WhatsappCommerce() {
  return (
    <div>
        <HeroSectionWhatsappC/>
        <Video/>
        <WhatsappCTitle/>
        <FeaturesWhatsappC/>
        <BlackBox/>
        <Form from={"WhatsappCommerce"}/>
        <FaqSection/>
        <Services/>
       
    </div>
  )
}

export default WhatsappCommerce