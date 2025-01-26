import React, { useRef, useState } from "react";
import { IoHome } from "react-icons/io5";
import { MdAddCall, MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7vfx7p7", // Service ID
        "template_e8v21mu", // Template ID
        form.current,
        "rq17KEfytUz84NGBE" // User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("There was an error. Please try again.");
        }
      );
  };

  return (
    <div className="mt-20 mb-20 px-4">
      {/* Flex container for form and contact info */}
      <div className="flex flex-col md:flex-row justify-around gap-12 items-start ">
        {/* Contact Form Section */}
        <div className="p-6 bg-white shadow-xl rounded-lg w-full md:w-[60%]">
          <h1 className="text-3xl font-semibold mb-8 text-center md:text-left">
            Get in Touch
          </h1>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <input
                type="text"
                name="from_subject"
                placeholder="Enter Subject"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Enter Message"
              className="w-full border border-gray-300 rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            ></textarea>
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                name="from_name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Enter your Email"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-medium py-3 rounded-md hover:bg-orange-600 transition duration-200"
            >
              Send
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-8 w-full md:w-[35%] px-2">
          <div className="flex items-center gap-4">
            <IoHome className="text-4xl text-orange-500" />
            <div>
              <h3 className="text-lg font-medium">
                Patna Saheb near Gurudwara
              </h3>
              <p className="text-sm text-gray-600">Patna, Bihar</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MdAddCall className="text-4xl text-orange-500" />
            <div>
              <h3 className="text-lg font-medium">+91 7479867857</h3>
              <p className="text-sm text-gray-600">Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MdEmail className="text-4xl text-orange-500" />
            <div>
              <h3 className="text-lg font-medium">
                himanshukeshri986@gmail.com
              </h3>
              <p className="text-sm text-gray-600">
                Send me your query anytime!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.301808526481!2d85.23221557485036!3d25.594885515479074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5f002e13c73d%3A0xb01eb1213fe09f87!2sKaimashikoh%20Patna%20City!5e0!3m2!1sen!2sin!4v1737493666906!5m2!1sen!2sin"
          width="100%"
          height="450"
          className="border-0 rounded-lg shadow-lg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMe;
