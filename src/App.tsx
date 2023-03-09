import React, { useEffect } from "react";
import "./App.css";

function App() {

	const handler = (e: KeyboardEvent) => {
		// e.preventDefault()
		console.log(e.key)
	}
	// window.addEventListener("click", handler)
	useEffect(() => {
		window.addEventListener("keydown", handler)
		return () => window.removeEventListener("keydown", handler)
	}, [handler])

	return (
		<div className="App">

			<div className="rotors">Rotors</div>
			<div className="lampboard">Lampboard</div>
			<div className="plugboard">Plugboard</div>
		</div>
	);
}

export default App;

