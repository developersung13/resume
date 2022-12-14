import { EducationSection } from "./EducationSection";
import { EmploymentHistorySection } from "./EmploymentHistorySection";
import { ProfileSection } from "./ProfileSection";
import { SkillsSection } from "./SkillsSection";

export const Resume = (props) => {
  return (
    <div className="pt-20 pl-80">
      <div className="grid grid-cols-5">
        <div className="col-span-3">
          <ProfileSection />
          <EmploymentHistorySection />
          <EducationSection />
        </div>
        <div>
          <SkillsSection />
        </div>
      </div>
    </div>
  );
};
