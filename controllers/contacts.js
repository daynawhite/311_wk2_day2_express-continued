const contacts = require('../data/contacts');

const list = (req, res) => {
    res.json(contacts)
}

const show = (req, res) => {
    const contact = contacts.find(contact => contact._id == req.params.id)
    res.status(200).json(contact)
}

const create = (req, res) => {
    const newContact = {
        ...req.body,
        _id: contacts.length + 1
    }
    contacts.push(newContact)
    res.json(newContact)
}

module.exports = {list, show, create}