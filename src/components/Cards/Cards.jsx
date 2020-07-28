import React from 'react'
import {Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'

const Cards = (props) => {
   console.log(props)
   return (
      <div className={styles.container}>
         <Grid container spacing={3} justify="Center">
         <Grid item component={Card}>
               <CardContent>
               <Typography color="textSecondary" gutterBottom>Infected</Typography>
               <Typography variant="h5">REAL DATA</Typography>
               <Typography color="textSecondary">REAL DATE</Typography>
               <Typography variant="body2">Number of active cases of covid19</Typography>
               </CardContent>
            </Grid>
         </Grid>
      </div>
   )
}

export default Cards