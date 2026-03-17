"use client";

import FeatureNewBox from "../../../Component/Utils/FeatureNewBox";
import Link from "next/link";

function InventoryFeatures() {
  const ScrollTop = () => {
    window.scrollTo({ top: 0 })
  };
  return (
    <>
      <section className="px-9 pt-10 pb-20">
        <div className="flex max-w-screen-lg flex-wrap mx-auto justify-between items-center ">
          <FeatureNewBox
            title={"Khata builds customer trust and transparency."}
            img={"Inventoryimg1.webp"}
            alt={"Inventory Image"}
            head={"Add Inventory via Catalog"}
            para={
              <>
                With Shopaver Inventory, you can quickly &amp; products and
                organize them into categories, making it easy to manage stock,
                monitor items and keep your entire inventory and{" "}
                <Link
                  href="/pos-billing-software"
                  onClick={ScrollTop}
                  className="text-blue-600 no-underline"
                >
                  point-of-sale system
                </Link>{" "}
                efficient and hassle-free.
              </>
            }
          />

          <FeatureNewBox
            img={"Inventoryimg2.webp"}
            alt={"Bulk Upload"}
            head={"Bulk Upload"}
            para={
              "Bulk upload helps you add or update multiple products at once using Excel or CSV files, saving time and avoiding manual entry errors. Update your inventory quickly and efficiently with just a few clicks."
            }
          />
          <FeatureNewBox
            img={"Inventoryimg3.webp"}
            alt={"Low Stock Alerts"}
            head={"Low Stock Alerts"}
            para={
              "Low stock alerts notify you when inventory levels are low, helping to prevent stockouts. They make inventory management easier and keep your customers happy by ensuring products are always in stock."
            }
          />
          <FeatureNewBox
            img={"Inventoryimg4.webp"}
            alt={"Minimize Your Loss"}
            head={"Minimize Your Loss"}
            para={
              "Get real-time stock updates to avoid buying more than needed. Manage your inventory easily, prevent overstocking, reduce waste, save costs, and run your business smoothly."
            }
          />
          <FeatureNewBox
            img={"Inventoryimg5.webp"}
            alt={"Track your data reports"}
            head={"Track your data reports"}
            para={
              "With Shopaver Inventory, you can easily track your daily, weekly, and monthly sales data all in one place, making it easy to monitor performance and grow your business effectively."
            }
          />
        </div>
      </section>
    </>
  );
}
export default InventoryFeatures;
