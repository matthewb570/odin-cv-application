export default function FormSelect({
  label,
  name,
  value,
  onChange,
  required,
  options,
  className,
}) {
  return (
    <div className={`form-select ${className}`}>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.displayName}
          </option>
        ))}
      </select>
    </div>
  );
}
