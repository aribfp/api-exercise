import { useState, useEffect } from "react";
import Wordlist from "./component/Wordslist";

function App() {
  const [word, setWord] = useState("");
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.datamuse.com/words?rel_syn=' +word)
  //     .then((response) => response.json())
  //     .then(setData);
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://api.datamuse.com/words?rel_syn=" + word)
      .then((response) => response.json())
      .then(setData);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="word_input">
          {" "}
          Input a word
          <input
            type="text"
            id="word_input"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <ul>
        {data.map((element, index) => (
          <li key={index}> {element.word} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
