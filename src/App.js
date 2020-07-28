import React from 'react'

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.modules.css'
import {fetchData} from './api'

class App extends React.Component {

   state = {

   }
   
   async componentDidMount(){
      const data = await fetchData();
      console.log(data)
   }

   render(){
      return (
         <div className={styles.container}>
            <Cards />
            <Chart />
            <CountryPicker />
         </div>
      )
   }
}

export default App