import React from 'react'
// import logo from './logo.svg';
// import './App.css';

function App() {
  var name= "Soaib";
  
  var num1=6;
  var num2=6;

  function sum() {
    console.log(num1 + num2);
  }
  const first=[1,2,3,4,5];
  const second=[6,7,8,9,10];

  // concat with array 
  const combine = [...first, ...second];
  console.log(combine.length);
  console.log(combine);

  //  jason Object
  const person =[{
    name: "Soaib", 
    age: 20,
    gender: "male"
  },
  {
    name: "James",
    age: 30,
    gender: "male"
  },
  {
    name: "Alexa",
    age: 20,
    gender: "female"
  }]

  


  return (
    <div className="App">
      {/* <>navbar</>
      <h1 className="AppTitle">{name}</h1>
      <button type="submit" onClick={()=>sum()}>Calaculate</button>
      
      */}

    
   
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React


        </a>
      </header> */}
    </div>
  );
}

export default App;
