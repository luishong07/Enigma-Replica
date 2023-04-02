import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Lampboard.css'

const Lampboard = () => {
    const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"]

    return (

        <Container fluid className="base">
            <Row className="flex-container space-evenly">
                {
                    firstRow.map(e => {
                        return <Col className="flex-item" as={"span"} key={e}>{e}</Col>
                    })
                }
            </Row>
            <Row className="flex-container space-evenly">
                {
                    secondRow.map(e => {
                        return <Col className="flex-item" as={"span"} key={e}>{e}</Col>
                    })
                }
            </Row>
            <Row className="flex-container space-evenly">
                {
                    thirdRow.map(e => {
                        return <Col className="flex-item" as={"span"} key={e}>{e}</Col>
                    })
                }
            </Row>
          

        </Container>
    );
}

export default Lampboard;