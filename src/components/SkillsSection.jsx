import { SectionTitle } from "./SectionTitle";
import { SkillInfoSection } from "./SkillInfoSection";

export const SkillsSection = (props) => {
  return (
    <div>
      <SectionTitle>Skills</SectionTitle>
      <SkillInfoSection skillName={"Knowlegde of Food"} skillRates={10} />
      <SkillInfoSection skillName={"Kitchen Management"} skillRates={10} />
      <SkillInfoSection skillName={"Food Science"} skillRates={10} />
      <SkillInfoSection
        skillName={"Creativity and Innovation"}
        skillRates={2}
      />
      <SkillInfoSection
        skillName={"Safe Food Handling and Sanitation"}
        skillRates={10}
      />
    </div>
  );
};
