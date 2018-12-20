//Henter mit modul fra et andet path i programmet. 
var omregn = require('./own_module/omregner');

//Indtast antallet af Danske Kroner, du vil have omregnet til euro. 
console.log(omregn.eurotildk(2400));
