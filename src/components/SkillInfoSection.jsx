import { useState } from "react";

export const SkillInfoSection = (props) => {
  let rates = ["", ""];
  useState(() => {
    for (let k = 1; k <= props.skillRates; k++) rates[0] += "● ";
    for (let k = props.skillRates; k < 10; k++) rates[1] += "● ";
  }, []);
  return (
    <div className="mb-3">
      <div className="text-md font-bold mb-2">{props.skillName}</div>
      <div>
        <span className="text-green-500">{rates[0]}</span>
        <span className="text-gray-300">{rates[1]}</span>
      </div>
    </div>
  );
};
