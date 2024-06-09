import { useQuestion } from "../../context/QuestionContext";

export default function Progress() {
  const { numQuestions, index, points, totalPoints } = useQuestion();
  return (
    <section className="progress-container">
      <progress max={numQuestions} value={index + 1}></progress>
      <div className="progress-details">
        <p>
          Questions <strong>{index + 1}</strong>/{numQuestions}
        </p>
        <p>
          {points} / {totalPoints}
        </p>
      </div>
    </section>
  );
}
