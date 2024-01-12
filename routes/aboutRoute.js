
const router = require('express').Router();




// get about user
router.get('/about', (reg, res) => {
    res.send('Hello from about router')
})

// add about user
router.post('/about', (reg, res) => {
    res.send('Hello from post')
})


// specific user by id
router.post('/about/:id', (reg, res) => {
    res.send('Hello from specific post')
})

// update specific user by id
router.put('/about/update/:id', (reg, res) => {
    res.send('Hello from updated post')
})

// delete specific user by id
router.delete('/about/:id', (reg, res) => {
    res.send('Hello delete')
})

module.exports = Router;