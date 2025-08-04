import React from "react";

const StateSchemes = () => {
  // Sample state-level schemes data (replace with dynamic data if needed)
  const stateSchemes = [
    {
      id: 1,
      name: "State Agricultural Support Scheme",
      description:
        "Provides subsidies and technical support to farmers to improve productivity at the state level.",
      eligibility: "Farmers owning less than 5 acres of land.",
      applicationStart: "March 1, 2024",
      applicationEnd: "May 31, 2024",
      status: "Open",
      link: "https://stateagri.gov/support-scheme",
    },
    {
      id: 2,
      name: "State Crop Insurance Program",
      description:
        "Offers crop insurance to protect farmers against losses due to natural calamities.",
      eligibility: "All registered farmers in the state.",
      applicationStart: "April 1, 2024",
      applicationEnd: "June 30, 2024",
      status: "Closed",
      link: "https://stateagri.gov/crop-insurance",
    },
    {
      id: 3,
      name: "State Irrigation Scheme",
      description:
        "Supports the development of irrigation infrastructure and water management practices.",
      eligibility: "Farmers in drought-prone areas.",
      applicationStart: "February 15, 2024",
      applicationEnd: "August 31, 2024",
      status: "Open",
      link: "https://stateagri.gov/irrigation-scheme",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-16 p-6">
      <h1 className="text-4xl font-bold text-center text-pink-600">
        🌾 State Government Schemes
      </h1>
      <p className="mt-4 text-lg text-center text-gray-600">
        Explore state-level initiatives designed to support local farmers and boost agricultural productivity.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {stateSchemes.map((scheme) => (
          <div
            key={scheme.id}
            className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-orange-600 dark:text-green-400">
              {scheme.name}
            </h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {scheme.description}
            </p>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <p>
                <strong>Eligibility:</strong> {scheme.eligibility}
              </p>
              <p>
                <strong>Application Period:</strong> {scheme.applicationStart} - {scheme.applicationEnd}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span className={`font-semibold ${scheme.status === "Open" ? "text-green-600" : "text-red-600"}`}>
                  {scheme.status}
                </span>
              </p>
            </div>
            <div className="mt-4 flex justify-between">
              <a
                href={scheme.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Read More
              </a>
              {scheme.status === "Open" && (
                <a
                  href={scheme.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                >
                  Apply Now
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StateSchemes;
