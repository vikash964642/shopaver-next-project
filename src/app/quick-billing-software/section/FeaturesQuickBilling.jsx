import FeatureNewBox from "@/component/Utils/FeatureNewBox";

function FeaturesQuickBilling() {
  return (
    <>
      <section className="px-9 pt-10 pb-20">
        <div className="flex max-w-screen-lg flex-wrap mx-auto justify-between items-center ">
          <FeatureNewBox
            title={"Khata builds customer trust and transparency."}
            img={"QuickBillingimg1.webp"}
            alt={"Quickly Create Bills"}
            head={"Quickly Create Bills"}
            para={
              "Simply add products to the cart, fill in the required details, and generate bills instantly in just a few clicks. Minimize queues and reduce wait times for customers. Instantly create, print, or share invoices with ease. "
            }
          />
          <FeatureNewBox
            img={"QuickBillingimg2.webp"}
            alt={"User friendly Interface"}
            head={"User friendly Interface"}
            para={
              <>
                Our quick billing offers a user-friendly interface and simple
                layout, making it easy for anyone to use. Whether you’re running
                a retail shop, a small business, or managing an{" "}
                <a
                  href="/online-store"
                  className="text-blue-600 no-underline"
                >
                  online store
                </a>
                , it fits all your needs.
              </>
            }
          />

          <FeatureNewBox
            img={"QuickBillingimg3.webp"}
            alt={"Checkout"}
            head={"Checkout"}
            para={
              "Quick bills are a fast and efficient checkout process where you simply enter required details, add products, and generate invoices instantly. It reduces wait times and ensures smooth, accurate transactions for retail businesses."
            }
          />
          <FeatureNewBox
            img={"QuickBillingimg4.webp"}
            alt={"Faster Payment"}
            head={"Faster Payment"}
            para={
              "Make payments quick and easy with our simple payment system. It speeds up the checkout process, making shopping smooth and hassle-free, ensuring a fast and convenient payment experience for every customer."
            }
          />
        </div>
      </section>
    </>
  );
}
export default FeaturesQuickBilling;
