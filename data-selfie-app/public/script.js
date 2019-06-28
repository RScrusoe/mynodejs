let w = 600;
let h = 600;
let b1;
function setup() {
    noCanvas();
    console.log("hello");
    b1 = createButton('submit');
    b1.mouseClicked(() => {
        if ('geolocation' in navigator) {
            // console.log(navigator);
            navigator.geolocation.getCurrentPosition(async pos => {
                let coords = {
                    "lat": pos.coords.latitude,
                    "lon": pos.coords.longitude,
                    "timestamp": pos.timestamp
                };

                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(coords)
                };
                // THis sends battery info, but due to getBattery returns, promise:
                // I have to send it as another POST request, not able to send in 1 POST req
                // navigator.getBattery().then(battery => {
                //     // coords["battery"] = (battery.level * 100 + "%");
                //     let bat = { "bat": (battery.level * 100 + "%") };
                //     const bat_option = {
                //         method: "POST",
                //         headers: {
                //             "Content-Type": "application/json"
                //         },
                //         body: JSON.stringify(bat)
                //     };
                //     fetch('/api', bat_option);
                // });

                console.log(coords);
                const res = await fetch('/api', options);
                const data = await res.json();
                console.log(data);

            });


        }

    });

}