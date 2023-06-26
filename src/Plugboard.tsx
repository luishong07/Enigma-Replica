import React from "react"
import "./Plugboard.css"
import { Card } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import { Stack } from 'react-bootstrap';



const Plugboard: React.FC = () => {
    const alphabet: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    // const alphabet: string[] = ["A"]

    return (
        <Container fluid className="plugboard-container py-3">
            <Stack className="letter-pair-container " direction="horizontal" >
                {alphabet.map(letter => {
                    return <div className=" px-2 py-3 mx-1 single-pair">
                        <div>{letter}</div>
                        <div className="my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                            </svg>
                        </div>
                        <input />
                    </div>
                })}
            </Stack>
        </Container>
    )
}

export default Plugboard