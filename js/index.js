window.onload = randomFortune();

function randomFortune() {
    console.log("ss");
    var fortune = document.getElementById('myfortune');
    var fortunes = ["You have a secret admirer.", "Everything that is was first a dream.", 
                   "Focus on the magic of things; yourself.", "Make self care a non-negotiable.", 
                   "An old love will come back to you.", "Behind this fortune is the love of my life."];

    var x = Math.floor(Math.random() * 5);
    fortune.innerHTML = fortunes[x];
}