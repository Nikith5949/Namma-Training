import React from "react";

const plans = [
  {
    name: "STRYV Pro",
    color: "from-yellow-400 via-yellow-500 to-yellow-600", // Silver
    offerings: [
      "Open Gym with 1 PT demo (with Yoga, Zumba)",
      "NAMMA - 1 free demo session of MMA and S&C",
    ],
    prices: {
      "1 Month": { original: "₹6,600", current: "₹5,100" },
      "3 Months": { original: "₹13,200", current: "₹10,200" },
      "6 Months": { original: "₹19,800", current: "₹15,300" },
      "12 Months": { original: "₹24,200", current: "₹18,700" },
    },
  },
  {
    name: "NAMMA Training",
    color: "from-teal-400 via-teal-500 to-teal-600", // Gold
    offerings: [
      "NAMMA - unlimited classes of MMA and S&C as scheduled",
      "1 PT session in the Gym free",
    ],
    prices: {
      "1 Month": { original: "₹9,200", current: "₹8,000" },
      "3 Months": { original: "₹17,250", current: "₹15,000" },
      "6 Months": { original: "₹28,750", current: "₹25,000" },
      "12 Months": { original: "₹41,400", current: "₹36,000" },
    },
  },
  {
    name: "STRYV Premium",
    color: "from-red-500 via-red-600 to-red-700", // Red
    offerings: [
      "Unlimited access to Open Gym and all Group Classes as scheduled",
      "Unlimited access to Namma Classes MMA & S&C as scheduled",
      "1 PT session in the Gym free",
    ],
    prices: {
      "6 Months": { original: "₹39,600", current: "₹30,600" },
      "12 Months": { original: "₹52,800", current: "₹40,800" },
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
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full justify-center items-stretch">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`flex-1 flex flex-col justify-between text-white rounded-2xl p-6 md:p-8 shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer bg-gradient-to-br ${plan.color}`}
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center uppercase">
                {plan.name}
              </h2>

              {/* Bullet Point Offerings */}
              <ul className="list-disc list-inside mb-4 text-sm md:text-base space-y-2">
                {plan.offerings.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              {/* Pricing Table with slashed prices */}
              <div className="overflow-x-auto">
                <table className="mx-auto text-white text-sm md:text-base border-collapse text-center">
                  <thead>
                    <tr>
                      {Object.keys(plan.prices).map((duration) => (
                        <th
                          key={duration}
                          className="px-2 py-1 border-b border-white font-semibold"
                        >
                          <span className="text-2xl md:text-3xl bg-gradient-to-r text-white bg-clip-text text-transparent font-extrabold">
                            {duration.split(" ")[0]}
                          </span>{" "}
                          {duration.split(" ")[1]}
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
                          <span className="line-through text-gray-200 text-xs block">
                            {price.original}
                          </span>
                          <span className="text-lg">{price.current}</span>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Join Now Button */}
            <a
              href="tel:+919900009889"
              className="mt-6 w-full bg-white text-gray-900 font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition text-center block"
            >
              Join Now
            </a>
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
