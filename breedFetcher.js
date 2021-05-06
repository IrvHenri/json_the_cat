const request = require("request");
let domain = `https://api.thecatapi.com/v1/breeds/search?q=`;

const fetchBreedDescription = function (breedName, callback) {
  request(`${domain}${breedName}`, (error, response, body) => {
    if (error) {
      callback(error);
    }

    let data = JSON.parse(body);
    if (body.length === 2) {
      callback(error, null);
    } else {
      for (let result of data) {
        if (result.name.toLowerCase() !== breedName.toLowerCase()) {
          callback(error);
        } else {
          callback(null, `${result.description}`);
        }
      }
    }
  });
};

module.exports = { fetchBreedDescription };
