import { GroupInfoSection } from "./GroupInfoSection";
import { SectionTitle } from "./SectionTitle";

export const EmploymentHistorySection = (props) => {
  return (
    <div>
      <SectionTitle>Employment History</SectionTitle>
      <GroupInfoSection
        date={"Sep 2012 - Sep 2019"}
        loc={"New York"}
        pos={"Cook at Edmund's"}
        posJob={[
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, provident?",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, provident?",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, provident?",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, provident?",
        ]}
      />
      <GroupInfoSection
        date={"Jul 2007 - Aug 2012"}
        loc={"New York"}
        pos={"Line Cook at Stratatella Ristorante"}
        posJob={[
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, provident?",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, provident?",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, provident?",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, provident?",
        ]}
      />

      <GroupInfoSection
        date={"Sep 2005 - Jun 2007"}
        loc={"Philadelphia"}
        pos={"Back Line Cook at Jimmy Groger's Pub"}
        posJob={[
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, provident?",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, provident?",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, provident?",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, provident?",
        ]}
      />
    </div>
  );
};
