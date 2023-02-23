import axios from 'axios'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function useApi (urls = '') {
    const { token } = useSelector((state) => state.users)

    const [request, setRequest] = useState({
        baseURL: process.env.REACT_APP_BASE_URL || urls,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })

    const setConfig = () => {
        setRequest({
            ...request,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
    }

    useEffect(() => {
        setConfig()
    }, [])

    return { request : axios.create(request)}
}

export default useApi