"use client";
import { useState } from "react";

function FAQ() {
    const faqData=[
        {
            question:"What is WhatsApp Business Suite?",
            answer:"WhatsApp Business Suite is a complete platform that allows businesses to manage customer chats, marketing campaigns, product sales, automation, and performance analytics through WhatsApp from a single dashboard."
        },
           {
            question:"How does the Chat feature help businesses?",
            answer:"The Chat module provides a centralized inbox where businesses can manage all customer conversations. Teams can respond faster, assign chats to agents, track conversation history, and ensure no customer message is missed. "
        },
           {
            question:"Can I sell products through WhatsApp Business Suite?",
            answer:"Yes. The Commerce feature allows businesses to showcase product catalogs, share product details in chat, accept orders, and send payment links, turning WhatsApp conversations into direct sales opportunities. "
        },
           {
            question:"What are WhatsApp Campaigns?",
            answer:"WhatsApp Campaigns allow businesses to send promotional messages, product launches, offers, and announcements to multiple customers at once, helping improve customer engagement and boost sales. "
        },
           {
            question:" How does Analytics help businesses?",
            answer:"The Analytics dashboard provides insights such as message delivery rates, read rates, campaign performance, customer engagement, and agent response times, helping businesses make data-driven decisions. "
        },
           {
            question:"What are WhatsApp Message Templates?",
            answer:"Message Templates are pre-approved structured messages used for sending notifications like order confirmations, appointment reminders, delivery updates, and payment alerts while complying with WhatsApp policies.  "
        },
           {
            question:"How do Quick Replies improve customer support?",
            answer:"Quick Replies allow support teams to save commonly used responses and send them instantly during chats, reducing response time and improving customer support efficiency. "
        },
         {
            question:"What is Flow Builder?",
            answer:" Flow Builder is an automation tool that allows businesses to create automated chat workflows for lead capture, FAQs, customer onboarding, appointment booking, and support interactions without coding. "
        },
          {
            question:"Can multiple team members manage WhatsApp chats? ",
            answer:" Yes. WhatsApp Business Suite supports multi-agent access, allowing multiple team members to manage customer conversations from a shared dashboard."
        },
          {
            question:" Is WhatsApp Business Suite suitable for small businesses?",
            answer:" Yes. WhatsApp Business Suite is designed for startups, SMEs, and enterprises, making it easy for businesses of all sizes to manage customer communication, marketing, and sales. "
        },
          {
            question:"Can I automate customer responses?",
            answer:"Yes. Using Flow Builder and Templates, businesses can automate responses, send notifications, and manage customer interactions automatically to save time and improve efficiency. "
        },
          {
            question:"How does WhatsApp Business Suite help increase sales?",
            answer:" By combining chat communication, product catalogs, targeted campaigns, and automation, businesses can engage customers more effectively and convert conversations into purchases. "
        },
    ]
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = faqData || [];
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
 
  return (
    <section className="bg-[#5801B7] py-[3.5rem] lg:py-[5.625rem] xl:py-[90px] xl2:py-[110px] mt-[7.5rem]">
      <div className="lg:max-w-5xl xl:max-w-[76.25rem] xl2:max-w-[90rem] mx-auto px-[27px] md:px-[34px] lg:px-[47px] xl2:px-[35px]">
        <div className="flex items-center md:items-start md:justify-between md:flex-row flex-col">
          <div className="w-[14.0625rem] lg:w-[330px] xl:w-[400px] xl2:w-[480px]">
            <h2 className="text-[#FFF] text-[1.625rem] md:text-[30px] lg:text-[2.5rem] xl:text-[48.3px] xl2:text-[58.5px] font-semibold leading-normal text-center md:text-left font-bricolage">
              Frequently Asked Questions
            </h2>
            <p className="pt-[11px] lg:pt-[15px] xl:pt-[18.3px] xl2:pt-[1.375rem] text-[#FFF] text-[0.895rem] md:text-[13.5px] lg:text-[1.13rem] xl:text-[21.77px] xl2:text-[26.3px] leading-normal text-center md:text-left font-dm-sans">
              Have any questions? We are here to assist you.
            </p>
          </div>
          <div className="mt-[2.1rem] md:mt-0">
            {faqs &&
              faqs.map((data, index) => (
                <div
                  key={index}
                  onClick={() => toggleFAQ(index)}
                  className="rounded-[0.454375rem] lg:rounded-[0.9375rem] border border-white/50
bg-gradient-to-r from-[#FFF]/30 to-[#5801B7]/60
shadow-[0_0_4px_rgba(0,0,0,0.25)]
backdrop-blur-[0.9375rem] w-full md:w-[402px] lg:w-[536px] xl:w-[650px] xl2:w-[784px] py-[0.46875rem] px-[0.59375rem]  lg:lg:py-[0.9375rem] lg:px-[1.1875rem] mt-[0.625rem] lg:mt-[1.25rem] flex justify-center flex-col cursor-pointer"
                >
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-[#FFF] text-[0.875rem] md:text-[15px] lg:text-[1.125rem] xl:text-[21.8px] xl2:text-[26.33px] font-medium leading-normal w-full md:w-[90%]">
                      {data.question}
                    </h2>
                    <p className="text-[#FFF] text-[0.875rem] lg:text-[1.125rem] font-medium ">
                      {openIndex === index ? "-" : "+"}
                    </p>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      openIndex === index
                        ? "max-h-[43.75rem] opacity-100 mt-[0.625rem]"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className=" text-[#FFF] text-[12px] lg:text-[14px] xl:text-[16px] xl2:text-[18px] font-normal leading-normal w-[95%]">{data.answer}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
