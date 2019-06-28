let w = 600;
let h = 600;
let b1;
let b2;
let score = 0;
let scoredom;
let name;
let entry;
let resdata;

function setup() {
    noCanvas();
    console.log("hello");
    const vid = createCapture(VIDEO);
    vid.size(320, 240);
    b1 = createButton('submit');
    b2 = createButton('click me');
    entry = createInput("Enter Name...");
    scoredom = createElement('h1', score);
    b2.mouseClicked(() => {
        score += 1;
        scoredom.html(score);
    });
    b1.mouseClicked(() => {
        if (entry.value() == "Enter Name...") {
            alert("Enter your name");
        }

        vid.loadPixels();
        const img64 = vid.canvas.toDataURL();
        data = {
            score: score,
            name: entry.value(),
            timestamp: Date.now(),
            img: img64
        };
        const opts = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)

        };
        const submit = async () => {
            const y = await fetch('/submitscore', opts);
            const jsdata = await y.json();
            resdata = jsdata;
            // console.log(jsdata);
        };
        submit()
            .then(() => {
                console.log(resdata);
                for (let item of resdata.highscore) {

                    let name = createSpan(item.name + ": ");
                    let score = createSpan(item.score + " ");
                    let image = createImg(item.img);
                    image.size(100, 100);
                    createElement('br');
                    createElement('br');
                }

            });
        score = 0;
        scoredom.html(score);
    });


    // b2.position(50, 50);



    // b1.mouseClicked(() => {
    //     if ('geolocation' in navigator) {
    //         // console.log(navigator);
    //         navigator.geolocation.getCurrentPosition(async pos => {
    //             let coords = {
    //                 "lat": pos.coords.latitude,
    //                 "lon": pos.coords.longitude,
    //                 "timestamp": pos.timestamp
    //             };

    //             const options = {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 },
    //                 body: JSON.stringify(coords)
    //             };
    //             // THis sends battery info, but due to getBattery returns, promise:
    //             // I have to send it as another POST request, not able to send in 1 POST req
    //             // navigator.getBattery().then(battery => {
    //             //     // coords["battery"] = (battery.level * 100 + "%");
    //             //     let bat = { "bat": (battery.level * 100 + "%") };
    //             //     const bat_option = {
    //             //         method: "POST",
    //             //         headers: {
    //             //             "Content-Type": "application/json"
    //             //         },
    //             //         body: JSON.stringify(bat)
    //             //     };
    //             //     fetch('/api', bat_option);
    //             // });

    //             console.log(coords);
    //             const res = await fetch('/api', options);
    //             const data = await res.json();
    //             console.log(data);

    //         });


    //     }

    // });

}