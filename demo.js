function generateName() {
  const names = [
    "Niran Abdulqader",
    "Alfi Ali",
    "Leslie Alvarado",
    "Dante Angerame",
    "Guadalupe Argumedo Saucedo",
    "Rene Banuelos",
    "Kadi Barry",
    "Jaranesca Braker",
    "Victor Castaneda",
    "Andrea Ceballos",
    "Uriel Delgado",
    "Kaaliyah Gray",
    "Kayla Hanifen",
    "Moncerrat Lua Salas",
    "Max Mayo",
    "Jesus MImila",
    "Sabrina Robles",
    "Abdikadir Samatar",
    "Daniel Solar",
    "Brett Spokes",
  ];

  // Randomly select a name
  const index = Math.floor(Math.random() * names.length);

  document.getElementById("displayGreet").innerHTML =
    "Hello there, <span class='highlight'>" + names[index] + "</span> !";
}
// Example usage:
generateName();

function sayMyName(secretMessage) {
  let myName = document.getElementById("myName").value;
  alert(`Hi ${myName}, ${secretMessage}!`);
}
