import React, {useState} from 'react';
import axios from 'axios';
import Simpsons from './components/Simpsons';
import './App.css';

const sampleSimpson = {
quote: "Ahh! Sweet liquor eases the pain.",
character: "Troy McClure",
image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112"
    }

function App() {
  const [simpson, setSimpson] = useState(sampleSimpson);
  const getSimpson = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=num')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setSimpson(data[0]);
      });
  };
  return (
    <div>
    <Simpsons simpson={simpson} />
    <button type="button" onClick={getSimpson}>Get simpson</button>
    </div>
  );
}

export default App;
