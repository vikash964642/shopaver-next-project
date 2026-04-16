
import About from "../about-us/page";
import Contact from "../contact-us/page"; // ✅ FIX

const pageMap = {
  about: About,
  contact: Contact,
};

export default function Page({ params }) {
  const Component = pageMap[params.slug];

  if (!Component) {
    return <div>404 Page Not Found</div>;
  }

  return <Component />;
}