const express = require("express");
const Datastore = require("nedb");
const app = express();
const database = new Datastore('database.db');
database.loadDatabase();
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));


app.listen(3000, () => {
    console.log("Listening...")
})

app.post('/api', (req, res) => {
    console.log("I got req..");
    console.log(req.body);
    database.insert(req.body);
    res.json({
        status: "Success",
        lat: req.body.lat,
        lon: req.body.lon,
        timestamp: Date.now()
    });
})