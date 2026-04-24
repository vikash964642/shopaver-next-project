"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { LEAD_API_BASE_URL } from "@/lib/env";
function Form({slug}) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    company: "",
    businessEmail: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
  name: false,
  contact: false,
  businessEmail: false,

});

 const validateField = (name, value) => {
    let error = "";

    if (name === "name" && !value.trim()) {
      error = "Name is required";
    }

    if (name === "contact") {
      if (!value) {
        error = "Contact no is required";
      } else if (!/^\d{10}$/.test(value)) {
        error = "Contact no must be 10 digit";
      }
    }

 

    if (name === "businessEmail") {
      if (!value) {
        error = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/.test(value)) {
        error = "Email is not valid";
      }
    }

  

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newValue =
      name === "contact" ? value.replace(/\D/g, "") : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });

    if (touched[name]) {
      setErrors({
        ...errors,
        [name]: validateField(name, newValue),
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched({
      ...touched,
      [name]: true,
    });

    setErrors({
      ...errors,
      [name]: validateField(name, value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    let newTouched = {};

    Object.keys(formData).forEach((field) => {
      newTouched[field] = true;
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setTouched(newTouched);
    setErrors(newErrors);

    if (Object.keys(newErrors).length !== 0) return;

    try {
      const res = await fetch(`${LEAD_API_BASE_URL}/InsertSchedule`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
    ...formData,
    slug: slug,
  }),
      });

      const data = await res.json();
      

      toast.success("Form submitted successfully");

      setFormData({
        name: "",
        contact: "",
        company: "",
        businessEmail: "",
        message: "",
      });

      setTouched({
        name: false,
        contact: false,
        businessEmail: false,
     
      });

      setErrors({});
    } catch (error) {
       toast.error("Something went wrong. Please try again ❌");
    }
  };
  return (
    <section className="max-w-5xl mx-auto mt-[100px]">
      <div className="px-[24px] pt-[40px] lg:px-[65px] lg:pt-[65px] pb-[59px] lg:border lg:border-[#D2D2D2] bg-[#F7EFFF] lg:rounded-[15px]">
        <h2 className="text-center text-[#1B1B1B] text-[26px] sm:text-[28px] lg:text-[30px] font-medium">
          Schedule a free demo
        </h2>
        <div className="flex justify-center pt-[29px] md:pt-[25px]">
          <p className="w-[307px] md:w-full text-[#525252] text-center text-[12px] sm:text-[16px] lg:text-[18px]">
            Please fill up the details below & we will get in touch with you at
            the earliest.
          </p>
        </div>
        <form className="mt-[35px]" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-[18px] lg:gap-[20px]">
           <div className="w-full">
             <input
              className="w-full h-[45px] lg:h-[52.4px] rounded-[7.59px] lg:rounded-[10px] bg-[#FFF] text-[#373737] placeholder-[#C8C8C8] text-[12px] lg:text-[18px] px-[22px] outline-none"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength={100}
            />
            {touched.name && errors.name && (
                <p className="text-[red] text-[12px] font-semibold mt-1">{errors.name}</p>
              )}
           </div>
           <div className="w-full">
             <input
              className="w-full h-[45px] lg:h-[52.4px] rounded-[7.59px] lg:rounded-[10px] bg-[#FFF] text-[#373737] placeholder-[#C8C8C8] text-[12px] lg:text-[18px] px-[22px] outline-none"
              placeholder="Contact number"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.contact && errors.contact && (
                <p className="text-[red] text-[12px] font-semibold mt-1">{errors.contact}</p>
              )}
           </div>
          </div>

          <div className="flex flex-col md:flex-row gap-[18px] lg:gap-[20px] pt-[18px] lg:pt-[28px]">
            <div className="w-full">
                <input
              className="w-full h-[45px] lg:h-[52.4px] rounded-[7.59px] lg:rounded-[10px] bg-[#FFF] text-[#373737] placeholder-[#C8C8C8] text-[12px] lg:text-[18px] px-[22px] outline-none"
              placeholder="Company name"
              name="company"
              value={formData.company}
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength={100}
            />
           
            </div>

            <div className="w-full">
                <input
              className="w-full h-[45px] lg:h-[52.4px] rounded-[7.59px] lg:rounded-[10px] bg-[#FFF] text-[#373737] placeholder-[#C8C8C8] text-[12px] lg:text-[18px] px-[22px] outline-none"
              placeholder="Business email address"
              name="businessEmail"
              value={formData.businessEmail}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.businessEmail && errors.businessEmail && (
                <p className="text-[red] text-[12px] font-semibold mt-1">
                  {errors.businessEmail}
              </p>
            )}
            </div>
          </div>
          <textarea
            className="mt-[18px] lg:mt-[28px] w-full h-[90.5px] lg:h-[147px] rounded-[10px] bg-[#FFF] text-[#373737] placeholder-[#C8C8C8] text-[12px] lg:text-[18px] py-[18px] px-[22px] outline-none"
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={200}
          />

          <div className="flex justify-center mt-[35px]">
            <button className="w-[154px] h-[40px] lg:w-[225px] lg:h-[61px] rounded-[30px] bg-[#5801B7] text-[#FFF] text-[18px] font-medium lg:text-[23.5px] lg:font-semibold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
