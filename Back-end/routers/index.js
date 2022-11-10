const auth = require('./auth.route')
const post = require('./post.route')
const user = require('./user.route')
const store = require('./store.route')

module.exports = {
    auth: auth,
    post: post,
    user: user,
    store: store
}
