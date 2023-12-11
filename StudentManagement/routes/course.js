const express = require('express');
const router = express.Router();
const fs = require('fs');
router.use(express.json())

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
    console.log(nextID + ", " + req.body.name);
    courses.push({id:nextID, name:req.body.name});
    fs.writeFileSync('./course.json', JSON.stringify(courses));
    res.send("course data inserted");
});

router.put('/course', (req, res) => {
    const courses = JSON.parse(fs.readFileSync('./course.json'));
    const id = parseInt(req.body.id);
    const newName = req.body.name;
    let flag = 0;
    for(let i = 0; i < courses.length; i++){
        if(courses[i].id == id) {
            courses[i].name = newName;
            flag = 1;
            break;
        }
    }
    if(flag == 1) {
        fs.writeFileSync('./course.json', JSON.stringify(courses));
        res.send("Course updated");
    }
    res.send("No Course found");
});

router.delete('/course', (req, res) => {
    const courses = JSON.parse(fs.readFileSync('./course.json'));
    const id = parseInt(req.body.id);
    
    // res.send("course data deleted");
});

module.exports = router;