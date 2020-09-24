const request = require('request');
const arg1 = process.argv.slice(2)[0]
if (arg1 ===  undefined) {
  console.log("Breed Not Found!");
}
// const arg2 = process.argv.slice(2)[1]
request("https://api.thecatapi.com/v1/breeds",(error, response, body) => {
  if(error) throw ('Whoops :)')
  const data = JSON.parse(body);
  for (let breed of data) {
    if (breed.name === arg1) {
      console.log(breed.description)
    }
  }
}) 
