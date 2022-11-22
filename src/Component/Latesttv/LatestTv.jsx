

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
const LatestTv = () => {

    const [getnew,setGetnew]=useState([]);
    
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=51129d3fdde19b2b33dbc01b5aeb33bc&language=en-US&page=1')
        .then(res=>res.json())
        .then(data=>setGetnew(data.results))
    },[])
    return (
        <div>
           <h2> Watch Out the Latest Movies </h2>


           <Grid sx={{margin:'10px auto'}} justifyContent="center" alignItems="center" container spacing={1}>
 
           
            {
                getnew.map(data=><> 
                <Grid item xs={12} md={3} lg={4}>
                  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
        alt="Famous Tv show"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="small" variant="contained">See Details</Button>
      </CardActions>
    </Card>
               </Grid>   </>)
            }</Grid>
        </div>
    );
};

export default LatestTv;