function getUsernameLetters() {
  return "AB";
}

document.getElementById("account-icon").innerHTML = getUsernameLetters();

function logout(e) {
  e.preventDefault();
  location.href = "../index.html";
}

document.getElementById("logout-btn").addEventListener("click", (e)=> {
  logout(e);
});
