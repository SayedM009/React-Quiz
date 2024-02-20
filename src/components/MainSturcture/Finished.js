export default function Finished({points, totalPoints,highScore}) {
    const persetage = (points/totalPoints)*100;
    return <section >
        <p className="finished" >You scored <strong>{points}</strong> out of {totalPoints} ({persetage}%)</p>
        <p style={{textAlign:"center"}}>Highscore: {highScore} points</p>
    </section>
}