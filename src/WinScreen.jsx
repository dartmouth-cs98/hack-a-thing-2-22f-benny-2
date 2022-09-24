import './WinScreen.css';

export default function WinScreen({
    time, hints, best
}){

    if (time < best) best = time
    return (
        <div className="container">
            <h1>Great Job!</h1>
            <h2>Your time: {time.toString().slice(0, -3)}.{time.toString().slice(1, -2)} seconds</h2>
            <h2>Best time: {best.toString().slice(0, -3)}.{best.toString().slice(1, -2)} seconds</h2>
            <h2>Number of hints used: {hints}</h2>
        </div>
    )
}