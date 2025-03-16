import Form from "./Form";
import FormInput from "../input/FormInput";

export default function EducationForm({
  educationalInstitutions,
  setEducationalInstitutions,
  onSubmit,
}) {
  function setEducationalInstitutionName(name) {
    setEducationalInstitutions([{ ...educationalInstitutions[0], name }]);
  }

  function setEducationalInstitutionDegreeTitle(degreeTitle) {
    setEducationalInstitutions([
      { ...educationalInstitutions[0], degreeTitle },
    ]);
  }

  function setEducationalInstitutionStartDate(startDate) {
    setEducationalInstitutions([{ ...educationalInstitutions[0], startDate }]);
  }

  function setEducationalInstitutionEndDate(endDate) {
    setEducationalInstitutions([{ ...educationalInstitutions[0], endDate }]);
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormInput
        type={"text"}
        label={"Educational Institution"}
        name={"schoolName"}
        value={educationalInstitutions[0].name}
        setValue={setEducationalInstitutionName}
        placeholder={"Northwest Institute of Technology"}
        required={true}
      />
      <FormInput
        type={"text"}
        label={"Degree Title"}
        name={"degree"}
        value={educationalInstitutions[0].degreeTitle}
        setValue={setEducationalInstitutionDegreeTitle}
        placeholder={"Software Engineering"}
        required={true}
      />
      <FormInput
        type={"date"}
        label={"Attendance Start Date"}
        name={"attendanceStartDate"}
        value={educationalInstitutions[0].startDate}
        setValue={setEducationalInstitutionStartDate}
        placeholder={"mm/dd/yyyy"}
        required={true}
      />
      <FormInput
        type={"date"}
        label={"Attendance End Date"}
        name={"attendanceEndDate"}
        value={educationalInstitutions[0].endDate}
        setValue={setEducationalInstitutionEndDate}
        placeholder={"mm/dd/yyyy"}
        required={true}
      />
    </Form>
  );
}
