export default function FormInput({
  type,
  label,
  name,
  value,
  setValue,
  placeholder,
  pattern,
  required,
  validationFunction,
  isValid,
}) {
  function handleChange(value) {
    if (!isValid && validationFunction) {
      validationFunction(value);
    }

    setValue(value);
  }

  function handleBlur(value) {
    if (validationFunction) {
      validationFunction(value);
    }
  }

  function getValidityClass() {
    if (isValid === undefined || isValid === null) {
      return "";
    }

    if (isValid) {
      return "valid";
    }

    return "invalid";
  }

  return (
    <div className={`form-input ${getValidityClass()}`}>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        required={required}
        onChange={(event) => handleChange(event.target.value)}
        placeholder={placeholder}
        pattern={pattern}
        onBlur={(event) => handleBlur(event.target.value)}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
