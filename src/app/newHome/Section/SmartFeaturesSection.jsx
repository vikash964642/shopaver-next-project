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
    <div
      className="
        group relative overflow-hidden
        rounded-[32px] border border-[#E5E7EB]
        bg-[#F8F8FF] px-6 pt-[36px] pb-[10px]
        transition-all duration-500
        hover:shadow-2xl
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

export default function SmartFeaturesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 space-y-6">
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
  );
}
