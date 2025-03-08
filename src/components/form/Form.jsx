export default function Form({ children }) {
  return (
    <form action={""} method="get">
      <div className="input-list">{children}</div>
      <div className="button-list">
        <button type="button">Submit</button>
      </div>
    </form>
  );
}
