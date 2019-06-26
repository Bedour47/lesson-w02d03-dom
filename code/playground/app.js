console.log('It works!');

console.log(document.querySelector('p'));

/*
document.getElementById('idName');
document.getElementsByClassName('className');
document.getElementsByName('');
document.getElementsByTagName('h1');

//we will use these most likly:
document.querySelector('#heading'); //returns the first element that matches the selecter.
document.querySelectorAll('p');//returns an Array of all elements that matches the selecter.

*/


//w02-d03 Lab : https://github.com/sei-eternity/lesson-w02d03-dom/blob/master/theDomDetective_LAB.md

//Every image on the page
document.querySelectorAll('img');

//The navigation area in the upper right
document.querySelector('.mc_embed_signup');

//The MailChimp sign-up form in the bottom
document.querySelector('#mc_embed_signup');

//The upper left-hand logo that says GDI (Hint: use CSS descendant selectors)
document.querySelector('.logo');

//The logos of the media sources that featured GirlDevelopIt (lifeHacker, TED, etc., at the bottom of the page)
document.querySelector('.press-logos');

//The big heading that says "DON'T BE SHY DEVELOP IT"
document.querySelector('h1');

//All of the headings that have the underline (e.g. Who we are, We are now in 63 cities)
document.querySelectorAll('.underlined-headline');

//All of the images that are in the stats part of the page (e.g. 26%, 18% and 34%)
document.querySelectorAll('.stats img');

//BONUS: all the dots in the map