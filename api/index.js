const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
let movies = require('./SelectedMovies.json');
const http = require('http');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization,access-token,client,expiry,token-type,uid');
    res.setHeader('Access-Control-Expose-Headers', 'X-Requested-With, Content-Type, access-token,client,expiry,token-type,uid');

    next();
});

var router = express.Router();

router.route('/addComments').post(function (req, res) {

    movies.map(v => {
        if (v.id == req.body.id) {
            console.log(req.body);
            v.comments = req.body.comments;

            return v;
        }

    });

    fs.writeFile('./SelectedMovies.json', JSON.stringify(movies), (err) => {
        if (err) {
            console.log(err);
        }
    })

    res.json('Comments Added Successfully');
})

router.route('/getMovies').get(function (req, res) {
    res.json(movies);
});


router.route('/getMovieById').get(function (req, res) {
    console.log(req.query);
    let data = movies.filter(v => {
        return v.id == req.query.id;
    })
    res.json(data);
})


router.route('/createMovie').post(function (req, res) {
    movies.push(req.body);
    fs.appendFile('./SelectedMovies.json', JSON.stringify(movies), (err) => {
        if (err) {
            console.log(err);
        }
    });
    res.json('Movie Created Successfully')
})

router.route('/updateMovie').post(function (req, res) {
    movies.map(v => {
        if (v.id == req.body.id) {
            let key = Object.keys(v);
            for (let i = 0; i < key.length; i++) {
                v[key[i]] = req.body[key[i]]
            }
            return v
        }
    })

    fs.writeFile('./SelectedMovies.json', JSON.stringify(movies), (err) => {
        if (err) {
            console.log(err);
        }
    })

    res.json('Movie Updated Successfully');
})

router.route('/deleteMovie').post(function (req, res) {

    movies.forEach((v,i) => {

        if (v.id == req.body.id) {
            delete movies[i];
        }

    });

    console.log(movies[0]);

    fs.writeFile('./SelectedMovies.json', JSON.stringify(movies), (err) => {
        if (err) {
            console.log(err);
        }
    })

    res.json('Movie Deleted Successfully');
});


app.use('/api', router);

http.createServer(app).listen(8080);