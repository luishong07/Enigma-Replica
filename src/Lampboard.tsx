import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Lampboard.css'

const Lampboard = () => {
    const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"]

    return (
        // <div className='container'>
        <Container fluid className="lamp-container ">
            <Row className='row-item ' >
                {
                    firstRow.map(e => {
                        return <Col key={e}>{e}</Col>
                    })
                }
            </Row>
            <Row className='row-item '>
                {
                    secondRow.map(e => {
                        return <Col key={e}>{e}</Col>
                    })
                }
            </Row>
            <Row className='row-item '>
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