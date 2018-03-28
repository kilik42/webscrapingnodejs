//easy to manipulate ajax calls with this -cool!!!
const rp = require('request-promise');

//allows me to manipulate dom similar to jquery in node
const cheerio = require('cheerio');

//makes it easy to display content in table
const Table = require('cli-table');

let users = [];


const options = {
  url: `https://forum.freecodecamp.org/directory_items?period=weekly&order=likes_received&_=1522206405687`,
  json:true
}
rp(options)
    .then((data)=>{

      let userData = [];
      for (let user of data.directory_items){
          userData.push({name: user.user.username, likes_received:user.likes_received});
      }
      process.stdout.write('loading')
      getChallengesCompletedAndPushToUserArray(userData);
    })
    .catch((err){
      console.log(err);
    });

function getChallengesCompletedAndPushToUserArray(userData){

}

// 12:48
