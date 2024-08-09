import React, {  useState } from "react";
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


	onkeydown = (e: any) => {
		if (!e.repeat) {
			setDown(true)
		}
	}
	onkeyup = () => {
		setDown(false)
	}

	const getAllInfo = async () => {
		
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

