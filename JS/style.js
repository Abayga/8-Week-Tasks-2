 $(document).ready(function(){
const countryUrl = 'https://restcountries.eu/rest/v2/all'
const getAlpha = 'https://restcountries.eu/rest/v2/alpha/'
const flagCountry = 'https://restcountries.eu/data/'


const allcountries = async() => {
    const response = await fetch(countryUrl)
    const data = await response.json()
    for(let i=0; i<=249; i++){
        let code = data[i].alpha2Code
        let names = data[i].name
        let flag = data[i].flag
        let capital = data[i].capital
        let population = data[i].population
        
        $('.code').append(`<p class="border">${code}</p>`)
        $('.flag').append(`<img class="flags" src="${flag}">`)
        $('.name').append(`<p class="border">${names}</p>`)
        $('.capital').append(`<p class="border">${capital}</p>`)
        $('.population').append(`<p class="border">${population}</p>`)

        // const flagS = await fetch(flag)
        // const flagsJson = await flagS.json()
        // console.log(flagsJson)

        // data[0].borders.forEach(async item => {
        //     const responeNames = await fetch(flagCountry+item)
        //     const countryData = await responeNames.json()
        //     console.log(countryData)
        // })
        
    }
    
}


allcountries()
})