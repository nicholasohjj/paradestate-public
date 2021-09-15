const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const contactSchema = new mongoose.Schema({
    id: Number,
    name: {
      type: String,
      minlength: 5,
      required:true
    },
    status: {
      type: String,
      required:true
    },
    reason: {
      type: String,
      minlength: 5,
      required:true
    },
    group: {
      type: String,
      required:true
    },
    excuse: {
      type: String,
      minlength: 5,
      required:true
    },
    role: {
      type: String,
      required:true
    },
  })

  contactSchema.set('toJSON', {
  transform: (document, returnedObject) => { 
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Contact', contactSchema)