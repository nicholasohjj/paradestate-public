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
    "status": "attached",
    "reason": "MC FROM XXXXXX TO XXXXXX",
    "group": "HQ",
    "id": 1
  },
  {
    "id": 2,
    "name": "CPT CHAN MALI CHAN",
    "status": "mc",
    "reason": "MC FROM XXXXXX TO XXXXXX",
    "group": "HQ",
    "excuse": "EXCUSE PT"
  },
  {
    "id": 3,
    "name": "LTA SAM LAM",
    "status": "present",
    "reason": "",
    "group": "HQ",
    "excuse": "EXCUSE PT"
  },
  {
    "id": 4,
    "name": "2LT MARY JANE",
    "status": "present",
    "reason": "",
    "group": "CCP",
    "excuse": "EXCUSE PT"
  },
  {
    "id": 5,
    "name": "3WO DENNY",
    "status": "present",
    "reason": "",
    "group": "CCP",
    "excuse": "EXCUSE PT"
  },
  {
    "id": 6,
    "name": "SSG GEORGE",
    "status": "leave",
    "reason": "COMPASSIONATE LEAVE",
    "group": "CSP",
    "excuse": "EXCUSE PT"
  },
  {
    "id": 7,
    "name": "1SG KENDRICK",
    "status": "others",
    "reason": "OVERSEAS",
    "group": "CSP",
    "excuse": "EXCUSE PT"
  },
  {
    "id": 8,
    "name": "1SG XIAO MING",
    "status": "others",
    "reason": "NIGHTS OUT",
    "group": "CSP",
    "excuse": "EXCUSE PT"
  },
  {
    "id": 9,
    "name": "PTE NICK",
    "status": "present",
    "group": "CSP",
    "excuse": "EXCUSE PT"
  },
  {
    "name": "FSDFDS",
    "status": "mc",
    "id": 11,
    "group": "ccp",
    "excuse": "EXCUSE PT"
  },
  {
    "name": "ASDSA",
    "status": "present",
    "id": 12
  },
  {
    "name": "DSDS",
    "status": "ma",
    "group": "CCP",
    "id": 13
  } 
    
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