import { useEffect, useReducer } from 'react';
import './App.css';
import Header from "./components/MainSturcture/Header"
import Main from "./components/MainSturcture/Main"
import useFetchData from './components/CustomeHooks/useFetchData';
import Loading from './components/Messages/Loading';
import Error from './components/Messages/Error'
import StartScreen from "./components/MainSturcture/StartScreen";
import Question from "./components/MainSturcture/Question";
import Progress from './components/MainSturcture/Progress';
// Initial Value
const initValue = {
  questions : [],
  status : 'loading',
  index: 0,
  answer: null,
  points :0 
}

// Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return {...state, questions: action.peyload, status: "ready"}
    case "dataRejected":
      return {...state, questions: action.peyload,  status: "error"}
    case "changeStatus":
      return {...state,  status: "action"}
    case "newAnswer" :
      const question = state.questions.at(state.index);
        return {...state, answer : action.peyload, 
          points : question.correct_answer === action.peyload ?  state.points + question.points : state.points}
    case "newQuestion":
        return {...state, index:  state.index + 1 , answer : null}
    default :
      throw new Error("Some Values  are Missing")
  }
}


function App() {
  // Controller of Data 
  const [{questions, status, index, answer, points}, dispatch] = useReducer(reducer, initValue)
  // Fetching Data From Fake API
  const [cDispatch] = useFetchData(dispatch)
  // Numbers Of Questions
  const numQuestions = questions?.length
  // Total of Points
  const  totalPoints= questions.reduce((acc, cur) => acc + cur.points, 0 )
  useEffect(function() {

  }, [])
  return <>
    <Header/>
    <Main>
      {status === "loading" && <Loading />}
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen numQuestions={numQuestions} onClickChangeStatus={cDispatch}/>}
      {status === "action" && <>
      <Progress numQuestions={numQuestions} index={index} points={points} totalPoints={totalPoints}/>
      <Question questions={questions[index]} dispatch={cDispatch} answer={answer} />
      </>}
      {status === "finish" && <h1>finish</h1>}
    </Main>
  </>
    
}

export default App;


