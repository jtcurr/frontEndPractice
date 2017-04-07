document.addEventListener("DOMContentLoaded", function(event) {

  let name = data.name.split(' ');
  let firstLetters = '';
  for (let i = 0; i <= name.length-1; i++) {
    firstLetters += name[i][0];
  }
  document.getElementById('outerLogo').innerHTML += firstLetters;
  document.getElementById('companyTitle').innerHTML += data.name;
  document.getElementById('slogan').innerHTML += data.slogan + ' - ';
  for (var x = 0; x < data.tags.length-1; x++ ) {
    if (x === data.tags.length-2) {
    	document.getElementById('tags') += ', and ' + data.tags[x];
    } if (x === 0) {
      document.getElementById('tags') += data.tags[x];
    } else {
    	document.getElementById('tags') += data.tags[x];
    }
  }
});