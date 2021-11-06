function App() {

  const submit = e => {
    e.preventDefault();
    const dataForm = Array.from(new FormData(e.target));
    const objData = Object.fromEntries(dataForm);

    console.log(objData);
  };

  return (
    <form onSubmit={submit}>
      <div>
        <span>campo</span>
        <input name="campo" />
      </div>

      <input name="campo2" />

      <input type='file' name='archivo' />

      <input type="submit" value="Enviar" />
    </form>
  );
}

export default App;
