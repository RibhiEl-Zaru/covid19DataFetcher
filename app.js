const { ApiExecutor } = require('./workers/apiExecutor')
const { CountryDataAggregator} = require('./workers/CountryDataAggregator')
const apiExecutor = new ApiExecutor('covid-193.p.rapidapi.com', 'a105fbc46emsh9211cb134c839b1p1d1031jsn8f45ca70b43d' )

/*
apiExecutor.getCountries(function(body){ console.log('there are ' + body.results + ' countries available to look at') })




apiExecutor.getHistoryStatsForCountry("USA", function(data){

    //data.organize()
    console.log(data.totalDeathsByDay('2020-04-05'))
    console.log(data.totalTestsByDay('2020-04-05'))
    console.log(data.currentDeaths())
 })

apiExecutor.getHistoryStatsForCountryForDay("Trinidad-and-Tobago", "2020-04-05", function(result){
    console.log(result.currentDeaths())

})


*/
apiExecutor.getStatsForToday(function(data){
    console.log(data.currentDeathsCategoryForCountry("S.-Korea"))
    console.log(data.getTopNCountriesForCategory(10, 'deaths'))
    console.log(data.getTopNCountriesForCategory(10, 'tests'))
    console.log(data.getTopNCountriesForCategory(10, 'cases'))
})

