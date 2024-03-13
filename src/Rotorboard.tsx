import "./Rotorboard.css"
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card, Stack } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Rotors } from "./Rotors";




// import Modal from 'react-bootstrap/Modal';
interface Props {
    pairs: {}
    setOutput: Function,
    setInput: Function,
    setIsKeyUp: Function
    // leftPosition: number,
    // middlePosition: number,
    // rightPosition: number
}

const Rotorboard: React.FC<Props> = ({ setIsKeyUp, setInput, pairs, setOutput }: Props) => {
    const alphabet: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


    const generateRandomRotorPosition = (): number => {
        let randomPosition: number = Math.floor(Math.random() * 25)
        return randomPosition
    }
    const selectRandomRotors = () => {
        const allRotors: string[] = ["I", "II", "III", "IV", "V"]
        const shuffled = [...allRotors].sort(() => 0.5 - Math.random())
        const subArray = shuffled.slice(0, 3)
        // console.log(shuffled)
        // const rightValue = `rotor${subArray[0]}` as keyof typeof Rotors
        // const middleValue = `rotor${subArray[1]}` as keyof typeof Rotors
        // const leftValue = `rotor${subArray[2]}` as keyof typeof Rotors

        const rightValue = subArray[0]
        const middleValue = subArray[1]
        const leftValue = subArray[2]

        setRightRotorValue(rightValue)
        setMiddleRotorValue(middleValue)
        setLeftRotorValue(leftValue)

        setCurrentRightRotor(Rotors[`rotor${rightValue}` as keyof typeof Rotors])
        setCurrentMiddleRotor(Rotors[`rotor${middleValue}` as keyof typeof Rotors])
        setCurrentLeftRotor(Rotors[`rotor${leftValue}` as keyof typeof Rotors])

        setCurrentReverseRightRotor(Rotors[`reverse${rightValue}` as keyof typeof Rotors])
        setCurrentReverseMiddleRotor(Rotors[`reverse${middleValue}` as keyof typeof Rotors])
        setCurrentReverseLeftRotor(Rotors[`reverse${leftValue}` as keyof typeof Rotors])
    }


    useEffect(() => {
        selectRandomRotors()
    }, [])
    const { reflector }: any = Rotors
    // current arrays of numbers for rotors 

    const [rightRotorValue, setRightRotorValue] = useState<string>('')
    const [middleRotorValue, setMiddleRotorValue] = useState<string>('')
    const [leftRotorValue, setLeftRotorValue] = useState<string>('')


    const [currentRightRotor, setCurrentRightRotor] = useState<number[]>([])
    const [currentMiddleRotor, setCurrentMiddleRotor] = useState<number[]>([])
    const [currentLeftRotor, setCurrentLeftRotor] = useState<number[]>([])
    // reverse versions of current rotors
    const [currentReverseRightRotor, setCurrentReverseRightRotor] = useState<number[]>(Rotors.reverseI)
    const [currentReverseMiddleRotor, setCurrentReverseMiddleRotor] = useState<number[]>(Rotors.reverseII)
    const [currentReverseLeftRotor, setCurrentReverseLeftRotor] = useState<number[]>(Rotors.reverseIII)
    // current position of each rotor; 0 to 25
    const [rightPosition, setRightPosition] = useState<number>(generateRandomRotorPosition())
    const [middlePosition, setMiddlePosition] = useState<number>(generateRandomRotorPosition())
    const [leftPosition, setLeftPosition] = useState<number>(generateRandomRotorPosition())
    // const [rightPosition, setRightPosition] = useState<number>(1)
    // const [middlePosition, setMiddlePosition] = useState<number>(10)
    // const [leftPosition, setLeftPosition] = useState<number>(9)

    // const [inputLetter, setInputLetter] = useState('')

    const [message, setMessage] = useState<string>('')//input message from user
    const [encryptedMessage, setEncryptedMessage] = useState<string>('')//encrypted message
    // const [isKeyPressed, setIsKeyPressed] = useState(false);


    const changeRotor = (value: string, id: string) => {//function for dropdown menu to select a rotor; I to V
        const newRotorKey = `rotor${value}` as keyof typeof Rotors
        const newReverseRotorKey = `reverse${value}` as keyof typeof Rotors


        // setCurrentRightRotor(Rotors[`rotor${rightValue}` as keyof typeof Rotors ])
        // setCurrentMiddleRotor(Rotors[`rotor${middleValue}` as keyof typeof Rotors ])
        // setCurrentLeftRotor(Rotors[`rotor${leftValue}` as keyof typeof Rotors ])

        if (id === "leftRotorSelector") {
            setLeftRotorValue(value)
            setCurrentLeftRotor(Rotors[newRotorKey])
            setCurrentReverseLeftRotor(Rotors[newReverseRotorKey])
        }

        if (id === "middleRotorSelector") {
            setMiddleRotorValue(value)
            setCurrentMiddleRotor(Rotors[newRotorKey])
            setCurrentReverseMiddleRotor(Rotors[newReverseRotorKey])
        }

        if (id === "rightRotorSelector") {
            setRightRotorValue(value)
            setCurrentRightRotor(Rotors[newRotorKey])
            setCurrentReverseRightRotor(Rotors[newReverseRotorKey])
        }

    }

    const clockRotation = () => {//this runs only once regardless of key being continuosly being pressed

        // if (!e.repeat) {
        // console.log(e.key.toUpperCase())
        setRightPosition(rightPosition + 1)
        if (rightPosition >= 25) {
            setRightPosition(0)
            setMiddlePosition(middlePosition + 1)
        }
        if (rightPosition < 0) {
            setRightPosition(25)
        }

        if (middlePosition >= 25) {
            setMiddlePosition(0)
            setLeftPosition(leftPosition + 1)
        }

        if (leftPosition >= 25) {
            setLeftPosition(0)
        }

        // }
    }


    const checkOverflow = (number: number) => {//function to ensure indexed do not overflow up or down
        if (number > 25) {
            return number - 26
        }
        if (number < 0) {
            return number + 26
        } else {
            return number
        }
    }

    const seconds = (): void => {//runs on clicking the down button for the right rotor; increases right position by 1
        // console.log('seconds')
        setRightPosition(checkOverflow(rightPosition + 1))
    }
    const antiSeconds = (): void => {//runs on clicking the up button for the right rotor; decreases right position by 1
        // console.log('antiseconds')
        setRightPosition(checkOverflow(rightPosition - 1))
    }

    const minutes = (): void => {//runs on clicking the down button for the middle rotor; increases middle position by 1
        // console.log('minutes');
        setMiddlePosition(checkOverflow(middlePosition + 1))
    }
    const antiMinutes = (): void => {//runs on clicking the up button for the middle rotor; decreases middle position by 1
        // console.log('antiminutes')
        setMiddlePosition(checkOverflow(middlePosition - 1))
    }
    const hours = (): void => {//runs on clicking the down button for the left rotor; increases left position by 1
        // console.log("hours")
        setLeftPosition(checkOverflow(leftPosition + 1))
    }
    const antiHours = (): void => {//runs on clicking the up button for the left rotor; decreases left position by 1
        // console.log('antihours')
        setLeftPosition(checkOverflow(leftPosition - 1))
    }

    const handleKeyDown = (event: any) => {

        let letter = event.key.toUpperCase()
        // console.log(letter);
        let inputLetter = letter
        setInput(letter)
        if (!(Object.keys(pairs).length === 0)) {//if there pairs object is not empty
            letter = pairs[letter as keyof typeof pairs]
        }

        // if key is not held down and the key pressed is a letter 
        // almost everything should happen inside this is statement
        if (!event.repeat && alphabet.includes(letter)) {
            clockRotation()
            // setMessage(message + letter)
            // console.log(letter);

            const inputIndex = alphabet.indexOf(letter)//index of letter pressed

            const inputToRightOffset = rightPosition - 0// this is always zero since the input does not rotate: ;
            const rightRotorOutput = currentRightRotor[checkOverflow(inputIndex + inputToRightOffset)]
            // console.log(alphabet[rightRotorOutput])

            const rightToMiddleOffset = middlePosition - rightPosition
            const middleRotorOutput = currentMiddleRotor[checkOverflow(rightRotorOutput + rightToMiddleOffset)]
            // console.log(alphabet[middleRotorOutput])

            const middleToLeftOffset = leftPosition - middlePosition
            const leftRotorOutput = currentLeftRotor[checkOverflow(middleRotorOutput + middleToLeftOffset)]
            // console.log(alphabet[leftRotorOutput])

            const leftToReflectorOffset = 0 - leftPosition
            const reflectorToLeftOffset = leftPosition - 0
            const reflectorOutput = checkOverflow(reflector[checkOverflow(leftRotorOutput + leftToReflectorOffset)] + reflectorToLeftOffset)
            // console.log(alphabet[reflectorOutput])

            const leftToMiddleReverseOffset = middlePosition - leftPosition
            const leftRotorReverseOutput = checkOverflow(currentReverseLeftRotor[reflectorOutput] + leftToMiddleReverseOffset)
            // console.log(alphabet[leftRotorReverseOutput])

            const middleToRightReverseOffset = rightPosition - middlePosition
            const middleRotorReverseOutput = checkOverflow(currentReverseMiddleRotor[leftRotorReverseOutput] + middleToRightReverseOffset)
            // console.log(alphabet[middleRotorReverseOutput])

            const rightToOutputReverseOffset = 0 - rightPosition
            const rightRotorReverseOutput = checkOverflow(currentReverseRightRotor[middleRotorReverseOutput] + rightToOutputReverseOffset)
            setOutput(alphabet[rightRotorReverseOutput])
            // console.log(alphabet[rightRotorReverseOutput])
            setMessage(message + inputLetter)

            setEncryptedMessage(encryptedMessage + alphabet[rightRotorReverseOutput])
            // console.log(leftPosition, middlePosition, rightPosition)
        }



        // if (event.key === 'Enter') {
        //     console.log('Enter key pressed');
        // }
        // console.log(event)
        // if (!isKeyPressed) {
        //     console.log("once");

        //     setIsKeyPressed(true);
        //     if(!alphabet.includes(event.key.toUpperCase())){//if key is not a capital letter, do nothing
        //         console.log("poop")
        //         return
        //     }else{//else add letter to message
        //         setMessage(message+event.key.toString())

        //     }


        //     // Start your continuous action or handle the key press event
        // }
    };
    const handleKeyUp = () => {
        // console.log('up');

    }

    // const handleKeyUp = (event:any) => {
    //     // if (event.key === 'Enter') {
    //     //     console.log('Enter key released');
    //     // }
    //     // console.log("key released!!",isKeyPressed);


    //     if (isKeyPressed) {
    //         setIsKeyPressed(false);
    //         // Stop your continuous action or handle the key release event
    //     }
    // };

    // const checkValidKey = (event: any) => {
    //     console.log(event)
    //     // if(isKeyPressed){

    //     // }
    //     // if(e.key.match(letters)){
    //     //     console.log("mathch!!");
    //     // }else{
    //     //     console.log("no match :(");

    //     // }
    //     // console.log(e)
    //     // const currentMessage = e.target.value.toUpperCase()

    //     // console.log(currentMessage[currentMessage.length-1])
    //     // setMessage(currentMessage)
    //     // let randomIndex = Math.floor(Math.random() * alphabet.length)
    //     // setEncryptedMessage(encryptedMessage+alphabet[randomIndex])
    // }
    const clearMessages = () => {
        setMessage('')
        setEncryptedMessage('')
    }

    const pasteAttempt = () => {
        return false
    }

    const copyToClipboard = async (text: any) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (error) {
            alert('Error copying to clipboard:');
        }
    };

    return (
        <Container fluid className="rotor-container">

            <Card className="my-2" id="input-text">
                <Card.Body >
                    <div className="message-title">Your Message</div>
                    <div>
                        <textarea
                            className="message"
                            value={message}
                            // onKeyDown={(e) => checkValidKey(e)}
                            placeholder="Enter your message here"
                            onChange={() => { }}
                            onKeyDown={(e) => { handleKeyDown(e) }}
                            onKeyUp={handleKeyUp}
                        />
                    </div>
                    <div className="btn-container">
                        <Button
                            className="btn btn-secondary"
                            onClick={clearMessages}
                            id="clear-btn"
                        >
                            Clear
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eraser" viewBox="0 0 16 16">
                                <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293z" />
                            </svg>
                        </Button>
                        <Button
                            className="btn btn-secondary"
                            id="copy-message-btn"
                            onClick={() => copyToClipboard(message)}
                        >
                            <div>
                                Copy
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                            </svg>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
            <Stack className="rotor-settings my-2" direction="horizontal" gap={2}>
                <Card className="mx-auto " id="left-holder">
                    <Card.Body className="py-2">
                        <Form.Select
                            value={leftRotorValue}
                            id="leftRotorSelector"
                            onChange={(e) => changeRotor(e.target.value, e.target.id)}>
                            <option>I</option>
                            <option>II</option>
                            <option>III</option>
                            <option>IV</option>
                            <option>V</option>
                        </Form.Select>
                        <Button
                            className="btn btn-secondary"
                            onClick={antiHours}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                            </svg>
                        </Button>
                        <div>{leftPosition + 1}</div>
                        <Button
                            className="btn btn-secondary"
                            onClick={hours}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </Button>
                    </Card.Body>
                </Card>
                <Card className="mx-auto " id="middle-holder">
                    <Card.Body className="py-2">
                        <Form.Select
                            value={middleRotorValue}
                            id="middleRotorSelector"
                            onChange={(e) => changeRotor(e.target.value, e.target.id)}>
                            <option>I</option>
                            <option >II</option>
                            <option>III</option>
                            <option>IV</option>
                            <option>V</option>
                        </Form.Select>
                        <Button
                            className="btn btn-secondary"
                            onClick={antiMinutes}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                            </svg>
                        </Button>
                        <div>{middlePosition + 1}</div>
                        <Button
                            className="btn btn-secondary"
                            onClick={minutes}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </Button>
                    </Card.Body>
                </Card>
                <Card className="mx-auto " id="right-holder">
                    <Card.Body className="py-2">
                        <Form.Select
                            value={rightRotorValue}
                            id="rightRotorSelector"
                            onChange={(e) => changeRotor(e.target.value, e.target.id)}>
                            <option>I</option>
                            <option>II</option>
                            <option>III</option>
                            <option>IV</option>
                            <option>V</option>
                        </Form.Select>
                        <Button
                            className="btn btn-secondary"
                            onClick={antiSeconds}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                            </svg>
                        </Button>
                        <div>{rightPosition + 1}</div>
                        <Button
                            className="btn btn-secondary"
                            onClick={seconds}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </Button>
                    </Card.Body>
                </Card>
            </Stack>

            <Card className="my-2" id="output-text">
                <Card.Body>
                    <div className="message-title"> Encrypted Message</div>
                    <textarea
                        readOnly
                        className="encrypted-message"
                        value={encryptedMessage} placeholder="Your encrypted message"
                        onPaste={pasteAttempt}
                    />
                    <Button
                        className="btn btn-secondary"
                        id="copy-btn"
                        onClick={() => copyToClipboard(encryptedMessage)}
                    >
                        <div>
                            Copy

                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default Rotorboard