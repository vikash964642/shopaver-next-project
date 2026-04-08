"use client";
import PropTypes from "prop-types";
import { useEffect, useState } from 'react';

const FormHome = (props) => {

  const [formData, setFormData] = useState({
    from: props.from || "",
    name: '',
    company_name: '',
    contact_number: '',
    business_email_address: '',
    message: ''
  });

  // FIXED useEffect
  // useEffect(() => {
  //   setFormData(prev => ({
  //     ...prev,
  //     from: props.from
  //   }));
  // }, [props.from]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form with data:', formData);

    try {
      const response = await fetch('https://shopaver.com/api/api/index.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem('formSubmitted', 'true');
        window.location.href = '/thank-you';

        setFormData({
          from: '',
          name: '',
          company_name: '',
          contact_number: '',
          business_email_address: '',
          message: ''
        });

      } else {
        console.error('Error:', response.statusText);
        alert('Error submitting form');
      }

    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form');
    }
  };

  return (
    <>
      <section className="my-24">
        <form onSubmit={handleSubmit}>
          <div className="lg:w-[1011px] lg:mx-auto mx-4 w-auto pt-4 pb-4">

            <p className="text-[25.96px] font-bold md:text-[41px] text-webtext2 text-center pt-7">
              Schedule a free demo
            </p>

            <div className="flex justify-center items-center mt-4 mx-[15px] text-webtext text-center">
              <p className="text-[15px] md:text-base">
                Please fill up the details below & we will get in touch with you at the earliest.
              </p>
            </div>

            {/* FIXED - readonly no change */}
            <input type="text" className="hidden" name="from" value={formData.from} readOnly />

            <div className="md:space-x-10 flex md:px-14 flex-col md:flex-row mx-5 md:mx-0 md:mt-7">
              <input type="text" className="bg-webgray2 border-webtext placeholder-[#5F5F5F] md:w-[435.11px] h-[50px] md:h-[52px] mt-5 rounded-lg"
                style={{ paddingLeft: '18.33px' }}
                placeholder="Your Name*" name="name" value={formData.name}
                onChange={handleChange} required />

              <input type="text" className="border-webtext bg-webgray2 placeholder-[#5F5F5F] md:w-[435.11px] h-[50px] md:h-[52px] mt-5 rounded-lg"
                style={{ paddingLeft: '18.33px' }}
                placeholder="Company Name*" name="company_name"
                value={formData.company_name}
                onChange={handleChange} required />
            </div>

            <div className="flex md:space-x-10 md:px-14 flex-col md:flex-row mx-5 md:mx-0 mt-5">
              <input type="tel" className="border-webtext bg-webgray2 placeholder-[#5F5F5F] md:w-[435.11px] h-[50px] md:h-[52px] rounded-lg"
                style={{ paddingLeft: '18.33px' }}
                placeholder="Contact Number*" name="contact_number"
                value={formData.contact_number} onChange={handleChange}
                required maxLength={10} minLength={10}
                pattern="[6-9]{1}[0-9]{9}" />

              <input type="email" className="border-webtext bg-webgray2 placeholder-[#5F5F5F] md:w-[435.11px] h-[50px] md:h-[52px] rounded-lg mt-5 md:mt-0"
                style={{ paddingLeft: '18.33px' }}
                placeholder="Business Email Address*" name="business_email_address"
                value={formData.business_email_address} onChange={handleChange} required />
            </div>

            <div className="md:mx-14 mx-5 mt-8">
              <input type="text" className="border-webtext bg-webgray2 md:pb-[75px] pb-[50px] placeholder-[#5F5F5F] w-full h-[100px] md:h-[140px] rounded-lg"
                style={{ paddingLeft: '18.33px' }}
                placeholder="Your Message" name="message"
                value={formData.message} onChange={handleChange} />
            </div>

            <div className="text-center mt-7 sm:mt-10">
              <button type="submit" className="bg-primary rounded-[39.25px] cursor-pointer w-[221px] h-[44px] lg:w-[225px] lg:h-[61px] text-xl md:text-[22.66px] text-white font-bold">
                Submit
              </button>
            </div>

          </div>
        </form>
      </section>
    </>
  );
};

FormHome.propTypes = {
  from: PropTypes.string,
};

export default FormHome;
