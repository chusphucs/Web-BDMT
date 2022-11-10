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
            <Popup 
                trigger={buttonPopup} 
                setTrigger={setButtonPopup}
            />
        </div>
    )
}

export default App
