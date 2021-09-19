/* eslint-disable no-unused-vars */
const contactsRouter = require('express').Router();
const Contact = require('../models/contact');

contactsRouter.get('/', (req, res) => {
  Contact.find({}).then((contacts) => {
    res.json(contacts.map((contact) => contact.toJSON()));
  });
});

contactsRouter.get('/:id', (req, res, next) => {
  Contact.findById(req.params.id)
    .then((contact) => {
      if (Contact) {
        res.json(contact.toJSON());
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => next(error));
});

contactsRouter.delete('/:id', (req, res, next) => {
  Contact.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => next(error));
});

const generateID = Math.ceil(Math.random() * 100);

contactsRouter.post('/', (req, res, next) => {
  const { body } = req;
  if (!body.content === undefined) {
    return res.status(400).send('Error: content missing');
  }

  const contact = new Contact({
    id: generateID,
    name: body.name,
    status: body.status,
    reason: body.reason,
    group: body.group,
    excuse: body.excuse,
    role: body.role,
  });

  contact.save()
    .then((savedContact) => {
      res.json(savedContact.toJSON());
    })
    .catch((error) => next(error));
});

contactsRouter.put('/:id', (req, res, next) => {
  const { body } = req;

  const contact = {
    id: generateID,
    name: body.name,
    status: body.status,
    reason: body.reason,
    group: body.group,
    excuse: body.excuse,
    role: body.role,
  };

  Contact.findByIdAndUpdate(req.params.id, contact, { new: true })
    .then((updatedContact) => {
      res.json(updatedContact.toJSON());
    })
    .catch((error) => next(error));
});

module.exports = contactsRouter;
