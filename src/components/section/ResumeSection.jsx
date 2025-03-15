export default function ResumeSection({
  isInEditMode,
  setIsInEditMode,
  children,
}) {
  return (
    <div className="resume-section">
      {isInEditMode ? children[0] : children[1]}
      <button
        className="edit"
        hidden={isInEditMode}
        onClick={() => setIsInEditMode(!isInEditMode)}
      >
        Edit
      </button>
    </div>
  );
}
