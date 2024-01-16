import React, { useEffect, useState } from 'react';
import "./Banner.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import requests from '../config/Requests';
import axios from "axios";
import QuickView from "./QuickView";
import { Link } from 'react-router-dom';


const Banner = () => {
const [movie,setmovie]=useState([])
const[popup,setpopup]=useState(false)

function handleclickpopup(){
  
  popup? setpopup(false) : setpopup(true)
  
  
  }

async function fetchData (){
  const request = await axios.get(requests.fetchTrending) ;
  //console.log(request)
  setmovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
}
useEffect(()=>{
    fetchData();
},[])

console.log(popup)
//console.log(movie);
const bannerStyle={
  backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
}

return (
    <header className='banner' style={bannerStyle}>
      <div className='banner_content'>
      <h1 className="banner_title">{movie.title || movie.name} </h1>
      <p className='banner_description'>{movie.overview}</p>
        <div className="banner_buttons">
          <Link to={`/video/${movie.id}`}>
          <button className="banner_button banner_button_play"><PlayArrowIcon/>Lecture</button>
          </Link>
          <button className="banner_button" onClick={handleclickpopup}><HelpOutlineIcon/>Plus d'infos</button>
        </div>
        </div>
        <QuickView movie={movie} BannerStyle={bannerStyle} Mypopup={handleclickpopup}  popup={popup} />
    </header>
  );
}

export default Banner;
