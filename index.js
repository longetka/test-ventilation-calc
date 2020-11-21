const express = require('express')
const path = require('path')
const app = express()

const PORT = 3000 || process.env.PORT

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.static(path.join(__dirname, '/views')))


app.get('/', (req, res) => {
    res.status(200).send('index.html')
})

app.post('/handler', (req, res) => {
    res.send(JSON.stringify(req.body))
})

app.listen(PORT, () => console.log(`Server listen on http://localhost:${PORT}`))
