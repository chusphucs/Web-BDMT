import axiosClient from './axiosClient'

const postApi  = {
    getAll: () => {
        const url = `/api/posts`
        return axiosClient.get(url)
    },
    createNew: (credentials) => {
        const url = `/api/posts/`
        return axiosClient.post(url,credentials)
    },
}

export default postApi 
