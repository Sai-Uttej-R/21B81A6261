const express = require('express');
const router = express.Router();

//student end point

router.get('/student', (req, res) => {
    res.send('This is student data');
});

router.get('/student:id', (req, res) => {
    res.send('This is student data with id = ' + req.params.id);
});

router.post('/student', (req, res) => {
    res.send("student data inserted");
});

router.put('/student', (req, res) => {
    res.send("student data updated");
});

router.delete('/student', (req, res) => {
    res.send("student data deleted");
});

module.exports = router