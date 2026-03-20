import Video from './Sections/Video';
import BlackBox from './Sections/BlackBox';
import FeaturesOnlineStore from './Sections/FeaturesOnlineStore';
import HeroSectionOnlineStore from './Sections/HeroSectionOnlineStore'
import OnlineStoreTitle from './Sections/OnlineStoreTitle';
import Form from '../../Component/Utils/Form';
import FAQ from './Sections/FAQ';
import Services from './Sections/Services';

export const metadata = {
  title: " Create Online Store Easily and Start Selling Fast Today",
  description:
    "Create your online store fast with Shopaver. Sell products, manage orders & grow your business - all in one easy-to-use platform. Start your sale today!",
    url:"https://shopaver.com/online-store"
};
function OnlineStore() {
  return (
    <div>

      <HeroSectionOnlineStore/>  
      <Video/>
      <OnlineStoreTitle/>
      <FeaturesOnlineStore/>
      <BlackBox/>
      <Form from={"OnlineStore"}/>
      <FAQ/>
      <Services/>

    </div>
  )
}

export default OnlineStore