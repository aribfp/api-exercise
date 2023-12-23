import { useState, useEffect } from "react";
import Wordlist from "./component/Wordslist";

function App() {
  const [word, setWord] = useState("");
  const [data, setData] = useState([]);

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

      <ul style={{ listStyle: "none" }}>
        {data.length == 0 ? (
          <p> Display an error message </p>
        ) : (
          data.map((element, index) => (
            <Wordlist key={index} element={element.word} />
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
