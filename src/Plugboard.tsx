import React, { useEffect, useState } from "react"
import "./Plugboard.css"
import Container from 'react-bootstrap/Container';
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

interface Props {
    pairs: {},
    setPairs: Function,
    input: string,
    down: boolean,
    getAllInfo: any,
    setPairsString: Function,

}


const Plugboard: React.FC<Props> = ({  setPairsString, down, input, pairs, setPairs, getAllInfo }: Props) => {
    const alphabet: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const tempObject: letters = {}
    const usedLetters: string[] = []
    const [disabledPair, setDisabledPair] = useState<boolean>(false)

    type letters = {
        [key: string]: string
    }

    useEffect(() => {
        selfPairing()
    },[])

    const makePair = (letter: string, e: any) => {
        const inputLetter = e.target.value.toUpperCase()//key pressed
        if (!Object.values(pairs).includes(inputLetter)) {
            // console.log('not included')
            usedLetters.push(inputLetter)
            tempObject[letter] = inputLetter

            setPairs({ ...pairs, ...tempObject })

        } else {
            e.target.value = ""
            // console.log('else');

        }

        // setPairs({...pairs,...tempObject})

        // tempObject[letter] = inputLetter
        // console.log(tempObject)
        // setPairs({...pairs,...tempObject})

        // console.log(letter, inputLetter)
        // e.target.value = letter
        // if(letter === inputLetter){
        //     console.log('poop')
        //     e.target.value = ""
        //     return
        // }

    }

    const randomPairing = () => {
        const randomPairs: letters = {}
        let newAlphabet = [...alphabet].sort(() => 0.5 - Math.random())
        let aggregateString = ''
        for (let i = 0; i < newAlphabet.length; i += 2) {
            randomPairs[newAlphabet[i]] = newAlphabet[i + 1]
            randomPairs[newAlphabet[i + 1]] = newAlphabet[i]
            // console.log(newAlphabet[i + 1], newAlphabet[i]);
            aggregateString += `${newAlphabet[i + 1]}${newAlphabet[i]} `


        }
        setPairsString(aggregateString)
        setPairs(randomPairs)
        setDisabledPair(true)
    }

    const selfPairing = () => {//sets the letters in the pairs objects to themselves
        console.log("pair");

        const mirrorPairs: letters = {}
        for (let i = 0; i < alphabet.length; i++) {
            mirrorPairs[alphabet[i] as keyof typeof mirrorPairs] = alphabet[i]
        }
        setPairs(mirrorPairs)
        setDisabledPair(true)

    }
    const clearPairs = () => {//empties the pairs object and enables the inputs
        setPairs({})
        setDisabledPair(false)
    }


    // onkeydown = (e:any)=>{
    //     if(!e.repeat){
    //         setDown(true)
    //         console.log(input)
    //     }
    // }
    // onkeyup =()=>{
    //     setDown(false)        
    // }

    return (
        <Container fluid className="plugboard-container py-2">
            <Stack className="stack-container py-auto" direction="vertical">
                <Stack className="options mx-auto my-auto" direction="horizontal" gap={2}>
                    <Button
                        className="btn btn-secondary"
                        id="self-btn"
                        onClick={selfPairing}
                        variant="primary">
                        <div>
                            Self Pairing
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                        </svg>

                    </Button>
                    <Button
                        className="btn btn-secondary"
                        id="pairing-btn"
                        onClick={randomPairing}
                        variant="primary">
                        Random Pairing
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shuffle" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5" />
                            <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192" />
                        </svg>
                    </Button>
                    <Button
                        className="btn btn-secondary"
                        id="clear-pair-btn"
                        onClick={clearPairs}
                        variant="primary">
                        Clear Pairs
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eraser" viewBox="0 0 16 16">
                            <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293z" />
                        </svg>
                    </Button>
                    <Button
                        className="btn btn-secondary"
                        onClick={getAllInfo}
                        id="copy-all-btn"
                        variant="primary">
                        Copy All Info
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </Button>
                </Stack>
                <Stack className="letter-pair-container my-auto" direction="horizontal" >
                    {alphabet.map(letter => {
                        return <div key={letter} className={`px-2 py-3 mx-1 single-pair ${(input === letter && down) ? 'pressed' : 'unpressed'}`}>
                            <input disabled={disabledPair} value={pairs[letter as keyof typeof pairs] ?? ""} onChange={(e) => makePair(letter, e)} className="plug" type="text" maxLength={1} />
                            {/* <Button size="sm" variant="primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                </Button> */}
                            <div className="arrows my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                            </div>
                            <div>{letter}</div>
                        </div>
                    })}
                </Stack>
            </Stack>
        </Container>
    )
}

export default Plugboard