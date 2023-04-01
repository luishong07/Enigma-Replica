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
                        return <Col   key={e}><span className="flex-item">{e}</span></Col>
                    })
                }
            </Row>
            <Row className="flex-container space-evenly">
                {
                    secondRow.map(e => {
                        return <Col   key={e}><span className="flex-item">{e}</span></Col>
                    })
                }
            </Row>
            {/* <Row className="line3">
                {
                    thirdRow.map(e => {
                        return <Col key={e}>{e}</Col>
                    })
                }
            </Row> */}
            <ul className="flex-container space-evenly">
                <span className="flex-item">1</span>
                <span className="flex-item">2</span>
                <span className="flex-item">3</span>
                <span className="flex-item">4</span>
                <span className="flex-item">5</span>
            </ul>

        </Container>
    );
}

export default Lampboard;