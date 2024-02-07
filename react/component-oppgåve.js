// Utgangspunkt:
import React from 'react';

function MyQuote() {
    
    return (
    	<blockquote>
  			<p>
    			What is important now is to recover our senses.
  			</p>
  			<cite>
    		  <a target="_blank" href="https://en.wikipedia.org/wiki/Susan_Sontag">
      	    Susan Sontag
    		  </a>
  			</cite>
			</blockquote>
    );
};

export default MyQuote;

// Oppgåvetekst:
// Utvid eksempelet slik at du har ein samling med sitat i form av ein array med objekt. 
// Kvar gong komponenten rendrast skal eit tilfeldig sitat visast.

// Løysingsforslag:
import React from 'react';

// An array of quotes with the quote, author, and link
const quotes = [
  {
    quote: "What is important now is to recover our senses.",
    author: "Susan Sontag",
    link: "https://en.wikipedia.org/wiki/Susan_Sontag"
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
    link: "https://en.wikipedia.org/wiki/Mahatma_Gandhi"
  },
  {
    quote: "The journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
    link: "https://en.wikipedia.org/wiki/Laozi"
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
    link: "https://en.wikipedia.org/wiki/Franklin_D._Roosevelt"
  },
  {
    quote: "The unexamined life is not worth living.",
    author: "Socrates",
    link: "https://en.wikipedia.org/wiki/Socrates"
  }
];

function MyQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Returnerer JSX-elementet med det tilfeldige sitatet
  return (
    <blockquote>
      <p>
        {randomQuote.quote}
      </p>
      <cite>
        <a target="_blank" href={randomQuote.link}>
          {randomQuote.author}
        </a>
      </cite>
    </blockquote>
  );
};

export default MyQuote;

// Utvidelse på løysingsforslag, der du kan trykke på ein knapp for å bytte sitat:
// NB: Her er det brukt useState for å oppdatere sitatet når ein trykker på knappen.
import React, { useState } from 'react';

// An array of quotes with the quote, author, and link
const quotes = [
  {
    quote: "What is important now is to recover our senses.",
    author: "Susan Sontag",
    link: "https://en.wikipedia.org/wiki/Susan_Sontag"
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
    link: "https://en.wikipedia.org/wiki/Mahatma_Gandhi"
  },
  {
    quote: "The journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
    link: "https://en.wikipedia.org/wiki/Laozi"
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
    link: "https://en.wikipedia.org/wiki/Franklin_D._Roosevelt"
  },
  {
    quote: "The unexamined life is not worth living.",
    author: "Socrates",
    link: "https://en.wikipedia.org/wiki/Socrates"
  }
];

function MyQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [randomQuote, setRandomQuote] = useState(quotes[randomIndex]);

  const handleClick = (event) => {
    const newIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[newIndex]); // Update the state with the new quote
  };

  // Define the style for the button
  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    cursor: "pointer"
  };

  // Return the JSX element with the quote, author, link, button, and span
  return (
    <div>
      <blockquote>
        <p>
          {randomQuote.quote}
        </p>
        <cite>
          <a target="_blank" href={randomQuote.link}>
            {randomQuote.author}
          </a>
        </cite>
      </blockquote>
      <button onClick={handleClick} style={buttonStyle}>
        Change Quote
      </button>
      <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={spanStyle}>
      </span>
    </div>
  );
};

export default MyQuote;