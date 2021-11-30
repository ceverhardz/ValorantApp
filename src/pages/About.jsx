import React from 'react'
import { Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import TextHeader from '../component/TextHeader/TextHeader'
import TextSmall from '../component/TextSmall/TextSmall'

const TextSmallGreen = styled.div`
    color: #31B380;
    text-align: center;
    margin-top: 20px;
    font-weight: 600;
    font-size: 16px;
`

const TextSmallBlack = styled.div`
    color: #5B5575;
    text-align: center;
    font-size: 20px;
`

export default function About() {
    return (
        <Container className="pt-content">
            <Row>
                <TextSmall text="ABOUT" />
                <TextHeader text="Valorant APP Adalah website penyedia informasi agent valorant" />
                <TextSmallGreen>Built With Love By</TextSmallGreen>
                <TextSmallBlack>Katuuk Christian Everhard</TextSmallBlack>
                <TextSmallBlack>NIM : 105021910401</TextSmallBlack>
                <TextSmallBlack>INFORMATIKA</TextSmallBlack>
            </Row>
        </Container>
    )
}
