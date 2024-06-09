import { useQuestion } from "../../context/QuestionContext";

export default function Finished() {
  const { points, totalPoints, highScore } = useQuestion();
  const persetage = (points / totalPoints) * 100;
  return (
    <section>
      <p className="finished">
        You scored <strong>{points}</strong> out of {totalPoints} ({persetage}%)
      </p>
      <p style={{ textAlign: "center" }}>Highscore: {highScore} points</p>
    </section>
  );
}
