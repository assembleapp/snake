import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react"

const Board = ({dimensions, snake, meal, heading}) => (
    <Scene dimensions={dimensions}>
        {[...Array(dimensions.x * dimensions.y).keys()].map(n => (
            <Cell>
                {(n % dimensions.x) === snake[0][0] && Math.floor(n / dimensions.x) === snake[0][1]
                ? ['^', '>', 'v', '<'][heading]
                : null
                }
                {snake.slice(1).some(p => (n % dimensions.x) === p[0] && Math.floor(n / dimensions.x) === p[1])
                ? '+'
                : null
                }

                { (n % dimensions.x) === meal[0] && Math.floor(n / dimensions.x) === meal[1]
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