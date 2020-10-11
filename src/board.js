import React from "react"
import styled from "styled-components"

const Board = ({dimensions, snake, meal}) => (
    <Scene dimensions={dimensions}>
        {[...Array(dimensions.x * dimensions.y).keys()].map(x => (
            <Cell>
                {snake.some(p => p[1] * dimensions.x + p[0] === x)
                ? 's'
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
border: 1px solid #ededed;
`

const Scene = styled.div`
display: grid;
grid-template-columns: repeat(${p => p.dimensions.x}, 2rem);
grid-template-rows: repeat(${p => p.dimensions.y}, 2rem);
grid-gap: 0.1rem;
margin-left: auto;
margin-right: auto;
`

export default Board;