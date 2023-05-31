import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Lampboard.css'
import { useEffect } from 'react';
import { Stack } from 'react-bootstrap';

interface Props {
    encryptedLetter: string,
    isKeyUp: boolean
}

const Lampboard: React.FC<Props> = ({ encryptedLetter, isKeyUp }: Props) => {
    const firstRow: string[] = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const secondRow: string[] = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const thirdRow: string[] = ["Z", "X", "C", "V", "B", "N", "M"]

    useEffect(() => {
        // console.log('onMount')

    }, [])

    return (
        <Container fluid className='base d-grid h-50'>
            <Stack className='lamp-row' direction='horizontal' >
                {firstRow.map(e => {
                    return <h3>{e}</h3>
                })}
            </Stack>
            <Stack className='lamp-row' direction='horizontal' >
                {secondRow.map(e => {
                    return <h3>{e}</h3>
                })}
            </Stack>
            <Stack className='lamp-row' direction='horizontal' >
                {thirdRow.map(e => {
                    return <h3>{e}</h3>
                })}
            </Stack>
        </Container>
        // <Container fluid className="base">
        //     <Row className="lamp-row">
        //         {
        //             firstRow.map(e => {
        //                 return <Col className={`flex-item ${(encryptedLetter === e && !isKeyUp) ? 'lit' : ""}`} as={"span"} key={e}>{e}</Col>
        //             })
        //         }
        //     </Row>
        //     <Row className="lamp-row">
        //         {
        //             secondRow.map(e => {
        //                 return <Col className={`flex-item ${(encryptedLetter === e && !isKeyUp) ? 'lit' : ""}`} as={"span"} key={e}>{e}</Col>
        //             })
        //         }
        //     </Row>
        //     <Row className="lamp-row">
        //         {
        //             thirdRow.map(e => {
        //                 return <Col className={`flex-item ${(encryptedLetter === e && !isKeyUp) ? 'lit' : ""}`} as={"span"} key={e}>{e}</Col>
        //             })
        //         }
        //     </Row>
        // </Container>
    );
}

export default Lampboard;