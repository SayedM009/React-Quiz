import { useState } from "react"
export default function StartScreens({numQuestions, onClickChangeStatus }) {
    const [isOpen, setIsOpen] = useState(true)
    // Close Start Screen Component & Change Status
    function handleClicking() {
        setIsOpen(false)
        setTimeout(() => {
            onClickChangeStatus({type:"changeStatus"})
        }, 500);
    }

    return <div className={`start-screen ${isOpen || "isClosed" }`}>
        <h2 style={{fontSize:"40px"}}>Welcome to The React Quiz!</h2>
        <h3 style={{fontSize:"20px"}}> {numQuestions} questions to test your React mastery</h3>
        <button className="btn" style={{marginTop:"1rem"}} onClick={handleClicking}>Let's Start</button>
    </div>
}