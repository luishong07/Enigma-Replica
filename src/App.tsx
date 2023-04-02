import React, { useEffect, useState } from "react";
import "./App.css";
import Lampboard from "./Lampboard";
import Rotors from "./Rotors";
import Plugboard from "./Plugboard";

const App:React.FC = () => {
	const letters = /^[a-zA-Z]$/
	const [input, setInput] = useState<string>("")
	// const [isKeyPressed, setIsKeyPressed] = useState<boolean>(false)

	const handler = (e: KeyboardEvent) => {
		console.log(e)
		if(!e.key.match(letters)){
			alert('Not a Letter')
		}else{
			// console.log('Yay')
			setInput(e.key.toUpperCase())
		}

	}
	useEffect(() => {
		// const isPressed = (e)=>{
		// 	if(e.)
		// }
		window.addEventListener("keydown", handler)
		return () => window.removeEventListener("keydown", handler)
	}, [handler])



	return (
		<div className="App">
			<Rotors />
			<Lampboard encryptedLetter={input}/>
			<Plugboard />
		</div>
	);
}

export default App;

