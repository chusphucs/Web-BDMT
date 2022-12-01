import axiosClient from './axiosClient'

const userApi  = {
    getPosts: () => {
        const url = `api/posts/`
        return axiosClient.get(url)
    },
}

export default userApi 
