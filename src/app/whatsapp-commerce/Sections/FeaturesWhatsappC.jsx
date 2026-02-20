import FeatureNewBox from "@/component/Utils/FeatureNewBox";

function FeaturesWhatsappC() {
  return (
    <>
      <section className="px-9 pt-10 pb-20">
        <div className="flex max-w-screen-lg flex-wrap mx-auto justify-between items-center ">
          <FeatureNewBox
            title={"Khata builds customer trust and transparency."}
            img={"WhatsappCimg1.webp"}
            alt={"Share Product Catalog"}
            head={"Share Product Catalog"}
            para={
              <>
                With WhatsApp Commerce, easily share your product catalogue and
                offer customers instant access to your{" "}
                <a
                  href="/online-store"
                  className="text-blue-600 no-underline"
                >
                  online store
                </a>
                . Show products with rich visuals, real-time availability, and
                direct purchase links in chat.
              </>
            }
          />

          <FeatureNewBox
            img={"WhatsappCimg2.webp"}
            alt={"Simple Notifications and Alerts"}
            head={"Simple Notifications and Alerts"}
            para={
              "Quickly send real-time notifications about special offers, sales, new products, and updates. Keep your customers informed and engaged with timely alerts, enhancing their experience and increasing interaction. "
            }
          />
          <FeatureNewBox
            img={"WhatsappCimg3.webp"}
            alt={"Sales and Growth"}
            head={"Sales and Growth"}
            para={
              "WhatsApp Commerce builds trust and loyalty through personalized messages, encouraging repeat purchases and enhancing business growth by creating happier, more satisfied customers. "
            }
          />
          <FeatureNewBox
            img={"WhatsappCimg4.webp"}
            alt={"Remove Engagement Barriers"}
            head={"Remove Engagement Barriers"}
            para={
              "WhatsApp makes it easier to talk to your customers and get quicker replies compared to email, SMS, or app messages. It helps you connect better, improve conversations, and get more customer engagement. "
            }
          />
        </div>
      </section>
    </>
  );
}

export default FeaturesWhatsappC;
