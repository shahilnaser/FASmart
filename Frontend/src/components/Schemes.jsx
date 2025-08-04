
import React from "react";

const Schemes = () => {
  const schemeCategories = [
    {
      title: "Central Government Schemes",
      schemes: [
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
        }
      ]
    },
    {
      title: "State Government Schemes",
      schemes: [
        {
          id: 1,
          name: "Mukhyamantri Krishi Ashirwad Yojana",
          description:
            "Financial assistance to small and marginal farmers for better agricultural support.",
          eligibility: <span className="text-pink-600">"Small & marginal farmers of Jharkhand."</span>,
          applicationStart: "April 1, 2024",
          applicationEnd: "October 31, 2024",
          status: "Open",
          link: "https://stateagri.gov.in",
        },
        {
          id: 2,
          name: "Haryana Mukhyamantri Bagwani Bima Yojana",
          description:
            "A horticulture insurance scheme that provides financial assistance to farmers affected by natural calamities.",
          eligibility: <span className="text-pink-600">"Horticulture farmers of Haryana."</span>,
          applicationStart: "March 1, 2024",
          applicationEnd: "August 31, 2024",
          status: "Open",
          link: "https://hortharyana.gov.in",
        }
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto mt-16 p-6">
      {schemeCategories.map((category, index) => (
        <div key={index}>
          <h2 className="text-2xl font-bold text-center text-blue-600 mt-8">{category.title}</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {category.schemes.map((scheme) => (
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
      ))}
    </div>
  );
};

export default Schemes;
