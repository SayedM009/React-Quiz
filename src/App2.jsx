import "./App.css";
import Header from "./components/MainSturcture/Header";
import Main from "./components/MainSturcture/Main";
import Loading from "./components/Messages/Loading";
import Error from "./components/Messages/Error";
import StartScreen from "./components/MainSturcture/StartScreen";
import Question from "./components/MainSturcture/Question";
import Progress from "./components/MainSturcture/Progress";
import NextBtn from "./components/MainSturcture/NextBtn";
import Finished from "./components/MainSturcture/Finished";
import Timer from "./components/MainSturcture/Timer";
import { useQuestion } from "./context/QuestionContext";

function App2() {
  console.log(useQuestion());
  const { status } = useQuestion();
  return (
    <>
      <Header />
      <Main>
        {status === "loading" && <Loading />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "action" && (
          <>
            <Progress />
            <Question />
            <footer className="footer">
              <Timer />
              <NextBtn />
            </footer>
          </>
        )}
        {status === "finish" && (
          <>
            <Finished />
            <NextBtn />
          </>
        )}
      </Main>
    </>
  );
}

export default App2;
