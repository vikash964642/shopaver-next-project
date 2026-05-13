import Image from "next/image";

const features = [
  {
    title: "Online Store",
    heading: "Create Your Online Store in Minutes without Coding",
    image: "/newImage/online_inventory_grid.webp",
    description:
      "Launch your own digital store and sell 24/7 without technical complexity or high costs.",
  },
  {
    title: "POS Billing",
    heading: "Fast & Easy Billing for Your Business",
    image: "/newImage/pos_billing_grid.webp",
    description:
      "Our POS Billing lets businesses bill faster, manage sales, and handle transactions in one place.",
  },

  {
    title: "Quick Billing",
    heading: "Create Invoices Instantly without Inventory",
    description:
      "Built for small retailers and service providers who value speed and simplicity.",
    image: "/newImage/quick_billing_grid.webp",
  },
  {
    title: "Inventory",
    heading: "Real-Time Stock Tracking Made Simple",
    description:
      "Avoid stock issues and manual errors with smart inventory management.",
    image: "/newImage/inventory_management_grid.webp",
  },
  {
    title: "Udhar Khata",
    heading: "Move from Manual to Digital Records",
    description:
      "Go digital with your udhar records. Track transactions, monitor balances, and manage complete credit and debit history with ease.",
    image: "/newImage/bahi_khata_grid.webp",
    full: true,
  },
];

