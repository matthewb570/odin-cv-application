import { useState } from "react";
import FormInput from "../input/FormInput";
import Form from "./Form";

export default function BasicInfoForm({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  onSubmit,
}) {
  const [isNameValid, setIsNameValid] = useState(undefined);
  const [isEmailValid, setIsEmailValid] = useState(undefined);
  const [isPhoneValid, setIsPhoneValid] = useState(undefined);

  function validateName(name) {
    const newIsNameValid = name !== undefined && name !== null && name !== "";
    setIsNameValid(newIsNameValid);
    return newIsNameValid;
  }

  function validateEmail(email) {
    const emailRegex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");

    const newIsEmailValid = emailRegex.test(email);
    setIsEmailValid(newIsEmailValid);
    return newIsEmailValid;
  }

  function validatePhone(phone) {
    const phoneRegex = new RegExp("^[0-9]{3}-[0-9]{3}-[0-9]{4}$");

    const newIsPhoneValid = phoneRegex.test(phone);
    setIsPhoneValid(newIsPhoneValid);
    return newIsPhoneValid;
  }

  function validateForm() {
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phone);

    return isNameValid && isEmailValid && isPhoneValid;
  }

  return (
    <Form validationFunction={validateForm} onSubmit={onSubmit}>
      <FormInput
        type={"text"}
        label={"Name *"}
        name={"name"}
        value={name}
        setValue={setName}
        placeholder={"John Smith"}
        validationFunction={validateName}
        isValid={isNameValid}
      />
      <FormInput
        type={"email"}
        label={"Email *"}
        name={"email"}
        value={email}
        setValue={setEmail}
        placeholder={"jsmith@example.com"}
        validationFunction={validateEmail}
        isValid={isEmailValid}
      />
      <FormInput
        type={"tel"}
        label={"Phone Number *"}
        name={"phone"}
        value={phone}
        setValue={setPhone}
        placeholder={"800-555-0123"}
        validationFunction={validatePhone}
        isValid={isPhoneValid}
      />
    </Form>
  );
}
