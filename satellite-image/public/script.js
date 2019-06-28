let w = 600;
let h = 600;

function setup() {
    noCanvas();
    const res = await fetch('/api');
    const json = await res.json();
    console.log(json);
    // if ('geolocation' in navigator) {
    //     console.log(navigator);
    //     navigator.geolocation.getCurrentPosition(async pos => {
    //         let coords = {
    //             "lat": pos.coords.latitude,
    //             "lon": pos.coords.longitude,
    //             "timestamp": pos.timestamp
    //         };
    //         // const options = {
    //         //     method: "POST",
    //         //     headers: {
    //         //         "Content-Type": "application/json"
    //         //     },
    //         //     body: JSON.stringify(coords)
    //         // };
    //         console.log(coords);
    //         const api_url = `weather/${coords.lat},${coords.lon}`;
    //         // const api_url = `weather/37.8267,85.4233`;
    //         // const api_url = '/weather';
    //         const res = await fetch(api_url);
    //         const json = await res.json();
    //         console.log(json);
    //     });
    // }
    // fmap();
}

async function fmap() {
    let url = `https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
        & markers=color: blue% 7Clabel: S % 7C40.702147, -74.015794 & markers=color: green % 7Clabel: G % 7C40.711614, -74.012318
            & markers=color: red % 7Clabel: C % 7C40.718217, -73.998284
                & key=AIzaSyDwAniwB3Z2ZLxiYHSSsOh7fDqZLTp3qOw`;
    const map = await fetch(url);
    console.log(map);
}