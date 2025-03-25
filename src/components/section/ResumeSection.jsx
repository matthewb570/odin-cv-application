export default function ResumeSection({
  isInEditMode,
  setIsInEditMode,
  centerDisplay,
  children,
}) {
  return (
    <div
      className={`resume-section ${centerDisplay || isInEditMode ? "center" : ""}`}
    >
      {isInEditMode ? children[0] : children[1]}

      <button
        className="icon wrench edit"
        aria-label="edit"
        hidden={isInEditMode}
        onClick={() => setIsInEditMode(!isInEditMode)}
      ></button>
    </div>
  );
}
