import React from "react";

const CentralSchemes = () => {
  // Central Government Schemes Data
  const schemes = [
    {
      id: 1,
      name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
      description:
        "Provides income support of ₹6,000 per year to all farmer families in three equal installments.",
      eligibility: "Small & marginal farmers with cultivable land.",
      applicationStart: "January 1, 2024",
      applicationEnd: "December 31, 2024",
      status: "Open",
      link: "https://pmkisan.gov.in",
    },
    {
      id: 2,
      name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
      description:
        "A crop insurance scheme that provides financial support to farmers in case of crop failure due to natural calamities.",
      eligibility: "All farmers including tenant and sharecroppers.",
      applicationStart: "June 1, 2024",
      applicationEnd: "July 31, 2024",
      status: "Closed",
      link: "https://pmfby.gov.in",
    },
    {
      id: 3,
      name: "Soil Health Card Scheme",
      description:
        "Aims to provide soil health cards to farmers, enabling them to make informed decisions about soil nutrients and fertilizers.",
      eligibility: "All farmers owning agricultural land.",
      applicationStart: "March 15, 2024",
      applicationEnd: "September 30, 2024",
      status: "Open",
      link: "https://soilhealth.dac.gov.in",
    },
    {
      id: 4,
      name: "Kisan Credit Card (KCC)",
      description:
        "Offers short-term credit support to farmers at a lower interest rate to meet their agricultural needs.",
      eligibility: "All farmers, including tenant farmers and SHGs.",
      applicationStart: "February 1, 2024",
      applicationEnd: "Ongoing",
      status: "Open",
      link: "https://pmkisan.gov.in/KCC",
    },
    {
      id: 5,
      name: "National Agriculture Market (eNAM)",
      description:
        "An online trading platform that connects farmers with traders and buyers for better price realization of crops.",
      eligibility: "Registered farmers, traders, and buyers.",
      applicationStart: "April 1, 2024",
      applicationEnd: "October 31, 2024",
      status: "Open",
      link: "https://enam.gov.in",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-16 p-6">
      <h1 className="text-4xl font-bold text-center text-pink-600">
        🌾 Central Government Schemes
      </h1>
      <p className="mt-4 text-lg text-center text-gray-600">
        Explore various government initiatives designed to empower farmers and enhance agricultural productivity.
      </p>

      {/* Schemes List */}
      <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {schemes.map((scheme) => (
          <div
            key={scheme.id}
            className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-orange-600 dark:text-green-400">
              {scheme.name}
            </h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{scheme.description}</p>

            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <p>
                <strong>Eligibility:</strong> {scheme.eligibility}
              </p>
              <p>
                <strong>Application Period:</strong> {scheme.applicationStart} - {scheme.applicationEnd}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`font-semibold ${
                    scheme.status === "Open" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {scheme.status}
                </span>
              </p>
            </div>

            {/* Action Buttons */}
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

export default CentralSchemes;
