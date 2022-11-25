import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleMovies.css'
const SingleMovie = () => {
  const {movieId} = useParams();
 
  const [singleData,setSingleData]=useState({})
   console.log(singleData);
   
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=51129d3fdde19b2b33dbc01b5aeb33bc&language=en-US`)     
    .then(res=>res.json())
    .then(data=>setSingleData(data))
  },[])
  
  const clickEffect=()=>{
    var element=document.getElementById('divmain')
    element.classList.add('special')
  }
  const closeEffect=()=>{
    var element=document.getElementById('divmain')
    element.classList.remove('special')
  }
    return (
        <div className="main">
            {/* <h2>hello welcome to my family :{movieId} </h2> */}
           
            <img src={`https://image.tmdb.org/t/p/original${singleData.poster_path}`} alt="movie poster" />
            {/* <img src={`https://image.tmdb.org/t/p/original${singleData.logo_path}`} alt="movie logo " /> */}
         <div className="bghover" id="divmain">
         <button type="button" style={{'backgroundColor':'white'}}  onClick={()=>{closeEffect()}} className="btn-close" aria-label="Close"> </button>

         <h5> Movie Name:{singleData.original_title}</h5>
            <p>overview: {singleData.overview}</p>
            <p>popularity: {singleData.popularity}</p>
            <p> Tagline:{singleData.tagline}</p>
            <p>Rating: {singleData.vote_average}</p>
            <img  src={`https://image.tmdb.org/t/p/original${singleData.backdrop_path}`} width='3%' alt="movie poster" />

            <p>People Votes: {singleData.vote_count}</p>
         </div>
         <button style={{width:'40%',position:'relative','top':'-1750px', 'left':'-10px'}} className="btn btn-primary " onClick={()=>{clickEffect()}}> Show Details</button>
        </div>
    );
};

export default SingleMovie;