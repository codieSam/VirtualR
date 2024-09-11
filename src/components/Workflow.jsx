import React from "react";
import code from "../assets/code.jpg";
import { checklistItems } from "../constants";
import { BadgeCheck } from "lucide-react";

function Workflow() {
  return (
    <div className="mx-[200px]">
      <h1 className="text-4xl lg:text-5xl text-center">
        Accelerate yur{" "}
        <span className="bg-gradient-to-r from-orange-600 to-orange-900 text-transparent bg-clip-text">
          coding Workflow
        </span>
      </h1>
      <div className="flex justify-center items-center mx-auto mt-16">
        <img src={code} alt="Code png" className="w-1/2" />
        <div className="">
          {checklistItems.map((checklistItem, index) => (
            <div className="flex flex-col" key={index}>
              <div className="flex ">
                <div className="mr-4 text-green-600">
                  <BadgeCheck />
                </div>
                <div className="">
                  <h3>{checklistItem.title}</h3>
                  <p className="text-gray-500 mt-2 mb-10">
                    {checklistItem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Workflow;
