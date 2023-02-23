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
    console.log('I have given dmg!');// ensuring the function works in console. 
    //condtionals that when a certain attack happens, AP will go down, FuncgusHP will go down 
    //and show current HP and AP 

}
// creating a render for AP

function renderApMeter() {

    $('.ap-meter').html(`
    <div> 
        ap: ${myAP}
    </div>
    `)
}
//Creating a render for fungusHp
function renderFungusHp() {

    $('.hp-text').html(`
    <div>
         ${fungusHP}
    </div>
    `)
}

//creating a apZero and hpZero function

function apNoZero() {

    if (myAP <= 0) {
        $('.attack-btn.arcane-sceptre').attr('disabled');

    }
}
function fungusHPNoZero() {

    if (fungusHP < 0) {
        fungusHP === 0;
        
    }
}