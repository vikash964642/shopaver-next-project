
"use client";

import { useState, useRef } from "react";
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
    image: "/newImage/quick_billing_grid.webp",
    description:
      "Built for small retailers and service providers who value speed and simplicity.",
  },
  {
    title: "Inventory",
    heading: "Real-Time Stock Tracking Made Simple",
    image: "/newImage/inventory_management_grid.webp",
    description:
      "Avoid stock issues and manual errors with smart inventory management.",
  },
  {
    title: "Udhar Khata",
    heading: "Move from Manual to Digital Records",
    image: "/newImage/bahi_khata_grid.webp",
    description:
      "Go digital with your udhar records. Track transactions, monitor balances, and manage complete credit and debit history with ease.",
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
        <p className="text-[#5801B7] text-[18px] font-medium mb-2 font-bricolage">{item.title}</p>

        <h3 className="text-[28px] leading-[34px] font-medium text-[#3C3939] font-bricolage">
          {item.heading}
        </h3>
        <p className="mt-3 text-[16px]  text-[#666666] leading-normal font-dm-sans">
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
  
  <p className="text-[#5801B7] text-[18px] font-medium mb-2 font-bricolage">
    {item.title}
  </p>

  <h3 className="text-[28px] leading-[30px] font-medium text-[#3C3939] font-bricolage">
    {item.heading}
  </h3>

  <p className="mt-4 text-[16px] text-[#666] leading-relaxed font-bricolage">
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
export default function SmartFeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);

  // Current card flying out
  const [flyOut, setFlyOut] = useState(false);
  const [flyDirection, setFlyDirection] = useState("left");

  // Reset animation after last card
  const [isResetting, setIsResetting] = useState(false);
  const [resetDirection, setResetDirection] = useState("left");

  const [isAnimating, setIsAnimating] = useState(false);

  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  // Track direction for each card
  const [swipeDirections, setSwipeDirections] = useState(
    Array(features.length).fill("left")
  );

  // --------------------------------------------------
  // Swipe to next
  // --------------------------------------------------
  const goNext = (direction = "left") => {
    if (isAnimating) return;

    // Save current card direction
    setSwipeDirections((prev) => {
      const updated = [...prev];
      updated[activeIndex] = direction;
      return updated;
    });

    // Last card swipe => reset animation
    if (activeIndex === features.length - 1) {
      setIsAnimating(true);
      setFlyDirection(direction);
      setFlyOut(true);

      setTimeout(() => {
        // Last card removed
        setFlyOut(false);

        // Start bringing all cards back
        setResetDirection(direction);
        setIsResetting(true);

        // Reset to first card
        setActiveIndex(0);
        setDisplayIndex(0);

        setTimeout(() => {
          setIsResetting(false);
          setIsAnimating(false);
        }, 2200);
      }, 380);

      return;
    }

    // Normal swipe
    setIsAnimating(true);
    setFlyDirection(direction);
    setFlyOut(true);

    setTimeout(() => {
      const next = activeIndex + 1;
      setFlyOut(false);
      setActiveIndex(next);
      setDisplayIndex(next);
      setIsAnimating(false);
    }, 380);
  };

  // --------------------------------------------------
  // Touch handlers
  // --------------------------------------------------
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = Math.abs(
      touchStartY.current - e.changedTouches[0].clientY
    );

    // Ignore vertical scroll
    if (diffY > Math.abs(diffX)) {
      touchStartX.current = null;
      return;
    }

    // Swipe threshold
    if (Math.abs(diffX) > 30) {
      goNext(diffX > 0 ? "left" : "right");
    }

    touchStartX.current = null;
  };

  // --------------------------------------------------
  // Visible cards
  // --------------------------------------------------
  let visibleCards = [];

  // During reset animation => show all cards
  if (isResetting) {
    visibleCards = features.map((_, index) => ({
      index,
      offset: index,
    }));
  } else {
    // Normal mode => if last card active, only show last card
    // so hidden cards don't appear behind it
    if (activeIndex === features.length - 1) {
      visibleCards = [
        {
          index: activeIndex,
          offset: 0,
        },
      ];
    } else {
      // Show top 3 cards
      for (let i = 0; i < features.length; i++) {
        const offset =
          (i - displayIndex + features.length) % features.length;

        if (offset <= 2) {
          visibleCards.push({ index: i, offset });
        }
      }
    }
  }

  // Render back cards first
  visibleCards.sort((a, b) => b.offset - a.offset);

  // --------------------------------------------------
  // Card position styles
  // --------------------------------------------------
  const getCardBaseStyle = (offset) => {
    if (offset === 0) {
      return {
        rotate: 0,
        x: 0,
        zIndex: 30,
      };
    }

    if (offset === 1) {
      return {
        rotate: -3,
        x: -6,
        zIndex: 20,
      };
    }

    return {
      rotate: 3,
      x: 6,
      zIndex: 10,
    };
  };


