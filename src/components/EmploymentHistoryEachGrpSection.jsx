export const EmploymentHistoryEachGrpSection = (props) => {
  return (
    <div className="grid grid-cols-5 mb-10">
      <div>
        <div className="text-red-500 text-lg">{props.date}</div>
        <div className="mt-4">{props.loc}</div>
      </div>
      <div className="col-span-4">
        <div className="text-2xl font-bold">{props.pos}</div>
        <div>
          <ul>
            {props.posJob.map((element) => (
              <li>{element}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
