import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react"

const Board = ({dimensions, snake, meal, heading}) => (
    <Scene dimensions={dimensions}>
        {[...Array(dimensions.x * dimensions.y).keys()].map(n => {
            const place = {
                x: (n % dimensions.x),
                y: Math.floor(n / dimensions.x),
            }

            return <Cell>{cell(place, { snake, meal, heading })}</Cell>
        })
        }
    </Scene>
)

const cell = (place, { snake, meal, heading }) => (
    <>
    {place.x === snake[0][0] && place.y === snake[0][1]
    ? ['^', '>', 'v', '<'][heading]
    : null
    }

    {snake.slice(1).some(p => place.x === p[0] && place.y === p[1])
    ? '+'
    : null
    }

    {place.x === meal[0] && place.y === meal[1]
    ? 'm'
    : null
    }
    </>
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