console.log('Hello from JS!!!!');
/* Events */

/* Events Need:

1. an event type.
2. an event target.
3. a callback function.

When all of those things are combind, they become an event listener.*/

//Example:
//The type of the event
const eventType = 'click';
//The target of the event
const myButton = document.querySelector('button');
//Thr callback - what do you want to do as a response?
const myCallback = function(event){
    console.log('The button was clicked',event);
};
//Create an event listener WHENE this EVENT take place on this TARGET, call this CALLBACK FUNCTION.
myButton.addEventListener(eventType, myCallback);


/*---------------------------------------------------------------------------*/ 


/* Example: Dark & Light Themes */

//Type, Target, Callback, Event listener
//Dark Theme:
const darkButton = document.querySelector('#dark');

const changeToDarkTheme = function(){
    console.log('Dark Theme');
    document.body.style.background = 'black';
    document.body.style.color = 'white';
};

darkButton.addEventListener('click', changeToDarkTheme);


//Light Theme:
const lightButton = document.querySelector('#light');

const changeToLightTheme = function(){
    console.log('Light Theme');
    document.body.style.background = 'white';
    document.body.style.color = 'black';
};

lightButton.addEventListener('click', changeToLightTheme);
const postTweetButton = document.querySelector('.post');



/* Example: Twitter */

const createTweet = function(){
    //Get whatever is typed in the input, and save it in a variable called content.
    const input = document.querySelector('input');
    const content = input.value;
    //Create a new paragraph
    const newPara = document.createElement('p');
    newPara.innerText = content;
    //Take that paragraph and put it at the end of the div.newTweet
    const newTweetDiv = document.querySelector('.newTweets');
    newTweetDiv.appendChild(newPara);
};

postTweetButton.addEventListener('click', createTweet);


/* Example: user changes the colors */

const colorInput = document.querySelector('input.color'); //target
//callback
const onColorChange = function(){
    document.body.style.background = colorInput.value;
};
colorInput.addEventListener('change', onColorChange); //listener & event type



/* Example: Count Update Button */

const clickCountButton = document.querySelector('button.click');
let clickCount = 0;
const onClick = function(){
    clickCount++;
    const targetDiv = document.querySelector('.clickCount');
    targetDiv.innerText = clickCount;
}
clickCountButton.addEventListener('click', onClick);



/* Example: resize image */

const billImage = document.querySelector('.bill');
const nickImage = document.querySelector('.nick');
const doubleImageSize = function(){
    this.style.width = '600px';
};

billImage.addEventListener('click', doubleImageSize);
nickImage.addEventListener('click', doubleImageSize);
/*---------------------------------------------------------------------------*/ 





/*---------------------------------------------------------------------------*/ 