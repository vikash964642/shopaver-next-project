"use client"
import CountUp from "react-countup";

export default function Counter() {
  return (
    // <div style={{ height: "200px" }}>
    //   <h1 className="text-[40px] font-bold">
    //     <CountUp
    //       start={0}
    //       end={75}
    //       duration={2}
    //       enableScrollSpy={true}
    //       scrollSpyOnce={true}
    //     />
    //   </h1>
    // </div>
    <div className="max-w-5xl mx-auto">
<div className="grid grid-cols-2">
<div className="">
<h1>
    <CountUp
          start={0}
          end={75}
          duration={2}
          enableScrollSpy={true}
          scrollSpyOnce={true}
        />
</h1>
        <p>Sales Growth</p>
</div>
</div>
    </div>
  );
}