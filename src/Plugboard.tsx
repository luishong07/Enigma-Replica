import React from "react"
import "./Plugboard.css"
import { Card } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import { Stack } from 'react-bootstrap';



const Plugboard: React.FC = () => {
    const alphabet: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    // const alphabet: string[] = ["A"]

    return (
        <Container fluid className="plugboard-container h-25 py-3">
            <Stack className="letter-pair-container " direction="horizontal" >
                {alphabet.map(letter =>{
                    return <div className=" px-1 py-3 single-pair">
                        <div>{letter}</div>
                        <div className="my-2">svg</div>
                        <input/>
                    </div>
                })}
            </Stack>
        </Container>
    )
}

export default Plugboard