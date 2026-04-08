// import React from 'react'

"use client";
import  {  useState } from 'react';
function FormSection() {

  const [formData, setFormData] = useState({
    from: 'Help page',
    name: '',
    company_name: '',
    contact_number: '',
    business_email_address: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    try {
      const response = await fetch('https://shopaver.com/api/api/index.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
      
        alert('Form submitted successfully!');
        // Reset form fields to initial state
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
    <section>
      <form onSubmit={handleSubmit} >
      <div className="max-w-screen-lg mx-auto   ">
        <div className="flex flex-col lg:flex-row  mt-[145px] lg:border lg:rounded-[25px] lg:ml-[79px]">
        <div className=" rounded-l-[25px] lg:w-[371px] lg:h-[585px] lg:border-r flex md:justify-center">
          <p className="text-webtext2 font-bold text-[24px] lg:text-[38px] lg:leading-[49px] leading-[31.44px] lg:pt-[170px] md:px-[0px] lg:px-[34px] px-[38px] lg:text-left text-center">
            You are taking a right step for your business.
          </p>
        </div>
        <div className=" lg:w-[572px] lg:h-[585px] lg:rounded-tr-[25px] lg:rounded-br-[25px] lg:bg-bgform">
          <div className="lg:px-[100px] pt-[34px]">
            <h3 className="lg:text-[34.25px] text-[32px] font-bold lg:font-medium leading-[44px] text-center lg:px-[0px] lg:text-left">
              Schedule a free demo
            </h3>
            <p className="lg:text-[16.66px] text-[15px] lg:font-semibold lg:leading-[20px] leading-[18px] pt-[17px] text-center lg:text-left px-[35px] lg:px-[0px]">
              Please fill up the details below & we will get in touch with you
              at the earliest.
            </p>
            <input type="text" className="hidden" value={formData.from} name="from" onChange={handleChange} />

            <div className="flex flex-col px-[27px] md:items-center  mt-[15px] lg:mt-[0px]">
              <input
                type="text"
                className=" 
               lg:border-[0.42px] lg:border-webtext bg-webgray2 lg:bg-white   placeholder-[#5F5F5F] md:w-[375.11px] lg:h-[39px] h-[50px] mt-5 rounded-lg "
                style={{ paddingLeft: "18.33px" }}
                placeholder="Your Name *" name="name" onChange={handleChange}  value={formData.name} required
              />
             
              <input
                type="text"
                className=" 
               lg:border-[0.42px] lg:border-webtext bg-webgray2 lg:bg-white   placeholder-[#5F5F5F] md:w-[375.11px] lg:h-[39px] h-[50px] mt-5 rounded-lg "
                style={{ paddingLeft: "18.33px" }}
                placeholder="Company Name*" name="company_name" onChange={handleChange}  value={formData.company_name} required
              />
               <input
                type="tel"
                className=" 
               lg:border-[0.42px] lg:border-webtext bg-webgray2 lg:bg-white placeholder-[#5F5F5F] md:w-[375.11px] lg:h-[39px] h-[50px] mt-5 rounded-lg "
                style={{ paddingLeft: "18.33px" }}
                placeholder="Contact Number*" name="contact_number" onChange={handleChange} value={formData.contact_number} maxLength={10} minLength={10} pattern="[6-9]{1}[0-9]{9}" required
              />
              <input
                type="email"
                className=" 
               lg:border-[0.42px] lg:border-webtext bg-webgray2 lg:bg-white   placeholder-[#5F5F5F] md:w-[375.11px] lg:h-[39px] h-[50px] mt-5 rounded-lg "
                style={{ paddingLeft: "18.33px" }}
                placeholder="Business Email Address*" name="business_email_address" onChange={handleChange} value={formData.business_email_address} required
              />
              <input
                type="text"
                className=" 
               lg:border-[0.42px] lg:border-webtext bg-webgray2 lg:bg-white   placeholder-[#5F5F5F] md:w-[375.11px] lg:h-[70px] h-[100px] mt-5 rounded-lg pb-[52px] lg:pb-[24px]"
                style={{ paddingLeft: "18.33px" }}
                placeholder="Your Message" name="message" onChange={handleChange} value={formData.message}
              />

             <div className="flex  justify-center">
               <button className="w-[201px] h-[55px] bg-primary text-white rounded-[36px] lg:mt-[23px] mt-[60px]  font-bold text-[20px] leading-[25px] cursor-pointer">
                 Submit
               </button>
             </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg lg:mx-auto lg:mt-[100px] mt-[100px] mb-[50px] mx-[30px]">
        <h3 className="lg:text-[52px] text-[26px] font-bold lg:leading-[62px] leading-[24px] text-primary">
          Let’s Connect
        </h3>
        <p className="lg:text-[20px] text-[14px] font-medium lg:leading-[26px] leading-[22px] pt-[26px] lg:pr-[82px] ">
          We’re the top choice for business operation services, designed to meet
          your needs with personalized care and dedicated support.
        </p>
      </div>
      </div>

      </form>
      
    </section>
  );
}

export default FormSection;
