const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  id: Number,
  name: {
    type: String,
    minlength: 5,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  excuse: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

contactSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Contact', contactSchema);
