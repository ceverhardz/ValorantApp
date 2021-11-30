import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router'

export default function Agents() {

    const [agent, setAgent] = useState([])
    const [loading, setLoading] = useState(false)
    let {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const link = `https://valorant-api.com/v1/agents/${id}`
                const res = await axios.get(link)
                const data = res.data.data
                setAgent(data)
                setLoading(false)
            } catch (e) {
                console.log(e.data);
            }
        }
        fetchData()
    }, [id])

    return (
        <Container className="pt-content">
            {loading ? 'Loading...' : 
            <Row>
                <Col xs={12} md={5}>
                    <Image src={agent.bustPortrait} style={{ width: '100%' }} />
                </Col>
                <Col xs={12} md={7}>
                    <h3>{agent.displayName}</h3>
                    <p>{agent.role && agent.role.displayName}</p>
                    <h5>{agent.description}</h5>
                    {console.log(agent.abilities)}
                    <div className="col-12 mt-5" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start', gap: '1rem' }}>
                        {agent.abilities && agent.abilities.map((abilities, index) => (
                            <div className="d-block me-5" key={index}>
                                <img src={abilities.displayIcon} alt="" className="mx-auto bg-primary rounded-circle" width="100px" height="100px" />
                                <p className="text-center">{abilities.displayName}</p>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>}
        </Container>
    )
}
