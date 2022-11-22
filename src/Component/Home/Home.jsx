import Button from 'react-bootstrap/Button';
import React from 'react';
import Slider from '../Slider/Slider';
import Header from '../Header/Header';
import Latest from '../latest/Latest';
import LatestTv from '../Latesttv/LatestTv';

const Home = () => {
    return (
        <div>
   
  <Slider></Slider>
  <Latest></Latest>
  <LatestTv></LatestTv>
        </div>
    );
};

export default Home;