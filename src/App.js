import React from 'react';
import './App.css'
import Row from './Row'
import request from './Request';
import Banner from './Banner';
import Nav from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Banner />
        <Row
          title="Only In Netflix"
          fetchUrl={request.fetchNetflixOriginlas}
          isLargeRow={true}
        />
        <Row
          title="Trending Now"
          fetchUrl={request.fetchTrending}
        />
        <Row
          title="Top Rated"
          fetchUrl={request.fetchTopRated}
        />
        <Row
          title="Action Movies"
          fetchUrl={request.fetchActionMovies}
        />
        <Row
          title="Comedy Movies"
          fetchUrl={request.fetchComedyMovies}
        />
        <Row
          title="Horror Movies"
          fetchUrl={request.fetchHorrorMovies}
        />
        <Row
          title="Romance Movies"
          fetchUrl={request.fetchRomanceMovies}
        />
        <Row
          title="Documentaries"
          fetchUrl={request.fetchDocumentaries}
        />
      </div>
    </Router>
  )
}

export default App

