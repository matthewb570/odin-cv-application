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

    const dateRegex = new RegExp("^[0-9]{4}-(0[1-9]{1}|1[0-2]{1})$");

    const newIsStartDateValid =
      !StringUtils.isEmpty(startDate) &&
      dateRegex.test(startDate) &&
      (!StringUtils.isEmpty(endDate) ? startDate <= endDate : true);
    setIsStartDateValid(newIsStartDateValid);
    return newIsStartDateValid;
  }

  function validateEndDate(endDate, startDate, doValidateStartDate) {
    if (doValidateStartDate && !StringUtils.isEmpty(startDate)) {
      validateStartDate(startDate, endDate, false);
    }

    const dateRegex = new RegExp("^[0-9]{4}-(0[1-9]{1}|1[0-2]{1})$");

    const newIsEndDateValid =
      !StringUtils.isEmpty(endDate) &&
      dateRegex.test(endDate) &&
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
        <button
          aria-label="add"
          type="button"
          className="icon plus"
          onClick={handleAddClick}
        ></button>
        <button
          aria-label="delete"
          type="button"
          className={`icon trash ${schools.length <= 1 ? "disabled" : ""}`}
          onClick={handleDeleteClick}
          disabled={schools.length <= 1}
        ></button>
      </div>
      <FormInput
        type={"text"}
        label={"Educational Institution Name *"}
        name={"schoolName"}
        value={selectedSchool.name}
        setValue={setSchoolName}
        placeholder={"Northwest Institute of Technology"}
        isValid={isNameValid}
        validationFunction={validateName}
      />
      <FormInput
        type={"text"}
        label={"Degree Title *"}
        name={"degree"}
        value={selectedSchool.degreeTitle}
        setValue={setSchoolDegreeTitle}
        placeholder={"Software Engineering"}
        isValid={isDegreeTitleValid}
        validationFunction={validateDegreeTitle}
      />
      <FormInput
        type={"month"}
        label={"Attendance Start Date *"}
        name={"attendanceStartDate"}
        value={selectedSchool.startDate}
        setValue={setSchoolStartDate}
        placeholder={"yyyy-mm"}
        isValid={isStartDateValid}
        validationFunction={(startDate) =>
          validateStartDate(startDate, selectedSchool.endDate, true)
        }
      />
      <FormInput
        type={"month"}
        label={"Attendance End Date *"}
        name={"attendanceEndDate"}
        value={selectedSchool.endDate}
        setValue={setSchoolEndDate}
        placeholder={"yyyy-mm"}
        isValid={isEndDateValid}
        validationFunction={(endDate) =>
          validateEndDate(endDate, selectedSchool.startDate, true)
        }
      />
    </Form>
  );
}
