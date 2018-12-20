// Virker ikke rigtigt. Forsøgt mig med at lave det ligesom vi lavede chuck norris API. 
// Det virkede dog ikke. 

function getPrice(){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var myObj = JSON.parse(this.responseText);
            document.getElementById("demo").innerHTML = myObj.value;
        }
    };
console.log(omregn.ethTilBTC(40));
xmlhttp.open("GET", "https://api.cryptonator.com/api/ticker/btc-eur", true);
xmlhttp.send();
}