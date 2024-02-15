import logo from '../../logo.svg';
import "../../App.css"
export default function Header() {
    return <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
            THE REACT QUIZ
            </h1>
        </header>
    </div>
}