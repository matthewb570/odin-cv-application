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
  return (
    <Form onSubmit={onSubmit}>
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
    </Form>
  );
}
