import React from "react"
import styled from "styled-components"

const Board = ({dimensions, snake, meal}) => (
    <Scene dimensions={dimensions}>
        {[0,0,0,0].map(x => (
            <Cell>
                x
            </Cell>
        ))}
    </Scene>
)

const Cell = styled.div`
border: 1px solid #ededed;
`

const Scene = styled.div`
display: grid;
grid-template-columns: repeat(${p => p.dimensions.x}, 1fr);
grid-template-rows: repeat(${p => p.dimensions.y}, 1fr);
grid-gap: 1rem;
`

export default Board;