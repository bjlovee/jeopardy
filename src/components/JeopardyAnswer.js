import { useState, useEffect } from "react";

export default function JepardyAnswer(props) {
  const [jeopardy, setJeopardy] = useState(null);

  //Jeopardy API
  const getJepardy = async () => {
    try {
      const response = await fetch(`https://jservice.io/api/random`);
      const data = await response.json();
      setJeopardy(data[0]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3 className="answer">
        Answer:&nbsp;
        {jeopardy && jeopardy.answer ? <>{jeopardy.answer}</> : <>Waiting..</>}
      </h3>
      <button className="revealQuestion" onClick={getJepardy}>
        Click To Reveal Answer
      </button>
      <p></p>
    </div>
  );
}
