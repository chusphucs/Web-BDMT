const express = require('express')
const likeApiController = require('../controllers/api/like.controller')
const checkAuth = require("../middleware/check-auth.js");

const router = express.Router();

router.get('/post/:id', likeApiController.getListLikesByPostID)
router.post('/post/:id', checkAuth, likeApiController.handleLike)

module.exports = router
