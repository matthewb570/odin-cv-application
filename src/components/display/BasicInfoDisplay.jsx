export default function BasicInfoDisplay({ name, email, phoneNumber }) {
  return (
    <div className="resume-display">
      <h2 className="name">{name}</h2>
      <div className="contact-information">
        <div>{email}</div>
        <div>{phoneNumber}</div>
      </div>
    </div>
  );
}
