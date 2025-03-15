export default function Form({ onSubmit, children }) {
  return (
    <form action={""} method="get">
      <div className="input-list">{children}</div>
      <div className="button-list">
        <button type="button" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
}
