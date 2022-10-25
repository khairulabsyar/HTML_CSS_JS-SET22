let seatSelection = document.getElementById('seatSelection');

seatSelection.addEventListener('click', function(e){
    // Get the id of the seat clicked
    let seatSelected = document.getElementById(e.target.id);

    // Get the movie selected from the drop down list
    let movieSelected = document.getElementById("movies").value;
    
    // Parse the item retrieved from the local storage
    let seatArr = localStorage.getItem(movieSelected);
    if (seatArr == null){
        seatArr =[];
    }else{
        seatArr = JSON.parse(seatArr);
    }

    if(!e.target.classList.contains('filled') && e.target.id != 'seatSelection'){
        // Push the id of the seat selected into the array
        seatArr.push(e.target.id);
        // Stringify
        seatArr = JSON.stringify(seatArr);
        
        // save into local storage
        localStorage.setItem(movieSelected, seatArr);

        document.getElementById(e.target.id).classList.add('filled');
    }
})

// update seat color
function updateSeatUI(){
    // Get the movie selected from the drop down list
    let movieSelected = document.getElementById("movies").value;

    // Parse the item retrieved from the local storage
    let seatArr = localStorage.getItem(movieSelected);
    if (seatArr == null) {
        seatArr = [];
    } else {
        seatArr = JSON.parse(seatArr).map((element) => {
            document.getElementById(element).classList.add('filled');
        });
    }

}

function movieSelection(){
    // Get the movie selected from the list
    let movieSelected = document.getElementById("movies").value;
    // Get the value(array) from local storage
    let seatForMovie = localStorage.getItem(movieSelected);

    if (seatForMovie == null) {
        seatForMovie = [];
    } else {
        seatForMovie = JSON.parse(seatForMovie);
    }
    // 
    // Get all elements that has class seat in OBJECT
    let allSeats = document.querySelectorAll('.seat');

    // we loop through the node list
    for (key in allSeats) {
        // if the element contains filled class, we remove the class
        // .? means optional chaining
        if (allSeats[key].classList?.contains('filled')) {
            allSeats[key].classList.remove('filled');
        }
    }
    updateSeatUI();
}
// First time trigger
updateSeatUI();