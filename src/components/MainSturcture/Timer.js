import { useEffect } from "react"
export default function Timer({seconds, dispatch}) {
    const mints = Math.floor(seconds / 60);
    const secs = seconds % 60
    useEffect(function() {
        const timer = setInterval(() => {
            dispatch({type:"tick"})
        }, 1000)
        return function() {
            clearInterval(timer)
        }
    })
    return <span className="btn" style={{cursor:"none"}}>{mints < 10 ? `0${mints}` : mints} : {secs < 10 ? `0${secs}` : `${secs}`}</span>
}