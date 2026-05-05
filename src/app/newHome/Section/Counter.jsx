"use client"
import CountUp from "react-countup";

export default function Counter() {
  return (
    <div className="max-w-5xl mx-auto mt-[124px]">
<div className="grid grid-cols-2 gap-[30px]">
<div className="h-[200px] py-[29px] flex flex-col justify-between items-center rounded-[24px] border-[0.8px] border-[#DADAFF] bg-[#F8F8FF]">
<h1 className="text-[#5801B7] text-[80px] font-medium">
    <CountUp
          start={0}
          end={75}
          duration={2}
          enableScrollSpy={true}
          scrollSpyOnce={true}
        />x
</h1>
        <p className="text-[#525252] text-[18px] font-normal">Sales Growth</p>
</div>
<div className="h-[200px] py-[29px] flex flex-col justify-between items-center rounded-[24px] border-[0.8px] border-[#DADAFF] bg-[#F8F8FF]">
<h1 className="text-[#5801B7] text-[80px] font-medium">
    <CountUp
          start={0}
          end={70}
          duration={2}
          enableScrollSpy={true}
          scrollSpyOnce={true}
        />%
</h1>
        <p className="text-[#525252] text-[18px] font-normal">Faster Business Operations</p>
</div>
<div className="h-[200px] py-[29px] flex flex-col justify-between items-center rounded-[24px] border-[0.8px] border-[#DADAFF] bg-[#F8F8FF]">
<h1 className="text-[#5801B7] text-[80px] font-medium">
    <CountUp
          start={0}
          end={90}
          duration={2}
          enableScrollSpy={true}
          scrollSpyOnce={true}
        />%
</h1>
        <p className="text-[#525252] text-[18px] font-normal">Boost Customer Engagement</p>
</div>
<div className="h-[200px] py-[29px] flex flex-col justify-between items-center rounded-[24px] border-[0.8px] border-[#DADAFF] bg-[#F8F8FF]">
<h1 className="text-[#5801B7] text-[80px] font-medium">
    <CountUp
          start={0}
          end={50}
          duration={2}
          enableScrollSpy={true}
          scrollSpyOnce={true}
        />%
</h1>
        <p className="text-[#525252] text-[18px] font-normal">Less Work with AI Automation</p>
</div>
</div>
    </div>
  );
}