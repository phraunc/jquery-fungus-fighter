$(document).ready(onReady);

let fungusHP = 100;
let myAP = 100;
// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    console.log('America!');

    //buttons for variaous attacks.
    $('.attack-btn.arcane-sceptre').on('click', takeDmg);
    $('.attack-btn.entangle').on('click', takeDmg);
    $('.attack-btn.dragon-blade').on('click', takeDmg);
    $('.attack-btn.star-fire').on('click', takeDmg);

    renderApMeter();
    renderFungusHp();
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!


    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function takeDmg() {

    if ($(this).hasClass('arcane-sceptre')) {
        myAP = myAP - 12;
        fungusHP = fungusHP - 14;
        console.log('New Values', myAP);
        console.log('Enemy Hp:', fungusHP);
        renderApMeter();
        renderFungusHp();


    } else if ($(this).hasClass('entangle')) {

        myAP = myAP - 23;
        fungusHP = fungusHP - 9;
        console.log('New Values', myAP);
        console.log('Enemy Hp:', fungusHP);
        renderApMeter();
        renderFungusHp();

    } else if ($(this).hasClass('dragon-blade')) {

        myAP = myAP - 38;
        fungusHP = fungusHP - 47;
        console.log('New Values', myAP);
        console.log('Enemy Hp:', fungusHP);
        renderApMeter();
        renderFungusHp();
    } else if ($(this).hasClass('star-fire')) {

        myAP = myAP - 33;
        fungusHP = fungusHP - 25;
        console.log('New Values', myAP);
        console.log('Enemy Hp:', fungusHP);
        renderApMeter();
        renderFungusHp();
    }
    apNoZero();
    fungusHPNoZero();
    fungusDead();
    meDead();

    console.log('I have given dmg!');// ensuring the function works in console. 
    //condtionals that when a certain attack happens, AP will go down, FuncgusHP will go down 
    //and show current HP and AP 


}
// creating a render for AP

function renderApMeter() {

    $('.ap-text').html(`
    <div> 
        ap: ${myAP}
    </div>
    `)
}
//Creating a render for fungusHp
function renderFungusHp() {

    $('.hp-text').html(`
    <div>
       hp:  ${fungusHP}
    </div>
    `)
}

//Create a function where AP doesnt go below 0
function apNoZero() {

    if (myAP <= 0) {
        console.log('My AP is less then 0');

    }
}

//Create a function where fungusHP does not go below 0
function fungusHPNoZero() {

    if (fungusHP <= 0) {
        fungusHP === 0;
    }
}
//creat a function where if fungus hp = 0, change the class to dead
function fungusDead() {
    if (fungusHP <= 0) {
        $('freaky-fungus.walk').html(`

    <div class="enemy">
        <div class="hp-text">100 HP</div>
        <progress id="hp-meter" value="100" max="100"></progress>
        <div class="freaky-fungus dead"></div>
    </div>
`)
        console.log('Bleck, fungus dead');
    }
}

function meDead() {
    if (myAP <= 0) {
        $('ap-text').html(`

        <div class="ap-text"> ${fungusHP} AP
        
        </div>
`)
    }
    console.log('fungus wins, you suck');
}

//Why when I create the gungusHPNoZero and APNoZero functions that the HP and AP still go into the negatives
//How do I change the animation or text of dead or jump when I created functions for both.
//Where do I put these specific functions?