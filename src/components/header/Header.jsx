export default function Header({ onEditAll }) {
  return (
    <header>
      <div className="mobile-hidden"></div>
      <h1>Resume Builder</h1>
      <div className="button-list">
        <button type="button" className="edit" onClick={onEditAll}>
          Edit All
        </button>
      </div>
    </header>
  );
}
