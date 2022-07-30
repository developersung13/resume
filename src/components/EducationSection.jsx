import { GroupInfoSection } from "./GroupInfoSection";
import { SectionTitle } from "./SectionTitle";

export const EducationSection = (props) => {
  return (
    <div>
      <SectionTitle>Education</SectionTitle>
      <GroupInfoSection
        date={"Jul 2005 - May 2009"}
        loc={"Hydi Pek"}
        pos={"Culinary Institute of America"}
        posJob={["Lorem ipsum dolor sit amet consectetur"]}
      />
      <GroupInfoSection
        date={"Sep 2001 - May 2005"}
        loc={""}
        pos={"Warwick High School"}
        posJob={[]}
      />
    </div>
  );
};
