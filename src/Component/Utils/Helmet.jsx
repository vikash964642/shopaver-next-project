import PropTypes from "prop-types";
//import { Helmet,HelmetProvider } from "react-helmet";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const CustomHelmet = ({ title,content,pageURL }) => {
  return (
    <HelmetProvider>
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={content} />
        <link rel="canonical" href={pageURL} />

      </Helmet>
     
    </div>
    </HelmetProvider>
  );
};

CustomHelmet.propTypes = {
  title: PropTypes.string.isRequired, 
  content: PropTypes.string.isRequired,
  pageURL:PropTypes.string.isRequired, 
};

export default CustomHelmet;
