document.addEventListener("DOMContentLoaded", function(event) {

  let name = data.name.split(' ');
  let firstLetters = '';
  for (let i = 0; i <= name.length-1; i++) {
    firstLetters += name[i][0];
  }
  document.getElementById('outerLogo').innerHTML += firstLetters;
});