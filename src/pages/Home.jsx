import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import AgentCard from '../component/AgentCard/AgentCard'
import SearchBar from '../component/SearchBar/SearchBar'
import TextHeader from '../component/TextHeader/TextHeader'
import TextSmall from '../component/TextSmall/TextSmall'

const WrapSearch = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export default function Home() {
    const [agents, setAgents] = useState([])
    const [loading, setLoading] = useState(false)
    const [key, setKey] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const link = `https://valorant-api.com/v1/agents/`
                const res = await axios.get(link)
                const data = res.data.data
                if (key === "") {
                    setAgents(data)
                } else {
                    let newData = data.filter((data) => {
                        return data.displayName.toLowerCase().includes(key.toLowerCase())
                    })
                    setAgents(newData)
                }
                setLoading(false)
            } catch (e) {
                console.log(e.message);
            }
        }
        fetchData()
    }, [key])

    const onChangeHandler = (val) => {
        console.log(val)
        setKey(val)
    }
    console.log(agents)
    return (
        <Container className="pt-content">
            <Row>
                <TextSmall text="Valorant Agents" />
                <TextHeader text="Discover Your Best Agents Here" />
            </Row>
            <WrapSearch>
                <SearchBar 
                    onChange={(val) => onChangeHandler(val)}
                />
            </WrapSearch>
            <Row className="mt-5">
                {loading ? 'loading..' :
                agents.map((agent, index) => (
                    <Col className="mb-5 d-flex justify-content-center" key={index}>
                    <AgentCard 
                        displayName={agent.displayName}
                        description={agent.role && agent.role.displayName}
                        displayIcon={agent.displayIcon}
                        uuid={agent.uuid}
                    />                    
                    </Col>
                ))
                }
            </Row>
        </Container>
    )
}
