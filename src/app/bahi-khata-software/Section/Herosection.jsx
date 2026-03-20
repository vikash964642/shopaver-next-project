
import HerosectionBox from '../../../Component/Utils/HerosectionBox';
// import { Link } from 'react-router-dom';
import Link from 'next/link';

function Khatapage() {
  return (
    <HerosectionBox padding={'pl-[52px] pr-[45px]'} head={'Digital Bahi Khata'} subhead={<>Your Business Accounting Made Easy with Our Digital Khata </>} para={"Say goodbye to manual paperwork and welcome easy business accounting. With Digital Bahi Khata, you can record, track, and manage all your customer transactions with just a few taps anytime, anywhere."} button={<Link href="/contact-us">Get Free Demo</Link>}/>
  )
}

export default Khatapage