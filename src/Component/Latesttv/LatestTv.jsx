

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
import { useNavigate } from 'react-router-dom';
import Latestone from '../latest/LatestOne/Latestone';
const LatestTv = () => {

    const [getnew,setGetnew]=useState([]);
 
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=51129d3fdde19b2b33dbc01b5aeb33bc&language=en-US&page=1')
        .then(res=>res.json())
        .then(data=>setGetnew(data.results))
    },[]);
 
    return (
        <div>
           <h2> Watch Out the Popular Movies </h2>


           <Grid sx={{margin:'10px auto'}} justifyContent="center" alignItems="center" container spacing={1}>
 
           
 {
     getnew.map((data,e)=><Latestone data={data} key={e} ></Latestone>)
 }
 </Grid>

           
        </div>
    );
};

export default LatestTv;