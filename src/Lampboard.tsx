import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './Lampboard.css'
import { useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
// import Badge from 'react-bootstrap/Badge';

interface Props {
    encryptedLetter: string,
    isKeyUp: boolean,
    output: string,
    down: boolean
}

const Lampboard: React.FC<Props> = ({ down,encryptedLetter, isKeyUp,output }: Props) => {
    const firstRow: string[] = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const secondRow: string[] = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const thirdRow: string[] = ["Z", "X", "C", "V", "B", "N", "M"]
    // const [down, setDown] = useState<boolean>(false)
    // let down = false
    useEffect(() => {
        // console.log(output,down)
        // clearLight()
        

    },)

    // onkeydown = (e:any)=>{
    //     if(!e.repeat){
    //         setDown(true)
    //         console.log(down)
    //     }
    // }
    // onkeyup =()=>{
    //     console.log('up')
    //     setDown(false)
    //     console.log(down)
    // }
    
    const clearLight = ()=>{
    }
    return (
        <Container fluid className='base d-grid'>
            <Stack className={`lamp-rows-container my-auto mx-3 `} direction='vertical'>
                <Stack className='lamp-row my-2' direction='horizontal' >
                    {firstRow.map(e => {
                        return <h1 key={e}>
                            <div className={`circle ${(output === e && down) ? 'lit' : 'off'}`}>{e}</div>
                        </h1>
                    })}
                </Stack>
                <Stack className='lamp-row my-2' direction='horizontal' >
                    {secondRow.map(e => {
                        return <h1 key={e}>
                            <div className={`circle ${(output === e && down) ? 'lit' : 'off'}`}>{e}</div>
                        </h1>
                    })}
                </Stack>
                <Stack className='lamp-row my-2' direction='horizontal' >
                    {thirdRow.map(e => {
                        return <h1 key={e}>
                            <div className={`circle ${(output === e && down) ? 'lit' : 'off'}`}>{e}</div>
                        </h1>
                    })}
                </Stack>
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