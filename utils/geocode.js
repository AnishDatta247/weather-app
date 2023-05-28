const request = require("request");

const geocode = (address, callback) => {
  const url =
    "http://api.positionstack.com/v1/forward?access_key=335196789cbf3c34009cbe22e098a397&query=" +
    encodeURIComponent(address);

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (body.error || body.data.length === 0) {
      callback("Unable to find locations. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body.data[0].latitude,
        longitude: body.data[0].longitude,
        location: body.data[0].label,
      });
    }
  });
};

module.exports = geocode