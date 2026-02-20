import FeatureNewBox from "@/Component/Utils/FeatureNewBox";
import Link from "next/link";
function Features() {
  return (
    <section className=" px-9 pb-20">
      <div className="flex max-w-screen-lg flex-wrap mx-auto justify-between items-center ">
        <FeatureNewBox
          img={"PosFeatureimg1.webp"}
          alt={"Billing by Barcode Scan"}
          head={"Billing by Barcode Scan"}
          para={
            "Speed up your POS billing with a barcode scanner. Simply scan each item, and the software instantly adds it to the invoice. Perfect for fast-paced retail businesses, this feature ensures quick, accurate pricing and error-free checkouts every time"
          }
          showButton={false}
        />
        <FeatureNewBox
          img={"PosFeatureimg2.webp"}
          alt={"Hold Order"}
          head={"Hold Order"}
          para={
            "While billing multiple products, you can place a bill on hold to add more items later. Once the extra items are added, billing resumes from where it paused. At the same time, you can generate bills for other customers without affecting the checkout process. "
          }
          showButton={false}
        />
        <FeatureNewBox
          img={"PosFeatureimg3.webp"}
          alt={"Efficient Checkout"}
          head={"Efficient Checkout"}
          para={
            "Checkout refers to a fast, smooth, and hassle-free billing and payment process at the point of sale (POS). It is designed to enable faster billing, speed up transactions, enhance customer experience, and reduce errors in modern retail stores."
          }
          showButton={false}
        />
        <FeatureNewBox
          img={"PosFeatureimg4.webp"}
          alt={"Multiple Payment Mode"}
          head={"Multiple Payment Mode"}
          para={
            "Accept online payments instantly by scanning the QR code on the invoice. You can also provide various payment options, including Cash, UPI, Cards, Wallets, Buy Now Pay Later (BNPL), Coupons, Reward Points, and more, offering flexibility to customers."
          }
          showButton={false}
        />
        <FeatureNewBox
          img={"PosFeatureimg5.webp"}
          alt={"Create Invoices from any device"}
          head={"Create Invoices from any device"}
          para={
            <>
              Create and manage your invoices from any device, anytime,
              anywhere. With&nbsp;
              <a
                href="https://shopaver.com/Blogs/cloud-based-pos-vs-traditional-pos"
                rel="noopener noreferrer"
                className="text-blue-600 no-underline"
              >
                cloud-based
              </a>
              &nbsp;access, you can easily generate and track invoices on your
              phone, tablet, or computer, offering flexibility and convenience
              for businesses on the go, wherever you are.
            </>
          }
          showButton={false}
        />
        <FeatureNewBox
          img={"PosFeatureimg6.webp"}
          alt={"Select Multiple Variants"}
          head={"Select Multiple Variants"}
          para={
            <>&nbsp;
              <Link
                 href="/"
                className="text-blue-600 no-underline cursor-pointer"
              >
                Shopaver
              </Link>
              &nbsp;refers to the ability to select various product options, such as
              size, color, or style, during the checkout process. This feature
              enables customers to personalize their purchases by choosing
              different variations of the same product.
            </>
          }
          showButton={false}
        />
      </div>
    </section>
  );
}

export default Features;
