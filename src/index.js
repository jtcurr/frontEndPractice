document.addEventListener("DOMContentLoaded", function(event) {
  let name = data.name.split(' ');
  let firstLetters = '';
  for (let i = 0; i <= name.length-1; i++) {
    firstLetters += name[i][0];
  }
  document.getElementById('outerLogo').innerHTML += firstLetters;
  document.getElementById('companyTitle').innerHTML += data.name;
  document.getElementById('slogan').innerHTML += data.slogan + ' - ';
  document.getElementById('city').innerHTML += data.city;
  document.getElementById('join').innerHTML += 'Joined ' + data.joinDate;
  document.getElementById('site').innerHTML += data.shortWebsite.link(data.fullWebsite);
  
	for (var x = 0; x < data.tags.length; x++ ) {
    if (x === data.tags.length-1) {
    	document.getElementById('tags').innerHTML += ', and ' + '#' + data.tags[x].link(data.tagURLS[data.tags[x]]);

    } else if (x === 0) {
      document.getElementById('tags').innerHTML += '#' + data.tags[x].link(data.tagURLS[data.tags[x]]);
    } else {
    	document.getElementById('tags').innerHTML += ', ' + '#' + data.tags[x].link(data.tagURLS[data.tags[x]]);
    }
  }

  document.getElementById('follow').addEventListener('click', function() {buttonFunction()});

  function buttonFunction (e) {
    
  }
});