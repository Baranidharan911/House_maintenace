import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    selectedService: "",
    message: "",
  });

  const services = [
    "Plumbing",
    "Painting",
    "HVAC",
    "Landscaping",
    "Electrical",
    "Maintenance",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Add your form submission logic here
    console.log("Form submitted with data:", formData);
  };

  return (
    <section id="contact" className="min-h-screen bg-[#f2f2f2]">
      <div className="container mx-auto flex justify-center items-center h-full">
        <div className="h-auto lg:h-[750px] w-full lg:w-[80%] bg-white p-6 lg:p-12 rounded-lg">
          <div className="h-[10%] w-full pt-8 flex justify-center items-center flex-col">
            <p
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="text-3xl lg:text-4xl font-light uppercase tracking-widest max-sm:text-2xl"
            >
              <span>Contact</span> <span className="text-[#00008B]">Us</span>
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:gap-10 w-full justify-center items-center mt-8">
            <div className="w-full lg:w-[80%]">
              <input
                className="border rounded-lg w-full py-3 px-6 lg:py-4 lg:px-10 border-gray-300"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-full lg:w-[80%]">
              <input
                className="border rounded-lg w-full py-3 px-6 lg:py-4 lg:px-10 border-gray-300"
                placeholder="Your Email ID"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="w-full lg:w-[80%]">
              <input
                className="border rounded-lg w-full py-3 px-6 lg:py-4 lg:px-10 border-gray-300"
                placeholder="Your Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="w-full lg:w-[80%]">
              <select
                className="border rounded-lg w-full py-3 px-6 lg:py-4 lg:px-10 border-gray-300"
                placeholder="What service do you want?"
                name="selectedService"
                value={formData.selectedService}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full lg:w-[80%]">
              <textarea
                className="border rounded-lg w-full py-3 px-6 lg:py-4 lg:px-10 border-gray-300"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="w-full lg:w-[80%]">
              <button
                onClick={handleSubmit}
                className="border text-white font-extrabold text-lg lg:text-xl tracking-widest rounded-lg bg-[#00008B] w-full py-3 px-6 lg:py-4 lg:px-10 border-gray-300 hover:border-2 hover:border-[#00008B] hover:text-black hover:bg-white hover:transition-all hover:ease-in-out hover:duration-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
