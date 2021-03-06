const API_KEY = "19f84e11932abbc79e6d83f82d6d1045";
//https://api.themoviedb.org/3/movie/550?api_key=19f84e11932abbc79e6d83f82d6d1045
//8ea6bd80a829a01efd7f025f422b97aa

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&languange=en=US`,
    fetchNetflixOriginlas: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&languange=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;