import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Lampboard.css'
import { useEffect } from 'react';
import { Stack } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';

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
        <Container fluid className='base d-grid'>
            <Stack className='lamp-row' direction='horizontal' >
                {firstRow.map(e => {
                    return <h1>
                        <div  className={`circle ${(encryptedLetter === e && !isKeyUp) ? 'lit' : "off"}`}>{e}</div>
                        {/* <Badge className='circle' bg='secondary'>{e}</Badge> */}
                    </h1>
                    // return <span className='rounded-circle'>{e}</span>
                })}
            </Stack>
            <Stack className='lamp-row' direction='horizontal' >
                {secondRow.map(e => {
                    return <h1>
                        <div  className={`circle ${(encryptedLetter === e && !isKeyUp) ? 'lit' : "off"}`}>{e}</div>
                        {/* <Badge className='rounded-circle' bg='secondary'>{e}</Badge> */}
                    </h1>                    // return <span>{e}</span>
                })}
            </Stack>
            <Stack className='lamp-row' direction='horizontal' >
                {thirdRow.map(e => {
                    return <h1>
                        <div  className={`circle ${(encryptedLetter === e && !isKeyUp) ? 'lit' : "off"}`}>{e}</div>
                        {/* <Badge className='rounded-circle' bg='secondary'>{e}</Badge> */}
                    </h1>
                    // return <span>{e}</span>
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