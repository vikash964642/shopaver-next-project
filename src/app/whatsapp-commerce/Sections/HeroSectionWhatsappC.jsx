import HerosectionBox from "../../../Component/Utils/HerosectionBox";
import Link from "next/link";
function HeroSectionWhatsappC() {
  return (
    <div>
      <HerosectionBox padding={'pl-[51px] pr-[51px]'} head={'WhatsApp Commerce'} para={' Say goodbye to slow sales! Shopaver WhatsApp Business helps you manage, sell, and grow 3X faster—engage better and grow faster for small businesses. '} subhead={'Boost Your Sales & Manage Your Catalogue with Our Whatsapp Commerce'} button={<Link href="/contact-us">Get Free Demo</Link>} />
    </div>
  )
}

export default HeroSectionWhatsappC