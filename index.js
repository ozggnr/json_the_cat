const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv.slice(2)[0];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else if (desc === null) {
    console.log("invalid breed name")
  }
  else {
    console.log(desc);
  }
});


