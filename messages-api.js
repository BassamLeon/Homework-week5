const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
​const loggingMiddleWare = (req, res, next) => {
    console.log(`Request received at ${new Date()}`)
    next()
}
​
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
​
app.use(bodyParser())
app.use(loggingMiddleWare)

app.post('/messages', (req, res, next) => {
    console.log(req.body)
    res.json({
        message: "Message received loud and clear",
    })
})
.catch(error => {
    next(error)
})
app.post('/messages', (request, response, next) => {
    Message
        .create({ body: request.body.message, line_count: 1 })
        .then(message => {
            console.log(message.dataValues)
            response.status("Bad Request").json(message)
        })
        .catch(error => {
            next(error)
        })
})
​
