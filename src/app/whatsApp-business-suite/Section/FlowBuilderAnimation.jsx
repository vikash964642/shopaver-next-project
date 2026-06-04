"use client";

import React from "react";
import { CircleCheck } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    tag: "AI FLOW BUILDER",
    title: "Create Flows with simple Prompts",
    description:
      "Build complete WhatsApp customer journeys in seconds with drag & drop or using AI.",
      Image:"/newImage/FlowBuilderAnimationImg1.webp",
    points: [
      "Generate flows simply using prompts",
      "Automate end-to-end customer journey",
      "Guide users from inquiry to purchase",
      "Add quotes, sell catalog and more in flows",
      "Create intelligent, interactive WhatsApp journeys for any business",
    ],
    reverse: false,
  },
  {
    tag: "AI WHATSAPP INBOX",
    title: "Turn Every Chat Into a Sales on WhatsApp",
      Image:"/newImage/FlowBuilderAnimationImg2.webp",
    description:
      "Automate conversations, track customer behavior, and close more deals.",
    points: [
      "Auto-classify chats & prioritize hot prospects instantly",
      "Auto track behavior, intent & engagement in real time",
      "Auto assign tags, manage teams & streamline conversations",
      "Turn inquiries into paying customers with smart automation",
    ],
    reverse: true,
  },
  {
    tag: "WhatsApp marketing",
    title: "Increase Sales with Targeted Campaigns",
      Image:"/newImage/FlowBuilderAnimationImg3.webp",
    description:
      "Send bulk broadcasts, promotional offers & personalized campaigns in one click.",
    points: [
      "Send bulk messages in one click.",
      "Schedule campaigns in advance easily",
      "Retarget non-responsive customers automatically",
      "Track delivery and read rates",
      "Personalize messages with customer names",
    ],
    reverse: false,
  },
  {
    tag: "whatsapp commerce",
    title: "Sell Products Directly On WhatsApp",
      Image:"/newImage/FlowBuilderAnimationImg4.webp",
    description:
      "Transform WhatsApp into a full sales channel with catalog and ordering.",
    points: [
      "Showcase entire product catalog inside WhatsApp",
      "Send order confirmations after every purchase",
      "Offer seamless end-to-end shopping experience",
      "Recover abandoned carts with automated reminders",
      "Accept orders and payments directly inside WhatsApp",
    ],
    reverse: true,
  },
  {
    tag: "AI WhatsApp forms",
    title: "Collect Customer Info via AI Created Form",
      Image:"/newImage/FlowBuilderAnimationImg5.webp",
    description:
      "Create smart forms or simply describe your requirement and let AI build it for you.",
    points: [
      "Generate forms using simple AI prompts",
      "Capture leads, feedback, and customer data",
      "Ask dynamic, context-based questions",
      "Increase completion rates with conversational forms",
      "Sync data instantly with your system",
    ],
    reverse: false,
  },
  {
    tag: "WhatsApp Payments",
    title: "Sales and Payments All in One Place",
      Image:"/newImage/FlowBuilderAnimationImg6.webp",
    description:
      "Collect payments seamlessly inside WhatsApp via UPI, cards, and net banking.",
    points: [
      "Accept UPI and card payments directly",
      "Send instant payment links to customers",
      "Auto-remind customers with pending dues",
      "Recover revenue from abandoned payments",
      "Track all transactions from one dashboard",
    ],
    reverse: true,
  },
  {
    tag: "Appointment Booking",
    title: "Appointments Made Super Easy",
      Image:"/newImage/FlowBuilderAnimationImg7.webp",
    description:
      "Let customers schedule & confirm appointments directly on WhatsApp",
    points: [
      "Confirm or reschedule bookings instantly",
      "Send automated reminders to reduce missing appointments",
      "Customer can book appointments anywhere anytime inside WhatsApp",
      "Sync appointments with your calendar automatically",
    ],
    reverse: false,
  },
   {
    tag: "Bluetick Verification",
    title: "Earn Trust, Go Verified Today",
      Image:"/newImage/FlowBuilderAnimationImg8.webp",
    description:
      "Get officially verified by Meta and build instant credibility on WhatsApp.",
    points: [
      "Display the official blue tick badge",
      "Increase message open rates significantly",
      "Stand out from unverified competitors easily",
      "Protect your brand from impersonation",
      "Boost customer confidence across all campaigns",
    ],
    reverse: true,
  },
   {
    tag: "WhatsApp QR Code",
    title: "One Scan, Instant Connection",
      Image:"/newImage/FlowBuilderAnimationImg9.webp",
    description:
      "Let customers scan your QR code and connect with your business instantly.",
    points: [
      "No app download or contact saving needed",
      "Let customers place orders by simply scanning",
      "Drive more walk-in customers to WhatsApp easily",
      "Turn offline customers into WhatsApp contacts instantly",
    ],
    reverse: false,
  },
];

