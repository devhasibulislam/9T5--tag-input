import { useState } from "react";
import "./App.css";
import Cross from "./components/Cross";
import Logo from "./components/Logo";

function App() {
  const [tags, setTags] = useState(["HTML5", "CSS3"]);

  const removeTag = (selectedTag) => {
    setTags(tags.filter((tag) => tag !== selectedTag));
  };

  return (
    <div className="App">
      <div className="w-25">
        <div className="d-flex justify-content-between mx-auto">
          <Logo />
          <h1 className="text-dark">Tag Input</h1>
        </div>
        <div
          className="mt-5 d-flex flex-wrap border border-primary rounded px-3 py-4"
          style={{ gap: "0.5rem" }}
        >
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="d-flex align-items-center border border-primary rounded-pill px-2 text-lowercase"
              style={{ columnGap: "0.2rem", width: "fit-content" }}
              onClick={() => removeTag(tag)}
            >
              {tag} <Cross />
            </span>
          ))}
          <input
            type="text"
            name="tag"
            id="tag"
            className="w-50 border-0 rounded-pill px-2"
            placeholder="Enter tag name"
            onKeyUp={(event) => {
              if (
                event.which === 13 ||
                event.which === 32 ||
                event.which === 188
              ) {
                const tagValue = event.target.value.replace(",", "");
                setTags([...tags, tagValue]);
                event.target.value = "";
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
