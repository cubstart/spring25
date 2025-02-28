import React, { useState, useEffect } from 'react';
import logo from './cookie.png';
import './App.css';
import cookieSound from './win.mp3';

function App() {
  const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 
    'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 
    'ArrowRight', 'b', 'a'];
  const [counter, setCounter] = useState(0);
  const [doubleStatus, setDoubleStatus] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [konamiIndex, setKonamiIndex] = useState(0);
  const sound = new Audio(cookieSound);

  const addOneToCounter = () => {
    sound.play();
    setCounter(counter + (doubleStatus ? 2 : 1));
  };

  const buyDoubleClick = () => {
    if(counter >= 100) {
      setCounter(counter - 100);
      setDoubleStatus(true);
    }
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      setKonamiIndex((prevIndex) => {
        if(event.key === konamiSequence[prevIndex]) {
          const newIndex = prevIndex + 1;
          
          if(newIndex === konamiSequence.length) {
            setDoubleStatus(true);
            return 0;
          }
          
          return newIndex;
        } else {
          return event.key === konamiSequence[0] ? 1 : 0;
        }
      });
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let message;
  if(counter > 0) {
    message = <p className="message">You clicked me {counter} times!</p>
  } else {
    message = <p className="message">Haven't clicked me yet!</p>
  }

  return (
    <div className="App">
      <header className="App-header">
        {message}
        <img src={logo} className="cookie-logo" alt="cookie" onClick={addOneToCounter} style={{ cursor: 'pointer', background: 'none' }}/>
        <button className="cookie-button" onClick={buyDoubleClick} disabled={doubleStatus || counter < 100}>
          {doubleStatus ? "Double Click Purchased" : "Buy Double Click (100 Clicks)"}
        </button>
      </header>
    </div>
  );
}

document.title = "Cookie Clicker"

export default App;
