const express = require('express');
const router = express.Router();
const fs = require('fs');

//course end points

router.get('/course', (req, res) => {
    const courses = JSON.parse(fs.readFileSync('./course.json'));
    res.send(courses);
});

router.get('/course/:id', (req, res) => {
    const courses = JSON.parse(fs.readFileSync('./course.json'));
    const course = courses.find(c=>c.id == parseInt(req.params.id));
    if(!course)
        res.send("No course with " + req.params.id);
    res.send(course);
});

router.post('/course', (req, res) => {
    const courses = JSON.parse(fs.readFileSync('./course.json'));
    const nextID = courses[courses.length-1].id+1;
    console.log(nextID);
    courses.push({"id":nextID, "name":req.body.name})
    res.send("course data inserted");
});

router.put('/course', (req, res) => {
    res.send("course data updated");
});

router.delete('/course', (req, res) => {
    res.send("course data deleted");
});

module.exports = router;