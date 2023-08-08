import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = (type = 'get', url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })


    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
            hasError: null
        })

        const data  = await axios[type](url)
            .catch((err) => {
                setState({
                    ...state,
                    isLoading: false,
                    hasError: err
                })
            });

        setState({
            data,
            isLoading: false,
            hasError: null
        })
    }

    useEffect(() => {
        getFetch()
    }, [url])

    return {
        data: state.data,
        hasError: state.hasError,
        isLoading: state.isLoading

    }
}
