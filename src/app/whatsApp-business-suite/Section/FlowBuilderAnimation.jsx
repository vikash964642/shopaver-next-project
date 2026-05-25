"use client";

import React from "react";
import { CircleCheck } from "lucide-react";

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
];

function FlowBuilderAnimation() {
  return (
    <section className="w-full  py-14 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        
        {features.map((item, index) => (
          <div
            key={index}
            className={`rounded-[32px] border border-[#CBCBFF] bg-[#F8F8FF] p-4 sm:p-6 md:p-[42px] ${
              item.reverse ? "lg:[&_.content]:order-2" : ""
            }`}
          >
            <div className="grid items-center gap-[6.75rem] lg:grid-cols-2">
              
              {/* CONTENT */}
              <div className="content">
                
                {/* TAG */}
                <span className="text-xs font-medium uppercase tracking-wide text-[#5801B7] md:text-[1.3rem]">
                  {item.tag}
                </span>

                {/* TITLE */}
                <h2 className="mt-3 max-w-[28rem] text-2xl font-bold  text-[#3C3939] sm:text-3xl md:text-[38px] md:leading-[38px]">
                  {item.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-4 max-w-[29rem] text-sm font-medium leading-6 text-[#525252] sm:text-[18px]">
                  {item.description}
                </p>

                {/* POINTS */}
                <div className="mt-6 space-y-4">
                  {item.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      
                      {/* ICON */}
                      <div className="mt-0.5 shrink-0">
                        <CircleCheck className="h-4 w-4 text-[#16a34a]" />
                      </div>

                      {/* TEXT */}
                      <p className="text-sm leading-6 text-[#666666] sm:text-[18px]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* IMAGE BOX */}
              <div className=" mx-auto h-[260px] w-full max-w-[500px] rounded-[25px] bg-[#fff] sm:h-[420px] md:h-[515px]">
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FlowBuilderAnimation;