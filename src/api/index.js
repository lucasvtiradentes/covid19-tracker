// ####################################################################################################################################
   import axios from 'axios'

// ####################################################################################################################################
   const url = 'https://covid19.mathdro.id/api'

// ####################################################################################################################################
   export {
      fetchData,
      fetchDailyData,
      fetchCountries
   }

// ####################################################################################################################################

   async function fetchData(country){ // ===============================================================================

      let changeableUrl = url;

      if (country){
         changeableUrl = `${url}/countries/${country}`
      }
      
      try {
         const {data} = await axios.get(changeableUrl)
         
         const modifiedData = {
            confirmed: data.confirmed, 
            recovered: data.recovered,
            deaths: data.deaths, 
            lastUpdate: data.lastUpdate
         }

         return modifiedData
      } catch (error) {
         console.log(error)
      }
   }

   async function fetchDailyData(){ // =================================================================================
      try {
         const {data} = await axios.get(`${url}/daily`)

         const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
            
         }))

         return modifiedData
      } catch (error) {
         console.log(error)
      }
   }

   async function fetchCountries(){ // =================================================================================
      try {
         const {data: {countries}} = await axios.get(`${url}/countries`)

         return countries.map((country) => country.name)
         
      } catch (error) {
         console.log(error)
      }
   }

// ####################################################################################################################################