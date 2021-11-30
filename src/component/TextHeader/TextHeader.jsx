import React from 'react'
import styled from 'styled-components'

const TextHeaderComp = styled.div`
    color: #211B3D;
    text-align: center;
    font-size: 1.875rem;
    font-weight: 600;
`

export default function TextHeader(props) {
    return (
        <TextHeaderComp>{props.text}</TextHeaderComp>
    )
}
