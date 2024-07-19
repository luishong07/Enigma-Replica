import React, { useEffect, useState } from "react";
import "./App.css";
import Lampboard from "./Lampboard";
import Rotorboard from "./Rotorboard";
import Plugboard from "./Plugboard";
const App: React.FC = () => {


	type letters = {
		[key: string]: string
	}
	const [input, setInput] = useState<string>("")
	const [isKeyUp, setIsKeyUp] = useState<boolean>(false)
	const [pairs, setPairs] = useState<letters>({})
	const [output, setOutput] = useState<string>('')
	const [down, setDown] = useState<boolean>(false)

	const [rotorsIds, setRotorsIds] = useState<string>('')
	const [initialPositions, setInitialPositions] = useState<string>('')
	const [pairsString, setPairsString] = useState<string>('')

	// const [rightPosition, setRightPosition] = useState<number>(0)
	// const [middlePosition, setMiddlePosition] = useState<number>(0)
	// const [leftPosition, setLeftPosition] = useState<number>(0)


	useEffect(() => {
		// console.log(output);

	}, [output])

	// const handler = (e: KeyboardEvent) => {

	// 	if (!e.key.match(letters)) {
	// 		alert('Not a Letter')
	// 	} else {
	// 		setIsKeyUp(false)
	// 		setInput(e.key.toUpperCase())
	// 	}
	// }



	// onkeydown = ()=>{//
	// 	if(!isKeyUp)
	// 	console.log('help')
	// }

	//bug: after the first keypress the following pressed register several times, many times
	// const clockRotation = () => {//this runs only once regardless of key being continuosly being pressed

	// 	// if (!e.repeat) {
	// 		// console.log(e.key.toUpperCase())
	// 		setRightPosition(rightPosition + 1)
	// 		if (rightPosition >= 25) {
	// 			setRightPosition(0)
	// 			setMiddlePosition(middlePosition + 1)
	// 		}
	// 		if (rightPosition < 0) {
	// 			setRightPosition(25)
	// 		}

	// 		if (middlePosition >= 25) {
	// 			setMiddlePosition(0)
	// 			setLeftPosition(leftPosition + 1)
	// 		}

	// 		if (leftPosition >= 25) {
	// 			setLeftPosition(0)
	// 		}

	// 	// }
	// }

	onkeydown = (e: any) => {
		if (!e.repeat) {
			setDown(true)
		}
	}
	onkeyup = () => {
		setDown(false)
	}

	const getAllInfo = async () => {
		// console.log(pairs);
		// console.log( `${rotorsIds} | ${initialPositions} ` );
		try {
            await navigator.clipboard.writeText(`${rotorsIds} | ${initialPositions} | ${pairsString} ` );
        } catch (error) {
            alert('Error copying to clipboard:');
        }


	}

	return (
		<div className="App">
			<Rotorboard
				setInitialPositions={setInitialPositions}
				setRotorsIds={setRotorsIds}
				pairs={pairs}
				setOutput={setOutput}
				setInput={setInput}
				setIsKeyUp={setIsKeyUp}
				
			/>
			<Lampboard
				output={output}
				encryptedLetter={input}
				isKeyUp={isKeyUp}
				down={down}
			/>
			<Plugboard
				setPairsString={setPairsString}
				getAllInfo={getAllInfo}
				input={input}
				pairs={pairs}
				setPairs={setPairs}
				down={down}

			/>
		</div>
	);
}

export default App;

// 