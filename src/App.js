import React from 'react';
import styled from "styled-components"
import Board from "./board"

function App() {
  return (
    <Application>
      <AppHeader>Snake Game</AppHeader>
      <Board
      dimensions={{x: 15, y: 15}}
      snake={[[0,3], [0,2], [0,1], [0,0]]}
      meal={{x: 4, y: 3}}
      heading={1}
      />
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
