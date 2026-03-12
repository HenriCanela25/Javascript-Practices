let count = 0;

function increaseCount () {
    count++;
    displayCount();
    checkCountValue();
}

function displayCount () {
    document.getElementById("countDisplay").innerHTML = count;
}

function checkCountValue () {
    switch (count) {
        case 10:
            alert("Your Instagram post gained 10 followers! Congratulations!");
            break;
        case 20:
            alert("Your Instagram post gained 20 followers! Keep it up!");
            break;
    }

}