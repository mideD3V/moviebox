const baseUrl = "https://api.themoviedb.org/3";
const AUTH = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWM1YWI4ODljZjQ4NjFkY2E4NzAzODBlZjU4OGZkZSIsInN1YiI6IjY1MDAzZmFjZmZjOWRlMGVkZWQ0MjJiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZnjY9c9DMHXif7JPWQoGXKWKarqGFY0zK8jVzf_taEE";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
export const posterSizes = {
    w92 : "w92",
    w154 : "w154",
    w185 : "w185",
    w342 : "w342",
    w500 : "w500",
    w780 : "w780",
    w960 : "w960",
    original : "original"
}
export const backdropSizes = {
    w300: "w300",
    w780: "w780",
    w1280: "w1280",
    original : "original"
}
const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: AUTH,
    },
  };

export const getTopMovies = async () => {
    try {
        const response = await fetch(`${baseUrl}/movie/popular?language=en-US&page=1`, options);
        const {results} = await response.json();
        return results.filter((_, index) => index < 10);
    } catch (error) {
        console.log(error);
        notifyUser('error','Could not fetch top movies');
    }
};

export const searchMovies = async (searchTerm) => {
    const response = await fetch(`${baseUrl}/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`, options);
    const {results} = await response.json();
    return results;
    // try {
    // } catch (error) {
    //     console.log(error);
    //     notifyUser('error','Could not search movies please try again later');
    // }
};

export const getMovieDetail = async (movieId) => {
    try {
        const response = await fetch(`${baseUrl}/movie/${movieId}?language=en-US&include_video=true`, options);
        return await response.json();
    } catch (error) {
        console.log(error);
        notifyUser('error','Error getting movie detail');
    }
};

function notifyUser(message, type) {

}

// SEARCH

// {
//       "adult": false,
//       "backdrop_path": "/53z2fXEKfnNg2uSOPss2unPBGX1.jpg",
//       "genre_ids": [
//         27,
//         9648,
//         53
//       ],
//       "id": 968051,
//       "original_language": "en",
//       "original_title": "The Nun II",
//       "overview": "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
//       "popularity": 2050.948,
//       "poster_path": "/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
//       "release_date": "2023-09-06",
//       "title": "The Nun II",
//       "video": false,
//       "vote_average": 6.7,
//       "vote_count": 118
//     },





// {
//   "adult": false,
//   "backdrop_path": "/5mzr6JZbrqnqD8rCEvPhuCE5Fw2.jpg",
//   "belongs_to_collection": {
//     "id": 742536,
//     "name": "The Meg Collection",
//     "poster_path": "/7sAnVGMn5he5NZBZCE6fhDpA7fl.jpg",
//     "backdrop_path": "/rNoyJmjdhgn30bVbvd8n3DJMocB.jpg"
//   },
//   "budget": 129000000,
//   "genres": [
//     {
//       "id": 28,
//       "name": "Action"
//     },
//     {
//       "id": 878,
//       "name": "Science Fiction"
//     },
//     {
//       "id": 27,
//       "name": "Horror"
//     }
//   ],
//   "homepage": "https://www.themeg.movie",
//   "id": 615656,
//   "imdb_id": "tt9224104",
//   "original_language": "en",
//   "original_title": "Meg 2: The Trench",
//   "overview": "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
//   "popularity": 2943.17,
//   "poster_path": "/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
//   "production_companies": [
//     {
//       "id": 56242,
//       "logo_path": "/1YORRYmg7hgYIgoJek8jU3cykuQ.png",
//       "name": "Apelles Entertainment",
//       "origin_country": "US"
//     },
//     {
//       "id": 174,
//       "logo_path": "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
//       "name": "Warner Bros. Pictures",
//       "origin_country": "US"
//     },
//     {
//       "id": 435,
//       "logo_path": "/AjzK0s2w1GtLfR4hqCjVSYi0Sr8.png",
//       "name": "di Bonaventura Pictures",
//       "origin_country": "US"
//     },
//     {
//       "id": 92484,
//       "logo_path": "/dfWwoWRp8snHjzDKO5IFkiCAUe7.png",
//       "name": "CMC Pictures",
//       "origin_country": "CN"
//     },
//     {
//       "id": 208093,
//       "logo_path": null,
//       "name": "DF Pictures",
//       "origin_country": ""
//     },
//     {
//       "id": 208094,
//       "logo_path": null,
//       "name": "Onaroll Productions",
//       "origin_country": ""
//     }
//   ],
//   "production_countries": [
//     {
//       "iso_3166_1": "CN",
//       "name": "China"
//     },
//     {
//       "iso_3166_1": "US",
//       "name": "United States of America"
//     }
//   ],
//   "release_date": "2023-08-02",
//   "revenue": 384056482,
//   "runtime": 116,
//   "spoken_languages": [
//     {
//       "english_name": "English",
//       "iso_639_1": "en",
//       "name": "English"
//     }
//   ],
//   "status": "Released",
//   "tagline": "Back for seconds.",
//   "title": "Meg 2: The Trench",
//   "video": false,
//   "vote_average": 7.02,
//   "vote_count": 1669
// }