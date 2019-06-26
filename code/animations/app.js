console.log('Hello from JS!!!!');
/* Animation */

/* Let's define Animations...
1. Starting Point
2. Stop
3. Time between steps
4. Total time
5. Ending Point
*/

//You can use `setTimeout` as delay
//You can use `setInterval` as interval

const timeoutCallback = function(){
    console.log('I timed out');
}
setTimeout(timeoutCallback, 1000);
//////////////////////////////////////

const fadeNickAway = function(){
    const nick = document.querySelector('.nick');

    const currentOpacityAsString = getComputedStyle(nick).opacity;
    const currentOpacity = parseFloat(currentOpacityAsString,)

    //console.log(getComputedStyle(nick).opacity);
    const newOpacity = currentOpacity - 0.01;
    nick.style.opacity = newOpacity;

    if(currentOpacity >= 0){
        setTimeout(fadeNickAway, 10);
    };
}

setTimeout(fadeNickAway, 1000);