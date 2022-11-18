const {addNewComment, getListCommentByPostID} = require('../CRUD/comment')

const createComment = async (request, response) => {
    try {
        const newComment = {
            user_id: request.user.user_id,
            post_id: request.body.post_id,
            content: request.body.content,
        }
        await addNewComment(newComment)
        return response.status(201).json({
            message: 'Create comment successfully!',
        })
    } catch (err) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

const getListCommentsByPostID = async (request, response) => {
    try {
        const comments = await getListCommentByPostID(request.params.id)
        return response.status(201).json(comments)
    } catch (err) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: err,
        })
    }
}

module.exports = {
    createComment: createComment,
    getListCommentsByPostID: getListCommentsByPostID
}