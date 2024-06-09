import { useQuestion } from "../../context/QuestionContext";

export default function NextBtn() {
  const { cDispatch, answer, index, numQuestions, status } = useQuestion();
  const condition = answer !== null;
  if (index < numQuestions - 1 && status !== "finish") {
    return (
      <button
        className={`btn ${!condition && "halfOpacity"}`}
        disabled={!condition}
        onClick={() => cDispatch({ type: "newQuestion" })}
      >
        Next
      </button>
    );
  }
  if (status === "finish") {
    return (
      <button
        style={{ display: "block", marginLeft: "640px" }}
        className={`btn`}
        onClick={() => cDispatch({ type: "reset" })}
      >
        Restart Quiz
      </button>
    );
  }
  if (index === numQuestions - 1) {
    return (
      <button
        style={{ display: "block", marginLeft: "640px" }}
        className={`btn ${!condition && "halfOpacity"}`}
        disabled={!condition}
        onClick={() => cDispatch({ type: "finished" })}
      >
        Finish
      </button>
    );
  }
}
