const express = require('express');
const app= express();
const port = 8082;
const courseRoutes = require('./routes/course');
const studentRoutes = require('./routes/student');

app.use('/', courseRoutes);
app.use('/', studentRoutes);

app.get('/', (req, res) => {
    res.send("<h1>This is home page</h1>")
});

app.listen(port, () => {
    console.log(`Server listeing at ${port}`);
});