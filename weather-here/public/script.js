let w = 600;
let h = 600;

function setup() {
    noCanvas();
    if ('geolocation' in navigator) {
        console.log(navigator);
        navigator.geolocation.getCurrentPosition(async pos => {
            let coords = {
                "lat": pos.coords.latitude,
                "lon": pos.coords.longitude,
                "timestamp": pos.timestamp
            };
            // const options = {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(coords)
            // };
            console.log(coords);
            const api_url = `weather/${coords.lat},${coords.lon}`;
            // const api_url = `weather/37.8267,85.4233`;
            // const api_url = '/weather';
            const res = await fetch(api_url);
            const json = await res.json();
            console.log(json);
        });
    }
}