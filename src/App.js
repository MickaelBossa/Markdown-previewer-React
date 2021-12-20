import { useState } from "react";
import Marked from "marked";
import "./App.css";

function App() {
  const [text, setText] = useState("#Markdown Previewer");

  const changeTextHandler = (e) => {
    setText(e.target.value);
  };

  const markdownToHTML = () => {
    return { __html: Marked(text) };
  };

  return (
    <div className="App">
      <div className="elements">
        <div className="element">
          <textarea
            rows="30"
            value={text}
            onChange={(e) => changeTextHandler(e)}
          ></textarea>
        </div>
        <div className="element">
          <div dangerouslySetInnerHTML={markdownToHTML()}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
