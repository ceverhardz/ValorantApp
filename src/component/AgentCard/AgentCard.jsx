import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AgentCard(props) {
    return (
        <Card style={{ width: '18rem', height: '100%' }}>
            <Card.Img variant="top" src={props.displayIcon} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{props.displayName}</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>
                {props.description}
                </Card.Text>
                <Button as={Link} to={`/agents/${props.uuid}`} variant="primary mt-auto">View Agents</Button>
            </Card.Body>
        </Card>
    )
}
