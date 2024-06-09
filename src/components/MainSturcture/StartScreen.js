import { useState } from "react";
import { useQuestion } from "../../context/QuestionContext";
export default function StartScreens() {
  const { numQuestions, cDispatch } = useQuestion();
  const [isOpen, setIsOpen] = useState(true);

  // Close Start Screen Component & Change Status
  function handleClicking() {
    setIsOpen(false);
    setTimeout(() => {
      cDispatch({ type: "changeStatus" });
    }, 500);
  }

  return (
    <div className={`start-screen ${isOpen || "isClosed"}`}>
      <h2 style={{ fontSize: "40px" }}>Welcome to The React Quiz!</h2>
      <h3 style={{ fontSize: "20px" }}>
        {" "}
        {numQuestions} questions to test your React mastery
      </h3>
      <button
        className="btn"
        style={{ marginTop: "1rem" }}
        onClick={handleClicking}
      >
        Let's Start
      </button>
    </div>
  );
}
