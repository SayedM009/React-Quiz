export default function NextBtn({dispatch, answer, index, numQuestions, status}) {
    const condition = answer !== null
    if (index < numQuestions - 1 && status !== "finish") {
        return <button 
        className={`btn ${!condition && "halfOpacity"}`} 
        disabled={!condition}
        onClick={() => dispatch({type:"newQuestion"})}>Next</button>
    }
    if (status === "finish") {
        return <button 
        style={{display:"block", marginLeft:"640px"}} 
        className={`btn`} 
        onClick={() => dispatch({type:"reset"})}>Restart Quiz</button>
    }
    if (index === numQuestions - 1) {
        return <button 
        style={{display:"block", marginLeft:"640px"}} 
        className={`btn ${!condition && "halfOpacity"}`} 
        disabled={!condition}
        onClick={() => dispatch({type:"finished"})}>Finish</button>
    }
    
}