import React from 'react';
import styled from "styled-components"

function App() {
  return (
    <Application>
      <AppHeader>
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
`

export default App;
