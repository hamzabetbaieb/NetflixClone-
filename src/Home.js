import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Row from './components/Row';

import requests from './config/Requests';

const Home = () => {
  return (
    <div>
        <Nav/>
    <Banner/>
    <Row title="Programmes Netflix"
    fetchUrl={requests.fetchNetflixOriginals}
    IsPoster={true}/>
    <Row title="Tendances actuelles"
    fetchUrl={requests.fetchTrending}/>
    <Row title="les mieux notés"
    fetchUrl={requests.fetchTopRated}/>
    <Row title="Films d'action"
    fetchUrl={requests.fetchActionMovies}/>
    <Row title="Films de comédie"
    fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Films d'horreur"
    fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Films de romance"
    fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentaires"
    fetchUrl={requests.fetchDocumentaries}/>
  
    
    <Footer/>
    </div>
  );
}

export default Home;

