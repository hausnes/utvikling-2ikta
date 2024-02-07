// Generelt om bruken av komponenter i React

// NB: Poenget er å rendre ein samling med HTML, og rendre på nytt når data endrast/oppdaterast.

// compH1.js
import React from 'react';
function MyComponent() {
     return <h1>Hello world</h1>;
}

export default MyComponent;

// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
	
import MyComponent from './compH1';
	
ReactDOM.createRoot(document.getElementById('app')).render(<MyComponent />);

// ---------------------------------------------------

// Eksempel
import React from 'react';

const redPanda = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
    alt: 'Red Panda',
    width:  '200px'
};

function RedPanda(){
    return (
      <div>
        <h1>Cute Red Panda</h1>
        <img 
          src={redPanda.src}
          alt={redPanda.alt}
          width={redPanda.width} />
      </div>
    );
}

export default RedPanda;

// ---------------------------------------------------

// Eksempel
import React from 'react';

const fiftyFifty = Math.random() < 0.5;

// New function component starts here:
function TonightsPlan() {
  if (fiftyFifty) {
    return <h1>Tonight I'm going out WOOO</h1>
  }
  else {
    return <h1>Tonight I'm going to bed WOOO</h1>
  }
}

export default TonightsPlan;

// ---------------------------------------------------

// Eksempel
import React from 'react';

function SubmitButton() {
  function handleClick() {
    alert('Submission Successful.');
  }
  return <button onClick={handleClick}>Submit</button>;
}

export default SubmitButton;
