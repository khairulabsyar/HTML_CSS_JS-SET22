function chooseSeat(e) {
  let seatSelected = document.getElementById(e.id);
  let movieChoose = document.getElementById(`movies`).value;
  let seatArr = localStorage.getItem(movieChoose);
  // check local storage, if none, create new array else parse local storage into variable
  if (seatArr == null) {
    seatArr = [];
  } else {
    seatArr = JSON.parse(seatArr);
  }
  //when choosing seat, seat will be coloured if not taken
  if (!seatSelected.classList.contains(`click-style`)) {
    seatSelected.classList.toggle(`click-style`);
    // Push the id of the seat selected into the array
    seatArr.push(e.id);
    // stringify
    seatArr = JSON.stringify(seatArr);
    // save into local storage

    localStorage.setItem(movieChoose, seatArr);
  } else {
    // removing selected seat
    seatSelected.classList.toggle(`click-style`);
    seatArr.map((element) => {
      if (element == e.id) {
        seatArr.splice(seatArr.indexOf(element), 1);
      }
    });
    // check for selected movie has seat taken or not, if not, delete the movie from local storage
    if (seatArr.length == 0) {
      localStorage.removeItem(movieChoose);
    } else {
      seatArr = JSON.stringify(seatArr);
      localStorage.setItem(movieChoose, seatArr);
    }
  }
}

// update seat colour
function movieSelect() {
  let movieChoose = document.getElementById(`movies`).value;
  let seats = document.getElementsByClassName(`seats`);
  let seatArr = localStorage.getItem(movieChoose);
  // reset all seat status
  // for (let i = 0; i < seats.length; i++) {
  //   if (seats[i].classList.contains(`click-style`)) {
  //     seats[i].classList.toggle(`click-style`);
  //   }
  // }

  for (let seat of seats) {
    if (seat.classList.contains(`click-style`)) {
      seat.classList.toggle(`click-style`);
    }
  }
  // change seats colour based on movie selected
  if (seatArr !== null) {
    seatArr = JSON.parse(seatArr).map((element) => {
      document.getElementById(element).classList.toggle(`click-style`);
    });
  }
}
movieSelect();
