import { useQuestion } from "../../context/QuestionContext";

export default function Question() {
  const { questions, index, cDispatch, answer } = useQuestion();

  return (
    <section className="questions">
      <h3>{questions[index]?.question}</h3>
      <div className="options">
        {questions[index].options.map((option, i) => (
          <Option
            option={option}
            dispatch={cDispatch}
            index={i}
            answer={answer}
            correctAnswer={questions[index].correct_answer}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}

function Option({ option, dispatch, index, answer, correctAnswer }) {
  const handleDisable = answer !== null;
  return (
    <button
      className={`btn btn-option ${index === answer ? "answer" : ""} ${
        handleDisable ? (index === correctAnswer ? "correct" : "wrong") : ""
      }`}
      onClick={() => dispatch({ type: "newAnswer", peyload: index })}
      disabled={handleDisable}
    >
      {option}
    </button>
  );
}
