import style from './lorem.module.css';
import Text from './data.jsx';  // Correct path
import React, { useState } from "react";

function Lorem() {
  const [count, setCount] = useState(0);  // Fixed the setCount function
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      alert("Please enter a positive number");
    } else if (amount >  20) {
      amount = Text.length;
      alert("sorry minimum text is 20 available");
    }
    setText(Text.slice(0, amount));
  };

  return (
    <div className={style.lorem}>
      <h1>Tired of boring lorem ipsum</h1>
      <form className={style.lorem_form} onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}  // Updated to setCount
        />
        <button type="submit">Generate</button>
      </form>

      {/* Display the generated paragraphs */}
      <article className={style.article}>
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </div>
  );
}

export default Lorem;
