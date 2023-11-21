function getUsernameLetters() {
  return "AB";
}

document.getElementById("account-icon").innerHTML = getUsernameLetters();

function logout(e) {
  e.preventDefault();
  location.pathname = "/";
}

document.getElementById("logout-btn").addEventListener("click", (e)=> {
  logout(e);
});
