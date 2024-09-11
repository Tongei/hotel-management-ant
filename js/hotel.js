let getRoomAndRoom = [];
let hotelState = {};
const renFloorsRoom = () => {
  getRoomAndRoom = JSON.parse(sessionStorage.getItem("roomAndFllor"));
  let floorCount = Number(getRoomAndRoom[0]);
  let roomCount = Number(getRoomAndRoom[1]);
  let ground = document.querySelector("#ground");
  let piece = "";
  // console.log("Room " + roomCount + " Floor " + floorCount);
  hotelState = {};
  document.querySelector(
    "#title_tbl"
  ).innerHTML = `Your hotel has ${floorCount} floors and ${roomCount} rooms each.`;
  for (i = 1; i <= floorCount; i++) {
    piece += `<div class="d-flex gap-5">
              <div class="floor">Floor ${i}</div>`;
    for (j = 1; j <= roomCount; j++) {
      let roomId = `${i}-${j}`;
      hotelState[roomId] = null;
      piece += `<div class="room" id="${roomId}">${hotelState[roomId]}</div>`;
    }
    piece += "</div>";
  }
  ground.innerHTML += piece;
};
// let keys = Object.keys(hotelState);
//         console.log("Keys: " + keys);
//         keys.forEach(key => {
//             console.log(key + " value: " + hotelState[key]);

//         });
// };
renFloorsRoom();
// for Check-In
document.querySelector("#checkIn").onclick = () => {
  document.querySelector("#checkInContainer").classList.remove("d-none");
  document.querySelector("#checkOutContainer").classList.add("d-none");
};

document.querySelector("#checkOut").onclick = () => {
  document.querySelector("#checkInContainer").classList.add("d-none");
  document.querySelector("#checkOutContainer").classList.remove("d-none");
};

// Check-in form

document.querySelector("#checkInForm").onsubmit = (event) => {
  let checkInRoom = document.querySelector("#roomNumber");
  let checkInFloor = document.querySelector("#floorNumber");
  let guestName = document.querySelector("#guestName");
  event.preventDefault();

  let roomId = `${checkInFloor.value}-${checkInRoom.value}`;
  // console.log(roomId);
  if (
    checkInRoom.value == "" ||
    checkInFloor.value == "" ||
    guestName.value == ""
  ) {
    alert("Please enter all information");
  } else if (hotelState[roomId] === undefined) {
    alert(
      `Room ${checkInRoom.value} on Floor ${checkInFloor.value} does not exist.`
    );
  } else if (hotelState[roomId] === null) {
    hotelState[roomId] = guestName.value;
    document.getElementById(roomId).innerHTML = guestName.value;
    document.getElementById(roomId).classList.add("text-danger");
    alert(
      `Checked-in: ${guestName.value} to Floor ${checkInFloor.value} Room ${checkInRoom.value}`
    );
    document.querySelector("#checkInContainer").classList.add("d-none");
  } else {
    alert(
      `Room ${checkInRoom.value} on Floor ${checkInFloor.value} is already checked-in`
    );
  }
  document.querySelector("#checkInForm").reset();
};

// check out

document.querySelector("#checkOutForm").onsubmit = (event) => {
  let checkOutFloor = document.querySelector("#outFloorNumber");
  let checkOutRoom = document.querySelector("#outRoomNumber");
  event.preventDefault();

  let roomId = `${checkOutFloor.value}-${checkOutRoom.value}`;

  if (checkOutRoom.value == "" || checkOutFloor.value == "") {
    alert("Please enter all information");
  } else if (hotelState[roomId] === undefined) {
    alert("Could not find!");
  } else if (hotelState[roomId] === null) {
    alert("Could not check out room is empty!");
  } else {
    alert(
      `Checked-out: Floor ${checkOutFloor.value} Room ${checkOutRoom.value}`
    );
    console.log(roomId);
    document.getElementById(roomId).innerHTML = "null";
    hotelState[roomId] = null;
    document.querySelector("#checkOutContainer").classList.add("d-none");
    document.getElementById(roomId).classList.remove("text-danger");
  }
  document.querySelector("#checkOutForm").reset();
};

// // console.log(arrayFR);
// ground.innerHTML = piece;
