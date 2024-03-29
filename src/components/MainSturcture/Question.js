
export default function Question({questions, dispatch, answer}) {
    return <section className="questions">
        <h3>{questions?.question}</h3>
        <div className="options">
        {questions.options.map((option, i) => 
        <Option 
        option={option}
        dispatch={dispatch}
        index={i}
        answer={answer}
        correctAnswer={questions.correct_answer}
        key={i} />)}
        </div>
        
    </section>
}

function Option({option,dispatch, index, answer, correctAnswer}) {
    const handleDisable = answer !== null
    return <button 
    className={`btn btn-option ${index === answer ? "answer" : ""} ${handleDisable ? index === correctAnswer ? "correct" : "wrong" : ""}`}
    onClick={() => dispatch({type: "newAnswer", peyload:index})}
    disabled={handleDisable}>{option}</button>
    
}