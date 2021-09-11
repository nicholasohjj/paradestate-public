const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

const url =
  'mongodb+srv://SIG11C4I:popkool09@sigparadestate.iquor.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

  mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true })
    
const noteSchema = new mongoose.Schema({
  id: Number,
  name: String,
  status: String,
})

const Name = mongoose.model('Name', noteSchema)

app.use(cors())
app.use(express.static('build'))
app.use(express.json());
morgan.token('data',(req,res) => {
    return JSON.stringify(req.body)
})

app.use(morgan('tiny'))

let contacts = [
  {
    "name": "CPT LOREM IPSUM",
    "status": "present",
    "reason": "",
    "group": "hq",
    "excuse": "EXCUSE PT",
    "role": "hq",
    "id": 1
  },
  {
    "name": "CPT CHAN MALI CHAN",
    "status": "ma",
    "reason": "",
    "group": "csp",
    "excuse": "EXCUSE PT FROM XXXXXX TO XXXXXX",
    "role": "hq",
    "id": 2
  },
  {
    "name": "LTA SAM LAM",
    "status": "leave",
    "reason": "",
    "group": "csp",
    "excuse": "EXCUSE RMJ FROM XXXXXX TO XXXXXX",
    "role": "hq",
    "id": 3
  },
  {
    "name": "2LT MARY JANE",
    "status": "off",
    "reason": "",
    "group": "csp",
    "excuse": "EXCUSE PT",
    "role": "hq",
    "id": 4
  },
  {
    "name": "3WO DENNY",
    "status": "stayout",
    "reason": "",
    "group": "csp",
    "excuse": "EXCUSE PT",
    "role": "hq",
    "id": 5
  },
  {
    "name": "SSG GEORGE",
    "status": "mc",
    "reason": "",
    "group": "csp",
    "excuse": "EXCUSE PT",
    "role": "sevenspec",
    "id": 6
  },
  {
    "name": "1SG KENDRICK",
    "status": "ma",
    "reason": "",
    "group": "csp",
    "excuse": "EXCUSE HEAVY LOAD FROM XXXXXX TO XXXXXX",
    "role": "sevenspec",
    "id": 7
  },
  {
    "name": "1SG XIAO MING",
    "status": "leave",
    "reason": "TEST",
    "group": "csp",
    "excuse": "EXCUSE PT",
    "role": "is",
    "id": 8
  },
  {
    "name": "PTE NICK",
    "status": "stayout",
    "reason": "",
    "group": "csp",
    "excuse": "EXCUSE PT",
    "role": "ic2",
    "id": 9
  }, 
    
]

app.get('/api/persons', (req, res) => {
    res.json(contacts)
  })


app.get('/api/info',(req, res) => {
    const numberOfContacts = contacts.length
    res.send(
        `<p>Phonebook has info for ${numberOfContacts} numbers.</p>
        <p>${new Date()}</p>`
        )
    }
)

app.get('/api/persons/:id',(req, res) => {
    const id = Number(req.params.id)
    const contact = contacts.find(contact=>contact.id===id)
    
    if (contact) {
        res.send(contact)
    } else {
        res.send("Contact does not exist")
        res.statusMessage = "Contact does not exist";
        res.status(404).end
    }}
    )

app.delete('/api/persons/:id',(req, res) => {
    const id = Number(req.params.id)
    contact = contacts.find(contact=>contact.id===id)
    contacts = contacts.filter(contact=>contact.id !==id)

    if (contact) {
        res.status(204).end()
    } else {
        res.statusMessage = "Contact does not exist";
        res.status(404).end()
    }}
    )

app.post('/api/persons/',(req, res) => {

    const body = req.body
    const generateID = Math.ceil(Math.random()*100)
    
    if (!body.name || !body.status) {
        return res.status(400).send(`Error: content missing`)
      }
    
    if (contacts.map(contact=>contact.name.toLowerCase()).includes(body.name.toLowerCase())) {
        return res.status(409).send(`Error: Name already exists`)
    }

    const newContact = {
        "id": generateID, 
        "name": body.name,
        "status": body.status
    }

    contacts = contacts.concat(newContact)
    res.json(contacts)
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

})

const PORT = process.env.PORT || 3001;
app.listen(PORT,()=> {
    console.log(`Server running on port ${PORT}`)
})