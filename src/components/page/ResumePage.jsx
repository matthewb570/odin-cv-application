import Card from "../card/Card";
import BasicInfoForm from "../form/BasicInfoForm";
import EducationForm from "../form/EducationForm";
import WorkExperienceForm from "../form/WorkExperienceForm";

export default function ResumePage() {
  return (
    <div className="resume-page">
      <Card title="Basic Information">
        <BasicInfoForm />
      </Card>
      <Card title="Educational Experience">
        <EducationForm />
      </Card>
      <Card title="Work Experience">
        <WorkExperienceForm />
      </Card>
    </div>
  );
}
