import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input
        type='text'
        name='normal'
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;