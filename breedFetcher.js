let myArgs = process.argv.slice(2);
let breedRequest = myArgs[0];
const request = require("request");
let domain = `https://api.thecatapi.com/v1/breeds/search?q=`;

request(`${domain}${breedRequest}`, (error, response, body) => {
  if (error) {
    console.log(error);
  }

  let data = JSON.parse(body);
  for (let result of data) {
    if (result.name.toLowerCase() !== breedRequest.toLowerCase()) {
      console.log("Sorry Not found!");
    } else {
      console.log(`${result.name}: ${result.description}`);
    }
  }
});
