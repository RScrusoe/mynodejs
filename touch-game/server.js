const express = require("express");
const Datastore = require("nedb");
const app = express();
const database = new Datastore('database.db');
let order;
database.loadDatabase();
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));


app.listen(3000, () => {
    console.log("Listening...")
});

app.post('/submitscore', (req, res) => {
    console.log("I got req..");
    console.log(req.body);
    database.insert(req.body);
    const fn1 = async () => {
        database.find({}, (err, data) => {
            const x = data.sort((a, b) => {
                return b.score - a.score;
            });
            order = x.splice(0, 5);
            res.json({
                highscore: order
            });
            // console.log(x)
        });
    };

    fn1()
        .then(() => {
            console.log("order");
        });

    // res.json({
    //     status: "Success",
    //     hs: "order",
    //     score: req.body.score,
    //     name: req.body.name,
    //     timestamp: Date.now()
    // });
});