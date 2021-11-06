import { useRef } from "react";

const App = () => {
  const input1 = useRef();
  const input2 = useRef();
  const file = useRef();

  const submit = () => {
    const campo1 = input1.current.value;
    const campo2 = input2.current.value;
    const archivo = file.current.files[0];

    const form = new FormData();
    form.append('campo1', campo1);
    form.append('campo2', campo2);
    form.append('archivo', archivo);

    fetch('/test', { method: 'POST', body: form });
  };

  return (
    <div>
      <div>
        <span>campo1</span>
        <input
          type="text"
          name="campo1"
          ref={input1}
        />
      </div>

      <input
        type="text"
        name="campo2"
        ref={input2}
      />

      <input type="file" ref={file} />

      <input type="submit" value="Enviar" onClick={submit} />
    </div>
  );
};

export default App;