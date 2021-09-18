/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
const express = require('express');

const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const Contact = require('./models/contact');

app.use(cors()); 
app.use(express.static('build'));
app.use(express.json());

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  }

  next(error);
};

const requestLogger = (req, res, next) => {
  console.log('Method:', req.method);
  console.log('Path:  ', req.path);
  console.log('Body:  ', req.body);
  console.log('---');
  next();
};

app.use(requestLogger);

morgan.token('data', (req, res) => JSON.stringify(req.body));

app.use(morgan('tiny'));

app.get('/api/persons', (req, res) => {
  Contact.find({}).then((contacts) => {
    res.json(contacts);
  });
});

app.get('/api/info', (req, res) => {
  const numberOfContacts = Contact.length;
  res.send(
    `<p>Parade State has info for ${numberOfContacts} names.</p>
      <p>${new Date()}</p>`,
  );
});

app.get('/api/persons/:id', (req, res, next) => {
  Contact.findById(req.params.id)
    .then((contact) => {
      if (Contact) {
        res.json(contact);
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => next(error));
});

app.delete('/api/persons/:id', (req, res, next) => {
  Contact.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => next(error));
});

const generateID = Math.ceil(Math.random() * 100);

app.post('/api/persons/', (req, res, next) => {
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
      res.json(savedContact);
    })
    .catch((error) => next(error));
});

app.put('/api/persons/:id', (req, res, next) => {
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
      res.json(updatedContact);
    })
    .catch((error) => next(error));
});

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' });
};

app.use(unknownEndpoint);

app.use(errorHandler);

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
