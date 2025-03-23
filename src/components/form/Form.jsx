export default function Form({ validationFunction, onSubmit, children }) {
  function handleSubmit(event) {
    event.preventDefault();

    if (validationFunction()) {
      onSubmit();
    }
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className="input-list">{children}</div>
      <div className="button-list">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
