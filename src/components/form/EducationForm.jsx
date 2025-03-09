import { useState } from "react";
import Form from "./Form";
import FormInput from "../input/FormInput";

export default function EducationForm() {
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [attendanceStartDate, setAttendanceStartDate] = useState("");
  const [attendanceEndDate, setAttendanceEndDate] = useState("");

  return (
    <Form>
      <FormInput
        type={"text"}
        label={"Educational Institution"}
        name={"schoolName"}
        value={schoolName}
        setValue={setSchoolName}
        placeholder={"Northwest Institute of Technology"}
        required={true}
      />
      <FormInput
        type={"text"}
        label={"Degree Title"}
        name={"degree"}
        value={degree}
        setValue={setDegree}
        placeholder={"Software Engineering"}
        required={true}
      />
      <FormInput
        type={"date"}
        label={"Attendance Start Date"}
        name={"attendanceStartDate"}
        value={attendanceStartDate}
        setValue={setAttendanceStartDate}
        placeholder={"mm/dd/yyyy"}
        required={true}
      />
      <FormInput
        type={"date"}
        label={"Attendance End Date"}
        name={"attendanceEndDate"}
        value={attendanceEndDate}
        setValue={setAttendanceEndDate}
        placeholder={"mm/dd/yyyy"}
        required={true}
      />
    </Form>
  );
}
