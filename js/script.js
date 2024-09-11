// Try using Array
let roomAndFloor = [];
let numberOfFloor = document.querySelector("#numOfFloor");
let numberOfRoom = document.querySelector("#numOfRoom");
document.querySelector("#hotelForm").onsubmit = (event) => {
  event.preventDefault();
  if (validated()) {
    location = "http://127.0.0.1:5500/pages/hotel.html";
  }
  document.querySelector("#hotelForm").reset();
};

function validated() {
  let isValidate = true;
  if (numberOfFloor.value == "" || numberOfRoom.value == "") {
    alert("Please enter a number of floor and number of rooms");
    isValidate = false;
  } else {
    // sessionStorage.setItem("numberOfFloor", numberOfFloor.value);
    // sessionStorage.setItem("numberOfRoom", numberOfRoom.value);
    roomAndFloor.push(numberOfFloor.value, numberOfRoom.value);
    sessionStorage.setItem("roomAndFllor", JSON.stringify(roomAndFloor));
    alert(
      `You entered ${numberOfFloor.value} floors and ${numberOfRoom.value} rooms per floor`
    );
  }
  return isValidate;
}
