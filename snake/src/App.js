import React from 'react';
import styled from "styled-components"
import logo from './logo.svg';

function App() {
  return (
    <Application>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </Application>
  );
}

const AppLogo = styled.img`
height: 40vmin;
pointer-events: none;
`

const AppHeader = styled.header`
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`

const AppLink = styled.a`
color: #61dafb;
`

const Application = styled.div`
text-align: center;

@media (prefers-reduced-motion: no-preference) {
  ${AppLogo} {
    animation: App-logo-spin infinite 20s linear;
  }
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

`

export default App;
