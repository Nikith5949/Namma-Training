import React from "react";

const plans = [
  {
    name: "STRYV Essential",
    color: "from-gray-300 via-gray-400 to-gray-500", // Silver
    offerings:
      "Open Gym or 1 Group Class (MMA, Strength & Conditioning, Yoga, Zumba). Personal Training available as add-on.",
    prices: {
      "1 Month": "₹3,000",
      "3 Months": "₹8,000",
      "6 Months": "₹15,000",
      "12 Months": "₹28,000",
    },
  },
  {
    name: "STRYV Pro",
    color: "from-yellow-400 via-yellow-500 to-yellow-600", // Gold
    offerings:
      "Open Gym plus 1 Group Class (choose MMA, Strength & Conditioning, Yoga, or Zumba). Personal Training available as add-on.",
    prices: {
      "1 Month": "₹5,500",
      "3 Months": "₹15,500",
      "6 Months": "₹29,000",
      "12 Months": "₹55,000",
    },
  },
  {
    name: "STRYV Premium",
    color: "from-red-500 via-red-600 to-red-700", // Red
    offerings:
      "Unlimited access to Open Gym and all Group Classes. Personal Training sessions available at discounted rates.",
    prices: {
      "1 Month": "₹7,500",
      "3 Months": "₹21,500",
      "6 Months": "₹40,000",
      "12 Months": "₹75,000",
    },
  },
];

const offers = [
  "Early Bird Special: Kickstart your day with STRYV classes! Use code: NAMMA10",
  "Independent Workouts: Enjoy early access to Open Gym at STRYV Fit! Use code: STRYV1",
  "Universal Access: Train across all STRYV facilities! Use code: ALLFIT",
];

function StryvPass() {
  return (
    <div className="bg-[var(--theme-bgcolor)] text-[var(--theme-color)] pt-30 min-h-screen py-12 px-4 md:px-12 lg:px-24 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900">
        STRYV Pass
      </h1>
      <p className="text-center text-gray-700 mb-10 max-w-3xl text-lg md:text-xl">
        Choose the membership plan that best fits your goals and duration.
      </p>

      {/* Membership Cards */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full justify-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`flex-1 text-white rounded-2xl p-6 md:p-8 shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer bg-gradient-to-br ${plan.color}`}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center uppercase">
              {plan.name}
            </h2>

            {/* Justified Offerings Text */}
            <p className="text-sm md:text-base mb-4 text-justify whitespace-pre-line">
              {plan.offerings}
            </p>

            {/* Pricing Table */}
            <div className="overflow-x-auto">
              <table className="mx-auto text-white text-sm md:text-base border-collapse text-center">
                <thead>
                  <tr>
                    {Object.keys(plan.prices).map((duration) => (
                      <th
                        key={duration}
                        className="px-2 py-1 border-b border-white font-semibold"
                      >
                        {duration}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {Object.values(plan.prices).map((price, idx) => (
                      <td
                        key={idx}
                        className="px-2 py-1 border-b border-white font-bold"
                      >
                        {price}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <button className="mt-6 w-full bg-white text-gray-900 font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition">
              Join Now
            </button>
          </div>
        ))}
      </div>

      {/* Special Offers */}
      <div className="mt-12 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Special Offers
        </h2>
        <ul className="space-y-4 text-center">
          {offers.map((offer, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-2xl shadow-md text-gray-900 hover:scale-105 transform transition duration-300 font-medium"
            >
              {offer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StryvPass;
