import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Lampboard.css'
import { useEffect } from 'react';

interface Props {
    encryptedLetter: string,
    isKeyUp: boolean
}

const Lampboard: React.FC<Props> = ({ encryptedLetter, isKeyUp }: Props) => {
    const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"]

    useEffect(() => {
        // console.log('onMount')

    }, [])

    return (

        <Container fluid className="base">
            <Row className="flex-container space-evenly">
                {
                    firstRow.map(e => {
                        return <Col className={`flex-item ${(encryptedLetter === e && !isKeyUp) ? 'lit' : ""}`} as={"span"} key={e}>{e}</Col>
                    })
                }
            </Row>
            <Row className="flex-container space-evenly">
                {
                    secondRow.map(e => {
                        return <Col className={`flex-item ${(encryptedLetter === e && !isKeyUp) ? 'lit' : ""}`} as={"span"} key={e}>{e}</Col>
                    })
                }
            </Row>
            <Row className="flex-container space-evenly">
                {
                    thirdRow.map(e => {
                        return <Col className={`flex-item ${(encryptedLetter === e && !isKeyUp) ? 'lit' : ""}`} as={"span"} key={e}>{e}</Col>
                    })
                }
            </Row>


        </Container>
    );
}

export default Lampboard;