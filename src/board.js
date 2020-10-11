import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react"

// headings: 0 is up, 1 is >, 2 is down, 3 is <
const Board = ({dimensions, snake, meal, heading}) => (
    <Scene dimensions={dimensions}>
        {[...Array(dimensions.x * dimensions.y).keys()].map(x => (
            <Cell>
                {snake[0][1] * dimensions.x + snake[0][0] === x
                ? ['^', '>', 'v', '<'][heading]
                : null
                }
                {snake.slice(1).some(p => p[1] * dimensions.x + p[0] === x)
                ? '+'
                : null
                }

                { meal.y * dimensions.x + meal.x === x
                ? 'm'
                : null
                }
            </Cell>
        ))}
    </Scene>
)

const Cell = styled.div`
border: 1px solid #4d4d4d;
`

const Scene = styled.div`
display: grid;
grid-template-columns: repeat(${p => p.dimensions.x}, 2rem);
grid-template-rows: repeat(${p => p.dimensions.y}, 2rem);
grid-gap: 0.1rem;
margin-left: auto;
margin-right: auto;
`

export default observer(Board);