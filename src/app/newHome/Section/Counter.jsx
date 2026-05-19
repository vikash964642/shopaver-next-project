"use client"
// import CountUp from "react-countup";
import dynamic from "next/dynamic";

const CountUp = dynamic(() => import("react-countup"), { ssr: false });
export default function Counter() {
  return (
    <div className="max-w-[1850px] mx-32 mt-[124px]">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[30px] px-[60px] lg:px-[120px]">
<div className="h-[130px] lg:h-[200px] flex flex-col gap-[5px] justify-center items-center rounded-[24px] border-[0.8px] border-[#DADAFF] bg-[#F8F8FF]">
<h1 className="text-[#5801B7] text-[3.125rem] lg:text-[4.062rem] font-bold">
    <CountUp
          start={0}
          end={75}
          duration={2}
          enableScrollSpy={true}
          scrollSpyOnce={true}
        />x
</h1>
        <p className="text-[#525252] text-[0.881rem] lg:text-[1.125rem] font-medium">Sales Growth</p>
</div>
<div className="h-[130px] lg:h-[200px]  flex flex-col gap-[5px] justify-center items-center rounded-[24px] border-[0.8px] border-[#DADAFF] bg-[#F8F8FF]">
<h1 className="text-[#5801B7] text-[3.125rem] lg:text-[4.062rem] font-bold">
    <CountUp
          start={0}
          end={70}
          duration={2}
          enableScrollSpy={true}
          scrollSpyOnce={true}
        />%
</h1>
        <p className="text-[#525252] text-[0.881rem] lg:text-[1.125rem] font-medium">Faster Business Operations</p>
</div>
<div className="h-[130px] lg:h-[200px] flex flex-col gap-[5px] justify-center items-center rounded-[24px] border-[0.8px] border-[#DADAFF] bg-[#F8F8FF]">
<h1 className="text-[#5801B7] text-[3.125rem] lg:text-[4.062rem] font-bold">
    <CountUp
          start={0}
          end={90}
          duration={2}
          enableScrollSpy={true}
          scrollSpyOnce={true}
        />%
</h1>
        <p className="text-[#525252] text-[0.881rem] lg:text-[1.125rem] font-medium">Boost Customer Engagement</p>
</div>
<div className="h-[130px] lg:h-[200px] flex flex-col gap-[5px] justify-center items-center rounded-[24px] border-[0.8px] border-[#DADAFF] bg-[#F8F8FF]">
<h1 className="text-[#5801B7] text-[3.125rem] lg:text-[4.062rem] font-bold">
    <CountUp
          start={0}
          end={50}
          duration={2}
          enableScrollSpy={true}
          scrollSpyOnce={true}
        />%
</h1>
        <p className="text-[#525252] text-[0.881rem] lg:text-[1.125rem] font-medium">Less Work with AI Automation</p>
</div>
</div>
    </div>
  );
}