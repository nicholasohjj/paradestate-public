const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const status = process.argv[4]

const url =

  `mongodb+srv://SIG11C4I:${password}@sigparadestate.iquor.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true })

const contactSchema = new mongoose.Schema({
  id: Number,
  name: String,
  status: String
})

const Contact = mongoose.model('Contact', contactSchema)

const contact = new Contact({
  id: Math.ceil(Math.random()*100),
  name: name,
  status: status
})

if (!name && !status) {
  console.log('Personnel:')
  Contact.find({}).then(result=> {
    result.forEach(contact => {
      console.log(contact.name, contact.status)
    })
    mongoose.connection.close()
  })
} else {
  contact.save().then(result=> {
    console.log(`added ${name} status ${status} to the Phonebook.`)
    mongoose.connection.close()
  })
}
