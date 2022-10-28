var movies = [
    // Movie 1
    {
        title: "Knives Out",
        image: "img/knives.jpg",
        genre: "Comedy",
        blurb: "Bloody hilarious movie",
        starring: ["Daniel Craig", "Ana Doodah", "Toni Collette"],
        rating: "R13",
        year: "2020",
        reviews: [{
                postedBy: "Garry",
                review: "Really liked it - choice!"
            },
            {
                postedBy: "Sheryl",
                review: "Best movie ever! Totally funny"

            },
            {
                postedBy: "Brian",
                review: "Liked the house"

            }
        ],
        trailerUrl: "https://www.imdb.com/video/vi2464857881/?playlistId=tt8946378&ref_=tt_pr_ov_vi"
    },
    // Movie 2
    {
        title: "Layer Cake",
        image: "img/layer.jpg",
        genre: "Action",
        blurb: "Cutest movie ever! Lessons from a corden bleu rat",
        starring: ["Daniel Craig", "Sienna Miller"],
        rating: "R18",
        year: "2004",
        reviews: [{
                postedBy: "Bob",
                review: "Super cute"
            },
            {
                postedBy: "Brian",
                review: "Very sweet"

            }
        ],
        trailerUrl: "https://www.imdb.com/video/vi906147865/?playlistId=tt0382932&ref_=tt_pr_ov_vi"
    },
    // Movie 3
    {
        title: "Interstellar",
        image: "img/interstellar.jpg",
        genre: "Sci-Fi",
        blurb: "Rescue movie extraordinaire - Woody to the recue",
        starring: ["Matthew McConaughey"],
        rating: "R13",
        year: "2014",

        reviews: [{
                postedBy: "Fiona",
                review: "May favourite movie ever"
            },
            {
                postedBy: "Cyril",
                review: "Great life lesson - should be mandatory"

            }
        ],
        trailerUrl: "https://www.imdb.com/video/vi2052129305/?playlistId=tt0114709&ref_=tt_ov_vi"
    },
    // Movie 4
    {
        title: "Child's Play 3",
        image: "img/horror.jpg",
        genre: "Horror",
        blurb: "Rescue movie extraordinaire - Woody to the recue",
        starring: ["Chuckie", "Brad Dourif", "Slink"],
        rating: "R18",
        year: "2020",

        reviews: [{
                postedBy: "Fiona",
                review: "May favourite movie ever"
            },
            {
                postedBy: "Cyril",
                review: "Great life lesson - should be mandatory"

            }
        ],
        trailerUrl: "https://www.imdb.com/video/vi2052129305/?playlistId=tt0114709&ref_=tt_ov_vi"
    },
    // Movie 5
    {
        title: "Toy Story",
        image: "img/toyStory.jpg",
        genre: "Kids",
        blurb: "Rescue movie extraordinaire - Woody to the recue",
        starring: ["Woody", "Buzz", "Andy", "Slink"],
        rating: "PG",
        year: "1995",

        reviews: [{
                postedBy: "Fiona",
                review: "May favourite movie ever"
            },
            {
                postedBy: "Cyril",
                review: "Great life lesson - should be mandatory"

            }
        ],
        trailerUrl: "https://www.imdb.com/video/vi2052129305/?playlistId=tt0114709&ref_=tt_ov_vi"
    },
    // Movie 6
    {
        title: "Toy Story 2",
        image: "img/toyStory2.jpg",
        genre: "Kids",
        blurb: "Rescue movie extraordinaire - Woody to the recue",
        starring: ["Woody", "Buzz", "Andy", "Slink"],
        rating: "PG",
        year: "1999",

        reviews: [{
                postedBy: "Fiona",
                review: "May favourite movie ever"
            },
            {
                postedBy: "Cyril",
                review: "Great life lesson - should be mandatory"

            }
        ],
        trailerUrl: "https://www.imdb.com/video/vi2052129305/?playlistId=tt0114709&ref_=tt_ov_vi"
    },
    // Movie 7
    {
        title: "One Flew Over the Cuckoo's Nest",
        image: "img/cuckoo.jpg",
        genre: "Drama",
        blurb: "Rescue movie extraordinaire - Woody to the recue",
        starring: ["Jack Nicholson", "Danny DeVito", "Christopher Lloyd"],
        rating: "PG",
        year: "1975",

        reviews: [{
                postedBy: "Fiona",
                review: "May favourite movie ever"
            },
            {
                postedBy: "Cyril",
                review: "Great life lesson - should be mandatory"

            }
        ],
        trailerUrl: "https://www.imdb.com/video/vi2052129305/?playlistId=tt0114709&ref_=tt_ov_vi"
    },
    // Movie 8
    {
        title: "The Gentlemen",
        image: "img/gentlemen.jpg",
        genre: "Action",
        blurb: "Bloody awesome",
        starring: ["Charlie Hunnam", "Michelle Dockery", "Hugh Grant", "Matthew McConaughey"],
        rating: "R13",
        year: "2019",

        reviews: [{
                postedBy: "Fiona",
                review: "May favourite movie ever"
            },
            {
                postedBy: "Cyril",
                review: "Great life lesson - should be mandatory"

            }
        ],
        trailerUrl: "https://www.imdb.com/video/vi2052129305/?playlistId=tt0114709&ref_=tt_ov_vi"
    },
    // Movie 9
    {
        title: "Hangover",
        image: "img/hangover.jpg",
        genre: "Comedy",
        blurb: "Bloody hilarious movie",
        starring: ["Bradley Cooper", "Zach Galifianakis", "Ed Helms"],
        rating: "R18",
        year: "2009",

        reviews: [{
                postedBy: "Garry",
                review: "Really liked it - choice!"
            },
            {
                postedBy: "Sheryl",
                review: "Best movie ever! Totally funny"

            },
            {
                postedBy: "Brian",
                review: "Liked the house"

            }
        ],
        trailerUrl: "https://www.imdb.com/video/vi2464857881/?playlistId=tt8946378&ref_=tt_pr_ov_vi"
    },
    // Movie 10
    {
        title: "Ratatouille",
        image: "img/ratatouille.jpg",
        genre: "Kids",
        blurb: "Cutest movie ever! Lessons from a corden bleu rat",
        starring: ["Remy", "Emile", "Anton Ego"],
        rating: "PG",
        year: "2007",

        reviews: [{
                postedBy: "Bob",
                review: "Super cute"
            },
            {
                postedBy: "Brian",
                review: "Very sweet"

            }
        ],
        trailerUrl: "https://www.imdb.com/video/vi906147865/?playlistId=tt0382932&ref_=tt_pr_ov_vi"
    }
]

