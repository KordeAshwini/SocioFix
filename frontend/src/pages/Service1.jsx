import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Sample service provider data
const ServiceProviders = [
  {
    id: 1,
    name: "John Doe",
    service: "Electrician",
    address: "123 Main Street, New York, NY",
    contact: "+1 234 567 890",
    img: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Sarah Smith",
    service: "Plumber",
    address: "456 Elm Street, Los Angeles, CA",
    contact: "+1 987 654 321",
    img: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Mike Johnson",
    service: "Carpenter",
    address: "789 Pine Avenue, Chicago, IL",
    contact: "+1 543 210 678",
    img: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "Emma Williams",
    service: "Handyman",
    address: "321 Oak Drive, Houston, TX",
    contact: "+1 345 678 901",
    img: "https://via.placeholder.com/100",
  },
];

const ServiceList = () => {
  React.useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary font-semibold">
            Our Trusted Experts
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Find a Service Provider
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Choose from our verified and professional service providers.
          </p>
        </div>

        {/* Service Provider Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ServiceProviders.map((provider) => (
            <div
              key={provider.id}
              data-aos="zoom-in"
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transition transform hover:scale-105"
            >
              <div className="p-6 flex items-center space-x-4">
                <img
                  src={provider.img}
                  alt={provider.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold">{provider.name}</h2>
                  <p className="text-sm text-primary font-medium">
                    {provider.service}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 space-y-2 text-gray-600 dark:text-gray-300">
                <p className="text-sm">
                  📍 <span className="font-medium">{provider.address}</span>
                </p>
                <p className="text-sm">
                  📞 <span className="font-medium">{provider.contact}</span>
                </p>
                <button className="mt-3 bg-primary text-white py-2 px-4 rounded-full w-full hover:bg-secondary transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
