const likeModel = require(process.cwd() + '/models/index').Like

async function index(postID) {
    return likeModel.findAndCountAll({ where: { post_id: postID } })
}

async function findByUserIDAndPostID(userID, postID) {
    return likeModel.findOne(
        {
            where: {
                user_id: userID,
                post_id: postID
            }
        }
    )
}

async function findByPostID(post_id) {
    return likeModel.findAll({ where: { post_id: post_id } })
}

async function create(newLike) {
    return likeModel.create(newLike)
}

async function destroy(userID, postID) {
    return likeModel.destroy(
        {
            where: {
                user_id: userID,
                post_id: postID
            }
        }
    )
}

module.exports = {
    getLikesByPostID: index,
    getLikeByUserIDAndPostID: findByUserIDAndPostID,
    createLike: create,
    deleteLike: destroy
}
