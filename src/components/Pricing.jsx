import React from "react";
import { pricingOptions } from "../constants";
import { CircleCheck } from "lucide-react";

function Pricing() {
  return (
    <div className="flex flex-col mx-[100px] justify-center items-center mt-8">
      <h1 className="text-5xl mb-10">Pricing</h1>
      <div className="flex flex-wrap gap-5 w-full items-center justify-center">
        {pricingOptions.map((priceOption, index) => (
          <div
            className="flex flex-col h-[500px] w-[400px] lg:w-[350px]  border border-neutral-700 rounded-lg items-left space-y-4"
            key={index}
          >
            <h2 className="mt-4 text-2xl ml-8">
              {priceOption.title}
              {priceOption.title === "Pro" && (
                <span className="text-orange-700 ml-2 text-sm">
                  (Most popular)
                </span>
              )}
            </h2>
            <h2 className="text-3xl ml-8">
              {priceOption.price}{" "}
              <span className="text-gray-600 text-sm">/Month</span>
            </h2>
            <ul className="">
              {priceOption.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex mt-10 mb-10 ml-8 text-gray-200 text-xxl "
                >
                  <CircleCheck />
                  <span className="ml-4">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="ml-10 mr-10 border border-orange-900 rounded-md py-2 px-4 bg-transparent hover:bg-orange-800 duration-300">
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
