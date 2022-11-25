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
import StarRatings from 'react-star-ratings';
import './latestone.css'
import Grid from '@mui/material/Grid';
import { Link, useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';
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
                  <Card sx={{ maxWidth: 345 , padding:0}}>
      
      {
        data.backdrop_path ? 
           <CardMedia
        component="img"
        height="160"
        image={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
        alt="green iguana"
      /> :<Skeleton
      variant="rectangular" width={210} height={118} />
      }
   
   <div className="latestone">
    <p>{data.title}</p>
    <StarRatings
        rating={data.vote_average/2}
        starDimension="15px"
        starSpacing="2px"
        starRatedColor='black'
      />({data.vote_average/2})
   </div>
      <CardActions>
      </CardActions>
    </Card> </Button>
               </Grid>
    );
};

export default Latestone;