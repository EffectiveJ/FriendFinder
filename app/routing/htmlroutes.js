const path = require('path');


function handleRequest(req, res) {
    var path = req.url;

    switch (path) {
        case "/survey":
            return renderSurvey(req, res);
        default:
            return renderHome(req, res);
    }

    function renderHome(req, res) {
        app.get("/home", function (req, res) {
            res.sendFile(path.join(__dirname, "../public/home.html"));
        });
    }
    function renderSurvey(req, res) {
        app.get("/survey", function (req, res) {
            res.sendFile(path.join(__dirname, "../public/survey.html"));
        });
    }

}
