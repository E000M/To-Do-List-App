import { useState } from "react";

function Header({ addTodo }) {

  const [text, setText] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!text) return;

    addTodo(text);
    setText("");

  };

  return (

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder=" "
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">
        Add
      </button>

    </form>

  );

}

export default Header;