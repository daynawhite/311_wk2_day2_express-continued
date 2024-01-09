const products = require('../data/products');

const list = (req, res) => {
    res.json(products)
}

const show = (req, res) => {
    const comment = products.find(product => product._id == req.params.id)
    res.status(200).json(product)
}

const create = (req, res) => {
    const newProduct = {
        ...req.body,
        _id: products.length + 1
    }
    products.push(newProduct)
    res.json(newProduct)
}

module.exports = {list, show, create}