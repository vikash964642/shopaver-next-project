import HerosectionBox from "../../../Component/Utils/HerosectionBox";
import Link from "next/link";

function HeroSectionOnlineStore() {
  return (
    
         <div>
      <HerosectionBox padding={'pl-[31px] pr-[55px] lg:pr-0'} head={'Online Store'} para={'Take your business online in minutes with Shopaver. Whether you’re running a retail shop, restaurant, or any other business, get all the tools you need to start selling quickly and easily.'} subhead={'Create an Online Store to Grow Your Business '} button={<Link href="/contact-us">Get Free Demo</Link>} />
    </div>
    
  )
}

export default HeroSectionOnlineStore