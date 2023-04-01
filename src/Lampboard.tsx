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
            <Row className="line1">
                {/* <span>Q</span>
                <span>W</span>
                <span>E</span>
                <span>R</span>
                <span>T</span>
                <span>Y</span>
                <span>U</span>
                <span>I</span>
                <span>O</span>
                <span>P</span> */}
                {
                    firstRow.map(e => {
                        return <Col key={e}>{e}</Col>
                    })
                }
            </Row>
            <Row className="line2">
                {/* <span>A</span>
                <span>S</span>
                <span>D</span>
                <span>F</span>
                <span>G</span>
                <span>H</span>
                <span>J</span>
                <span>K</span>
                <span>L</span> */}
                {
                    secondRow.map(e => {
                        return <Col key={e}>{e}</Col>
                    })
                }
            </Row>
            <Row className="line3">
                {/* <span>Z</span>
                <span>X</span>
                <span>C</span>
                <span>V</span>
                <span>B</span>
                <span>N</span>
                <span>M</span> */}
                {
                    thirdRow.map(e => {
                        return <Col key={e}>{e}</Col>
                    })
                }

            </Row>

        </Container>
    );
}

export default Lampboard;