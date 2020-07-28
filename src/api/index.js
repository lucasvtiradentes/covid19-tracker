import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

async function fetchData(){
   try {
      const {data} = await axios.get(url)
      
      const modifiedData = {
         confirmed: data.confirmed, 
         recovered: data.recovered,
         deaths: data.deaths, 
         lastUpdate: data.lastUpdate
      }

      return modifiedData
   } catch (error) {
      
   }
}

async function fetchDailyData(){
   try {
      const {data} = await axios.get(`${url}/daily`)

      console.log(data)

      const modifiedData = data.map((dailyData) => ({
         confirmed: dailyData.confirmed.total,
         deaths: dailyData.deaths.total,
         date: dailyData.reportDate
         
      }))

      return modifiedData
   } catch (error) {
      
   }
}


export {
   fetchData,
   fetchDailyData
}