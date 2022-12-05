import { useState } from "react";

// function Decrease() {
//   const [count, setCount] = useState(null);

//   function handleClick() {
//     setCount(count - 0);
//   }
//   return (
//     <button onClick={handleClick} className="decrease">
//       Decrease
//     </button>
//   );
// }

// function Increase() {
//   const [count, setCount] = useState(null);

//   function handleClick() {
//     setCount(count + 0);
//   }
//   return (
//     <button onClick={handleClick} className="increase">
//       Increase
//     </button>
//   );
// }

// function Reset() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 0);
//   }
//   return (
//     <button onClick={handleClick} className="reset">
//       Reset
//     </button>
//   );
// }

export default function Counter(props) {
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
      <div className="counter">
        <h2 className="score">
          Score:&nbsp;
          {jeopardy && jeopardy.value ? <>{jeopardy.value}</> : <>Waiting..</>}
        </h2>
        <button className="decrease" onClick={getJepardy}>
          Decrease
        </button>
        <button className="increase" onClick={getJepardy}>
          Increase
        </button>
        <button className="reset" onClick={getJepardy}>
          Reset
        </button>
      </div>
    </>
  );
}
