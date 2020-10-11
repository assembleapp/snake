import React from 'react';
import styled from "styled-components"
import Board from "./board"

function App() {
  return (
    <Application>
      <AppHeader>Snake Game</AppHeader>
      <Board dimensions={{x: 2, y: 2}} snake={[]}>

      </Board>
    </Application>
  );
}

const AppHeader = styled.header`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
`

const AppLink = styled.a`
color: #61dafb;
`

const Application = styled.div`
text-align: center;
background-color: #282c34;
min-height: 100vh;
display: grid;
grid-template-rows: 4rem auto;
color: #ededed;
`

export default App;
