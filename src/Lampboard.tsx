import Container from 'react-bootstrap/Container';
import './Lampboard.css'
import { Stack } from 'react-bootstrap';

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
       
    );
}

export default Lampboard;