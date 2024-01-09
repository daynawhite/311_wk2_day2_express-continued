const comments = require('../data/comments');

const list = (req, res) => {
    res.json(comments)
}

const show = (req, res) => {
    const comment = comments.find(comment => comment._id == req.params.id)
    res.status(200).json(comment)
}

const create = (req, res) => {
    const newComment = {
        ...req.body,
        _id: comments.length + 1
    }
    comments.push(newComment)
    res.json(newComment)
}

module.exports = {list, show, create}