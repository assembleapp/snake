import React from 'react';
import styled from "styled-components"
import { observable, autorun, toJS } from "mobx"

import Board from "./board"

const random_choose = () => (
  {
    x: Math.floor(Math.random() * dimensions.x),
    y: Math.floor(Math.random() * dimensions.y),
  }
)

var dimensions = {x: 15, y: 15}

var snake = observable([
  [0,3],
  [0,2],
  [0,1],
  [0,0]
])

var meal = observable(random_choose())
var heading = observable.box(2)

document.onkeydown = (e => {
  const recognized_keys = {
    ArrowUp: 0,
    ArrowRight: 1,
    ArrowDown: 2,
    ArrowLeft: 3,
  }

  if(Object.keys(recognized_keys).indexOf(e.code) !== -1)
    heading.set(recognized_keys[e.code])
})

var clock = setInterval(() => snake.replace([chooseNeighbor(snake[0], heading)].concat(snake.slice(0, -1))), 500)

const endGame = () => {
  clearInterval(clock)
}

autorun(() => {
  if(toJS(snake).map(x => x.join(",")).some((value, index, self) => self.indexOf(value) !== index ))
    endGame()
})

const chooseNeighbor = (cell, heading) => {
  var neighbor = [
    [cell[0]    , cell[1] - 1],
    [cell[0] + 1, cell[1]    ],
    [cell[0]    , cell[1] + 1],
    [cell[0] - 1, cell[1]    ]
  ][heading]

  if(neighbor[0] < 0 || neighbor[0] >= dimensions.x)
    endGame()
  if(neighbor[1] < 0 || neighbor[1] >= dimensions.y)
    endGame()

  return neighbor
}

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
