import { useState } from "react"

const useError  = (inputValue) => {
    const [error, setError] = useState()

    const getError = () => {
        setError(inputValue)
    }
    return [ error, getError ]
}

export default useError
