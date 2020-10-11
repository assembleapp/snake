import React from 'react';
import styled from "styled-components"
import { observable } from "mobx"

import Board from "./board"

var dimensions = {x: 15, y: 15}

var snake = observable([
  [0,3],
  [0,2],
  [0,1],
  [0,0]
])

var meal = observable({x: 4, y: 3})
var heading = observable.box(2)

setInterval(() => heading.set((heading.get() + 1) % 4), 510)
setInterval(() => snake.replace([chooseNeighbor(snake[0], heading)].concat(snake.slice(0, -1))), 2000)

const chooseNeighbor = (cell, heading) => (
  [
    [cell[0]    , cell[1] - 1],
    [cell[0] + 1, cell[1]    ],
    [cell[0]    , cell[1] + 1],
    [cell[0] - 1, cell[1]    ]
  ][heading]
)

function App() {
  return (
    <Application>
      <AppHeader>Snake Game</AppHeader>
      <Board
      dimensions={dimensions}
      snake={snake}
      meal={meal}
      heading={heading}
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

const Application = styled.div`
text-align: center;
background-color: #282c34;
min-height: 100vh;
display: grid;
grid-template-rows: 4rem auto;
color: #ededed;
`

export default App;
