import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


function Button(props) {
  //const [counter, setCounter] = useState(5);
  //return <button onClick={() => setCounter(counter*2)}>{counter}</button>;


  //Read the return4 function from the props. Note that return4 is registered as onClickFunction. Also - invoke the return4 function
  const handleClick = () => { props.onClickFunction(); };

  //Register the return4 function as the onClick function in the button
  return <button onClick={handleClick}>"ClickMe"</button>;
}

function Display(props) {
  return <span>{props.message}</span>
}

function App() {
  const return4 = () => console.log(4);
  return (
    <div>
      <Display message="testDisplayFunction" />,
      {/* register the function return4 as a props for the Button*/}
      {/* Also - this is how you comment in JSX :) */}
      <Button onClickFunction={return4} />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
