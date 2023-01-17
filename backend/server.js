import express from "express";
import axios from "axios"

const app = express()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

const apiKey = "b3b31825d1f0afdd6f572372a721e033"

app.get("/weather/:location", async (req, res) => {
    try {
        const location = req.params.location;
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);

        const data = {
            location: response.data.name,
            forecast: (response.data.main.temp - 273.15).toFixed(2),
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,  
        } 
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).json("Error occurred!");
    }
});

app.listen(8070, () => {
    console.log("Working!")
});
