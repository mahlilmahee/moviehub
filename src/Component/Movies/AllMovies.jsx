import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';

// import { Link } from '@mui/material';

const AllMovies = () => {
const [getnew,setGetnew]=useState([]);
useEffect(()=>{
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=51129d3fdde19b2b33dbc01b5aeb33bc')
    .then(res=>res.json())
    .then(data=>setGetnew(data.results))
},[])
return (
    <div>
    


       <Grid sx={{margin:'60px auto'}} justifyContent="center" alignItems="center" container spacing={1}>

       
        {
           getnew ?  getnew.map(data=><> 
            <Grid item xs={6} md={4} lg={2}>
              <Card sx={{ maxWidth: 345 }}>
  <CardMedia
    component="img"
    height="190"
    image={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
    alt="green iguana"
  />
 
  <CardActions>
    {/* <Button size="small">Share</Button> */}
   <Link to='/movies/movieId'> 
      {/* <Button size="small" variant="contained">See Details</Button> */}
   </Link>
  </CardActions>
</Card>
           </Grid>   </>)
       : <Skeleton variant="rectangular" width={210} height={118} /> }</Grid>
    </div>
);
};

export default AllMovies;