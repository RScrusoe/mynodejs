const express = require("express");
const Datastore = require("nedb");
const fetch = require("node-fetch");
const app = express();
const database = new Datastore('database.db');
database.loadDatabase();
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));


app.listen(3000, () => {
    console.log("Listening...")
})

app.get('/weather/:latlon', async (req, res) => {
    console.log("I got req..");
    const latlon = req.params.latlon.split(',');
    const lat = latlon[0];
    const lon = latlon[1];
    // console.log(req.body);
    database.insert(req.body);
    const api_url = `https://api.darksky.net/forecast/ee3f8c0a650780615ef27b919cc60639/${lat},${lon}?units=si`;
    const fetch_res = await fetch(api_url);
    const json = await fetch_res.json();
    // console.log(json);
    res.json(json);
    // res.json({
    //     status: "Success",
    //     lat: req.body.lat,
    //     lon: req.body.lon,
    //     json: json
    // });
});