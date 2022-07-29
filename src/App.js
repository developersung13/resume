import { SectionTitle } from "./components/SectionTitle";

function App() {
  return (
    <div className="App">
      <div className="p-12">
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <div>
              <div>Picture</div>
              <div>Name</div>
              <div>Job</div>
              <div>Location</div>
              <div>Email</div>
              <div>Tel</div>
            </div>

            <div>
              <SectionTitle>Profile</SectionTitle>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                officia officiis nulla laborum hic ut temporibus obcaecati
                accusantium ad, eius eveniet fuga possimus amet magni corrupti
                adipisci alias consectetur odit?
              </div>
            </div>

            <div>
              <SectionTitle>Employment History</SectionTitle>
              <div>EmploymentDate</div>
              <div>EmploymentLocation</div>
              <div>EmploymentPosition</div>
              <div>EmploymentPositionJobs</div>
            </div>
            <div>
              <SectionTitle>Education</SectionTitle>
              <div>EducationDate</div>
              <div>EducationLocation</div>
              <div>EducationName</div>
            </div>
          </div>

          <div>
            <SectionTitle>Skills</SectionTitle>
            <div>Skill</div>
            <div>SkillRates</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
