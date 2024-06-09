import { createContext, useContext, useReducer } from "react";
import useFetchData from "../components/CustomeHooks/useFetchData";

// Initial Value
const initValue = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  seconds: 300,
};
// Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return { ...state, questions: action.peyload, status: "ready", index: 0 };
    case "dataRejected":
      return { ...state, questions: action.peyload, status: "error" };
    case "changeStatus":
      return { ...state, status: "action" };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.peyload,
        points:
          question.correct_answer === action.peyload
            ? state.points + question.points
            : state.points,
      };
    case "newQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finished":
      return {
        ...state,
        status: "finish",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "reset":
      return {
        ...initValue,
        questions: state.questions,
        status: "ready",
        highScore: state.highScore,
      };
    case "tick":
      if (state.seconds === 0) return { ...state, status: "finish" };
      return { ...state, seconds: state.seconds - 1 };
    default:
      throw new Error("Some Values  are Missing");
  }
}

const QuestionContext = createContext();

function QuestionProvider({ children }) {
  const [
    { questions, status, index, answer, points, highScore, seconds },
    dispatch,
  ] = useReducer(reducer, initValue);

  // Fetching Data From Fake API
  const [cDispatch] = useFetchData(dispatch);

  // Numbers Of Questions
  const numQuestions = questions?.length;

  // Total of Points
  const totalPoints =
    questions && questions.reduce((acc, cur) => acc + cur.points, 0);

  return (
    <QuestionContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highScore,
        seconds,
        numQuestions,
        cDispatch,
        totalPoints,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}

function useQuestion() {
  const context = useContext(QuestionContext);
  if (context === undefined)
    throw new Error("You have used Context in not correct place");
  return context;
}
export { QuestionProvider, useQuestion };
