import "./Rotors.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
interface Props {
    leftPosition: number,
    middlePosition: number,
    rightPosition: number
}

const Rotors: React.FC<Props> = ({ leftPosition, middlePosition, rightPosition }: Props) => {


    return (
        <Container fluid className="rotor-container">
            <Container  className="positions">
                <Row className="position-row">
                    <Col className="position">{leftPosition}</Col>
                    <Col className="position">{middlePosition}</Col>
                    <Col className="position">{rightPosition}</Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Rotors