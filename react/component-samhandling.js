// Eksempel 1
import React from 'react';

function Picture() {
  return <img src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" />;
}

function Profile() {
  return (
    <>
      <Picture />
      <h1>Name: Octavia</h1>
      <h2>Species: Octopus</h2>
       <h2>Class: Cephalopoda</h2>
    </>
  )
}

export default Profile;

// --------------------------------------

// Eksempel 2

// NavBar.js
import React from 'react';

function NavBar() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
           &nbsp;{page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
}
export default NavBar;

// ProfilePage.js
import React from 'react';
import NavBar from './NavBar';

function ProfilePage() {
  return (
    <div>
      <NavBar />
      <h1>All About Me!</h1>
      <p>I like movies and blah blah blah blah blah</p>
      <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
    </div>
  );
}

export default ProfilePage;

// --------------------------------------

// Eksempel 3, med 3 stk. filer og korleis dei kan henge/fungere saman:
// NB: Bruk mappe for samling med komponentar.
// Fil 1: HelloWorld.js
import React from 'react';

function HelloWorld() {
  return (
    <h1>Hello World!</h1>
  );
}

export default HelloWorld;

// Fil 2: App.js
import React from 'react';
import HelloWorld from './HelloWorld';

function App() {
  return (
    <HelloWorld />
  );
}

export default App;

// Fil 3: index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('app')).render(<App />);