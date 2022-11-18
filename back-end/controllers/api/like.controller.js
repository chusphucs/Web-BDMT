const {getLikeByUserIDAndPostID, createLike, deleteLike, getLikesByPostID} = require("../CRUD/like");

const handleLike = async (request, response) => {
    try {
        isLiked = await getLikeByUserIDAndPostID(request.user.user_id, request.params.id)
        if (!isLiked) {
            let newLike = {
                user_id: request.user.user_id,
                post_id: request.params.id
            }
            await createLike(newLike)
            return response.status(201).json({message: "liked"})
        } else {
            await deleteLike(request.user.user_id, request.params.id)
            return response.status(201).json({message: "unliked"})
        }

    } catch (err) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: err.toString(),
        })
    }
}

const getListLikesByPostID = async (request, response) => {
    try {
        const likes = await getLikesByPostID(request.params.id)
        return response.status(200).json(likes)
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

module.exports = {
    handleLike: handleLike,
    getListLikesByPostID: getListLikesByPostID
}