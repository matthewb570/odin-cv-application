import { useState } from "react";
import Card from "../card/Card";
import BasicInfoDisplay from "../display/BasicInfoDisplay";
import BasicInfoForm from "../form/BasicInfoForm";
import EducationForm from "../form/EducationForm";
import WorkExperienceForm from "../form/WorkExperienceForm";
import ResumeSection from "../section/ResumeSection";
import EducationDisplay from "../display/EducationDisplay";

export default function ResumePage() {
  const [isBasicInfoInEditMode, setIsBasicInfoInEditMode] = useState(true);
  const [isEducationInEditMode, setIsEducationInEditMode] = useState(true);

  return (
    <div className="resume-page">
      <BasicInfoResumeSection
        isInEditMode={isBasicInfoInEditMode}
        setIsInEditMode={setIsBasicInfoInEditMode}
      />
      <EducationResumeSection
        isInEditMode={isEducationInEditMode}
        setIsInEditMode={setIsEducationInEditMode}
      />
      <Card title="Work Experience">
        <WorkExperienceForm />
      </Card>
    </div>
  );
}

function BasicInfoResumeSection({ isInEditMode, setIsInEditMode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <ResumeSection
      isInEditMode={isInEditMode}
      setIsInEditMode={setIsInEditMode}
    >
      <Card title="Basic Information">
        <BasicInfoForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          onSubmit={() => setIsInEditMode(!isInEditMode)}
        />
      </Card>
      <BasicInfoDisplay name={name} email={email} phoneNumber={phone} />
    </ResumeSection>
  );
}

function EducationResumeSection({ isInEditMode, setIsInEditMode }) {
  const [educationalInstitutions, setEducationalInstitutions] = useState([
    { name: "", degreeTitle: "", startDate: "", endDate: "" },
  ]);

  return (
    <ResumeSection
      isInEditMode={isInEditMode}
      setIsInEditMode={setIsInEditMode}
    >
      <Card title="Educational Experience">
        <EducationForm
          educationalInstitutions={educationalInstitutions}
          setEducationalInstitutions={setEducationalInstitutions}
          onSubmit={() => setIsInEditMode(!isInEditMode)}
        />
      </Card>
      <EducationDisplay
        educationalInstitutions={educationalInstitutions}
      ></EducationDisplay>
    </ResumeSection>
  );
}
