import React from "react"
import "./Plugboard.css"

const Plugboard: React.FC = () => {
    const alphabet: string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    return (
        <div className="plugboard-container">
            {/* <div className="plugboard-top">
                Top
            </div>
            <div className="plugboard-bottom">
                Bottom
            </div> */}
            {
                alphabet.map(letter =>{
                    return <div className="letter-pair-container">
                        <div>{letter}</div>
                        <input  pattern="{1}"/>
                    </div>
                })
            }

            
        </div>
    )
}

export default Plugboard