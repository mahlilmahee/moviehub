import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



const Slider = () => {
    const [data,setData]=useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=51129d3fdde19b2b33dbc01b5aeb33bc&language=en-US&page=1')
        .then(res=>res.json())
        .then(data=>setData(data.results))
    },[])
    
    return (
        <div>
       

 <Carousel autoPlay={true} infiniteLoop={true} >
       { 
    data.map((single,i)=><>
    <div>
        <img src={`https://image.tmdb.org/t/p/original${single.backdrop_path}`}   alt="picture" />
        <div className="divseconds" style={{width:"60%", fontWidth:'600', fontSize:'1.3rem', position:'absolute',left:'10px',top:'340px',color:"white"}}>
            <h3>{single.title}</h3>
            <p className="beda">{single.overview.slice(0,120)}</p>
            <h3>Relase:{single.release_date}</h3>
            <h5>Rating:{single.vote_average}</h5>
        </div>
    </div>
   
        </>)
  }
        </Carousel>
      


         </div>
    );
};

export default Slider;