import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react"

const Board = ({dimensions, cell}) => (
    <Scene dimensions={dimensions}>
        {[...Array(dimensions.x * dimensions.y).keys()].map(n => {
            const place = {
                x: (n % dimensions.x),
                y: Math.floor(n / dimensions.x),
            }

            return <Cell>{cell(place)}</Cell>
        })
        }
    </Scene>
)

const Cell = styled.div`
border: 1px solid #4d4d4d;
`

const Scene = styled.div`
display: grid;
grid-template-columns: repeat(${({dimensions}) => dimensions.x}, 2rem);
grid-template-rows: repeat(${({dimensions}) => dimensions.y}, 2rem);
grid-gap: 0.1rem;
margin-left: auto;
margin-right: auto;
`

export default observer(Board);