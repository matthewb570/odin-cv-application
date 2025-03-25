export default function Header({ onEditAll }) {
  return (
    <header>
      <div></div>
      <h1>Resume Builder</h1>
      <div className="button-list">
        <button type="button" onClick={onEditAll}>
          Edit All
        </button>
      </div>
    </header>
  );
}
