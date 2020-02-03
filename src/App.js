import React from 'react';
import './App.css';

function App() {
  return (
    <div className="grid-container">
      <header className="navbar">
        <div className="navbar__search">Search ...</div>
        <div className="navbar__avatar">Your face</div>
      </header>
      <aside className="sidebar"></aside>
      <main className="main"></main>
      <footer className="footer">
        <div className="footer__copyright">&copy; 2020 Mhayk Whandson</div>
        <div className="footer__signature">Made with grid-layout and flex-layout.</div>
      </footer>
    </div>
  );
}

export default App;
