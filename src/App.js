import { useState } from 'react';

const initialState = {
  normal: '',
  texto: ''
};

const App = () => {
  const [value, setValue] = useState(initialState);

  const handleChange = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
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
    </div>
  );
};

export default App;