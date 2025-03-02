import React from "react";
import ContactImage from "../assets/contact.png";


const ContactUs = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side: Contact Form */}
        <div>
          <p className="text-lg mb-6">
            Have any questions or need assistance? Feel free to reach out to us. We’d love to help!
          </p>

          <form className="space-y-6 max-w-lg">
            <div>
              <label className="block mb-2 font-semibold" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="5"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <center><button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded-full hover:bg-secondary transition-all"
            >
              Send Message
            </button></center>
          </form>
        </div>

        {/* Right Side: Image and Additional Info */}
        <div className="text-center lg:text-left">
        <img
        src={ContactImage}
        alt="Contact Us"
        className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
        />

          <h2 className="text-2xl font-bold mb-4">We’re Here to Help</h2>
          <p className="text-lg mb-2">
            📍 Address: 123 Click&Fix Street, New York, NY 10001
          </p>
          <p className="text-lg mb-2">📞 Phone: +1 (123) 456-7890</p>
          <p className="text-lg">📧 Email: support@clickandfix.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
