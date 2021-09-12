const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const status = process.argv[4]
const reason = process.argv[5]
const group = process.argv[6]
const excuse = process.argv[7]
const role = process.argv[8]


const url =

  `mongodb+srv://SIG11C4I:${password}@sigparadestate.iquor.mongodb.net/paradestate-app?retryWrites=true&w=majority`

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true })

const contactSchema = new mongoose.Schema({
  id: Number,
  name: String,
  status: String,
  reason: String,
  group: String,
  excuse: String,
  role: String

})

const Contact = mongoose.model('Contact', contactSchema)

const contact = new Contact({
  id: Math.ceil(Math.random()*100),
  name: name,
  status: status,
  reason: reason,
  group: group,
  excuse: excuse,
  role: role
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
