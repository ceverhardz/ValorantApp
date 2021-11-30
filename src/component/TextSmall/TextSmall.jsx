import React from 'react'
import styled from 'styled-components'

const TextSmallComp = styled.div`
    color: #7839F3;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
`

export default function TextSmall(props) {
    return (
        <TextSmallComp>{props.text}</TextSmallComp>
    )
}
