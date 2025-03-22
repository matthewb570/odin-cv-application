import Form from "./Form";
import FormInput from "../input/FormInput";
import { useState } from "react";
import FormSelect from "../input/FormSelect";
import School from "../../objects/School";

export default function EducationForm({ schools, setSchools, onSubmit }) {
  const [selectedSchoolId, setSelectedSchoolId] = useState(schools[0].id);

  const selectedSchoolIndex = schools.findIndex(
    (school) => school.id === selectedSchoolId,
  );

  const selectedSchool = schools[selectedSchoolIndex];

  function setSchoolName(name) {
    const updatedSchools = [...schools];
    updatedSchools[selectedSchoolIndex].name = name;
    setSchools(updatedSchools);
  }

  function setSchoolDegreeTitle(degreeTitle) {
    const updatedSchools = [...schools];
    updatedSchools[selectedSchoolIndex].degreeTitle = degreeTitle;
    setSchools(updatedSchools);
  }

  function setSchoolStartDate(startDate) {
    const updatedSchools = [...schools];
    updatedSchools[selectedSchoolIndex].startDate = startDate;
    setSchools(updatedSchools);
  }

  function setSchoolEndDate(endDate) {
    const updatedSchools = [...schools];
    updatedSchools[selectedSchoolIndex].endDate = endDate;
    setSchools(updatedSchools);
  }

  function handleAddClick() {
    const newSchool = new School();
    setSchools([...schools, newSchool]);
    setSelectedSchoolId(newSchool.id);
  }

  function handleDeleteClick() {
    const updatedSchools = [...schools];
    updatedSchools.splice(selectedSchoolIndex, 1);
    setSchools(updatedSchools);
    setSelectedSchoolId(
      selectedSchoolIndex === schools.length - 1
        ? updatedSchools[updatedSchools.length - 1].id
        : schools[selectedSchoolIndex + 1].id,
    );
  }

  return (
    <Form onSubmit={onSubmit}>
      <div className="form-row">
        <FormSelect
          label={"Educational Institution"}
          name={"selectedSchool"}
          value={selectedSchoolId}
          setValue={setSelectedSchoolId}
          required={false}
          options={schools.map((school) => {
            return {
              value: school.id,
              displayName: school.name,
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
        value={selectedSchool.name}
        setValue={setSchoolName}
        placeholder={"Northwest Institute of Technology"}
        required={true}
      />
      <FormInput
        type={"text"}
        label={"Degree Title"}
        name={"degree"}
        value={selectedSchool.degreeTitle}
        setValue={setSchoolDegreeTitle}
        placeholder={"Software Engineering"}
        required={true}
      />
      <FormInput
        type={"month"}
        label={"Attendance Start Date"}
        name={"attendanceStartDate"}
        value={selectedSchool.startDate}
        setValue={setSchoolStartDate}
        required={true}
      />
      <FormInput
        type={"month"}
        label={"Attendance End Date"}
        name={"attendanceEndDate"}
        value={selectedSchool.endDate}
        setValue={setSchoolEndDate}
        required={true}
      />
    </Form>
  );
}
