import { useEffect, useState } from "react";

function App() {
  const [practice, setPractice] = useState(0);
  const click = () => {
    setPractice(practice + 1);
  };
  useEffect(()=>{
    console.log("practice",practice)
  },[practice])


  //timer 
  const [time, setTime] = useState(1);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTimer) => {
          const newTimer = prevTimer + 1;
          console.log(`Timer updated: ${newTimer}`);
          return newTimer;
        })
      }, 2000);
    } else {
      clearInterval(interval)
    }
    // console.log(interval)
    return () => clearInterval(interval);
  }, [isRunning]);
  console.log(time)

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  // if (!window.timerInterval) {
  //   window.timerInterval = setInterval(() => {
  //     setTime(Date.now());
  //   }, 10000);}
  // useEffect(()=>{
  // const timer = () => {

  //   const interval = setInterval(()=>{
  //     setTime(Date.now(),2000)
  //   })
  // }

  // return clearInterval(interval)
  // console.log(interval)
  // },[time])
  // interval()
  // timer()

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime((prevTime) => prevTime + 2);
  //   }, 2000);
  //   // console.log(time)

  //   return clearInterval(interval);
  // }, []);

  // function counter() {
  //   let counter = 0
  //   const increament = () => {
  //     counter += 1;
  //     console.log("counter updated")
  //   };
  //   console.log("hellp");
  // }
  return (
    <div className="App">
      <h1>hello app</h1>
      hello
      <button onClick={click}> click me {practice} </button>
      {/* <p>Counter: {counter}</p> */}
      {/* <button onClick={increament}>click</button> */}
      {/* <button onClick={interval()}>click me</button> */}
      <p>{time}</p>
      <button onClick={handleStartStop}>
        {isRunning ? "stop": "start"}
      </button>
    </div>
  );
}

export default App;
