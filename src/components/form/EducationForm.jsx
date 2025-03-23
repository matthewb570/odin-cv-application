import Form from "./Form";
import FormInput from "../input/FormInput";
import { useState } from "react";
import FormSelect from "../input/FormSelect";
import School from "../../objects/School";
import StringUtils from "../../utils/StringUtils";

export default function EducationForm({ schools, setSchools, onSubmit }) {
  const [selectedSchoolId, setSelectedSchoolId] = useState(schools[0].id);

  const [isNameValid, setIsNameValid] = useState(undefined);
  const [isDegreeTitleValid, setIsDegreeTitleValid] = useState(undefined);
  const [isStartDateValid, setIsStartDateValid] = useState(undefined);
  const [isEndDateValid, setIsEndDateValid] = useState(undefined);

  const selectedSchoolIndex = schools.findIndex(
    (school) => school.id === selectedSchoolId,
  );

  const selectedSchool = schools[selectedSchoolIndex];

  function validateName(name) {
    const newIsNameValid = !StringUtils.isEmpty(name);
    setIsNameValid(newIsNameValid);
    return newIsNameValid;
  }

  function validateDegreeTitle(degreeTitle) {
    const newIsDegreeTitleValid = !StringUtils.isEmpty(degreeTitle);
    setIsDegreeTitleValid(newIsDegreeTitleValid);
    return newIsDegreeTitleValid;
  }

  function validateStartDate(startDate, endDate, doValidateEndDate) {
    if (doValidateEndDate && !StringUtils.isEmpty(endDate)) {
      validateEndDate(endDate);
    }

    const newIsStartDateValid =
      !StringUtils.isEmpty(startDate) &&
      (!StringUtils.isEmpty(endDate) ? startDate <= endDate : true);
    console.log(startDate, endDate, newIsStartDateValid);
    setIsStartDateValid(newIsStartDateValid);
    return newIsStartDateValid;
  }

  function validateEndDate(endDate, startDate, doValidateStartDate) {
    if (doValidateStartDate && !StringUtils.isEmpty(startDate)) {
      validateStartDate(startDate, endDate, false);
    }

    const newIsEndDateValid =
      !StringUtils.isEmpty(endDate) &&
      (!StringUtils.isEmpty(startDate) ? endDate >= startDate : true);
    setIsEndDateValid(newIsEndDateValid);
    return newIsEndDateValid;
  }

  function validateForm() {
    const isNameValid = validateName(selectedSchool.name);
    const isDegreeTitleValid = validateDegreeTitle(selectedSchool.degreeTitle);
    const isStartDateValid = validateStartDate(
      selectedSchool.startDate,
      selectedSchool.endDate,
      false,
    );
    const isEndDateValid = validateEndDate(
      selectedSchool.endDate,
      selectedSchool.startDate,
      false,
    );
    return (
      isNameValid && isDegreeTitleValid && isStartDateValid && isEndDateValid
    );
  }

  function resetValidity() {
    setIsNameValid(undefined);
    setIsDegreeTitleValid(undefined);
    setIsStartDateValid(undefined);
    setIsEndDateValid(undefined);
  }

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
    if (validateForm()) {
      resetValidity();
      const newSchool = new School();
      setSchools([...schools, newSchool]);
      setSelectedSchoolId(newSchool.id);
    }
  }

  function handleDeleteClick() {
    resetValidity();
    const updatedSchools = [...schools];
    updatedSchools.splice(selectedSchoolIndex, 1);
    setSchools(updatedSchools);
    setSelectedSchoolId(
      selectedSchoolIndex === schools.length - 1
        ? updatedSchools[updatedSchools.length - 1].id
        : schools[selectedSchoolIndex + 1].id,
    );
  }

  function handleSelectChange(value) {
    if (validateForm()) {
      resetValidity();
      setSelectedSchoolId(value);
    }
  }

  return (
    <Form validationFunction={validateForm} onSubmit={onSubmit}>
      <div className="form-row">
        <FormSelect
          label={"Educational Institution"}
          name={"selectedSchool"}
          value={selectedSchoolId}
          onChange={handleSelectChange}
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
        isValid={isNameValid}
        validationFunction={validateName}
      />
      <FormInput
        type={"text"}
        label={"Degree Title"}
        name={"degree"}
        value={selectedSchool.degreeTitle}
        setValue={setSchoolDegreeTitle}
        placeholder={"Software Engineering"}
        isValid={isDegreeTitleValid}
        validationFunction={validateDegreeTitle}
      />
      <FormInput
        type={"month"}
        label={"Attendance Start Date"}
        name={"attendanceStartDate"}
        value={selectedSchool.startDate}
        setValue={setSchoolStartDate}
        isValid={isStartDateValid}
        validationFunction={(startDate) =>
          validateStartDate(startDate, selectedSchool.endDate, true)
        }
      />
      <FormInput
        type={"month"}
        label={"Attendance End Date"}
        name={"attendanceEndDate"}
        value={selectedSchool.endDate}
        setValue={setSchoolEndDate}
        isValid={isEndDateValid}
        validationFunction={(endDate) =>
          validateEndDate(endDate, selectedSchool.startDate, true)
        }
      />
    </Form>
  );
}
