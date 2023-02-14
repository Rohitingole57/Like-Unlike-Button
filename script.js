var likes = 0
function likeFunction() {
    likes++
    // document.getElementById("head1").style.backgroundColor = "blue"
    // document.getElementById("btn").style.backgroundColor = "blue"
    document.getElementById("head1").innerText = likes;
}

function unlikeFunction() {
    likes--
    if (likes == -1) {
        document.getElementById("head1").style.backgroundColor = "red"
        document.getElementById("btnn").style.backgroundColor = "red"
    }
    document.getElementById("head1").innerText = likes;
}