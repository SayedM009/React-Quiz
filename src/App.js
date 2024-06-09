// import { useEffect, useReducer } from 'react';
// import './App.css';
// import Header from "./components/MainSturcture/Header"
// import Main from "./components/MainSturcture/Main"
// import useFetchData from './components/CustomeHooks/useFetchData';
// import Loading from './components/Messages/Loading';
// import Error from './components/Messages/Error'
// import StartScreen from "./components/MainSturcture/StartScreen";
// import Question from "./components/MainSturcture/Question";
// import Progress from './components/MainSturcture/Progress';
// import NextBtn from "./components/MainSturcture/NextBtn"
// import Finished from './components/MainSturcture/Finished';
// import Timer from './components/MainSturcture/Timer';
// // Initial Value
// const initValue = {
//   questions : [],
//   status : 'loading',
//   index: 0,
//   answer: null,
//   points :0,
//   highScore : 0,
//   seconds : 300
// }
// // Reducer Function
// function reducer(state, action) {
//   switch (action.type) {
//     case "dataRecieved":
//       return {...state, questions:  action.peyload, status: "ready",index: 0}
//     case "dataRejected":
//       return {...state, questions: action.peyload,  status: "error"}
//     case "changeStatus":
//       return {...state,  status: "action"}
//     case "newAnswer" :
//       const question = state.questions.at(state.index);
//         return {...state, answer : action.peyload,
//           points : question.correct_answer === action.peyload ?  state.points + question.points : state.points}
//     case "newQuestion":
//         return {...state, index:  state.index + 1 , answer : null}
//     case "finished" :
//           return {...state, status: "finish", highScore: state.points > state.highScore ? state.points  : state.highScore}
//     case "reset" :
//           return {...initValue, questions : state.questions, status:"ready", highScore: state.highScore}
//     case "tick" :
//           if (state.seconds === 0) return {...state, status: "finish"}
//           return {...state, seconds : state.seconds - 1}
//     default :
//       throw new Error("Some Values  are Missing")
//   }
// }

// function App() {
//   // Controller of Data
//   const [{questions, status, index, answer, points, highScore, seconds}, dispatch] = useReducer(reducer, initValue)
//   // Fetching Data From Fake API
//   const [cDispatch] = useFetchData(dispatch)
//   // Numbers Of Questions
//   const numQuestions = questions?.length
//   // Total of Points
//   const  totalPoints= questions && questions.reduce((acc, cur) => acc + cur.points, 0 )
//   useEffect(function() {

//   }, [])
//   return <>
//     <Header/>
//     <Main>
//       {status === "loading" && <Loading />}
//       {status === "error" && <Error />}
//       {status === "ready" && <StartScreen numQuestions={numQuestions} onClickChangeStatus={cDispatch}/>}
//       {status === "action" && <>
//       <Progress numQuestions={numQuestions} index={index} points={points} totalPoints={totalPoints}/>
//       <Question questions={questions[index]} dispatch={cDispatch} answer={answer} />
//       <footer className='footer'>
//         <Timer seconds={seconds} dispatch={cDispatch}/>
//         <NextBtn dispatch={dispatch} answer={answer} index={index} numQuestions={numQuestions}/>
//       </footer>
//       </>}
//       {status === "finish" && <>
//       <Finished points={points} totalPoints={totalPoints} highScore={highScore}/>
//       <NextBtn dispatch={dispatch} answer={answer} index={index} numQuestions={numQuestions} status={status}/>
//       </>}
//     </Main>
//   </>

// }

// export default App;
