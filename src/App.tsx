import React, { useEffect, useState } from "react";
import "./App.css";
import Lampboard from "./Lampboard";
import Rotorboard from "./Rotorboard";
import Plugboard from "./Plugboard";
import { Rotors } from "./Rotors";
const App: React.FC = () => {

	
	const letters: RegExp = /^[a-zA-Z]$/
	const [input, setInput] = useState<string>("")
	const [isKeyUp, setIsKeyUp] = useState<boolean>(false)
	const [pairs, setPairs] = useState<{}>({})
	// const [rightPosition, setRightPosition] = useState<number>(0)
	// const [middlePosition, setMiddlePosition] = useState<number>(0)
	// const [leftPosition, setLeftPosition] = useState<number>(0)

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

	

	return (
		<div className="App">
			<Rotorboard 
				// leftPosition={leftPosition} 
				// middlePosition={middlePosition} 
				// rightPosition={rightPosition} 
			/>
			<Lampboard 
				encryptedLetter={input} 
				isKeyUp={isKeyUp} 
				/>
			<Plugboard 
				pairs={pairs}
				setPairs={setPairs}
			/>
		</div>
	);
}

export default App;

