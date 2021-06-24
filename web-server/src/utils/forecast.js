const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=206ad9ae835d153e71a8599b8009a7fe&query=' + latitude + ',' + longtitude + '&units=f'
    request({ url: url, json: true }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)

        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently' +  body.current.temperature + 'degress out.')

        }
    })


}

module.exports = forecast 