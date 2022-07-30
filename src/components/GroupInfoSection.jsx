import { useState } from "react";

export const GroupInfoSection = (props) => {
  let ulClassName;
  useState(() => {
    ulClassName = props.posJob.length > 1 ? "mt-4 ml-10 list-disc" : "mt-4";
  }, []);
  return (
    <div className="grid grid-cols-5 mb-10">
      <div>
        <div className="text-green-500 text-lg">{props.date}</div>
        <div className="mt-4">{props.loc}</div>
      </div>
      <div className="col-span-4">
        <div className="text-2xl font-bold">{props.pos}</div>
        <div>
          <ul className={ulClassName}>
            {props.posJob.map((element, idx) => (
              <li key={idx}>{element}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
