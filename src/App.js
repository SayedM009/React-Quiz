import { useReducer } from 'react';
import './App.css';
import Header from "./components/MainSturcture/Header"
import Main from "./components/MainSturcture/Main"
import useFetchData from './components/CustomeHooks/useFetchData';
import Loading from './components/Messages/Loading';
import Error from './components/Messages/Error'
import StartScreen from "./components/MainSturcture/StartScreen";
import Question from "./components/MainSturcture/Question";
// Initial Value
const initValue = {
  questions : [],
  status : 'loading',
  index: 0
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
    default :
      throw new Error("Some Values  are Missing")
  }
}


function App() {
  // Controller of Data 
  const [{questions, status, index}, dispatch] = useReducer(reducer, initValue)
  // Fetching Data From Fake API
  const [cDispatch] = useFetchData(dispatch)
  // Numbers Of Questions
  const numQuestions = questions?.length
  

  return <>
    <Header/>
    <Main>
      {status === "loading" && <Loading />}
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen numQuestions={numQuestions} onClickChangeStatus={cDispatch}/>}
      {status === "action" && <Question questions={questions[index]}/>}
    </Main>
  </>
    
}

export default App;


