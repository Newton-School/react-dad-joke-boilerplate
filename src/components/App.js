import React  from 'react'
import '../styles/App.css';

const url = 'https://icanhazdadjoke.com/'
const App = () => {

  return (
    <div id="main">
      <div id="joke-holder">Joke loading... </div>
      <button id="get-joke-btn">Get another joke</button>
    </div>
  )
}


export default App;
