const request = require("request")

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/search/geocode/v6/forward?q='+ address + '&access_token=pk.eyJ1IjoibmVsdm95IiwiYSI6ImNtYnZwNHFxdjBybHkybHExazZwaGZpNTMifQ.gnwyPAISDy6etPe99MZQ4A&limit=1'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find given locaton. Try with a different search term', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].geometry.coordinates[1],
                longitude: body.features[0].geometry.coordinates[0],
                location: body.features[0].properties.name
            })
        }
    })
}

module.exports = geocode