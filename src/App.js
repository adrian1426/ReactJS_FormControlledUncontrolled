import { useState } from 'react';

const initialState = {
  normal: '',
  texto: '',
  lenguaje: '',
  check: false,
  estado: 'feliz'
};

const App = () => {
  const [value, setValue] = useState(initialState);

  const handleChange = e => {
    const { name, type, checked, value: valor } = e.target;
    setValue({
      ...value,
      [name]: type === 'checkbox' ? checked : valor
    });
  };

  return (
    <div>
      <input
        type='text'
        name='normal'
        value={value.normal}
        onChange={handleChange}
      />

      <textarea
        name='texto'
        value={value.texto}
        onChange={handleChange}
      />

      <select value={value.lenguaje} name='lenguaje' onChange={handleChange}>
        <option value=''>Seleccionar</option>
        <option value='react'>React JS</option>
        <option value='angula'>Angula</option>
        <option value='vue'>VUE</option>
      </select>

      <input
        type='checkbox'
        name='check'
        onChange={handleChange}
        checked={value.check}
      />

      <div>
        <label>Chancho</label>
        <input
          onChange={handleChange}
          type='radio'
          value='feliz'
          name='estado'
          checked={value.estado === 'feliz'}
        /> Feliz

        <input
          onChange={handleChange}
          type='radio'
          value='triste'
          name='estado'
          checked={value.estado === 'triste'}
        /> Triste

        <input
          onChange={handleChange}
          type='radio'
          value='enojado'
          name='estado'
          checked={value.estado === 'enojado'}
        /> Enojado

      </div>
    </div>
  );
};

export default App;