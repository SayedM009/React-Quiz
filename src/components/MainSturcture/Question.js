export default function Question({questions}) {
    return <section className="questions">
        <h3>{questions.question}</h3>
        <div className="options">
        {questions.options.map(option => <Option option={option} key={questions.id} />)}
        </div>
    </section>
}

function Option({option}) {
    return <button className="btn btn-option">{option}</button>
}