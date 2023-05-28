const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=017cfceca33a4dbc976fca7f6e1763cd&query=" + latitude + "," + longitude + "&units=m"
    
    request({url, json: true,}, (error, {body}) => {
        if(error){
            callback("Unable to connect to forecast service", undefined)
        }
        else if(body.error){
            callback("Unable to find location", undefined)
        }
        else{
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
            })
        }
    })
}

module.exports = forecast