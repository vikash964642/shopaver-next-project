// import React from 'react';

const Breadcrumbs = () => {
  const schemaMarkup = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "POS Billing",
        "item": "https://shopaver.com/pos-billing-software"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://shopaver.com/about-us"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Blogs",
        "item": "https://shopaver.com/Blogs/"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact Us",
        "item": "https://shopaver.com/help-center"
      }
    ]
  };

  return (
    <div>
      {/* Add the JSON-LD script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      
    </div>
  );
};

export default Breadcrumbs;
