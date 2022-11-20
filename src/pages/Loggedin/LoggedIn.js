import "./Loggedin.css";
import { Link } from "react-router-dom";

function Loggedin() {
    return (
        <div class="loggedin">
            <h2>Click the Camera Icon Take a Pic and Start a Timer</h2>
            <Link to='/camera'>
                <button>Camera</button>
            </Link>
            <h2>Don't want to take a pic? Just start a CleanUp Timer</h2>
            <Link to='/timer'>
            <button>Timer</button>
            </Link>
        </div>
    )
}

export default Loggedin;