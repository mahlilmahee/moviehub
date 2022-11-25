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
import { Skeleton } from '@mui/material';

const Tv = () => {
    const [getnew,setGetnew]=useState([]);
  
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=51129d3fdde19b2b33dbc01b5aeb33bc&language=en-US&page=10')
        .then(res=>res.json())
        .then(data=>setGetnew(data.results))
    },[getnew])
    return (
        <div>
           {/* <h2 style={{margin:'10px auto 10px '}}> Watch Out the Latest Movies </h2> */}
    
    
           <Grid sx={{margin:'60px auto'}} justifyContent="center" alignItems="center" container spacing={1}>
    
           
            {
             getnew ?    getnew?.map(data=><> 
                <Grid item xs={16} md={3} lg={2}>
                  <Card sx={{ maxWidth: 345 }}>
    { data.backdrop_path ?   <CardMedia
        component="img"
        height="190"
        image={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
        alt="green iguana"
      />: <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      }
      <CardActions>
     
        {/* <Button size="small" variant="contained">See Details</Button> */}
      </CardActions>
    </Card>
               </Grid>   </>) :  <Skeleton  sx={{ bgcolor: 'red.900' ,margin:'3px auto' }}
  variant="rectangular" width={910} height={508} />
            }</Grid>
        </div>
    );
    };

export default Tv;