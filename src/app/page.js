import HomePage from "../app/Home/page";

export const metadata = {
  metadataBase: new URL("https://shopaver.com"),
  title: "All-in-One POS Solutions for Small, Medium & Large Businesses.",
  description:
    "We offer smart, easy-to-use POS solutions for billing, inventory, digital Khata, e-stores & WhatsApp commerce — built for businesses of all sizes.",
      alternates: {
    canonical: "/", 
  },
};

export default function Home() {
  return (
 <HomePage/>
  );
}
