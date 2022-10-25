// Get all movie
let allMovie = ['only-yesterday', 'inception', 'lord-of-the-rings', 'a-silent-voice'];
// initialise an empty object
let movieObj = {};
// Loop through local storage to get all the values of the movie
allMovie.map((element) => {
    let lengthMovie = JSON.parse(localStorage.getItem(element));
    if (lengthMovie == null){
        lengthMovie = 0;
    }else{
        lengthMovie = lengthMovie.length;
    }
    // 
    movieObj[element] = lengthMovie;
});

let label = Object.keys(movieObj);
let values = Object.values(movieObj);

myBarChart = new Chart(document.getElementById("myChart"), {
    type: 'bar',
    data: {
        labels: label,
        datasets: [
            {
                data: values,
                label: 'Movie dataset'
            }
        ]
    }
});
