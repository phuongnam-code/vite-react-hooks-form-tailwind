import React from 'react';
import logo from '@/assets/image/SVG/logo.svg';
import '@/assets/css/pages/HomePage.scss';

const HomePage = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="HomePage">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className="link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a className="link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default HomePage;
