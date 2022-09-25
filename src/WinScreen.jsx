import './WinScreen.css';
import { useNavigate } from "react-router-dom";

export default function WinScreen({
    time, hints, best, goToNextLevelReload
}){
    const navigate = useNavigate();

    if (time < best) best = time
    return (
        <div className="container">
            <h1>Great Job!</h1>
            <h2>Your time: {time.toString().slice(0, -3)}.{time.toString().slice(1, -2)} seconds</h2>
            <h2>Best time: {best.toString().slice(0, -3)}.{best.toString().slice(1, -2)} seconds</h2>
            <h2>Number of hints used: {hints}</h2>
            <button onClick={() => goToNextLevelReload()}>New Level</button>
            <button onClick={() => navigate('/')}>Back</button>
        </div>
    )
}