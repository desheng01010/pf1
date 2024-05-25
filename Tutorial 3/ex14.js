function canVote() {
    var age = prompt("Please enter your age:");
    age = parseInt(age); 

    if (age >= 21) {
        return true;
    } else {
        return false;
    }
}

var eligibleToVote = canVote();
if (eligibleToVote) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote yet.");
}

