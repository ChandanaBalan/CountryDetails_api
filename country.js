const search = async ()=>{
    console.log(countryName.value);
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName.value}?fullText=true`)

    response.json().then((data)=>{
        console.log(data);


        let common = data[0].name.common
        let official = data[0].name.official
        let capital = data[0].capital[0]
        let borders = data[0].borders
        let area = data[0].area
        let googleMaps = data[0].maps["googleMaps"]
        let population = data[0].population
        let timezones = data[0].timezones[0]
        let continents = data[0].continents[0]
        let flags = data[0].flags.png

        for(var curr in data[0].currencies){
            var currencyname = data[0].currencies[curr].name
            var symbol = data[0].currencies[curr].symbol
        }
        console.log(currencyname, symbol);

        nationalLang=[]
        for (var lan in data[0].languages){
            nationalLang.push(data[0].languages[lan])
        }
        console.log(nationalLang);
        
        


        result.innerHTML = `
        <div class="card mt-3" style="width: 28rem;">
                    <img src=${flags}>
                    <div class="card-body">
                      <h5 class="card-title">${official}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Common : ${common}</li>
                      <li class="list-group-item">Capital : ${capital}</li>
                      <li class="list-group-item">Borders : ${borders}</li>
                      <li class="list-group-item">Area : ${area}</li>
                      <li class="list-group-item">Population : ${population}</li>
                      <li class="list-group-item">Time zones : ${timezones}</li>
                      <li class="list-group-item">Currency Name, Symbol  : ${currencyname}, ${symbol}</li>
                      <li class="list-group-item">Continents : ${continents}</li>
                      <li class="list-group-item">National Language : ${nationalLang}</li>
                    </ul>
                    <div class="card-body">
                        <a href="${googleMaps}" class="card-link">Google Map</a>
                      </div>
                  </div>
        `

        
        
    })

    
}


/* 
common
official
currency - name , symbol
capital
languages
borders
area
google maps
population
timezones
continent
flags - png
*/