function FeatureCard({ item }) {
  return (
<div className=" group relative overflow-hidden
        rounded-[32px] border border-[#E5E7EB]
        bg-[#F8F8FF] 
        transition-all duration-500
        hover:shadow-2xl">
      <div
      className="
       px-6 pt-[36px] pb-[10px]
      "
    >
      {/* Content */}
      <div className="mb-5">
        <p className="text-[#5801B7] text-sm font-medium mb-2">{item.title}</p>

        <h3 className="text-[28px] leading-[34px] font-semibold text-[#3C3939]">
          {item.heading}
        </h3>
        <p className="mt-3 text-sm md:text-base text-[#666666] leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Image */}
      <div className="relative h-[340px] w-full overflow-hidden rounded-[11px]">
        {/* Image */}
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="
      object-cover
      object-center
      padding-[20px]
      transition-transform duration-700
      group-hover:scale-105
    "
        />

   
      </div>
           {/* Bottom Hover Panel */}
        <div
          className="
      absolute bottom-0 left-0 w-full z-20

      translate-y-full
      group-hover:translate-y-0

      opacity-0
      group-hover:opacity-100

      transition-all duration-500 ease-out
    "
        >
          <div
            className="
        bg-white
        px-5 py-4
        flex items-center justify-center gap-3 flex-wrap

        
        shadow-[0_-10px_30px_rgba(0,0,0,0.08)]
      "
          >
            <button
              className="
          whitespace-nowrap rounded-full
          bg-[#5801B7]
          px-5 py-2.5
          text-sm font-medium text-white
          transition hover:bg-[#47009A]
        "
            >
              Know More
            </button>

            <button
              className="
          whitespace-nowrap rounded-full
          border border-[#D1D5DB]
          bg-[#F5F5F5]
          px-5 py-2.5
          text-sm font-medium text-[#3C3939]
          transition hover:bg-[#EAEAEA]
        "
            >
              Schedule a Demo
            </button>
          </div>
        </div>
    </div>
</div>
  );
}

function FullWidthCard({ item }) {
  return (
    <div
      className="
        group relative overflow-hidden
        rounded-[32px]
        border border-[#E5E7EB]
        bg-[#F8F8FF]
        px-6 md:px-10
        py-8
      "
    >
      <div
        className="
          flex flex-col-reverse
          lg:flex-row
          items-center
          justify-between
          gap-8
        "
      >
        {/* Left Content */}
        {/* Left Content */}
<div className="max-w-[520px]">
  
  <p className="text-[#5801B7] text-sm font-medium mb-2">
    {item.title}
  </p>

  <h3 className="text-[28px] md:text-[42px] leading-[34px] md:leading-[48px] font-semibold text-[#3C3939]">
    {item.heading}
  </h3>

  <p className="mt-4 text-sm md:text-base text-[#666666] leading-relaxed">
    {item.description}
  </p>

  {/* Buttons */}
  {/* Buttons */}
<div
  className="
    mt-6 flex flex-wrap gap-3
    opacity-0 translate-y-5
    group-hover:opacity-100
    group-hover:translate-y-0

    transition-all duration-500 ease-out
  "
>
  <button
    className="
      rounded-full
      bg-[#5801B7]
      px-5 py-2.5
      text-sm font-medium text-white
      transition hover:bg-[#47009A]
    "
  >
    Know More
  </button>

  <button
    className="
      rounded-full
      border border-[#D1D5DB]
      bg-white
      px-5 py-2.5
      text-sm font-medium text-[#3C3939]
      transition hover:bg-[#F5F5F5]
    "
  >
    Schedule a Demo
  </button>
</div>
</div>

        {/* Right Image */}
        <div className="relative h-[320px] w-full lg:w-[420px] overflow-hidden rounded-[16px] shrink-0">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="
              object-cover
              object-center
              transition-transform duration-700
              padding-[20px]
              group-hover:scale-105
            "
          />

          
        </div>
      </div>
    </div>
  );
}
import { useState, useRef } from "react";




const ROTATIONS = [0, -5, 5];
export default function SmartFeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [flyOut, setFlyOut] = useState(false);
  const [flyDirection, setFlyDirection] = useState("left");
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const goNext = (direction = "left") => {
    if (isAnimating) return;
    setIsAnimating(true);
    setFlyDirection(direction);
    setFlyOut(true);

    setTimeout(() => {
      const next = (activeIndex + 1) % features.length;
      setFlyOut(false);
      setActiveIndex(next);
      setDisplayIndex(next);
      setIsAnimating(false);
    }, 380);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = Math.abs(touchStartY.current - e.changedTouches[0].clientY);
    if (diffY > Math.abs(diffX)) { touchStartX.current = null; return; }
    if (Math.abs(diffX) > 30) goNext(diffX > 0 ? "left" : "right");
    touchStartX.current = null;
  };

  const total = features.length;

  const visibleCards = [];
  for (let i = 0; i < total; i++) {
    const offset = (i - displayIndex + total) % total;
    if (offset <= 2) visibleCards.push({ index: i, offset });
  }
  visibleCards.sort((a, b) => b.offset - a.offset);
  return (
    <>
    <section className="mx-auto max-w-5xl px-4 xl:px-0 py-16 space-y-6 hidden lg:block">
      {/* Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">
        <FeatureCard item={features[0]} />
        <FeatureCard item={features[1]} />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6">
        <FeatureCard item={features[2]} />
        <FeatureCard item={features[3]} />
      </div>

      {/* Full Width */}
      <div>
        <FullWidthCard item={features[4]} />
      </div>
    </section>
      <section className="block lg:hidden py-10">
      

      {/* ✅ overflow: hidden hata diya — sirf isolation rakha */}
      <div
        className="relative max-[375px]:w-[290px] w-[320px] h-[620px] mx-auto"
        style={{ isolation: "isolate" }}
      >
        {visibleCards.map(({ index, offset }) => {
          const item = features[index];
          const isActive = index === activeIndex;
          const isFlyingOut = isActive && flyOut;

       

const rotate = ROTATIONS[offset] ?? 0;
const scale = 1; // sab cards same size
const y = 0;     // sab cards same top position
const zIndex = 30 - offset;

          // ✅ -100% use karo taaki page width affect na ho
          const flyX = flyDirection === "left" ? "-100%" : "100%";
          const flyRotate = flyDirection === "left" ? -12 : 12;

         
const style = isFlyingOut
  ? {
      transform: `translateX(${flyX}) rotate(${flyRotate}deg) scale(1)`,
      opacity: 0,
      zIndex: 50,
      transition: "transform 0.38s ease-in, opacity 0.3s ease-in",
      pointerEvents: "none",
    }
  : {
      transform: `translateY(${y}px) rotate(${rotate}deg) scale(${scale})`,
      opacity: 1,
      zIndex,
      transition:
        "transform 0.4s cubic-bezier(0.32,0.72,0,1), opacity 0.4s ease",
      pointerEvents: isActive && !flyOut ? "auto" : "none",
    };
          return (
            <div
              key={index}
              className="absolute inset-0 rounded-[32px] border border-[#CBCBFF] bg-[#F8F8FF] shadow-sm"
              style={style}
              onTouchStart={isActive && !flyOut ? handleTouchStart : undefined}
              onTouchEnd={isActive && !flyOut ? handleTouchEnd : undefined}
            >
           <div className="py-[31px] px-[21.22px]">
               <p className="text-[#5801B7] text-[15.6px] font-semibold">{item.title}</p>

              <h3 className="pr-[4px] text-[23.40.px] leading-normal font-semibold text-[#393939]">
                {item.heading}
              </h3>

              <p className="pt-[8.5px] text-[13.65px] leading-normal text-[#666]">
                {item.description}
              </p>

              <button className="mt-[17px] rounded-[7.8px] bg-[#5801B7] h-[38.25px] w-[105.5px] text-[11.33px] text-white font-medium">
                Know More
              </button>
           </div>

              <div className="relative mt-8 h-[280px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                  priority={index === 0}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
    </>
  );
}




