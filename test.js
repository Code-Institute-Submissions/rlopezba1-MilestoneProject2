
var key = "a1ca800dd9msh58123bac9aa1f49p1e196ajsn90f8765cc76d";

    var data;
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://geohub3.p.rapidapi.com/countries/search/Spain")
    xhr.setRequestHeader("x-rapidapi-key", "a1ca800dd9msh58123bac9aa1f49p1e196ajsn90f8765cc76d");
    xhr.setRequestHeader("x-rapidapi-host", "geohub3.p.rapidapi.com");
    xhr.send();

    xhr.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);
             document.getElementById("data").innerHTML = xhr.responseText;
        }
    }

    function fetchCountry(event) {
        var countryName = $("#countryName").val();
        if (!countryName){
            $("#countryData").html(`<h2>Please enter a country name</h2>`);
            return;
        }
    }


