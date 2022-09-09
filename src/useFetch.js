//Custom Hook

import { useState, useEffect } from 'react'

//use fake json REST api
//when App is rendering, useEffect hook to fetch data
// url: 'https://jsonplaceholder.typicode.com/users'


const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIspPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok)
                        throw Error(`could not fetch data from resource`)
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setIspPending(false)
                    setError(null)
                })
                .catch(err => {
                    setIspPending(false)
                    setError(err.message)
                })
        }, 2000)
    }, [url])

    return { data, isPending, error }
}

export default useFetch;