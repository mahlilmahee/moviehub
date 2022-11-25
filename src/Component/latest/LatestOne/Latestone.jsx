import React from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
const Latestone = ({data}) => {
    const {id}=data;
    // console.log(id)
    const navigate=useNavigate()
const datasd=()=>{
    navigate(`/movies/${id}`)
}

    return (
        <Grid item xs={12} md={3} lg={2}>
          
           <Button size="small" onClick={()=>{datasd()}}>
                  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="160"
        image={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
        alt="green iguana"
      />
      {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      {/* </CardContent> */} 
      <CardActions>
        {/* <Button size="small">Share</Button> */}
      
        
      
        
       

      </CardActions>
    </Card> </Button>
               </Grid>
    );
};

export default Latestone;