function omregn(kroner){

    var euro = kroner / 7.42;
    return euro;
    
}
function omregn2(ether){
    var bitcoin = ether / 38.375;
    return bitcoin;
}
exports.eurotildk = omregn; 
exports.ethTilBTC = omregn2;