// Get all filter inputs
var genre = document.getElementById("genreSelect");
var starring = document.getElementById("starringSelect");
var rating = document.getElementById("ratingSelect");

// Get search inputs
// var search = document.getElementById("searchButton");
// var searchInput = document.getElementById("searchInput");
// var searchStarInput = document.getElementById("searchStarInput");






// Filter by genre

genre.addEventListener("change", filterGenre);
console.log("Genre " + genre);
// console.log("starring " + starring);
// console.log("Rating " + rating);


function filterGenre() {
    var moviesOutput = document.getElementById("movieOutput");
    moviesOutput.innerHTML = "";
    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        if (genre.value === movie.genre) {
            moviesOutput.innerHTML += `
            <div class="col-3 m-5">
                <div class="card">
                <img src="${movie.image}" class="card-img-top" alt="Movie Poster">
                    <div class="card-body">
                  <h5 class="card-title">${movie.title}</h5>
                  <h6 class="card-text">${movie.year}</h6>
                  <p class="card-text">${movie.rating}</p>
                  <a href="#" class="btn">Read more</a>
                    </div>
                </div>
            </div>
        `
        }
    }
}

filterGenre();

// End of filter by genre


// Filter by rating

rating.addEventListener("change", filterRating);

function filterRating() {
    var moviesOutput = document.getElementById("movieOutput");
    moviesOutput.innerHTML = "";
    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        if (rating.value === movie.rating) {
            moviesOutput.innerHTML += `
            <div class="col-3 m-5">
                <div class="card">
                <img src="${movie.image}" class="card-img-top" alt="Movie Poster">
                    <div class="card-body">
                  <h5 class="card-title">${movie.title}</h5>
                  <h6 class="card-text">${movie.year}</h6>
                  <p class="card-text">${movie.rating}</p>
                  <a href="#" class="btn">Read more</a>
                    </div>
                </div>
            </div>
        `
        }
    }
}

filterRating();

// End of filter by rating



// Filter by starring

starring.addEventListener("change", filterStarring);

function filterStarring() {
    var moviesOutput = document.getElementById("movieOutput");
    moviesOutput.innerHTML = "";
    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        for (var j = 0; j < movie.starring.length; j++) {
            var star = movie.starring[j];
            if (starring.value === star) {
                moviesOutput.innerHTML += `
                <div class="col-3 m-5">
                    <div class="card">
                    <img src="${movie.image}" class="card-img-top" alt="Movie Poster">
                        <div class="card-body">
                      <h5 class="card-title">${movie.title}</h5>
                      <h6 class="card-text">${movie.year}</h6>
                      <p class="card-text">${movie.rating}</p>
                      <a href="#" class="btn">Read more</a>
                        </div>
                    </div>
                </div>
                `
            }
        }
    }
}

filterStarring();

// End of filter by starring





// Get movies
// <a href="#" class="btn" data-bs-toggle="modal" data-bs-target="#movieModal">Read more</a> - bootstrp modal stuff in here now

function getAllMovies() {
    var moviesOutput = document.getElementById("movieOutput");
    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        moviesOutput.innerHTML += `
        <div class="col-3 m-5">
            <div class="card">
            <img src="${movie.image}" class="card-img-top" alt="Movie Poster">
                <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <h6 class="card-text">${movie.year}</h6>
              <p class="card-text">${movie.rating}</p>
              <a href="#" class="btn" value="${i}" data-bs-toggle="modal" data-bs-target="#movieModal">Read more</a>
                </div>
            </div>
        </div>
    `
    }
}

getAllMovies();


function searchMovies() {
    var moviesOutput = document.getElementById("movieOutput");
    moviesOutput.innerHTML = "";
    var searchValue = searchInput.value;
    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        if (searchValue.toLowerCase() == movie.title.toLowerCase()) {
            moviesOutput.innerHTML += `
            <div class="col-3 m-5">
                <div class="card">
                <img src="${movie.image}" class="card-img-top" alt="Movie Poster">
                    <div class="card-body">
                  <h5 class="card-title">${movie.title}</h5>
                  <h6 class="card-text">${movie.year}</h6>
                  <p class="card-text">${movie.rating}</p>
                  <a href="#" class="btn">Read more</a>
                    </div>
                </div>
            </div>
            `
        }
    }
}

