
import HerosectionBox from '@/Component/Utils/HerosectionBox';
import Link from 'next/link';

function Herosection() {
  return (
    <div>

        <HerosectionBox padding={'pl-[35px] lg:pr-[31px]'} head={"Inventory Management"} subhead={<>Take Control of Your Stock with Our Advanced Inventory Solutions</>} para={"Easily manage your stock with our cloud-based inventory system designed for small businesses. With barcode scanning and weekly growth reports, our POS software simplifies everything for you. "} button={<Link href="/contact-us">Get Free Demo</Link>}/>
    </div>
  )
}

export default Herosection