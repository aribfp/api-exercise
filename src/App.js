import { useState } from 'react';

function App() {

  const [word, setWord] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setWord(e.target.word_input.value)
  }

  return (
    <div className="App">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor='word_input'> Input a word
            <input type='text' id='word_input' />
          </label>
          <input type='submit' value='Submit' />
        </form>

        <p> { word } </p>
    </div>
  );
}

export default App;
