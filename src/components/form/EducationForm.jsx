import Form from "./Form";
import FormInput from "../input/FormInput";
import { useState } from "react";
import FormSelect from "../input/FormSelect";
import { v4 as uuidv4 } from "uuid";

export default function EducationForm({
  educationalInstitutions,
  setEducationalInstitutions,
  onSubmit,
}) {
  const [
    selectedEducationalInstitutionId,
    setSelectedEducationalInstitutionId,
  ] = useState(educationalInstitutions[0].id);

  const selectedEducationalInstitutionIndex = educationalInstitutions.findIndex(
    (educationalInstitution) =>
      educationalInstitution.id === selectedEducationalInstitutionId,
  );

  const selectedEducationalInstitution =
    educationalInstitutions[selectedEducationalInstitutionIndex];

  function setEducationalInstitutionName(name) {
    const updatedEducationalInstitutions = [...educationalInstitutions];
    updatedEducationalInstitutions[selectedEducationalInstitutionIndex].name =
      name;
    setEducationalInstitutions(updatedEducationalInstitutions);
  }

  function setEducationalInstitutionDegreeTitle(degreeTitle) {
    const updatedEducationalInstitutions = [...educationalInstitutions];
    updatedEducationalInstitutions[
      selectedEducationalInstitutionIndex
    ].degreeTitle = degreeTitle;
    setEducationalInstitutions(updatedEducationalInstitutions);
  }

  function setEducationalInstitutionStartDate(startDate) {
    const updatedEducationalInstitutions = [...educationalInstitutions];
    updatedEducationalInstitutions[
      selectedEducationalInstitutionIndex
    ].startDate = startDate;
    setEducationalInstitutions(updatedEducationalInstitutions);
  }

  function setEducationalInstitutionEndDate(endDate) {
    const updatedEducationalInstitutions = [...educationalInstitutions];
    updatedEducationalInstitutions[
      selectedEducationalInstitutionIndex
    ].endDate = endDate;
    setEducationalInstitutions(updatedEducationalInstitutions);
  }

  function handleAddClick() {
    const newEducationalInstitution = {
      name: "",
      degreeTitle: "",
      startDate: "",
      endDate: "",
      id: uuidv4(),
    };
    setEducationalInstitutions([
      ...educationalInstitutions,
      newEducationalInstitution,
    ]);
    setSelectedEducationalInstitutionId(newEducationalInstitution.id);
  }

  function handleDeleteClick() {
    const updatedEducationalInstitutions = [...educationalInstitutions];
    updatedEducationalInstitutions.splice(
      selectedEducationalInstitutionIndex,
      1,
    );
    setEducationalInstitutions(updatedEducationalInstitutions);
    setSelectedEducationalInstitutionId(
      selectedEducationalInstitutionIndex === educationalInstitutions.length - 1
        ? updatedEducationalInstitutions[
            updatedEducationalInstitutions.length - 1
          ].id
        : educationalInstitutions[selectedEducationalInstitutionIndex + 1].id,
    );
  }

  return (
    <Form onSubmit={onSubmit}>
      <div className="form-row">
        <FormSelect
          label={"Educational Institution"}
          name={"selectedSchool"}
          value={selectedEducationalInstitutionId}
          setValue={setSelectedEducationalInstitutionId}
          required={false}
          options={educationalInstitutions.map((educationalInstitution) => {
            return {
              value: educationalInstitution.id,
              displayName: educationalInstitution.name,
            };
          })}
          className={"fill"}
        />
        <button type="button" onClick={handleAddClick}>
          Add
        </button>
        <button type="button" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
      <FormInput
        type={"text"}
        label={"Educational Institution Name"}
        name={"schoolName"}
        value={selectedEducationalInstitution.name}
        setValue={setEducationalInstitutionName}
        placeholder={"Northwest Institute of Technology"}
        required={true}
      />
      <FormInput
        type={"text"}
        label={"Degree Title"}
        name={"degree"}
        value={selectedEducationalInstitution.degreeTitle}
        setValue={setEducationalInstitutionDegreeTitle}
        placeholder={"Software Engineering"}
        required={true}
      />
      <FormInput
        type={"month"}
        label={"Attendance Start Date"}
        name={"attendanceStartDate"}
        value={selectedEducationalInstitution.startDate}
        setValue={setEducationalInstitutionStartDate}
        required={true}
      />
      <FormInput
        type={"month"}
        label={"Attendance End Date"}
        name={"attendanceEndDate"}
        value={selectedEducationalInstitution.endDate}
        setValue={setEducationalInstitutionEndDate}
        required={true}
      />
    </Form>
  );
}
