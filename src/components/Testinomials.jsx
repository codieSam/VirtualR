import React from "react";
import { testimonials } from "../constants";

function Testinomials() {
  return (
    <div className="flex flex-col mx-[100px] mt-20 items-center justify-center mb-20">
      <h1 className="text-5xl">What People are Saying</h1>
      <div className="flex flex-wrap gap-10 items-center justify-center mt-20">
        {testimonials.map((user, index) => (
          <div
            className="flex flex-col gap-10 bg-neutral-900 h-auto w-[400px] lg:w-[350px] "
            key={index}
          >
            <p className="text-justify text-gray-400 p-4 tracking-wider font-sans">
              {user.text}
            </p>
            <div className="flex space-x-8">
              <img
                className="h-10 w-120 rounded-full m-4 border border-neutral-300"
                src={user.image}
                alt="users"
              />
              <div className="flex flex-col mt-4 ">
                <h3 className="tracking-wider text-sans">{user.user}</h3>
                <h5 className="text-neutral-500 text-sm text-sans tracking-wider italic">
                  {user.company}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testinomials;
