//Get DOM element
//either use document.getElementby() id or use document.querySelector() we are using here querrySelector
const container = document.querySelector(".container");
//only select seats within row class but not within legeng class
const seats = document.querySelectorAll(".row .seat:not(occupied)");
const count= document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
//this + sign changes string to int  or use parseInt() funtion
let ticketPrice = +movieSelect.value;

populateUI();

//All functions
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    //copy in array selected seats these dots are called spread operator and its 
    //show all the seat with comma seperated list and map function creat a loop and make another array
    //we use arrow funtion here in map()
    const seatsindex = [...selectedSeats].map(seat=>{
        return [...seats].indexOf(seat)
        
    });
    

    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
     //we store in local storage which is given in a browser 
     // selectedseats is key and its value is seatIndex
     //where JASON.stringify is method to change array into string otherwise we don't direct save arrays in a local storage
    localStorage.setItem("selectedSeats" , JSON.stringify(seatsindex))    
}
// save the movie data to local storage
function setMovieData(movieIndex,moviePrice){
    localStorage.setItem("selectedMovieIndex",movieIndex);
    localStorage.setItem("selectedMovieprice",moviePrice);

}

//Get data from local storage and populate UI
function populateUI() {
    //convert string into array 
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeats != null && selectedSeats.length > 0){
        seats.forEach((seats,index) => {
            if (selectedSeats.indexOf(index) > -1){
                seats.classList.add("selected") 
            }
         })
    };
    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
    if (selectedMovieIndex !== null ){
        movieSelect.selectedIndex = selectedMovieIndex; 
    }
}

//In ES6(modern javascript) we dont use funtion(e) instead only e =>{}this is known as arrow function
container.addEventListener("click", e =>{
    e.preventDefault();
    //Here we target a particular seat if clicked on seats then this if loop executes 
    //Here {target} target a parrticular area  , {classList} list of class which it is belonged , {contains()}
    //cheacked a value that is  given 
    if (e.target.classList.contains("seat") && 
        !e.target.classList.contains("occupied")
         ){
            // here toggle() builtin function can select and de deselect the seats
             e.target.classList.toggle("selected");
             updateSelectedCount();
        
    }




});


//2. second event listner
movieSelect.addEventListener("change", e=> {
    ticketPrice = +e.target.value;
    //here we use selectedIndex method
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();


})
updateSelectedCount();