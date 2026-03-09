"use client";
import Image from "next/image";
import Link from "next/link";

function QuickBilling() {
  const ScrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <section className="max-w-screen-lg mx-auto pt-[100px] lg:pt-[128px]">
      <div className="div-4 flex justify-around mx-auto flex-col lg:flex-row lg:items-center md:items-center">
        
        <div className="lg:min-w-[50%] px-[27px] md:px-[0px]" onClick={ScrollTop}>
          <Link href="/quick-billing-software">
            <Image
              src="/img/quickbillingHome2.webp"
              alt="Mobile-Quick Billing Software"
              height={511}
              width={470}
            />
          </Link>
        </div>

        <div className="div-6 lg:min-w-[50%] max-md:mt-[74px] max-md:top-0 max-md:left-0 max-md:px-12">
          <h3 className="md:text-primary lg:text-[32px] text-[22px] font-bold">
            Quick Billing Software
          </h3>

          <h3 className="font-medium text-[20px] md:text-[22px] leading-[32px] md:leading-[38.4px] pt-[2px] max-[400px]:text-[15px]">
            Instant & easy invoicing software for quick results
          </h3>

          <div className="quickbillingspan">
            <p className="text-sm md:text-base lg:pt-[4px] pt-[5px] lg:w-[418px]">
              Say goodbye to complex billing! Shopaver Quick Billing is the
              perfect billing software for small businesses and retail stores.
              Create&nbsp;
              <Link
                href="https://shopaver.com/Blogs/invoicing-software"
                className="text-blue-600 no-underline hover:text-blue-800 cursor-pointer"
                onClick={ScrollTop}
              >
                invoices
              </Link>
              &nbsp;in seconds—even without inventory. Simplify your invoicing
              process with fast, easy, and efficient software designed
              specifically for retail stores.
            </p>

            <div className="flex md:justify-end lg:justify-start justify-end">
              <Link
                href="/quick-billing-software"
                onClick={ScrollTop}
                className="text-primary cursor-pointer font-bold md:text-[15.6px] text-sm pt-[15px]"
              >
                View More &gt;&gt;
              </Link>
            </div>
          </div>
        </div>

        <div className="justify-end mr-[40px] hidden">
          <Link
            href="/quick-billing-software"
            onClick={ScrollTop}
            className="text-primary cursor-pointer font-bold md:text-[15.6px] text-sm flex md:justify-start justify-end pt-[15px]"
          >
            View More &gt;&gt;
          </Link>
        </div>
      </div>
    </section>
  );
}

export default QuickBilling;
