const commentModel = require(process.cwd() + '/models/index').Comment

async function index() {
    return commentModel.findAndCountAll()
}

async function findByID(id) {
    return commentModel.findOne({ where: { id: id } })
}

async function findByPostID(post_id) {
    return commentModel.findAll({ where: { post_id: post_id } })
}

async function create(newComment) {
    return commentModel.create(newComment)
}

module.exports = {
    getListComment: index,
    getCommentByID: findByID,
    addNewComment: create,
    getListCommentByPostID: findByPostID
}
