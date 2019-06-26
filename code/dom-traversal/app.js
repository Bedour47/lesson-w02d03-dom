/* w02d03 : The Document Object Model, src: https://github.com/Bedour47/lesson-w02d03-dom*/

// console.log("Hi");

//select the h1
const heading = document.querySelector('h1');
console.log(heading);

//select the paragraph
const paragraph = document.querySelector('p');
console.log(paragraph);

//select the img with the class selector
const image = document.querySelector('.bill');
console.log(image);

//select the firstListItem and secondListItem with the class?? selector
const firstListItem = document.querySelector('li');
const secondListItem = document.querySelector('li#second');
console.log(firstListItem, secondListItem);


//document.querySelectorAll('CSS slector');
const allListItems = document.querySelectorAll('li');
// console.log(allListItems);

for(let i=0; i<allListItems.length; i++){
    const currentListItem = allListItems[i];
    console.log(currentListItem);
}

const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);

//elm.getAttribute('ATTRIBUTE NAME');
const img = document.querySelector('img');
const src = img.getAttribute('src');
console.log(src);
const alt = img.getAttribute('alt');
console.log(alt);


/*---------------------------------------------------------------------------*/ 


/* Changing attributes */

//Find the <a>, and log out the 'href' attribute
const aTag = document.querySelector('a');
const href = aTag.getAttribute('href');
console.log(href);
//Change the "href" to: https://duckduckgo.com
aTag.setAttribute('href', 'https://duckduckgo.com');
aTag.setAttribute('target', '_blank');
//print the new  href
const newHref = aTag.getAttribute('href');
console.log(newHref);

//change the img
const img = document.querySelector('img');
const currentSrc = img.getAttribute('src'); //The old image (Bill) is still here if we want it back
img.setAttribute('src', 'http://www.placecage.com/400/400');

//Find the h1
const heading = document.querySelector('h1');
//Print the current text of h1
console.log(heading.innerText);



/* Changing a tage content */

//Change the h1 text to "Changed by JS"
heading.innerText = "Changed by JS"
//Append "!!!" to h1
heading.innerText += '!!!';

//change the  HTML of <a> to be "This is a <h1>link</h1>"
aTag.innerHTML = 'This is a <h1>link</h1>';
//Append "!!!" to <a>
aTag.innerHTML += '!!!';

//Print out the ul's innerText and the ul's innerHTML
const unorderedList = document.querySelector('ul');
console.log(unorderedList.innerText);
console.log(unorderedList.innerHTML);


/*This is only for form-related data:
- inputs, textareas, dropdowns, checkboxes.*/
const input = document.querySelector('input');
const currentValue = input.value;
console.log(currentValue);
input.value = 'Hello From JS!!!'


/*---------------------------------------------------------------------------*/ 


/* Getting Styles */

// 1. Select the DOM Node
const heading = document.querySelector('h1');
// 2. Ask for all of the current styles
const styles = getComputedStyle(heading);
// 3. Ask for properties
console.log(styles.color); 
console.log(styles.fontSize); //font-size -> fontSize
console.log(styles.textDecoration); //font-decoration -> textDecoration
console.log(styles.border);
console.log('------------');


//Another example:

//Find the <a>
console.log('Find the a tag');
const aTag = document.querySelector('a');
//Get all of the current styles for <a>
const aTagStyles = getComputedStyle(aTag);
//Print out (text color, disply, font size, text decoration)
console.log(aTagStyles.color);
console.log(aTagStyles.display);
console.log(aTagStyles.fontSize);
console.log(aTagStyles.textDecoration);
console.log('------------');

//Find the image
console.log('Find the image');
const image = document.querySelector('img');
//Print out borders, width, height and the border-radius properties
const imageStayle = getComputedStyle(image);
console.log(imageStayle.border);
console.log(imageStayle.width);
console.log(imageStayle.height);
console.log(imageStayle.borderRadius);
console.log('------------');


/*---------------------------------------------------------------------------*/ 


/* Changing Styles */

//NOTE: it is not the "perfect" way to deal with styles so, using CSS is better.
const heading = document.querySelector('h1');
heading.style.color = 'hotpink';
heading.style.background = 'blue';
heading.style.fontSize = '100px';

const image = document.querySelector('img');
image.style.width = '200px';
image.style.height = '400px';
image.style.border = '50px solid pink';



/*---------------------------------------------------------------------------*/ 



/* Adding Elements */ 

// 1. Creat the element and store it in a JS variable.
const newHeading = document.createElement('h1');
// 2. Changing it (useing things like .innerText, .style).
newHeading.innerText = 'Created by JS';
// 3. Put it on the page.
const targetDiv = document.querySelector('div.dynamic');
targetDiv.appendChild(newHeading);

//Another example:
const newImg = document.createElement('img');
newImg.setAttribute('src', 'https://placecage.com/300/300');
newImg.style.border = '4px dashed purple'
document.body.appendChild(newImg);

//Another example:
const tweet = 'This is a tweet';
const author = 'Bedour404';
const content = `${tweet}, posted by ${author}`;

const newParagraph = document.createElement('p');
newParagraph.innerText = content;
newParagraph.style.color = 'blue';

const newTweetsDiv = document.querySelector('.newTweets');
newTweetsDiv.appendChild(newParagraph);


/*---------------------------------------------------------------------------*/ 


/* Lab: The DOM 
src: https://github.com/sei-eternity/lesson-w02d03-dom/blob/master/changeTheLogo_LAB.md
*/
const img = document.querySelector('#hplogo');
const oldSrc = img.getAttribute('src');
img.setAttribute('src', 'https://amp.businessinsider.com/images/4fd8dcb7eab8eab648000004-750-143.jpg');
img.setAttribute('srcset', '');

document.querySelectorAll('[name="btnK"]')[1].value = 'Yahooo!';