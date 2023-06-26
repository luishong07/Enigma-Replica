import React from "react"
import "./Plugboard.css"
import { Card } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import { Stack } from 'react-bootstrap';



const Plugboard: React.FC = () => {
    const alphabet: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    // const alphabet: string[] = ["A"]

    return (
        <Container fluid className="plugboard-container h-25">
            <Stack className="letter-pair-container " direction="horizontal" gap={1}>
                {alphabet.map(letter => {
                    return <Card className="mx-auto">
                            <Card.Body className="px-2 ">
                                <div>{letter}</div>
                                <div>svg</div>
                                <input/>
                            </Card.Body>
                        </Card>
                })}

            </Stack>
        </Container>
    )
}

export default Plugboard