const {fetchBreedDescription} = require('./breedFetcher');
let myArgs = process.argv.slice(2);
let breedRequest = myArgs[0];

fetchBreedDescription(breedRequest, (error,desc) =>{
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});