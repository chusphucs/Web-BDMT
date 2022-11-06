import Popup from './components/Popup'
import { useState } from "react";

function App() {
    const [buttonPopup,setButtonPopup]=useState(false);

    return (
        <div className="App">
            <main>
                <h1>React popups</h1>
                <br/><br/>
                <button onClick={()=> setButtonPopup(true)}>Open popup</button>
            </main>
            <Popup trigger={buttonPopup}>
                    <h3>my popup</h3>
                    <p>This is my trigger popup</p>
            </Popup>
        </div>
    )
}

export default App
