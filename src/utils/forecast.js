const request = require('request')




const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=b25ae876c16334e45c1573438c593918&query=' + latitude + ',' + longitude + '&units=f'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]+ '. It is currently ' +  body.current.temperature + ' degrees out. There is a ' + body.current.precip + '% chance of rain. The humidity is ' + body.current.humidity + '%.'
            )
            
        }
    })
}

module.exports = forecast