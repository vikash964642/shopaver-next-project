"use client";

import React from "react";
import { CircleCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    tag: "AI FLOW BUILDER",
    title: "Create Flows with simple Prompts",
    description:
      "Build complete WhatsApp customer journeys in seconds with drag & drop or using AI.",
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
    tag: "WhatsApp marketing",
    title: "Increase Sales with Targeted Campaigns",
    description:
      "Send bulk broadcasts, promotional offers & personalized campaigns in one click.",
    points: [
      "Send bulk messages in one click.",
      "Schedule campaigns in advance easily",
      "Retarget non-responsive customers automatically",
      "Track delivery and read rates",
      "Personalize messages with customer names",
    ],
    reverse: true,
  },
  {
    tag: "WhatsApp marketing",
    title: "Increase Sales with Targeted Campaigns",
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
    tag: "WhatsApp marketing",
    title: "Increase Sales with Targeted Campaigns",
    description:
      "Send bulk broadcasts, promotional offers & personalized campaigns in one click.",
    points: [
      "Send bulk messages in one click.",
      "Schedule campaigns in advance easily",
      "Retarget non-responsive customers automatically",
      "Track delivery and read rates",
      "Personalize messages with customer names",
    ],
    reverse: true,
  },
  {
    tag: "WhatsApp marketing",
    title: "Increase Sales with Targeted Campaigns",
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
];

function FlowBuilderAnimation() {
  return (
    <section className="xl2:max-w-[1220px] xl3:max-w-[90rem] mx-auto  py-14 md:py-24 md:px-[65px] lg:px-[93px] xl2:px-[60px]  xl3:px-[72px]">
      <div className=" flex  flex-col gap-10 ">
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
            className={`rounded-[32px] border border-[#CBCBFF] bg-[#F8F8FF] p-4 sm:p-6 md:p-[42px] ${
              item.reverse ? "lg:[&_.content]:order-2" : ""
            }`}
          >
            <div className="grid items-center gap-6 md:gap-[6.75rem] lg:grid-cols-2">
              {/* CONTENT */}
              <div className="content">
                {/* TAG */}
                <span className="text-xs font-medium uppercase tracking-wide text-[#5801B7] text-[16px] md:text-[14px] lg:text-[16px] xl2:text-[21px] xl3:text-[24.75px]">
                  {item.tag}
                </span>

                {/* TITLE */}
                <h2 className="mt-3 max-w-[28rem] text-2xl font-bold text-[#3C3939] sm:text-3xl text-[25px] md:text-[22px] lg:text-[28.5px] xl2:text-[38px] xl3:text-[44.5px] md:leading-[38px] font-bricolage">
                  {item.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-4 max-w-[29rem] text-sm font-medium leading-6 text-[#525252] text-[13px] lg:text-[14px] xl2:text-[18px] xl3:text-[21px]">
                  {item.description}
                </p>

                {/* POINTS */}
                <div className="mt-6 space-y-4">
                  {item.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0">
                        <CircleCheck className="h-4 w-4 text-[#16a34a]" />
                      </div>

                      <p className="text-sm leading-6 text-[#666666] text-[13px] lg:text-[15px] xl2:text-[18px] xl3:text-[21px]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* IMAGE BOX */}
              <div className="mx-auto h-[260px] w-full max-w-[500px] rounded-[25px] bg-[#fff] sm:h-[420px] md:h-[515px]"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FlowBuilderAnimation;
