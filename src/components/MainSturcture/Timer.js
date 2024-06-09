import { useEffect } from "react";
import { useQuestion } from "../../context/QuestionContext";
export default function Timer() {
  const { seconds, cDispatch } = useQuestion();
  const mints = Math.floor(seconds / 60);
  const secs = seconds % 60;
  useEffect(function () {
    const timer = setInterval(() => {
      cDispatch({ type: "tick" });
    }, 1000);
    return function () {
      clearInterval(timer);
    };
  });
  return (
    <span className="btn" style={{ cursor: "none" }}>
      {mints < 10 ? `0${mints}` : mints} : {secs < 10 ? `0${secs}` : `${secs}`}
    </span>
  );
}
