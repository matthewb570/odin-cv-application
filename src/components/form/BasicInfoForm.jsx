import { useState } from "react";
import FormInput from "../input/FormInput";

export default function BasicInfoForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <form action={""} method="get">
      <FormInput
        type={"text"}
        label={"Name"}
        name={"name"}
        value={name}
        setValue={setName}
        placeholder={"John Smith"}
        required={true}
      />
      <FormInput
        type={"email"}
        label={"Email"}
        name={"email"}
        value={email}
        setValue={setEmail}
        placeholder={"jsmith@example.com"}
        required={false}
      />
      <FormInput
        type={"tel"}
        label={"Phone Number"}
        name={"phone"}
        value={phone}
        setValue={setPhone}
        placeholder={"1234567890"}
        required={false}
      />
    </form>
  );
}
