export default function FormSelect({
  label,
  name,
  value,
  setValue,
  required,
  options,
}) {
  return (
    <div className="form-select">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        value={value}
        required={required}
        onChange={(event) => setValue(event.target.value)}
      >
        {options.map((option) => (
          <option value={option.value}>{option.displayName}</option>
        ))}
      </select>
    </div>
  );
}
