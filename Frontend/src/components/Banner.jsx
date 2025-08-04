import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import banner from "../../public/Banner.png";
import { FaRobot } from "react-icons/fa";
import ChatBot from "./ChatBot"; // Import ChatBot component

function Banner() {
  const [isChatOpen, setIsChatOpen] = useState(false); // Chatbot visibility state

  const fadeInOut = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    reverse: true,
    loop: { reverse: true },
    delay: 1000,
    config: { tension: 170, friction: 26 },
  });

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
      {/* Left Content */}
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
        <div className="space-y-8">
          <animated.h1 style={fadeInOut} className="text-2xl md:text-4xl font-bold">
            Hello! Welcome to{" "}
            <span className="text-pink-500">Agro-Help! :)</span>
          </animated.h1>
          <p className="text-sm md:text-xl">
            Stay informed with Agro-Help! Our platform brings you the latest government schemes, weather updates,
            and essential news designed to support farmers. We are committed to helping farmers make informed decisions
            and maximize their resources!
          </p>
        </div>

        {/* Chat Button */}
        <button
          className="btn mt-6 btn-secondary flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-green-700 transition-all"
          onClick={() => setIsChatOpen(true)}
        >
          <FaRobot />
          Chat With Me
        </button>
      </div>

      {/* Right Content */}
      <div className="order-1 w-full mt-20 md:w-1/2">
        <img
          src={banner}
          className=" md:h-[350px] md:ml-12 rounded-2xl object-cover"
          alt="Agro-Help Banner"
        />
      </div>

      {/* ChatBot Modal */}
      {isChatOpen && <ChatBot onClose={() => setIsChatOpen(false)} />}
    </div>
  );
}

export default Banner;
