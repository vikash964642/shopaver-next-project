import FeaturesQuickBilling from './section/FeaturesQuickBilling';
import Herosection from './section/Herosection';
import QuickBillingTitle from './section/QuickBillingTitle';
import Video from './section/Video';
import BlackBox from './section/BlackBox';
import Form from '../../Component/Utils/Form';
import FAQ from './section/FAQ';
import Service from './section/Services.jsx';

export const metadata = {
   metadataBase: new URL("https://shopaver.com"),
  title: " Easy and Quick Billing Software for Retail Businesses.",
  description:
    "We offer easy & quick billing software for retail businesses. Enjoy free GST invoicing and get the best invoicing software designed for small businesses!",
       alternates: {
    canonical: "/quick-billing-software", 
  },
};

function QuickBilling() {
  return (
    <div>

      <Herosection/>
      <Video/>
      <QuickBillingTitle/>
      <FeaturesQuickBilling/>
      <BlackBox/>
      <Form from={"QuickBilling"}/>
      <FAQ/>
      <Service/>
    </div>
  )
}

export default QuickBilling

