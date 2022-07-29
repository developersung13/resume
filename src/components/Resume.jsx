import { EducationSection } from "./EducationSection";
import { EmploymentHistorySection } from "./EmploymentHistorySection";
import { ProfileSection } from "./ProfileSection";
import { SkillsSection } from "./SkillsSection";

export const Resume = (props) => {
  return (
    <div className="p-12">
      <div className="grid grid-cols-4">
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
