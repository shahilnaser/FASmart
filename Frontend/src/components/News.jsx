


import React, { useState } from "react";
import { motion } from "framer-motion";

const News = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const newsPerPage = 3;

  const handleReadMore = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  const dummyNews = [
    {
      title: "Government Launches New Subsidy Scheme for Farmers",
      description:
        "The government has introduced a new subsidy scheme to provide financial support to farmers for purchasing modern equipment.",
      // image:
      //   "https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg",
      image:
      "https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/Agricultural-Subsidies2--1-.jpeg",
      fullText:
        "The government has announced a new subsidy scheme to assist farmers in adopting modern agricultural techniques...",
    },
    {
      title: "Organic Farming on the Rise in Rural India",
      description:
        "More farmers are shifting to organic farming due to increasing demand for chemical-free produce.",
      image:
        "https://jlrjs.com/wp-content/uploads/2021/07/CONTRACT-FARMING-IN-INDIA-Aashish-Rawal.jpg",
      fullText:
        "The increasing awareness about the harmful effects of chemical pesticides has led to a surge in organic farming...",
    },
    {
      title: "Monsoon Forecast: Good Rains Expected This Season",
      description:
        "The Meteorological Department predicts a favorable monsoon, boosting hopes for a good harvest this year.",
      image:
        "https://assets.thehansindia.com/h-upload/2022/06/13/1297573-rainfall.jpg",
      fullText:
        "Experts suggest that this year's monsoon will bring good rainfall, ensuring a fruitful harvest season...",
    },

    {
        title: "Government Launches New Subsidy Scheme for Farmers",
        description:
          "The government has introduced a new subsidy scheme to provide financial support to farmers for purchasing modern equipment.",
        image:
          "https://newsd.in/wp-content/uploads/2019/08/Farmer3.jpg",
        fullText:
          "The government has announced a new subsidy scheme to assist farmers in adopting modern agricultural techniques...",
      },
      {
        title: "Organic Farming on the Rise in Rural India",
        description:
          "More farmers are shifting to organic farming due to increasing demand for chemical-free produce.",
        image:
          "https://www.agrifarming.in/wp-content/uploads/2020/06/Comp3-17.jpg",
        fullText:
          "The increasing awareness about the harmful effects of chemical pesticides has led to a surge in organic farming...",
      },
      {
        title: "Monsoon Forecast: Good Rains Expected This Season",
        description:
          "The Meteorological Department predicts a favorable monsoon, boosting hopes for a good harvest this year.",
        image:
          "https://static.toiimg.com/thumb/msid-99406759,width-400,resizemode-4/99406759.jpg",
        fullText:
          "Experts suggest that this year's monsoon will bring good rainfall, ensuring a fruitful harvest season...",
      },
      {
        title: "Government Launches New Subsidy Scheme for Farmers",
        description:
          "The government has introduced a new subsidy scheme to provide financial support to farmers for purchasing modern equipment.",
        image:
          "https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg",
        fullText:
          "The government has announced a new subsidy scheme to assist farmers in adopting modern agricultural techniques...",
      },
      {
        title: "Organic Farming on the Rise in Rural India",
        description:
          "More farmers are shifting to organic farming due to increasing demand for chemical-free produce.",
        image:
          "https://i.guim.co.uk/img/static/sys-images/Environment/Pix/columnists/2012/3/14/1331726141124/MDG--India--An-farm-labou-006.jpg?width=465&dpr=1&s=none",
        fullText:
          "The increasing awareness about the harmful effects of chemical pesticides has led to a surge in organic farming...",
      },
      {
        title: "Monsoon Forecast: Good Rains Expected This Season",
        description:
          "The Meteorological Department predicts a favorable monsoon, boosting hopes for a good harvest this year.",
        image:
          "https://th.bing.com/th/id/OIP.L2fSHflIGANoupv5PLEqtAHaEB?w=1068&h=580&rs=1&pid=ImgDetMain",
        fullText:
          "Experts suggest that this year's monsoon will bring good rainfall, ensuring a fruitful harvest season...",
      },
  ];

  return (
    <div className="container mx-auto mt-10 p-5">
      {/* <h1 className="text-3xl font-bold text-center">Latest Agriculture News</h1> */}
      {/* <motion.h1
  className="text-3xl font-bold text-center text-green-600"
  initial={{ opacity: 0, y: -20, color: "#FF5733" }}
  animate={{ opacity: 1, y: 0, color: "#008000" }}
  transition={{ duration: 1, ease: "easeInOut" }}
>
  Latest Agriculture News
</motion.h1> */}

    {/* <motion.h1
        className="text-3xl font-bold text-center"
        initial={{ x: 0, color: "#FF5733" }}
        animate={{ x: [0, 200, 0], color: ["#FF5733", "#008000", "#FF5733"] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        Latest Agriculture News
      </motion.h1>

      <p className="text-lg text-center mt-2">
        Stay updated with the latest schemes and news in the agriculture sector.
      </p> */}

      <motion.h1 className="text-3xl font-bold text-center">
  {["L", "a", "t", "e", "s", "t", " ", "A", "g", "r", "i", "c", "u", "l", "t", "u", "r", "e", " ", "N", "e", "w", "s"].map(
    (letter, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, x: -10, color: "#FF5733" }}
        animate={{ opacity: 1, x: 0, color: "#008000" }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {letter}
      </motion.span>
    )
  )}
</motion.h1>

<p className="text-lg text-center mt-2">
  Stay updated with the latest schemes and news in the agriculture sector.
</p>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {dummyNews.slice(0, visibleCount).map((article, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="mt-2 font-bold">{article.title}</h2>
            <p className="mt-1 text-sm">{article.description}</p>
            <button
              onClick={() => handleReadMore(article)}
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {visibleCount < dummyNews.length && (
        <div className="text-center mt-6">
          <button
            onClick={() => setVisibleCount(visibleCount + newsPerPage)}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            Load More
          </button>
        </div>
      )}

      {/* Modal for displaying detailed news */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <h2 className="text-xl font-bold">{selectedArticle.title}</h2>
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-40 object-cover rounded-md mt-2"
            />
            <p className="mt-2 text-sm">{selectedArticle.fullText}</p>
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