// Reset animation style
const getResetStyle = (index) => {
  const originalDirection = swipeDirections[index] || "left";
  const startX = originalDirection === "left" ? "-120%" : "120%";
  const startRotate = originalDirection === "left" ? -12 : 12;

  const totalCards = features.length;
  const delay = (totalCards - 1 - index) * 0.30;
  const zIndex = 100 + (totalCards - 1 - index);

  // ✅ Final position mein offset ka rotation
  const { rotate, x } = getCardBaseStyle(index); // index 0 = active, 1 = -3deg, 2 = +3deg

  return {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    transform: `translate3d(${x}px, 0px, 0px) rotate(${rotate}deg)`, // ✅ bent position
    opacity: 1,
    zIndex,
    animation: `resetCardIn 1.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s both`,
    "--start-x": startX,
    "--start-rotate": `${startRotate}deg`,
    "--end-x": `${x}px`,           // ✅ keyframe end position
    "--end-rotate": `${rotate}deg`, // ✅ keyframe end rotation
  };
};
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
    <section className="block lg:hidden mt-[100px] ">
   <div className="overflow-hidden py-[10px]">
       <div
        className="relative max-[375px]:w-[290px] w-[320px] h-[520px] mx-auto"
        style={{
          isolation: "isolate",
          touchAction: "pan-y",
        }}
      >
        {visibleCards.map(({ index, offset }) => {
          const item = features[index];
          const isActive = index === activeIndex;
          const isFlyingOut = isActive && flyOut;

          let style = {};

          // ----------------------------------------
          // Reset animation
          // ----------------------------------------
          if (isResetting) {
            style = getResetStyle(index);
          }

          // ----------------------------------------
          // Flying out card
          // ----------------------------------------
          else if (isFlyingOut) {
            const flyX =
              flyDirection === "left" ? "-120%" : "120%";
            const flyRotate =
              flyDirection === "left" ? -12 : 12;

            style = {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              transform: `translate3d(${flyX},0,0) rotate(${flyRotate}deg)`,
              opacity: 0,
              zIndex: 50,
              transition:
                "transform 0.38s ease-in, opacity 0.3s ease-in",
              pointerEvents: "none",
              willChange: "transform, opacity",
            };
          }

          // ----------------------------------------
          // Normal card stack
          // ----------------------------------------
          else {
            const { rotate, x, zIndex } =
              getCardBaseStyle(offset);

            style = {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              transform: `translate3d(${x}px,0,0) rotate(${rotate}deg)`,
              transformOrigin: "center center",
              opacity: 1,
              zIndex,
              transition:
                "transform 0.45s cubic-bezier(0.32,0.72,0,1), opacity 0.4s ease",
              pointerEvents:
                isActive && !flyOut ? "auto" : "none",
              willChange: "transform, opacity",
            };
          }

          return (
            <div
              key={index}
              className="rounded-[32px] border border-[#CBCBFF] bg-[#F8F8FF] shadow-sm h-[525px] overflow-hidden"
              style={style}
              onTouchStart={
                isActive && !flyOut && !isResetting
                  ? handleTouchStart
                  : undefined
              }
              onTouchEnd={
                isActive && !flyOut && !isResetting
                  ? handleTouchEnd
                  : undefined
              }
            >
              <div className="py-[31px] px-[21.22px]">
                <p className="text-[#5801B7] text-[15.6px] font-semibold font-bricolage">
                  {item.title}
                </p>

                <h3 className="pt-[4px] pr-[4px] text-[23.4px] font-medium text-[#393939] font-bricolage">
                  {item.heading}
                </h3>

                <p className="pt-[8.5px] text-[13.65px] leading-normal text-[#666]">
                  {item.description}
                </p>

                <button className="mt-[17px] rounded-[7.8px] bg-[#5801B7] h-[38.25px] w-[105.5px] text-[11.33px] text-white font-medium">
                  Know More
                </button>
              </div>

              <div className="relative h-[220px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
             
                  className=""
                  priority={index === 0}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Reset animation keyframes */}
<style jsx>{`
  @keyframes resetCardIn {
  0% {
    transform: translate3d(var(--start-x), 0, 0)
      rotate(var(--start-rotate)) scale(0.96);
    opacity: 0;
  }

  60% {
    transform: translate3d(var(--end-x), 0, 0)
      rotate(var(--end-rotate)) scale(1.01);
    opacity: 1;
  }

  100% {
    transform: translate3d(var(--end-x), 0, 0)
      rotate(var(--end-rotate)) scale(1);
    opacity: 1;
  }
}
`}</style>
   </div>
    </section>
    </>
  );
}