const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error,response, body) => {
    //refer to error in the callback funtion
    if (error) {
      callback(error);
    }
    const data = JSON.parse(body);
    
    if (data[0] === undefined) {
      callback(error, null);
   
    } else {
       callback(error, data[0].description);
    }
  });
};



module.exports = { fetchBreedDescription };