function FlowBuilderAnimation() {
  return (
    <section className="mt-[45px] md:mt-[65px] lg:mt-[80px] xl2:mt-[100px] xl3:mt-[120px] xl2:max-w-[1220px] xl3:max-w-[90rem] mx-auto  px-[15px] md:px-[65px] lg:px-[93px] xl2:px-[60px]  xl3:px-[72px]">
      <div className=" flex items-center flex-col gap-7 md:gap-11 lg:gap-[60px] xl2:gap-[75px] xl3:gap-[90px]">
        {features.map((item, index) => (
          <motion.div
            key={index}
            /* INITIAL STATE */
            initial={{ opacity: 0, y: 120 }}
            /* WHEN IN VIEW */
            whileInView={{ opacity: 1, y: 0 }}
            /* ONLY ONCE */
            viewport={{ once: true, amount: 0.2 }}
            /* ANIMATION SETTINGS */
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className={`max-w-[400px] md:max-w-full md:w-full rounded-[32px] border border-[#CBCBFF] bg-[#F8F8FF] p-5 sm:p-6 lg:p-[32px] xl3:p-[42px] ${
              item.reverse ? "lg:[&_.content]:order-2" : ""
            }`}
          >
            <div className="grid items-center gap-6 lg:gap-[60px] xl3:gap-[6.25rem] md:grid-cols-2">
              {/* CONTENT */}
              <div className="content">
                {/* TAG */}
                <span className=" font-medium uppercase tracking-wide text-[#5801B7] text-[16px] md:text-[14px] lg:text-[16px] xl2:text-[21px] xl3:text-[24.75px]">
                  {item.tag}
                </span>

                {/* TITLE */}
                <h2 className="mt-2 xl2:mt-3 max-w-[30rem] text-2xl font-medium text-[#3C3939]  text-[25px] md:text-[22px] lg:text-[28.5px] xl2:text-[38px] xl3:text-[44.5px] leading-[30px] md:leading-[26px] lg:leading-[33px] xl2:leading-[40px] xl3:leading-[52px] font-bricolage">
                  {item.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-[10px] xl2:mt-4 max-w-[29rem] text-sm font-medium  text-[#525252] text-[13px] lg:text-[14px] xl2:text-[18px] xl3:text-[21px] leading-[20px] md:leading-[18px] lg:leading-[20px] xl3:leading-[30px]">
                  {item.description}
                </p>

                {/* POINTS */}
                <div className="mt-[13px] lg:mt-4 space-y-3 xl2:space-y-4">
                  {item.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0">
                        <CircleCheck className="h-4 w-4 text-[#16a34a]" />
                      </div>

                      <p className="text-[13px] lg:text-[15px] xl2:text-[18px] xl3:text-[21px] leading-[17px] md:leading-[16px] lg:leading-[18px] xl2:leading-6 text-[#666666] ">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* IMAGE BOX */}
              <div className="mx-auto p-[20px] w-full max-w-[500px] rounded-[25px] bg-[#fff] h-[330px] md:h-[300px] lg:h-[390px] xl2:h-[500px] xl3:h-[550px] flex justify-center items-center">
               <Image src={item.Image} height={400} width={420} className="w-full md:w-[260px] lg:w-[325px] xl2:w-[425px]"></Image>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FlowBuilderAnimation;
