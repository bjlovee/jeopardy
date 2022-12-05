import { useState, useEffect } from "react";
// import JepardyAnswer from "./JeopardyAnswer";

export default function GetQuestion(props) {
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
    <>
      <div className="question">
        <h2>Let's Play!</h2>
        <button onClick={getJepardy}>Get Question</button>
        <p>
          {jeopardy && jeopardy.question ? (
            <>{jeopardy.question}</>
          ) : (
            <>Waiting..</>
          )}
        </p>
        <p>{}</p>
        <h3>Category:{}</h3>
        <h3>Points: {}</h3>
        {/* <JepardyAnswer onClick={getJepardy} />
        <p>{jeopardy && jeopardy.answer ?<>{jeopardy.answer}</>: <>Waiting or something</>}</p> */}
      </div>
    </>
  );
}
