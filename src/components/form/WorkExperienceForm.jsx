import Form from "./Form";
import FormInput from "../input/FormInput";
import FormSelect from "../input/FormSelect";
import { useState } from "react";
import Job from "../../objects/Job";
import StringUtils from "../../utils/StringUtils";

export default function WorkExperienceForm({ jobs, setJobs, onSubmit }) {
  const [selectedJobId, setSelectedJobId] = useState(jobs[0].id);

  const [isCompanyNameValid, setIsCompanyNameValid] = useState(undefined);
  const [isPositionTitleValid, setIsPositionTitleValid] = useState(undefined);
  const [isJobResponsibilitiesValid, setIsJobResponsibilitiesValid] =
    useState(undefined);
  const [isStartDateValid, setIsStartDateValid] = useState(undefined);
  const [isEndDateValid, setIsEndDateValid] = useState(undefined);

  const selectedJobIndex = jobs.findIndex((job) => job.id === selectedJobId);

  function validateCompanyName(companyName) {
    const newIsCompanyNameValid = !StringUtils.isEmpty(companyName);
    setIsCompanyNameValid(newIsCompanyNameValid);
    return newIsCompanyNameValid;
  }

  function validatePositionTitle(positionTitle) {
    const newIsPositionTitleValid = !StringUtils.isEmpty(positionTitle);
    setIsPositionTitleValid(newIsPositionTitleValid);
    return newIsPositionTitleValid;
  }

  function validateJobResponsibilities(jobResponsibilities) {
    const newIsJobResponsibilitiesValid =
      !StringUtils.isEmpty(jobResponsibilities);
    setIsJobResponsibilitiesValid(newIsJobResponsibilitiesValid);
    return newIsJobResponsibilitiesValid;
  }

  function validateStartDate(startDate, endDate, doValidateEndDate) {
    if (doValidateEndDate && !StringUtils.isEmpty(endDate)) {
      validateEndDate(endDate);
    }

    const newIsStartDateValid =
      !StringUtils.isEmpty(startDate) &&
      (!StringUtils.isEmpty(endDate) ? startDate <= endDate : true);
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
    const isCompanyNameValid = validateCompanyName(
      jobs[selectedJobIndex].companyName,
    );
    const isPositionTitleValid = validatePositionTitle(
      jobs[selectedJobIndex].positionTitle,
    );
    const isJobResponsibilitiesValid = validateJobResponsibilities(
      jobs[selectedJobIndex].jobResponsibilities,
    );
    const isStartDateValid = validateStartDate(
      jobs[selectedJobIndex].startDate,
      jobs[selectedJobIndex].endDate,
      false,
    );
    const isEndDateValid = validateEndDate(
      jobs[selectedJobIndex].endDate,
      jobs[selectedJobIndex].startDate,
      false,
    );
    return (
      isCompanyNameValid &&
      isPositionTitleValid &&
      isJobResponsibilitiesValid &&
      isStartDateValid &&
      isEndDateValid
    );
  }

  function resetValidity() {
    setIsCompanyNameValid(undefined);
    setIsPositionTitleValid(undefined);
    setIsJobResponsibilitiesValid(undefined);
    setIsStartDateValid(undefined);
    setIsEndDateValid(undefined);
  }

  function setCompanyName(companyName) {
    const updatedJobs = [...jobs];
    updatedJobs[selectedJobIndex].companyName = companyName;
    setJobs(updatedJobs);
  }

  function setPositionTitle(positionTitle) {
    const updatedJobs = [...jobs];
    updatedJobs[selectedJobIndex].positionTitle = positionTitle;
    setJobs(updatedJobs);
  }

  function setJobResponsibilities(jobResponsibilities) {
    const updatedJobs = [...jobs];
    updatedJobs[selectedJobIndex].jobResponsibilities = jobResponsibilities;
    setJobs(updatedJobs);
  }

  function setStartDate(startDate) {
    const updatedJobs = [...jobs];
    updatedJobs[selectedJobIndex].startDate = startDate;
    setJobs(updatedJobs);
  }

  function setEndDate(endDate) {
    const updatedJobs = [...jobs];
    updatedJobs[selectedJobIndex].endDate = endDate;
    setJobs(updatedJobs);
  }

  function handleAddClick() {
    if (validateForm()) {
      resetValidity();
      const newJob = new Job();
      setJobs([...jobs, newJob]);
      setSelectedJobId(newJob.id);
    }
  }

  function handleDeleteClick() {
    resetValidity();
    const updatedJobs = [...jobs];
    updatedJobs.splice(selectedJobIndex, 1);
    setJobs(updatedJobs);
    setSelectedJobId(
      selectedJobIndex === jobs.length - 1
        ? updatedJobs[updatedJobs.length - 1].id
        : jobs[selectedJobIndex + 1].id,
    );
  }

  function handleSelectChange(value) {
    if (validateForm()) {
      resetValidity();
      setSelectedJobId(value);
    }
  }

  return (
    <Form validationFunction={validateForm} onSubmit={onSubmit}>
      <div className="form-row">
        <FormSelect
          label={"Company"}
          name={"selectedJob"}
          value={selectedJobId}
          onChange={handleSelectChange}
          required={false}
          options={jobs.map((job) => {
            return {
              value: job.id,
              displayName: job.companyName,
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
          className={`icon trash ${jobs.length <= 1 ? "disabled" : ""}`}
          onClick={handleDeleteClick}
          disabled={jobs.length <= 1}
        ></button>
      </div>
      <FormInput
        type={"text"}
        label={"Company Name *"}
        name={"companyName"}
        value={jobs[selectedJobIndex].companyName}
        setValue={setCompanyName}
        placeholder={"Generic Software Development Company"}
        isValid={isCompanyNameValid}
        validationFunction={validateCompanyName}
      />
      <FormInput
        type={"text"}
        label={"Position Title *"}
        name={"positionTitle"}
        value={jobs[selectedJobIndex].positionTitle}
        setValue={setPositionTitle}
        placeholder={"Software Engineer"}
        isValid={isPositionTitleValid}
        validationFunction={validatePositionTitle}
      />
      <FormInput
        type={"textarea"}
        label={"Job Responsibilities *"}
        name={"jobResponsibilities"}
        value={jobs[selectedJobIndex].jobResponsibilities}
        setValue={setJobResponsibilities}
        placeholder={"Time on the job includes..."}
        isValid={isJobResponsibilitiesValid}
        validationFunction={validateJobResponsibilities}
      />
      <FormInput
        type={"month"}
        label={"Employment Start Date *"}
        name={"employmentStartDate"}
        value={jobs[selectedJobIndex].startDate}
        setValue={setStartDate}
        isValid={isStartDateValid}
        validationFunction={(startDate) =>
          validateStartDate(startDate, jobs[selectedJobIndex].endDate, true)
        }
      />
      <FormInput
        type={"month"}
        label={"Employment End Date *"}
        name={"employmentEndDate"}
        value={jobs[selectedJobIndex].endDate}
        setValue={setEndDate}
        isValid={isEndDateValid}
        validationFunction={(endDate) =>
          validateEndDate(endDate, jobs[selectedJobIndex].startDate, true)
        }
      />
    </Form>
  );
}
