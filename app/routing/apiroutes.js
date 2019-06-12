var friendData = require("../data/friends");


module.exports = function(app){
    app.get("/api/friends", function(req, res){
       res.json(friendData)
    });

    // use this route to aquire the info sent from the front end, parses them and adds the to an array//
    // but, how??//
    app.post("/api/friends", function(req, res){
        
    });
}
// afterwards, create a loop the goes through the array or scores recieved, adds them up, and compares to the other arrays already there//
// But, how?



///finally, deploy to heroku//