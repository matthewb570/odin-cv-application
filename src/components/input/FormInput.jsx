export default function FormInput({
  type,
  label,
  name,
  value,
  setValue,
  placeholder,
  required,
}) {
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        required={required}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
