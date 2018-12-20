// først åbner jeg en http server 
var app = require ('express')();
var http = require('http').Server(app);

// Denne linje gør, at programmet kan 'læse' JSON objekter, ved at parse. 
bodyParser = require('body-parser');

// some post stuff
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// For at kunne bruge mysql
var mysql = require('mysql');

// Laver et GET request, for at tilgå html siden.
app.get('/', function(req, res){

// Sender file fra res. __dirname er hvilket directory man ønsker at sende fra, og stringen er så den fil.  
res.sendFile(__dirname + '/konti.html')
})

// Nu skal vi forbinde til databasen, ved at lave sql queries. 

//Først 'logger jeg ind'
var con = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    password: "12345"
});

// Herefter laver vi et GET request for at kunne hente ud af databasen. 
app.get('/hent', function(req,res){

// Her forbinder jeg til databasen. 
con.query("use cryptobank;", function(err, result) {
    if(err) throw err;
    console.log('Forbundet til databasen!');
});
// Jeg henter table fra databasen. 
con.query("select * from kunde_table", function(err, result){
    if(err) throw err;
    console.log('Selected * from kunde_table');

// Det, der bliver sendt til locahost, så man kan se hvad der bliver printed.
res.send(result);
        });
    });

// Jeg prøver at indsætte noget data ind i databasen.
app.post('/opret', function(req,res) {

    con.connect(function(err){
    if(err) throw err;
    console.log('Forbundet til databasen. ')
    con.query("use cryptobank;", function(err, result){
        if(err) throw err;
        console.log('Forbundet.')
    });


    // Deklarerer de værdier, jeg ønsker at indsætte. 
    con.query("insert into kunde_table(unik_id, password, cpr_nummer, navn, adresse) values ("+req.body.unik_id+",'"+req.body.password+"',"+req.body.cpr_nummer+",'"+req.body.navn+"', '"+req.body.adresse+"');", function (err, result){
        if(err) throw err;
        console.log('Indsat.');
        // localhost:5050/hent
        res.send('Yeet.')
    
    });    
    });
});

exports.hentinfo2 = function(req, res){
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "12345"
    });
    con.connect(function (err) {
        if(err) throw err;
    });
    con.query("use cryptobank;", function(err, result){
        //Tjekker efter fejl. Ingen fejl = connected.
        if(err) throw(err); 
        console.log("Connected. ")

    con.query("SELECT * FROM " + "konto_table" + "WHERE id =  + "+req.body.id+" + ORDER BY " + "id" + " LIMIT 1 ", function(err, result) {
        if(err) throw err;
        res.send(result);
    });
});
}

// Åbner serveren op. 
http.listen(5050, function(){
    console.log('Listening on localhost:5050');
});