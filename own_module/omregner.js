function omregn(kroner){

    var euro = kroner / 7.42;
    
    console.log(euro);
    return euro;

}
exports.eurotildk = omregn; 