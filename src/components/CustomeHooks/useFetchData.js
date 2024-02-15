import { useEffect } from "react"
export default function useFetchData(dispatch) {
    useEffect(function() {
        fetch("http://localhost:9000/questions")
        .then(res => res.json(), rej => new Error("Failed To Fetch Data Try Again"))
        .then(data => dispatch({type:"dataRecieved", peyload:data}), rej => new Error("Data Not Found"))
        .catch(err => {
            dispatch({type:"dataRejected", peyload:[]})
            console.error(err.meesage)
        })
        }, [dispatch])

    return [dispatch]
}