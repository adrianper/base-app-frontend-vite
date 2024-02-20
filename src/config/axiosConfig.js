import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_API_ENDPOINT

if (localStorage.getItem('token'))
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`